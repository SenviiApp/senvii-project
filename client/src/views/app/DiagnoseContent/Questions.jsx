import { useEffect, useState } from "react";
import { getConsiderations } from "../../../../data/options";
import { motion } from "framer-motion";

export default function Questions({
  data,
  setForm,
  setCurrent,
  scrollToSection,
}) {
  const [questions, setQuestions] = useState(data);
  const setResponse = (id, value) => {
    const newQuestions = [...questions];
    const selected = newQuestions.find((val) => val.id === id);
    selected.response = value;
    setQuestions(newQuestions);
  };
  useEffect(() => {
    if (!data.length) {
      scrollToSection("report");
      setCurrent(null);
    }
  }, []);
  const emptyQuestions = (obj) => {
    for (let key in obj) {
      if (!obj[key].response) return true;
    }
    return false;
  };
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: -500 }}
      transition={{ duration: 1, type: "spring", bounce: false }}
      className="absolute top-0 w-full h-full text-center overflow-y-auto"
    >
      <div className="w-full h-full max-w-sm flex flex-col items-center gap-6 mx-auto text-sm pt-10 px-2">
        {data.map((question) => (
          <div key={question.id}>
            <h2 className="mb-2">{question.content}</h2>
            <div className="w-fit flex gap-x-4 mx-auto">
              <button
                onClick={() => setResponse(question.id, "yes")}
                className={`${
                  questions.find((val) => val.id === question.id).response ===
                  "yes"
                    ? "bg-light-500 text-white"
                    : "bg-zinc-200"
                } w-12 px-2 py-1 rounded-md transition-colors duration-300 ease-out`}
              >
                Si
              </button>
              <button
                onClick={() => setResponse(question.id, "no")}
                className={`${
                  questions.find((val) => val.id === question.id).response ===
                  "no"
                    ? "bg-light-500 text-white"
                    : "bg-zinc-200"
                } w-12 px-2 py-1 rounded-md transition-colors duration-300 ease-out`}
              >
                No
              </button>
            </div>
          </div>
        ))}

        <div className="pb-10">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => {
              setForm((form) => {
                const newForm = { ...form, questions };
                return { ...newForm, consider: getConsiderations(newForm) };
              });
              scrollToSection("report");
              setCurrent(null);
            }}
            disabled={emptyQuestions(questions)}
            className="text-base bg-black text-white py-2 px-14 rounded-full mt-4 disabled:bg-zinc-400 transition-colors ease-out duration-500"
          >
            Enviar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
