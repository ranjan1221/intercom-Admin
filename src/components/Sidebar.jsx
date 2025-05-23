import React from "react";
import {
  faInbox, faAt, faPen, faUsers, faUserFriends, faChartBar, faPlus, faChevronDown,
  faSearch, faListUl, faEnvelope, faHandPaper, faMobileAlt, faTicketAlt, faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => (
  <aside className="flex flex-col h-full bg-white border-r border-[#E6E6E6] rounded-[20px] shadow-[0_2px_12px_0_rgba(0,0,0,0.04)] m-2 overflow-hidden">
    <nav className="flex flex-col flex-grow overflow-y-auto px-0 py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div className="flex items-center justify-between px-6 pb-2">
        <h2 className="font-bold text-[22px] leading-7">Inbox</h2>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <FontAwesomeIcon icon={faPlus} className="text-gray-500 text-lg" />
          </button>
        </div>
      </div>
      <ul className="px-2 space-y-1 mb-4">
        <li className="flex items-center justify-between bg-[#F3F4F6] rounded-[16px] px-4 py-2 font-semibold text-black">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInbox} className="text-gray-400 text-lg" />
            Your inbox
          </div>
          <span>4</span>
        </li>
        <li className="flex items-center justify-between px-4 py-2 rounded-[16px] hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faAt} className="text-gray-400 text-lg" />
            Mentions
          </div>
          <span className="text-gray-400">0</span>
        </li>
        <li className="flex items-center justify-between px-4 py-2 rounded-[16px] hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPen} className="text-gray-400 text-lg" />
            Created by you
          </div>
          <span className="text-gray-400">0</span>
        </li>
        <li className="flex items-center justify-between px-4 py-2 rounded-[16px] hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-400 text-lg" />
            All
          </div>
          <span>4</span>
        </li>
        <li className="flex items-center justify-between px-4 py-2 rounded-[16px] hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserFriends} className="text-gray-400 text-lg" />
            Unassigned
          </div>
          <span className="text-gray-400">0</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-[16px] hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faChartBar} className="text-gray-400 text-lg mr-2" />
          Dashboard
        </li>
      </ul>
      {/* ...other sections, use same spacing and border radius... */}
      <div className="flex-1" />
      {/* Get set up box */}
      <div className="px-6 pb-4">
        <div className="bg-black text-white rounded-[16px] shadow-lg p-4 flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between font-bold text-base">
            <span>
              <FontAwesomeIcon icon={faCircleNotch} spin className="mr-2" />
              Get set up
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <p className="mt-1 text-sm font-normal text-gray-200">
            Set up channels to connect with your customers
          </p>
        </div>
      </div>
    </nav>
    <button className="flex items-center gap-2 px-6 py-4 border-t border-[#E6E6E6] font-semibold text-base hover:bg-gray-100 w-full rounded-b-[20px]">
      <FontAwesomeIcon icon={faListUl} />
      Manage
    </button>
  </aside>
);
export default Sidebar;