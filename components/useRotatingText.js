import { useState, useEffect } from "react";

const useRotatingText = (texts = [], interval = 3000) => {
  const [currentText, setCurrentText] = useState(texts[0] || "");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((current) => {
        const currentIndex = texts.indexOf(current);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return currentText;
};

export default useRotatingText;
