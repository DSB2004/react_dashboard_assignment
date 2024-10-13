import React, { InputHTMLAttributes, useState, forwardRef } from "react";
import { FaEyeSlash } from "react-icons/fa";

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IPROPS>(
  ({ className, type = "text", error, ...props }, ref) => {
    const [currentType, setType] = useState<string>(type);

    const handleTypeChange = () => {
      setType(currentType === "text" ? "password" : "text");
    };

    return (
      <div className="relative">
        {error && (
          <span className="text-red-600 text-left text-xs absolute r-0 top-0">
            {error}
          </span>
        )}
        <input
          autoComplete={type === "password" ? "off" : "on"}
          ref={ref} // Forward the ref to the input element
          className={`text-base dark:text-white p-1.5 my-3 outline-none min-w-72 border-b-2 border-black dark:border-white dark:border-opacity-0 bg-transparent border-spacing-2 
                    border-opacity-0 hover:border-opacity-65  hover:dark:border-opacity-65 transition-all duration-500
                    ${className}`}
          type={currentType}
          {...props} // Spread the rest of the props
        />

        {type === "password" && (
          <FaEyeSlash
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "10px",
            }}
            className="w-4 h-4 fill-gray-600 dark:fill-white "
            onClick={handleTypeChange}
          />
        )}
      </div>
    );
  }
);

// Use displayName for debugging purposes
Input.displayName = "Input";

export default Input;
