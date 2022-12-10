"use client";
import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import SearchHeader from "components/SearchHeader";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebar={{ open: sidebarOpen, setOpen: setSidebarOpen }} />
      {/* Main column */}
      <div className="flex flex-col lg:pl-64 flex-1">
        {/* Search header */}
        <SearchHeader sidebar={{ setOpen: setSidebarOpen }} />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </>
  );
}
