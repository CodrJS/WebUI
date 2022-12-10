import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";

export interface User {
  _id: string;
  name?: string;
  email: string;
  isAdmin: boolean;
  accessToken: string;
  refreshToken: string;
}

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie(
  cookies: ReadonlyRequestCookies,
): Promise<User | undefined> {
  const cookie = cookies.get("codr-session");

  if (!cookie) return undefined;

  const { user } = await unsealData(cookie.value, {
    password: process.env.SECRET as string,
  });

  return user as User;
}
