import React, { ReactNode, FC } from "react";

interface IPROPS {
  children: ReactNode;
}

const TableHead: FC<IPROPS> = ({ children }) => {
  return (
    <th className="py-2 px-4 border-b  border-gray-300 dark:border-neutral-700 uppercase font-bold text-lg dark:text-white">
      {children}
    </th>
  );
};

export default TableHead;
