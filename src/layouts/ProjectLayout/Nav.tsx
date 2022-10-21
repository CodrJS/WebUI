import { useMemo } from "react";
import { useRouter } from "next/router";
import classNames from "utils/classNames";
import { project } from "src/data/projects";

interface INavItem {
  name: string;
  href: string;
  count?: string;
}

export default function DatasetNav({
  project,
  datasets,
}: {
  project: project;
  datasets: INavItem[];
}) {
  return (
    <nav
      className="space-y-1 lg:w-64 lg:border-r lg:border-gray-200 lg:bg-gray-50 lg:py-4 lg:px-2"
      aria-label="Sidebar"
    >
      <div className="mb-4">
        <DatasetNavItem
          item={{
            name: "Dashboard",
            href: `/project/${project.general.slug}`,
          }}
        />
      </div>
      {datasets.map(item => (
        <DatasetNavItem item={item} key={`dataset ${item.name}`} />
      ))}
    </nav>
  );
}

export function DatasetNavItem({ item }: { item: INavItem }) {
  const router = useRouter();
  const current = useMemo(() => {
    return item.href === router.asPath;
  }, [item, router]);
  return (
    <a
      key={item.name}
      href={item.href}
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
    </a>
  );
}
