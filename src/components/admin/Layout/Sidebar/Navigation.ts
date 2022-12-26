import {
  ChartPieIcon,
  Cog8ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: ChartPieIcon },
  { name: "Users", href: "/admin/users", icon: UsersIcon },
  { name: "Settings", href: "#", icon: Cog8ToothIcon },
];

export default navigation;
