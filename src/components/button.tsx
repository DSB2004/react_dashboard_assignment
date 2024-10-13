import React, { FC, ButtonHTMLAttributes } from "react";

interface IPROPS extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IPROPS> = ({ children, className, ...props }) => {
  return (
    <button
      className={`uppercase px-6 text-base flex bg-black dark:bg-white text-white dark:text-black items-center duration-300 justify-center align-middle py-2  font-semibold active:animate-pulse ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
