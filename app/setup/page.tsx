import SetupForm from "components/SetupForm";
import { cookies } from "next/headers";
import { getRequestCookie, User } from "utils/session";

export default async function SetupPage() {
  const user = await getRequestCookie(cookies());

  return (
    <div className="min-h-max flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="my-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <h1 className="font-bold text-3xl text-sky-600 text-center">Welcome to Codr</h1>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          First-time Setup
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please fill out all required infromation before continuing.
        </p>
        <div className="bg-white mt-8 pb-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-6">
          <SetupForm user={user as User} />
        </div>
      </div>
    </div>
  );
}
