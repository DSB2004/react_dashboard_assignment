import React, { FC, ReactNode } from "react";
interface IPROPS {
  children: ReactNode; // This allows any valid React nodes to be passed as children
  dropdown?: ReactNode;
  className?: string;
  onClick?: Function;
}

const Item: FC<IPROPS> = ({ children, dropdown, className, onClick }) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`relative cursor-pointer flex  flex-col justify-start my-2 font-medium text-xl uppercase ml-5 mr-3 transition-all duration-300 hover:bg-slate-100 rounded-lg  hover:dark:bg-neutral-800 dark:text-white  p-2  ${className}`}
    >
      <div className="flex justify-start items-center gap-2 w-full">
        {children}
      </div>
      {dropdown}
    </div>
  );
};

export default Item;
