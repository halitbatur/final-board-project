import React from 'react'
import { NavLink } from "react-router-dom";
import './header.css';

import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg"
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg"
import { ReactComponent as ThreeDotsIcon } from "../../assets/icons/three-dots.svg"
import { ReactComponent as UserAddIcon } from "../../assets/icons/user-add.svg"
import { ReactComponent as PersonCircleIcon } from "../../assets/icons/person-circle.svg"
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg"
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg"
import { ReactComponent as PlugIcon } from "../../assets/icons/plug.svg"
import { ReactComponent as SlackIcon } from "../../assets/icons/slack.svg"
import { ReactComponent as RobotIcon } from "../../assets/icons/robot.svg"
import { ReactComponent as ChevronUpIcon } from "../../assets/icons/chevron-up.svg"
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg"
import { ReactComponent as FirebaseIcon } from "../../assets/icons/firebase.svg"
import { ReactComponent as JiraIcon } from "../../assets/icons/jira.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg"
import { ReactComponent as ChevronExpandIcon } from "../../assets/icons/chevron-expand.svg"
import { ReactComponent as EnlargeIcon } from "../../assets/icons/enlarge.svg"
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg"
import { ReactComponent as CommentHeartIcon } from "../../assets/icons/comment-heart.svg"

const Header = () => {

  return (
    <div className='header px-8 border-b border-gray-300'>
      <div className="header__description flex justify-between">
      <div className="header__description__left pt-5">
        <h1 className="text-4xl font-medium flex items-center gap-4">
          Committed Plan
          <InfoIcon className='text-gray-500 cursor-pointer' width={22} height={22} /> 
          <StarIcon className='text-gray-500 cursor-pointer' width={22} height={22} />
        </h1>
        <p className='text-gray-500 font-medium mt-2 tracking-tight'>
        This is the committed plan for the team.
        <a href="google.com" className='text-md text-sky-600 ml-2.5'>See More</a></p>
      </div>
      <div className="header__description__right flex items-center -mt-2 gap-5">
        <div className="header__activity flex items-center gap-2">
        Activity
        <div className="header__profile-container flex items-center justify-start">
        <span className='header__profile w-8 h-8 bg-rose-900 rounded-xl text-white font-medium cursor-pointer flex items-center justify-center border'>SM</span>
        <span className='header__profile inline-block text-white rounded-full -ml-2.5'><PersonCircleIcon className='text-white bg-black outline outline-1 rounded-2xl px-1 outline-white cursor-pointer' width={30} height={30} /></span>
        </div>
        </div>
        <button className='btn__share text-gray-600 flex gap-2.5 items-center text-lg border border-b-2  px-2 py-1 border-gray-300 rounded'><UserAddIcon className='text-gray-500' width={22} height={22} />Share</button>
        <ThreeDotsIcon className='text-gray-500 cursor-pointer' width={24} height={24} />
      </div>
      </div>
      <div className="navbar mt-6 border-b border-gray-300 flex justify-between">
        <div className='navbar__links text-gray-700 flex items-center '>
        <NavLink to="/" className={(link)=>{
          let linkStyle="flex gap-2 items-center pl-2 h-8 pb-4 border-b-4 rounded-sm";
          const notActiveStyle="border-transparent"
          const activeStyle="border-blue-500 text-black"

          linkStyle=link.isActive?linkStyle+" "+activeStyle:linkStyle+" "+notActiveStyle

          return linkStyle
        }}>
        <HouseIcon className='text-gray-500' width={18} height={18} /><span className='inline-block border-r border-gray-300 pr-2'>Main Table</span>
        </NavLink>
        <NavLink to="/kanban" className={(link)=>{
          let linkStyle="flex gap-2 items-center pl-2 h-8 pb-4 border-b-4 rounded-sm";
          const notActiveStyle="border-transparent"
          const activeStyle="border-blue-500 text-black"

          linkStyle=link.isActive?linkStyle+" "+activeStyle:linkStyle+" "+notActiveStyle

          return linkStyle
        }}
        >
        <span className='inline-block border-r border-gray-300 pr-2'>Kanban</span>
        </NavLink>
        <PlusIcon className='text-gray-600 cursor-pointer self-start ml-2' width={16} height={16}/>
        </div>
        <div className="navbar__options flex items-center gap-10 -mt-3 ">
        <div className="navbar__third-party-integration flex items-center gap-1">
        <PlugIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
        Integrate
        <div className="navbar__third-party-icons flex">
           <span className="navbar__third-party-icon-wrapper">
          <span className='navbar__third-party-icon'>
          <JiraIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
            </span>
          </span>
          <span className="navbar__third-party-icon-wrapper -ml-1.5">
          <span className='navbar__third-party-icon'>
          <SlackIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
            </span>
          </span>
          <span className="navbar__third-party-icon-wrapper">
          <span className='navbar__third-party-icon -ml-1.5'>
          <FirebaseIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
            </span>
          </span> 
        </div>
        </div>
        <div className="navbar__automation flex items-start gap-2 text-gray-600">
        <RobotIcon className='text-gray-600' width={20} height={20}/>
        Automate / 10
        </div>
        <div className="navbar__arrow-container p-1 border rounded-full">
        <ChevronUpIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
        </div>
        </div>
      </div>
      <div className="header__actions-container flex justify-between items-center">
        <div className="header__actions-left py-4 flex items-center gap-9">
          <button className='bg-blue-500 flex items-center rounded text-white'><span className='border-r border-neutral-600 p-2 h-full inline-block font-semibold'>New Feature</span> <ChevronDownIcon className=' cursor-pointer px-1' width={32} height={32}/></button>
          <span className='cursor-pointer flex items-center gap-1.5'><SearchIcon className='text-gray-600' width={22} height={22}/>Search</span>
          <span className='cursor-pointer flex items-center gap-1.5'><PersonCircleIcon className='text-gray-600' width={22} height={22}/>Person</span>
          <span className='cursor-pointer flex items-center gap-1.5'><FilterIcon className='text-gray-600' width={22} height={22}/>Filter<ChevronDownIcon className='text-gray-600' width={22} height={22}/></span>
          <span className='cursor-pointer flex items-center gap-1.5'><ChevronExpandIcon className='text-gray-600' width={22}  height={22}/>Sort</span>
        </div>
        <div className="header__actions-right flex items-center gap-5">
        <EnlargeIcon className='text-gray-600 cursor-pointer' width={20} height={20}/>
        <SettingIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
        <CommentHeartIcon className='text-gray-600 cursor-pointer' width={22} height={22}/>
        </div>
      </div>
    </div>
  )
}

export default Header