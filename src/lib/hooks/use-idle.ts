/* eslint-disable unicorn/prefer-global-this */
import { useEffect, useRef, useState } from "react";

export const useIdle = (timeout: number) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsIdle(false);
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, timeout);
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
    ];

    for (const event of events) {
      window.addEventListener(event, resetTimer);
    }

    resetTimer();

    return () => {
      for (const event of events) {
        window.removeEventListener(event, resetTimer);
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout]);

  return isIdle;
};
