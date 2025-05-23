import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faInbox, faRobot, faBook, faChartBar, faUsers, faCog, faUserCircle, faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { to: "/inbox", icon: faInbox, label: "Inbox" },
  { to: "/ai", icon: faRobot, label: "AI" },
  { to: "/docs", icon: faBook, label: "Docs" },
  { to: "/reports", icon: faChartBar, label: "Reports" },
  { to: "/contacts", icon: faUsers, label: "Contacts" },
  { to: "/settings", icon: faCog, label: "Settings" },
];

const SideNav = () => {
  const location = useLocation();
  return (
    <nav className="flex flex-col items-center bg-[#f9f8f4] border-r border-gray-200 py-4 w-16 min-w-[64px] h-screen">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl transition
            ${location.pathname === item.to ? "bg-black text-white shadow" : "text-gray-500 hover:bg-gray-200"}
          `}
          title={item.label}
        >
          <FontAwesomeIcon icon={item.icon} size="lg" />
        </Link>
      ))}
      <div className="flex-1" />
      <button className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-200">
        <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
      </button>
      <button className="mb-2 w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-200">
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
      </button>
    </nav>
  );
};

export default SideNav;