import { useState } from "react";
import UserHome from "./UserHome";
import UserLists from "./UserLists";
import UserAbout from "./UserAbout";

export default function Tabs() {
  const [whatUserComponent, setWhatUserComponent] = useState("home");
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-5 geo">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-1">
            <a
              onClick={() => {
                setWhatUserComponent("home");
              }}
              href="#"
              className={
                whatUserComponent == "home"
                  ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              Home
            </a>
          </li>
          <li className="me-1">
            <a
              onClick={() => {
                setWhatUserComponent("lists");
              }}
              href="#"
              className={
                whatUserComponent == "lists"
                  ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              Lists
            </a>
          </li>
          <li className="me-1">
            <a
              onClick={() => {
                setWhatUserComponent("about");
              }}
              href="#"
              className={
                whatUserComponent == "about"
                  ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div>
        {whatUserComponent == "home" ? (
          <UserHome />
        ) : whatUserComponent == "lists" ? (
          <UserLists />
        ) : (
          <UserAbout />
        )}
      </div>
    </>
  );
}
