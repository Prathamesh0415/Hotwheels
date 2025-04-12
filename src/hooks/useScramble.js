import { useState, useEffect } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export const useScramble = (text, speed = 50, revealDelay = 2) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let frame = 0;
    let revealCount = 0;

    const scramble = () => {
      let displayed = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) {
          displayed += text[i];
        } else {
          displayed += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setOutput(displayed);

      frame++;

      if (frame % revealDelay === 0 && revealCount <= text.length) {
        revealCount++;
      }

      if (revealCount <= text.length) {
        setTimeout(scramble, speed);
      }
    };

    scramble();
  }, [text, speed, revealDelay]);

  return output;
};
