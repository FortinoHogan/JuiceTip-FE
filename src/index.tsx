import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ChatPage from "./views/ChatPage/ChatPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import JuiceTipPage from "./views/JuiceTipPage/JuiceTipPage";
import JuiceMartPage from "./views/JuiceMartPage/JuiceMartPage";
import JuiceTrackPage from "./views/JuiceTrack/JuiceTrackPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/juiceTip",
    element: <JuiceTipPage />,
  },
  {
    path: "/juiceMart",
    element: <JuiceMartPage />,
  },
  {
    path: "/juiceTrack",
    element: <JuiceTrackPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
