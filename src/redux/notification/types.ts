export interface NotificationSlice {
  notification?: INotification[]
}

export interface INotification {
  notificationId: string
  isRead: boolean
  notification: string
  userId: string
}