// Input.tsx
import React, { TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // You can add additional props specific to your input component
}

const TextArea: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <textarea
      className={`border-yellow-500 border-2 p-2 rounded-[12px] w-full focus:ring-0 focus:outline-none text-[#BDBDBD] focus:text-black ${className} `}
      {...rest}
    />
  );
};

export default TextArea;
