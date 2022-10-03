import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchHeader from "./SearchHeader";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <Sidebar sidebar={{ open: sidebarOpen, setOpen: setSidebarOpen }} />
      {/* Main column */}
      <div className="flex flex-col lg:pl-64">
        {/* Search header */}
        <SearchHeader sidebar={{ setOpen: setSidebarOpen }} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
