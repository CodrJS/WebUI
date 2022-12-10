import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function AppLayout({ children }: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());

  // Prevent non logged user to acces all pages in the tenant layout tree
  if (!user) {
    redirect("/signin");
  }

  return <>{children}</>;
}
