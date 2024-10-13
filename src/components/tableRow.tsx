import React, { ReactNode, FC } from "react";

interface IPROPS {
  children: ReactNode;
  className?: string;
}

const TableRow: FC<IPROPS> = ({ children, className }) => {
  return (
    <tr
      className={`${className} p-4  border-gray-300 dark:border-neutral-700  text-lg`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
