import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//here the providers, contexts, etc
export function Root() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Outlet />
    </>
  );
}
