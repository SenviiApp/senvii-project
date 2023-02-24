import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Background, ResponsiveSideBanner, EmailSended } from "../components";
import { AnimatePresence } from "framer-motion";
import { sendEmailVerification } from "../services";
import { simulateDelay } from "../utils";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState({ email: "" });

  const modalHandler = async (e) => {
    e.preventDefault();
    const response = await sendEmailVerification(email);
    setSuccess(response.responseStatus);
    setOpen(true);
    if (response.responseStatus) {
      await simulateDelay(5);
      navigate("/login");
    } else {
      await simulateDelay(2);
      setOpen(false);
    }
  };

  return (
    <div className="login-pages-container">
      <Background className="h-screen absolute left-0 w-full" />

      <div className="login-container">
        <h1 className="text-lg">¿Olvidaste tu contraseña?</h1>

        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Ingrese su email"
            className="form-input"
            value={email.email}
            onChange={({ target }) => setEmail({ email: target.value })}
          />
          <input
            type="submit"
            onClick={modalHandler}
            className="p-2 bg-blue-400 rounded-full shadow-lg cursor-pointer"
            value="Restablecer"
          />
        </form>
        <Link
          to="/login"
          className="text-sky-200 p-2 hover:underline w-fit mx-auto"
        >
          Volver
        </Link>
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
