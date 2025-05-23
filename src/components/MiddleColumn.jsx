import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faPause, faThLarge } from "@fortawesome/free-solid-svg-icons";

const conversations = [
  {
    id: 1,
    selected: true,
    avatar: "M",
    avatarColor: "bg-blue-300",
    title: "Messenger · [Demo]",
    subtitle: "Install Messenger",
    time: "4d",
  },
  {
    id: 2,
    avatar: "E",
    avatarColor: "bg-teal-300",
    title: "Email · [Demo]",
    subtitle: "This is a demo email. It s...",
    time: "4d",
  },
  {
    id: 3,
    avatar: "W",
    avatarColor: "bg-green-400",
    title: "WhatsApp · [Demo]",
    subtitle: "Set up WhatsApp or soci...",
    time: "4d",
  },
  {
    id: 4,
    avatar: "P",
    avatarColor: "bg-teal-400",
    title: "Phone · [Demo]",
    subtitle: "Set up phone or SMS",
    time: "4d",
  },
];

const MiddleColumn = () => (
  <section className="flex flex-col w-[360px] border-r border-gray-200 bg-[#fcfcfa] overflow-hidden">
    {/* Header */}
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 border-2 border-gray-900 rounded-sm"></span>
        <span className="font-bold text-lg">Harsh Ranjan</span>
      </div>
    </header>
    {/* Tabs */}
    <div className="flex items-center px-6 pt-4 pb-2 border-b border-gray-100">
      <span className="font-semibold text-base mr-6">4 Open</span>
      <span className="text-gray-500 font-medium text-base mr-6">Last activity</span>
      <FontAwesomeIcon icon={faEllipsisH} className="ml-auto text-gray-400" />
    </div>
    {/* Conversation List */}
    <div className="flex flex-col flex-grow overflow-y-auto px-0 py-2">
      {conversations.map((c, idx) =>
        c.selected ? (
          <div
            key={c.id}
            className="flex items-center bg-white rounded-2xl shadow-sm px-4 py-3 mx-4 mt-4 mb-2 border border-gray-100"
          >
            <div className={`flex justify-center items-center w-9 h-9 rounded-full ${c.avatarColor} text-white font-bold text-lg mr-3`}>
              {c.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-[15px]">{c.title}</div>
              <div className="text-gray-500 text-[14px]">{c.subtitle}</div>
            </div>
            <div className="flex flex-col items-end ml-2">
              <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 mb-2" />
              <span className="text-gray-400 text-[13px]">{c.time}</span>
            </div>
          </div>
        ) : (
          <div
            key={c.id}
            className={`flex items-center px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition`}
          >
            <div className={`flex justify-center items-center w-9 h-9 rounded-full ${c.avatarColor} text-white font-bold text-lg mr-3`}>
              {c.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-[15px]">{c.title}</div>
              <div className="text-gray-500 text-[14px] truncate max-w-[180px]">{c.subtitle}</div>
            </div>
            <span className="text-gray-400 text-[13px] ml-2">{c.time}</span>
          </div>
        )
      )}
    </div>
    {/* Footer buttons */}
    <div className="flex justify-center gap-3 p-4 border-t border-gray-100 bg-[#fcfcfa]">
      <button
        aria-label="Pause"
        className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faPause} className="text-gray-500 text-xl" />
      </button>
      <button
        aria-label="Grid"
        className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faThLarge} className="text-gray-500 text-xl" />
      </button>
    </div>
  </section>
);

export default MiddleColumn;