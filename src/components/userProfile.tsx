import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Button from "./button";
import user_img from "../assets/user_img.jpg";
import { firebaseAuth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default function UserProfile() {
  const [isActive, toggleActive] = useState<boolean>(false);
  const [currentUser, setUser] = useState(firebaseAuth.currentUser);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <>
      <div className="relative z-50">
        <FaRegUser
          onClick={() => toggleActive(!isActive)}
          className={`w-7 h-7 hover:bg-gray-200 hover:dark:bg-neutral-600 dark:fill-white duration-300 rounded-md p-1 ${
            isActive ? "bg-gray-200 dark:bg-neutral-600" : ""
          }`}
        />

        <div
          className={`absolute overflow-hidden top-8 right-8 z-50 transition-all duration-200 ${
            isActive ? "h-72 w-56" : "h-0 w-0"
          } bg-white  dark:bg-neutral-900   rounded-lg shadow-2xl `}
        >
          <div className="h-72 flex flex-col justify-center align-middle">
            <img
              src={user_img}
              className="my-4 mx-auto h-24 w-24 rounded-full border-2 border-black border-opacity-25"
            />

            <h1 className="text-center dark:text-white font-bold text-2xl">
              {currentUser?.displayName}
            </h1>

            <h1 className="text-center dark:text-white  font-normal text-lg">
              {currentUser?.email}
            </h1>
            <Button className="w-40 mx-auto mt-auto mb-4 text-base p-1">
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
