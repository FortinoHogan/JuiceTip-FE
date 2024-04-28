import axios from "axios";

export const getUserById = (userId: string, callback: any) => {
  axios
    .post("https://localhost:7234/user/customer", {
      userId
    })
    .then((response: any) => {
      callback(true, response.data.payload);
    })
    .catch((error) => {
      callback(false, null);
    });
};