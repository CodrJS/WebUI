"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IProfile } from "types/Profile";
import createCtx from "utils/context";
import getProfile from "utils/axios/Profile";
import useSWR from "swr";

async function getData() {
  try {
    const result = await getProfile();
    return result.data.details;
  } catch (e) {
    console.error("Could not fetch profile data.");
  }
}

const [useContext, Provider] =
  createCtx<
    [IProfile | undefined, Dispatch<SetStateAction<IProfile | undefined>>]
  >("profile");

export const ProfileProvider = function ProfileProvider({
  children,
}: PropsWithChildren) {
  const [profile, setProfile] = useState<IProfile>();
  const { isLoading, data } = useSWR("/me/profile", getData);

  useEffect(() => {
    if (!isLoading && data) {
      setProfile(data);
    }
  }, [isLoading, data]);

  return <Provider value={[profile, setProfile]}>{children}</Provider>;
};

const ProfileContext = {
  useProfile: useContext,
  ProfileProvider: ProfileProvider,
};

export default ProfileContext;
export const useProfile = useContext;
