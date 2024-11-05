import React from "react";
import TopNavbar from "@/components/molecule/navbar/TopNavbar";
import Sidebar from "@/components/molecule/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-to-top-blue-gray text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="p-6 flex-grow overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;