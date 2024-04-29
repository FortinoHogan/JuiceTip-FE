export interface IDate {
  seconds: number;
  nanoseconds: number;
}

export interface IUserInfo {
  combinedId: string;
  date: IDate;
  firstName: string;
  lastName: string;
  profileImage: string | null;
  userId: string;
}

export interface IMessage {
  id: string;
  message: string;
  date: IDate;
  senderId: string;
}