import React from "react";
import { motion } from "framer-motion";
import { SiTestinglibrary } from "react-icons/si";
import { useState } from "react";

const InitialForm = ({ setCurrent, setForm }) => {
  const interfaceForm = {
    viaType: "",
    entityName: "",
    viaUbication: "",
    viaLength: 0,
  };
  const [initForm, setInitForm] = useState(interfaceForm);

  return (
    <div className="h-screen w-full bg-white mx-auto flex flex-col gap-2">
      <h1>Ayúdanos a completar la información de la vía</h1>{/* EL CABEZON TIENE QUE DECIR ESTO */}
      <div className="flex flex-col gap-1">
        <h2>Tipo de vía:</h2>
        <div className="p-2 bg-dark-400 rounded-md mt-1 h-12 text-sm">
          <div className="rounded-[4px] h-full relative z-10">
            <div
              className={`absolute w-1/2 h-full bg-light-500 transition-transform duration-300 ease-out ${
                initForm.viaType === "Concesionada" && "translate-x-[100%]"
              } rounded-md`}
            ></div>
            <div className="w-full grid grid-cols-2 rounded-[4px] h-full z-20 absolute">
              <span
                onClick={() => setInitForm({ ...initForm, viaType: "Pública" })}
                className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                disabled={initForm.viaType === "Pública"}
              >
                Pública
              </span>
              <span
                onClick={() =>
                  setInitForm({ ...initForm, viaType: "Concesionada" })
                }
                className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                disabled={initForm.viaType === "Concesionada"}
              >
                Concesionada
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* NOMBRE DE LA ENTIDAD */}
      <div>
        <h2>Nombre de la entidad:</h2>
        <input value="EDITABLE"/>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => {
          setForm((form) => {
            const newForm = { ...form };
            console.log(newForm);
            return newForm;
          });
          setCurrent("start");
        }}
        className="bg-black text-white py-2 px-14 rounded-full"
      >
        Continuar
      </motion.button>
    </div>
  );
};

export default InitialForm;
