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
    element: <JuiceTipPage/>
  },
  {
    path: "/juiceMart",
    element: <JuiceMartPage/>
  },
  {
    path: "/juiceTrack",
    element: <JuiceTrackPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
