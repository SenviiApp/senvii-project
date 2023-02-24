import { HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

const EmailSended = ({ email }) => {
  const animation = {
    close: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.2 }}
      variants={animation}
      className="h-screen w-full bg-black/60 absolute grid place-items-center backdrop-blur-sm"
    >
      <div className="w-popup h-72 bg-dark-800 absolute p-6 flex flex-col justify-evenly items-center rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-snow">Enviamos un mensaje a</h2>
          <h3 className="font-bold text-emerald-400 text-lg">{email}</h3>
          <p className="text-center text-zinc-400 mt-5">
            Asegúrate de revisar tanto tu bandeja de entrada como la carpeta de
            spam
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -8, 8, -4, 0, 0, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1.2 }}
          >
            <HiEnvelope className="text-light-300 text-5xl" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmailSended;
