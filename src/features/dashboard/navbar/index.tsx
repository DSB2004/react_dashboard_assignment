import React from "react";
import { useMenu } from "../../../context/useMenu";
import { FaReact } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdOutlineCampaign } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import Dropdown from "../../../components/dropdown";
import { IoMdOptions } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import Item from "../../../components/item";
export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, toggleOpen } = useMenu();
  return (
    <>
      <div
        className={`absolute top-0 left-0 overflow-hidden transition-all duration-1000 shadow-2xl ${
          isOpen ? "w-64" : "w-0"
        }  h-full`}
      >
        <nav
          className={`bg-grey-300 bg-white  dark:bg-neutral-900 duration-300 w-64 h-full z-50  relative
            
            `}
        >
          <div className="flex gap-2 py-5 px-4 items-center">
            <FaReact className="w-8 h-8  dark:fill-white duration-300" />
            <h1 className=" font-semibold text-xl uppercase  dark:text-white duration-300  ">
              React Dashboard
            </h1>
          </div>

          <div className="mt-10 flex flex-col">
            <Item
              onClick={() => {
                toggleOpen(false);
                navigate("/");
              }}
            >
              <IoIosHome className="w-6 h-6" />
              Home
            </Item>

            <Item
              onClick={() => {
                toggleOpen(false);
                navigate("/employee");
              }}
            >
              <FaUserFriends className="w-6 h-6" />
              Employee
            </Item>

            <Item
              dropdown={
                <>
                  <Dropdown>
                    <Item>
                      <IoMdOptions className="w-6 h-6" />
                      Option 1
                    </Item>
                    <Item>
                      <IoMdOptions className="w-6 h-6" />
                      Option 2
                    </Item>
                  </Dropdown>
                </>
              }
            >
              <GrUserManager className="w-6 h-6" />
              HR
            </Item>
            <Item
              onClick={() => {
                toggleOpen(false);
                navigate("/task");
              }}
            >
              <MdOutlineTaskAlt className="w-6 h-6" />
              Task
            </Item>
            <Item
              dropdown={
                <>
                  <Dropdown>
                    <Item>
                      <IoMdOptions className="w-6 h-6" />
                      Option 1
                    </Item>
                    <Item>
                      <IoMdOptions className="w-6 h-6" />
                      Option 2
                    </Item>
                  </Dropdown>
                </>
              }
            >
              <MdOutlineCampaign className="w-6 h-6" />
              Campaign
            </Item>
            <Item
              onClick={() => {
                toggleOpen(false);
                navigate("/settings");
              }}
            >
              <IoSettings className="w-6 h-6" />
              Settings
            </Item>
          </div>
          <div className="absolute bottom-5 w-60">
            <Item className="mt-auto">
              <MdLogout className="w-8 h-8 fill-red-500" />
              <span className="text-red-500 font-bold"> Logout</span>
            </Item>
          </div>
        </nav>
      </div>
    </>
  );
}
