export interface date {
  seconds: number;
  nanoseconds: number;
}

export interface UserInfo {
  combinedId: string;
  date: date;
  firstName: string;
  lastName: string;
  profileImage: string | null;
  userId: string;
}