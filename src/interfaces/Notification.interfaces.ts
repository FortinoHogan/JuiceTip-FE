import { IDate } from "./Date.interfaces";

export interface INotification {
  transactionId: string;
  isRead: boolean;
  userProfile: string;
  justiperName: string;
  productName: string;
  date: IDate;
}