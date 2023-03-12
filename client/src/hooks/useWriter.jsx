import { useEffect, useState } from "react";

const actions = {
  write: "write",
  wait: "wait",
  delete: "delete",
};

export const useWriter = () => {
  const [input, setInput] = useState(null);
  const [renderedText, setRenderedText] = useState("");
  const [index, setIndex] = useState(1);
  const [action, setAction] = useState(actions.wait);

  useEffect(() => {
    if (action === actions.wait) {
      setIndex(1);
      return;
    }
    if (action === actions.delete) {
      //clears render and changes action
      if (renderedText === "") {
        setTimeout(() => {
          setAction(actions.write);
        }, 500);
        return;
      } else {
        setTimeout(() => {
          setRenderedText(renderedText.slice(0, renderedText.length - 1));
        }, 15);
      }
    }
    if (action === actions.write) {
      //ends process
      if (renderedText === input) {
        setAction(actions.wait);
        return;
      } else {
        //runs typewrite
        setTimeout(() => {
          setRenderedText(input.slice(0, index));
          setIndex(index + 1);
        }, 50);
      }
    }
  }, [action, renderedText]);

  const render = (textToRender) => {
    setInput(textToRender);
    if (input) {
      setAction(actions.delete);
    } else {
      setAction(actions.write);
    }
  };

  return { output: renderedText, render };
};
