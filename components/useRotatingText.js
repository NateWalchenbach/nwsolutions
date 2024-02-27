import { useState, useEffect } from "react";

const useRotatingText = (texts = [], interval = 3000) => {
  const [currentText, setCurrentText] = useState(texts[0] || "");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((current) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * texts.length);
        } while (texts[nextIndex] === current && texts.length > 1); // Ensure it's a new word if there's more than one option
        return texts[nextIndex];
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return currentText;
};

export default useRotatingText;
