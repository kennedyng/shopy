// Input.tsx
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  errorMessagePosition?: "top" | "bottom" | "left" | "right";
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  labelPosition = "top",
  errorMessagePosition = "bottom",
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && labelPosition === "top" && (
        <label
          className={`text-gray-700 text-sm font-bold mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="flex flex-col relative">
        {label && labelPosition !== "top" && (
          <label
            className={`text-gray-700 text-sm font-bold ${
              labelPosition === "left"
                ? "pr-2"
                : labelPosition === "right"
                ? "pl-2"
                : ""
            } ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          className={`border ${
            error ? "border-red-500" : "border-yellow-500"
          } border-2 p-2 rounded-[12px] w-full focus:ring-0 focus:outline-none text-[#BDBDBD] focus:text-black ${inputClassName}`}
          {...rest}
        />
        {error && errorMessagePosition === "bottom" && (
          <p className={`text-red-500 text-sm mt-1 ${errorClassName}`}>
            {error}
          </p>
        )}
      </div>
      {error && errorMessagePosition !== "bottom" && (
        <p
          className={`text-red-500 text-sm ${
            errorMessagePosition === "top"
              ? "mt-1"
              : errorMessagePosition === "left"
              ? "ml-2"
              : "mr-2"
          } ${errorClassName}`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
