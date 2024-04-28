import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChatCard from "../../components/ChatCard/ChatCard";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import { useParams } from "react-router-dom";
import { arrayUnion, doc, getDoc, serverTimestamp, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../Services/firebase";
import { getUserById } from "../../Services/userService";
import { ICustomer } from "../../interfaces/Customer.interfaces";

const ChatPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { customerId } = useParams();
  const justiperId = user.userId;
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer);

  useEffect(() => {
    if (customerId) {
      getUserById(customerId, (status: boolean, res: any) => {
        if (status) {
          setCustomer(res)
        }
      })
    }
  }, [getUserById, customerId])

  useEffect(() => {
    handleChat();
  }, [customer, customerId, justiperId, user])

  const handleBack = () => {
    window.history.back();
  };

  const handleChat = async () => {
    if (customerId && justiperId && customer) {
      const combinedId = customerId > justiperId ? customerId + justiperId : justiperId + customerId;

      try {
        const chatDoc = doc(db, "chats", combinedId);
        const chatSnap = await getDoc(chatDoc);

        if (!chatSnap.exists()) {
          await setDoc(chatDoc, { messages: [] });
        }

        const justiperDoc = doc(db, "userChats", justiperId);
        const justiperSnap = await getDoc(justiperDoc);
        const justiperData = {
          combinedId: combinedId,
          userId: customerId.toString() || customer.userId.toString() || '',
          firstName: customer.firstName.toString() || '',
          lastName: customer.lastName.toString() || '',
          profileImage: customer.profileImage || null,
          date: Timestamp.now()
        };

        if (!justiperSnap.exists()) {
          await setDoc(justiperDoc, { userHistory: [justiperData] });
        } else {
          const userHistory = justiperSnap.data().userHistory || [];
          const exists = userHistory.some((item: any) => item.combinedId === combinedId);
          if (!exists) {
            await updateDoc(justiperDoc, {
              userHistory: [...userHistory, justiperData]
            });
          }
        }

        const customerDoc = doc(db, "userChats", customerId);
        const customerSnap = await getDoc(customerDoc);
        const customerData = {
          combinedId: combinedId,
          userId: justiperId.toString() || user.userId.toString() || '',
          firstName: user.firstName.toString() || '',
          lastName: user.lastName.toString() || '',
          profileImage: user.profileImage || null,
          date: Timestamp.now()
        };

        if (!customerSnap.exists()) {
          await setDoc(customerDoc, { userHistory: [customerData] });
        } else {
          const userHistory = customerSnap.data().userHistory || [];
          const exists = userHistory.some((item: any) => item.combinedId === combinedId);
          if (!exists) {
            await updateDoc(customerDoc, {
              userHistory: [...userHistory, customerData]
            });
          }
        }
      } catch (err) {
        console.error("Error updating Firestore documents:", err);
      }
    }
  };


  return (
    <div className="flex h-screen">
      <div className="w-1/3">
        <div className="bg-e5e5e5 h-[12%] py-5 px-8 flex items-center justify-between">
          <Button onClick={handleBack}>
            <span id="triangle" />
          </Button>
          <div className="flex items-center gap-5">
            <p className="text-5d5d5d text-3xl font-bold">{user.firstName}</p>
            <img src={require("../../assets/images/facebook.png")} alt="logo" />
            <span id="three-dot">
              <li></li>
              <li></li>
              <li></li>
            </span>
          </div>
        </div>
        <div className="bg-fafafa h-[88%] overflow-y-auto scrollbar-hidden">
          <ChatCard />
        </div>
      </div>
      <span className="bg-d1d1d1 w-2"></span>
      <div className="w-2/3">
        <div className="bg-e5e5e5 h-[12%] px-8 flex items-center gap-5">
          <img src={require("../../assets/images/facebook.png")} alt="logo" />
          <p className="text-5d5d5d font-bold text-xl">
            {customer.firstName + ' ' + customer.lastName}
          </p>
        </div>
        <div className="bg-wallpaper h-[88%] overflow-y-auto scrollbar-hidden">
          <ChatBubble />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
