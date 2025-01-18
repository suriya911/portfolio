import React, { useEffect, useRef, useState } from "react";
import AppText from "../AppText";
import ITypingTextProps from "./types";

function TypingText(props: ITypingTextProps) {
  const { textArr } = props;
  const [displayText, setDisplayText] = useState("");
  const changeText = useRef(false);
  const selectedTextIndex = useRef(0);

  useEffect(() => {
    const selectedRole = textArr[selectedTextIndex.current];

    const intervalId = setInterval(() => {
      if (displayText.length === selectedRole.length) {
        changeText.current = true;
        let text = displayText.slice(0, displayText.length - 1);
        setTimeout(() => {
          setDisplayText(text);
        }, 2000);
        clearInterval(intervalId);
      } else if (changeText.current) {
        let text = displayText.slice(0, displayText.length - 1);
        if (text.length === 0) {
          changeText.current = false;
          if (selectedTextIndex.current === textArr.length - 1) {
            selectedTextIndex.current = 0;
          } else {
            selectedTextIndex.current += 1;
          }
        }
        setDisplayText(text);
      } else {
        let text = displayText + selectedRole[displayText.length];
        setDisplayText(text);
      }
    }, 75);

    return () => {
      clearInterval(intervalId);
    };
  }, [displayText, textArr]);

  return (
    <>
      <AppText
        textTag="p"
        extraMedium
        primary
        semiBold
        customClass="h-fit w-fit relative after:content-[''] after:absolute after:h-full after:w-0.5 after:bg-primaryColor after:left-full after:animate-blink"
      >
        {displayText}
      </AppText>
    </>
  );
}

export default TypingText;
