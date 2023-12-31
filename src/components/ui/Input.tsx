// Input.tsx
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // You can add additional props specific to your input component
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={`border-yellow-500 border-2 p-2 rounded-[12px] w-full focus:ring-0 focus:outline-none text-[#BDBDBD] focus:text-black ${className} `}
      {...rest}
    />
  );
};

export default Input;
