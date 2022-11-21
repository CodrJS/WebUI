import classNames from "utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProject } from "utils/contexts/ProjectContext";

interface INavItem {
  name: string;
  href: string;
  slug: string;
  count?: string;
}

export default function ProjectNav({ datasets }: { datasets?: INavItem[] }) {
  const project = useProject();
  const currentRoute = usePathname() as string;
  return (
    <nav
      className="space-y-1 border-b lg:w-64 lg:border-b-0 lg:border-r border-gray-200 bg-gray-50 py-2 px-3 lg:py-4"
      aria-label="Sidebar"
    >
      <div className="space-y-1 flex flex-col lg:sticky lg:top-4">
        <div className="mb-4 space-y-1 flex flex-col">
          <ProjectNavItem
            item={{
              name: "Dashboard",
              href: `/project/${project?.general.slug}`,
              slug: "",
            }}
            current={`/project/${project?.general.slug}` === currentRoute}
          />
        </div>
        {datasets?.map(item => (
          <ProjectNavItem
            item={item}
            key={`dataset ${item.name}`}
            current={currentRoute.includes(
              `/project/${project?.general.slug}/${item.slug}`,
            )}
          />
        ))}
      </div>
    </nav>
  );
}

export function ProjectNavItem({
  item,
  current,
}: {
  item: INavItem;
  current: boolean;
}) {
  return (
    <Link
      href={item.href}
      key={item.name}
      className={classNames(
        current
          ? "bg-gray-200 text-gray-900"
          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
        "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
      )}
      aria-current={current ? "page" : undefined}
    >
      <span className="truncate">{item.name}</span>
      {item.count ? (
        <span
          className={classNames(
            current
              ? "bg-white"
              : "bg-gray-200 text-gray-600 group-hover:bg-gray-200",
            "ml-auto inline-block py-0.5 px-3 text-xs rounded-full",
          )}
        >
          {item.count}
        </span>
      ) : null}
    </Link>
  );
}
