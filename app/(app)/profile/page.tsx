"use client";
import { useProfile } from "utils/contexts/ProfileContext";

const ProfilePage = () => {
  const [profile] = useProfile();

  console.log(profile);

  return (
    <>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Profile
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-1"></div>
    </>
  );
};

export default ProfilePage;
