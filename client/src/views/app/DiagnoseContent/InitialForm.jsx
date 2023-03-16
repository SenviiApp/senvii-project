import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const InitialForm = ({ setCurrent, setForm, scrollToSection }) => {
  const interfaceForm = {
    viaType: "Pública",
    viaUbication: "",
    viaMeasure: "KM",
    viaLength: "",
    viaAge: "",
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
    let pavment = document.querySelector(
      "input[type=radio][name=pavmentType]:checked"
    );
    let pavmentType = pavment.value;
    setInitForm({ ...initForm, viaPavment: pavmentType });
  };

  return (
    <div className="w-main bg-white mx-auto p-4 justify-center space-y-2 rounded-md">
      <h1 className="w-full text-center text-sky-500">Antes de iniciar...</h1>
      <div className="w-full max-w-sm flex flex-col gap-2 mx-auto">
        {/* TIPO DE VIA */}
        <div>
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
                  onClick={() =>
                    setInitForm({ ...initForm, viaType: "Pública" })
                  }
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
            className="form-input"
            name="viaUbication"
            type="text"
            onChange={handleUbicationChange}
          />
        </div>
        {/* LONGITUD DE LA VÍA */}
        <div>
          <h2>Longitud de la vía:</h2>
          <input
            className="form-input"
            type="number"
            value={initForm.viaLength}
            onChange={handleViaLengthChange}
            placeholder={0}
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
        <div className="">
          <h2>Antigüedad de la vía:</h2>
          <input
            value={initForm.viaAge}
            type="text"
            className="form-input"
            onChange={handleViaAge}
            placeholder={0}
          />
        </div>
        {/* TIPO DE PAVIMENTO */}
        <div className="flex gap-1 flex-col">
          <h2>Tipo de pavimento:</h2>
          <p className="flex text-sm justify-between mt-1">
            <label className="flex gap-x-1 flex-row-reverse font-bold">
              Concreto
              <input
                name="pavmentType"
                type="radio"
                value="Concreto"
                className="w-full bg-slate-400 p-2 outline-none"
                onClick={handlePavmentChange}
              />
            </label>
            <label className="flex gap-x-1 flex-row-reverse font-bold">
              Asfalto
              <input
                name="pavmentType"
                type="radio"
                value="Asfalto"
                className="w-full bg-slate-400 p-2 outline-none"
                onClick={handlePavmentChange}
              />
            </label>
            <label className="flex gap-x-1 flex-row-reverse font-bold">
              Afirmado
              <input
                name="pavmentType"
                type="radio"
                value="Afirmado"
                className="w-full bg-slate-400 p-2 outline-none"
                onClick={handlePavmentChange}
              />
            </label>
          </p>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => {
            setForm((form) => ({ ...form, ...initForm }));
            setCurrent("zone");
            scrollToSection("main");
          }}
          className="bg-black text-white py-2 px-14 rounded-full mt-4 disabled:bg-zinc-400 transition-colors ease-out duration-500"
          disabled={
            !initForm.viaUbication ||
            !initForm.viaLength ||
            !initForm.viaAge ||
            !initForm.viaPavment
          }
        >
          Continuar
        </motion.button>
      </div>
    </div>
  );
};

export default InitialForm;
