import React, { useState } from "react";
import {
  faUser,
  faUsers,
  faLink,
  faChevronDown,
  faChevronUp,
  faCommentAlt,
  faTags,
  faList,
  faEye,
  faPuzzlePiece,
  faNoteSticky,
  faArrowUpRightFromSquare, // Added missing icon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const sections = [
  { id: 1, label: "Links", icon: faLink },
  { id: 2, label: "Conversation attributes", icon: faCommentAlt },
  { id: 3, label: "User data", icon: faUser },
  { id: 4, label: "Recent conversations", icon: faCommentAlt },
  { id: 5, label: "User notes", icon: faNoteSticky },
  { id: 6, label: "User tags", icon: faTags },
  { id: 7, label: "User segments", icon: faList },
  { id: 8, label: "Recent page views", icon: faEye },
  { id: 9, label: "Similar conversations", icon: faCommentAlt },
];

const RightSidebar = () => {
  const [openSections, setOpenSections] = useState(
    sections.reduce((acc, s) => ({ ...acc, [s.id]: false }), {})
  );

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className="flex flex-col w-[340px] bg-white border-l border-gray-200 rounded-2xl shadow-md overflow-y-auto min-h-[96vh]">
      {/* Tabs */}
      <div className="flex items-center px-6 pt-6 pb-2 border-b border-gray-200">
        <button className="font-bold text-base border-b-2 border-orange-500 pb-2 mr-6">Details</button>
        <button className="text-gray-500 font-semibold text-base pb-2">Copilot</button>
        <div className="flex-1" />
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <FontAwesomeIcon icon={faUserCircle} />
        </button>
      </div>

      {/* Assignee/Team */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 font-semibold">Assignee</span>
          <span className="flex items-center gap-2 text-gray-400 font-semibold">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="text-gray-700">Harsh Ranjan</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-semibold">Team Inbox</span>
          <span className="flex items-center gap-2 text-gray-700 font-semibold">
            <FontAwesomeIcon icon={faUsers} />
            Unassigned
          </span>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="flex flex-col">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between px-6 py-4 font-semibold text-[15px] hover:bg-gray-50 transition"
              onClick={() => toggleSection(section.id)}
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={section.icon} />
                {section.label}
              </span>
              <FontAwesomeIcon
                icon={openSections[section.id] ? faChevronUp : faChevronDown}
                className="text-gray-400"
              />
            </button>

            {openSections[section.id] && (
              <div className="px-8 pb-4 text-[14px] text-gray-700">
                {section.label === "Links" && (
                  <>
                    <div className="py-1">Tracker ticket</div>
                    <div className="py-1">Back-office tickets</div>
                    <div className="py-1">Side conversations</div>
                  </>
                )}
                {section.label === "Conversation attributes" && (
                  <>
                    <div className="flex justify-between py-1">
                      <span>ID</span>
                      <span className="font-semibold">215469047790195</span>
                    </div>
                    {/* ... other attributes */}
                  </>
                )}
                {![
                  "Links",
                  "Conversation attributes",
                ].includes(section.label) && (
                  <div className="text-gray-400 py-2">
                    No {section.label.toLowerCase()} available
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Edit apps */}
      <div className="px-6 py-4 flex items-center gap-2 text-gray-600 font-semibold text-[15px]">
        <FontAwesomeIcon icon={faUsers} />
        Edit apps
      </div>

      {/* Chat bubble */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white flex justify-center items-center shadow-lg hover:shadow-xl z-10">
        <FontAwesomeIcon icon={faCommentAlt} size="lg" />
      </button>
    </aside>
  );
};

export default RightSidebar;