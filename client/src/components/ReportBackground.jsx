
import bg from "../assets/pdf/color_795FFF.jpg";
import cloud1 from "../assets/pdf/nube.png";
import cloud2 from "../assets/pdf/nube_2.png";
import mountain from "../assets/pdf/ondas_montañas.png";
import road from "../assets/pdf/ciudad_pista_graficos.png";
import { motion } from "framer-motion";

const ReportBackground = () => {

  return (
    <div className="h-full w-full relative">
      <div className="w-full h-full bg-black absolute">
        <img src={bg} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="w-full absolute">
        <motion.img
          initial={{ x: -600, opacity: 0.5 }}
          animate={{ x: 1200, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity }}
          src={cloud1}
          alt=""
          className="object-cover w-24 md:w-44 lg:w-62 z-20 absolute top-60 left-96"
        />
        <motion.img
          initial={{ x: -450, opacity: 0.5 }}
          animate={{ x: 1300, opacity: 1 }}
          transition={{ duration: 21, repeat: Infinity }}
          src={cloud2}
          alt=""
          className="object-cover w-24 md:w-44 lg:w-62 absolute top-44 left-60"
        />
      </div>

      <motion.img
        initial={{ x: -200, opacity: 0.5 }}
        animate={{ x: 1500, opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity }}
        src={cloud1}
        alt=""
        className="object-cover w-24 md:w-44 lg:w-62 z-20 absolute top-56 left-24"
      />
      <motion.img
        initial={{ x: -200, opacity: 0.5 }}
        animate={{ x: 1600, opacity: 1 }}
        transition={{ duration: 25, repeat: Infinity }}
        src={cloud2}
        alt=""
        className="object-cover w-24 md:w-44 lg:w-62 absolute top-36"
      />

      <div className="absolute top-36 md:top-2 flex justify-center items-center lg:top-0 w-full lg:h-[60%]">
        <img src={mountain} alt="" className="w-full object-cover" />
      </div>

      <div className="absolute w-full top-44 md:top-32 md:right-24 flex justify-center">
        <img
          src={road}
          alt=""
          className="object-cover w-full p-8 pr-0 md:p-0 md:w-[32rem] md:ml-64 lg:w-[32rem] xl:w-[36rem]"
        />
      </div>
    </div>
  );
};

export default ReportBackground;
