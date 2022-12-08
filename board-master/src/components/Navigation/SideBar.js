import React, { useState } from "react";

import { NavLink, useParams, useLocation } from "react-router-dom";
import ModeToggle from "../theme/ModeToggle";
export default function SideBar() {
  const { projects } = useParams();

  const path = useLocation();
  console.log(path);
  console.log(projects);
  const pages = [
    {
      pageName: "Home",
      path: "/",
      iconFill: "home",
      icon: "home-outline",
    },
    {
      pageName: "Projects",
      path: "/projects",
      iconFill: "hourglass",
      icon: "hourglass-outline",
    },
    {
      pageName: "Add Project",
      path: "/addproject",
      iconFill: "add",
      icon: "add-outline",
    },
    {
      pageName: "Login",
      path: "/login",
      iconFill: "log-in",
      icon: "log-in-outline",
    },
    {
      pageName: "Profile",
      path: "/profile",
      iconFill: "person",
      icon: "person-outline",
      const: useState(false),
    },
  ];

  const [isFill, setIsFill] = useState(true);
  return (
    <div className=" h-full ml-10 w-full text-center flex justify-center items-center    text-[#ffffff]">
      <ul className="flex mx-5 flex-col h-full items-start  justify-center gap-10">
        {pages.map((page) => (
          <li className="">
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? ` ${setIsFill(
                      true
                    )} bg-[#ffffff] dark:bg-[#121212] text-3xl duration-150 scale-110 transition-all text-[#018786] dark:text-[#03dac6] flex gap-3 justify-start items-center py-3 w-52 px-5 rounded-l-full `
                  : `${setIsFill(
                      false
                    )} transition-all  text-3xl  flex gap-3 justify-start items-center `
              }
            >
              <span className="text-xl"> {page.pageName}</span>
              <ion-icon
                name={page.path === path.pathname ? page.iconFill : page.icon}
              ></ion-icon>
            </NavLink>
          </li>
        ))}
        <li className="">
          <ModeToggle></ModeToggle>
        </li>
      </ul>
    </div>
  );
}
