import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { useMenu } from "../../../context/useMenu";
import Input from "../../../components/input";
export default function Header() {
  const { isOpen, toggleOpen } = useMenu();

  return (
    <>
      <header className="flex sticky top-0 justify-between duration-300 bg-gray-300  dark:bg-neutral-900 shadow-lg p-4">
        <div className="flex gap-2 items-center">
          <FaReact className="w-8 h-8 duration-300 dark:fill-white" />
          <h1 className=" font-semibold text-xl uppercase  duration-300 dark:text-white">
            React Dashboard
          </h1>
        </div>

        <IoIosMenu
          className="w-10 h-10 hover:bg-gray-200 hover:dark:bg-neutral-600 dark:fill-white duration-300 rounded-md p-1"
          onClick={() => toggleOpen(!isOpen)}
        />
      </header>
    </>
  );
}
