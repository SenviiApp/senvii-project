import React from "react";
import bg from "../assets/pdf/color_795FFF.jpg";
import cloud1 from "../assets/pdf/nube.png";
import cloud2 from "../assets/pdf/nube_2.png";
import mountain from "../assets/pdf/ondas_montañas.png";
import road from "../assets/pdf/ciudad_pista_graficos.png"
import { motion } from "framer-motion";

const ReportBackground = () => {
  return (
    <div className="h-full w-full relative">
      <div className="w-full h-full bg-black absolute">
        <img src={bg} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="absolute flex w-full justify-around top-48 md:top-40">
        <motion.img
        initial={{x:-100, opacity: .5}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 2}}
        src={cloud1} alt="" className="object-cover w-24 md:w-44 lg:w-62 z-20"/>
        <motion.img 
        initial={{x:100, opacity: .5}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration:3}}src={cloud2} alt="" className="object-cover w-24 md:w-44 lg:w-62" />
      </div>

      <div className="absolute top-36 md:top-2 flex justify-center items-center lg:top-0 w-full lg:h-[60%]">
        <img src={mountain} alt="" className="w-full object-cover"/>
      </div>

      <div className="absolute w-full top-48 md:top-48 flex justify-center">
         <img src={road} alt="" className="object-cover w-full p-8 pr-0 md:p-0 md:w-[32rem] md:ml-64 lg:w-[32rem]"/>
      </div>
    </div>
  );
};

export default ReportBackground;
