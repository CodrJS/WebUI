import { Dispatch, SetStateAction } from "react";
import DesktopSidebar from "./Desktop";
import MobileSidebar from "./Mobile";

export default function Sidebar({ sidebar }: {sidebar: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}}) {
  return (
    <>
      <MobileSidebar sidebar={sidebar} />
      <DesktopSidebar />
    </>
  );
}
