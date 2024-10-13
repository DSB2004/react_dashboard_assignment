import React, { ReactNode, FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
// Define the props type
interface IPROPS {
  children: ReactNode;
  // This allows any valid React nodes to be passed as children
}

const Dropdown: FC<IPROPS> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <FaAngleDown
        onClick={() => setOpen(!isOpen)}
        className={`absolute right-5 top-3  transition-all duration-1000 ${
          isOpen ? " rotate-180" : "rotate-0"
        }`}
      />
      <div
        className={`transition-all duration-1000 overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0 "
        }`}
      >
        <div>{children}</div>
      </div>
    </>
  );
};

export default Dropdown;
