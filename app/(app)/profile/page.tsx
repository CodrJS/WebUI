"use client";
import { useProfile } from "utils/contexts/ProfileContext";

const ProfilePage = () => {
  const [profile] = useProfile();

  console.log(profile);

  return (
    <div className="flex flex-col lg:flex-row lg:flex-1">
      <div className="flex flex-col py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 flex-1">
        <div className="prose lg:prose-md">
          <h2>Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
