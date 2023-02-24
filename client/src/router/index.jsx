import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  App,
  Home,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  MailConfirmed,
} from "../views";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "/reset-password/:id",
        element: <ResetPassword />,
      },
      {
        path: "/mail-confirmed",
        element: <MailConfirmed />,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Layout>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Layout>
//   )
// );

export default router;
