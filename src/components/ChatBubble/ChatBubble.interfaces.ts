import { IDate } from "../../interfaces/Chat.interfaces"

export interface IChatBubble {
  id: string
  message: string
  date: IDate
  senderId: string
}