import { useEffect, useState } from "react";

export const TypingText = ({ text = "", speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="text-inherit">{displayedText}</span>
      <span
        className={`inline-block w-1 h-full bg-current animate-pulse ${
          isComplete ? "hidden" : ""
        }`}
      >
        |
      </span>
    </div>
  );
};

export default TypingText;
