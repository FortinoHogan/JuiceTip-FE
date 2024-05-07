import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationSlice } from "./types";

const initialState: NotificationSlice = {
  notification: [],
}

export const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {
    setNotification: (state: any, action: PayloadAction<NotificationSlice>) => {
      state.notification.push(action.payload)
    }
  }
})

export const { setNotification } = notificationSlice.actions;
export default notificationSlice;