import { Bars4Icon, ClockIcon, HomeIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "My tasks", href: "#", icon: Bars4Icon, current: false },
  { name: "Recent", href: "#", icon: ClockIcon, current: false },
];

export default navigation;
