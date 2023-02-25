import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Background,
  ResponsiveSideBanner,
  EmailSended,
  MiniLoader,
} from "../components";
import { AnimatePresence } from "framer-motion";
import { sendEmailVerification } from "../services";
import { simulateDelay } from "../utils";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState({ email: "" });
  const [isLoading, setLoading] = useState(false);

  const modalHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendEmailVerification(email);
    setLoading(false);
    if (response.responseStatus) {
      setOpen(true);
    } else {
      // toast("El correo no está asociado a ningún usuario");
      toast.error(response.message);
    }
  };

  return (
    <div className="login-pages-container">
      <div className="login-container">
        <Background className="h-screen absolute left-0 w-full" />
        <div className="login-form-container">
          <h1 className="text-lg">¿Olvidaste tu contraseña?</h1>

          <form className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Ingrese su email"
              className="form-input"
              value={email.email}
              onChange={({ target }) => setEmail({ email: target.value })}
            />
            <button
              disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.email)}
              onClick={modalHandler}
              type="submit"
              className="py-3 bg-blue-400 rounded-full disabled:pointer-events-none disabled:cursor-not-allowed flex gap-x-3 items-center justify-center transition-colors shadow-lg w-full"
            >
              Reestablecer
              {isLoading && <MiniLoader />}
            </button>
          </form>
          <Link
            to="/login"
            className="text-sky-200 p-2 hover:underline w-fit mx-auto"
          >
            Volver
          </Link>
        </div>
      </div>
      {/* image (lg) container */}
      <ResponsiveSideBanner />

      <AnimatePresence>
        {open && <EmailSended email={email.email} />}
      </AnimatePresence>
    </div>
  );
};

export default ForgotPassword;
