import React from "react";
import {
  faStar,
  faEllipsisH,
  faArchive,
  faMoon,
  faArrowUpRightFromSquare,
  faCommentAlt,
  faChevronDown,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContent = () => (
  <main className="flex flex-col flex-grow bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
    {/* Header */}
    <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
      <h3 className="text-2xl font-bold">Messenger</h3>
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faStar} className="text-gray-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faArchive} className="text-gray-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faMoon} className="text-gray-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-white" />
        </button>
      </div>
    </header>
    {/* Message area */}
    <section className="flex flex-col flex-grow px-8 py-6 gap-4">
      {/* Logo */}
      <div className="w-20 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-2">
        <img
          src="https://storage.googleapis.com/a1aa/image/858d7680-1290-4fb8-4cfb-d4f497974b05.jpg"
          alt="Messenger Logo"
          className="w-16 h-12 object-contain rounded-lg"
        />
      </div>
      {/* Main message */}
      <div className="bg-[#f6f7f8] rounded-xl p-5 text-[16px] text-gray-900 max-w-2xl shadow-sm">
        <p className="mb-3">
          This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox. Conversations handled by Fin AI Agent will also appear here.
        </p>
        <p>
          Once a channel is installed, all conversations come straight to your Inbox, so you can route them to the right team.
        </p>
      </div>
      {/* Install Messenger link */}
      <div className="bg-[#f6f7f8] rounded-xl p-3 max-w-xs flex flex-col gap-1 shadow-sm">
        <a className="text-blue-600 underline text-[16px] font-medium" href="#">
          Install Messenger
        </a>
        <div className="flex items-center gap-2 text-gray-500 text-[14px]">
          <FontAwesomeIcon icon={faCommentAlt} />
          <span>4d</span>
        </div>
      </div>
      {/* User message */}
      <div className="flex items-start gap-3">
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-400 text-white font-bold text-[16px] mt-1">
          M
        </div>
        <div className="bg-[#f6f7f8] rounded-xl p-4 max-w-2xl text-[16px] text-gray-900 shadow-sm">
          This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox. Conversations handled by Fin AI Agent will also appear here.
        </div>
      </div>
    </section>
    {/* Reply form */}
    <form className="flex items-center gap-3 px-8 py-6 border-t border-gray-200 bg-white rounded-b-2xl">
      <button
        className="text-gray-700 font-semibold flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        type="button"
      >
        <FontAwesomeIcon icon={faCommentAlt} />
        Reply
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <input
        className="flex-grow border border-gray-200 rounded-lg px-4 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        placeholder="Use CtrlK for shortcuts"
        type="text"
      />
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
        type="button"
      >
        <FontAwesomeIcon icon={faBolt} className="text-gray-500" />
      </button>
      <button
        className="text-gray-700 font-semibold text-[16px] px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-1"
        type="submit"
      >
        Send
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </form>
  </main>
);

export default MainContent;