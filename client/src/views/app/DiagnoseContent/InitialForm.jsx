import React from "react";
import { motion } from "framer-motion";
import { SiTestinglibrary } from "react-icons/si";
import { useState } from "react";

const InitialForm = ({ setCurrent, setForm }) => {

  const interfaceForm = {
    viaType: "Pública",
    viaUbication: "",
    viaMeasure: "KM",
    viaLength: 0,
    viaAge: 0,
    viaPavment: "",
  };

  const [initForm, setInitForm] = useState(interfaceForm);

  const handleUbicationChange = (e) => {
    let ubication = e.target.value;
    setInitForm({ ...initForm, viaUbication: ubication });
  };

  const handleViaLengthChange = (e) => {
    let length = e.target.value;
    setInitForm({ ...initForm, viaLength: length });
  };

  const handleViaAge = (e) => {
    let age = e.target.value;
    setInitForm({ ...initForm, viaAge: age });
  };

  const handlePavmentChange = (e) => {
      let pavment = document.querySelector("input[type=radio][name=pavmentType]:checked")
      let pavmentType = pavment.value
      setInitForm({...initForm, viaPavment: pavmentType})
  }   

  return (
    <div className=" w-[90%] bg-white mx-auto flex flex-col gap-2 p-4 justify-center">
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

      {/* UBICACIÓN DE LA VÍA */}
      <div>
        <h2>Ubicación de la vía:</h2>
        <input
          value={initForm.viaUbication}
          className="w-full bg-slate-400 p-2 outline-none"
          name="viaUbication"
          type="text"
          onChange={handleUbicationChange}
        />
      </div>
      {/* LONGITUD DE LA VÍA */}
      <div>
        <h2>Longitud de la vía:</h2>
        <input
          className="w-full bg-slate-400 p-2 outline-none"
          type="number"
          value={initForm.viaLength}
          onChange={handleViaLengthChange}
        />
        <div className="p-2 bg-dark-400 rounded-md mt-1 h-12 text-sm">
          <div className="rounded-[4px] h-full relative z-10">
            <div
              className={`absolute w-1/2 h-full bg-light-500 transition-transform duration-300 ease-out ${
                initForm.viaMeasure === "ML" && "translate-x-[100%]"
              } rounded-md`}
            ></div>
            <div className="w-full grid grid-cols-2 rounded-[4px] h-full z-20 absolute">
              <span
                onClick={() => setInitForm({ ...initForm, viaMeasure: "KM" })}
                className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                disabled={initForm.viaType === "KM"}
              >
                KM
              </span>
              <span
                onClick={() => setInitForm({ ...initForm, viaMeasure: "ML" })}
                className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                disabled={initForm.viaType === "ML"}
              >
                ML
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ANTIGÛEDAD DE LA VÍA */}
      <div>
        <h2>Antigüedad de la vía:</h2>
        <input
          value={initForm.viaAge}
          type="text"
          className="w-full bg-slate-400 p-2 outline-none"
          onChange={handleViaAge}
        />
      </div>
      {/* TIPO DE PAVIMENTO */}
      <div className="">
        <h2>Tipo de pavimento:</h2>
        <p className="flex text-sm">
          <label>Concreto</label>
          <input
            name="pavmentType"
            type="radio"
            value="Asfalto"
            className="w-full bg-slate-400 p-2 outline-none"
            onClick={handlePavmentChange}
          />
          <label htmlFor="">Asfalto</label>
          <input
            name="pavmentType"
            type="radio"
            value="Concreto"
            className="w-full bg-slate-400 p-2 outline-none"
            onClick={handlePavmentChange}
          />
          <label htmlFor="">Afirmado</label>
          <input
            name="pavmentType"
            type="radio"
            value="Afirmado"
            className="w-full bg-slate-400 p-2 outline-none"
            onClick={handlePavmentChange}
          />
        </p>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => console.log(initForm)}
        className="bg-black text-white py-2 px-14 rounded-full"
        disabled={initForm === interfaceForm}
      >
        Continuar
      </motion.button>
    </div>
  );
};

export default InitialForm;
