import { useEffect, useState } from "react";

export const useWriter = (textInput) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [isStarted, setStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;
    const interval = setInterval(() => {
      if (index === textInput.length + 1) {
        clearInterval(interval);
        return;
      }
      setIndex(index + 1);
      setText(textInput.slice(0, index));
    }, 80);
    return () => clearInterval(interval);
  }, [isStarted, text]);

  const trigger = () => setStarted(true);

  return { text, trigger };
};
