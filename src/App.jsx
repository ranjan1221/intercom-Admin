import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideNav from "./components/SideNav";
// import Sidebar from "./components/Sidebar";
import MiddleColumn from "./components/MiddleColumn";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import TopBanner from "./components/TopBanner";
import Sidebar from "./components/SideBar";

const InboxPage = () => (
  <div className="flex h-screen w-screen overflow-x-hidden bg-[#f9f8f4]">
    {/* SideNav */}
    <div className="flex-shrink-0 w-16 h-full">
      <SideNav />
    </div>
    {/* Main content area */}
    <div className="flex flex-col flex-1 min-w-0 h-full">
      <div className="flex-shrink-0">
        <TopBanner />
      </div>
      <div className="flex flex-1 min-w-0 h-0">
        {/* Sidebar */}
        <div className="flex-shrink-0 w-[300px] min-w-[300px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        {/* MiddleColumn */}
        <div className="flex-shrink-0 w-[360px] min-w-[360px] h-full overflow-y-auto border-r border-gray-200">
          <MiddleColumn />
        </div>
        {/* MainContent */}
        <div className="flex-1 min-w-0 h-full overflow-y-auto">
          <MainContent />
        </div>
        {/* RightSidebar */}
        <div className="flex-shrink-0 w-[340px] min-w-[340px] h-full overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/inbox" element={<InboxPage />} />
      <Route path="*" element={<Navigate to="/inbox" />} />
    </Routes>
  </Router>
);

export default App;