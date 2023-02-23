import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, ForgotPassword, ResetPassword, MailConfirmed } from "../views";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/mail-confirmed",
    element: <MailConfirmed />,
  }, 
]);

export default router;
