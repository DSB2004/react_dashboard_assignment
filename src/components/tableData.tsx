import React, { ReactNode, FC } from "react";

interface IPROPS {
  children: ReactNode;
}

const TableData: FC<IPROPS> = ({ children }) => {
  return (
    <td className="py-2 px-4 border-b border-r-2  dark:text-white  border-gray-300 dark:border-neutral-700 text-center min-w-32 ">
      {children}
    </td>
  );
};

export default TableData;
