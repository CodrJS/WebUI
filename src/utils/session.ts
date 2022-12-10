import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";

interface User {
  _id: string;
  name?: string;
  email: string;
}

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie(
  cookies: ReadonlyRequestCookies,
): Promise<User | null> {
  const cookie = cookies.get("codr-session");

  if (!cookie) return null;

  const { user } = await unsealData(cookie.value, {
    password: process.env.SECRET as string,
  });

  return user as User;
}
