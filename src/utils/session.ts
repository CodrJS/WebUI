import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

type Role = "admin" | "researcher" | "annotator";
type UserRole = `codr:${Role}`;

export interface User {
  _id: string;
  name?: string;
  email: string;
  role: UserRole;
  accessToken: string;
  refreshToken: string;
  flags: {
    isAnonymous: boolean;
    isDisabled: boolean;
  };
}

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie(
  cookies: ReadonlyRequestCookies | RequestCookies,
): Promise<User | undefined> {
  const cookie = cookies.get("codr-session");

  if (!cookie) return undefined;

  const { user } = await unsealData(cookie.value, {
    password: process.env.SECRET as string,
  });

  return user as User;
}
