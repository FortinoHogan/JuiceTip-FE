import { IDate } from "../../interfaces/Chat.interfaces"

export interface IChatBubble {
  id: string
  message: string
  date: IDate
  senderId: string
  productName: string | null
  productId: string | null
  isBargain: boolean
  image: string | null
  productPrice: number | null
  bargainPrice: number | null
  isTakeOrder: boolean
  interlocutors: string
}