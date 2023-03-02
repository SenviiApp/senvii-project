import { useState } from "react";
import { getConsiderations } from "../../../../data/options";

export default function Questions({ data, setForm, setCurrent }) {
  const [questions, setQuestions] = useState(data);
  const setResponse = (id, value) => {
    const newQuestions = [...questions];
    const selected = newQuestions.find((val) => val.id === id);
    selected.response = value;
    setQuestions(newQuestions);
  };
  return (
    <div>
      {data.map((question) => (
        <div key={question.id}>
          <h2>{question.content}</h2>
          <div className="flex gap-x-4">
            <button
              onClick={() => setResponse(question.id, "yes")}
              className={`${
                questions.find((val) => val.id === question.id).response ===
                  "yes" && "bg-zinc-200"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setResponse(question.id, "no")}
              className={`${
                questions.find((val) => val.id === question.id).response ===
                  "no" && "bg-zinc-200"
              }`}
            >
              No
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          setForm((form) => {
            const newForm = { ...form, questions };
            console.log(getConsiderations(newForm));
            return newForm;
          });
        }}
      >
        ENVIAR (provisional)
      </button>
    </div>
  );
}
