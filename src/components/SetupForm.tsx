// import { FormEvent } from "react";
// import axios, { AxiosError } from "axios";
"use client";
import { User } from "utils/session";

export interface SetupFormData {
  "first-name": string;
  "last-name": string;
  nickname?: string;
}

export default function SetupForm({ user }: { user: User }) {
  // const submitSignin = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const data = Object.fromEntries(new FormData(e.currentTarget).entries());

  //   axios
  //     .post<IResponse>("/api/v1/auth/email", data)
  //     .then(res => {
  //       setStatus({ type: "success", message: res.data.detail.message });
  //     })
  //     .catch((e: AxiosError<IResponse>) => {
  //       setStatus({
  //         type: "error",
  //         message:
  //           e.response?.data.detail.message ||
  //           "An unexpected error occured. Please contact your Codr administrator.",
  //       });
  //     });
  // };

  return (
    <form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={e => {
        e.preventDefault();

        // get data from form as SignInData (see type declaration above)
        const data = Object.fromEntries(
          new FormData(e.currentTarget),
        ) as unknown as SetupFormData;

        console.warn(data);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will never be shared to third-parties.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred name{" "}
                <span className="font-normal italic text-gray-500">
                  (optional)
                </span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  autoComplete="nickname"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <span className="font-normal italic text-gray-500 text-sm">
                This field defaults to your first name
              </span>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  @
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-r-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
                  required
                  disabled
                  defaultValue={user?.email || undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </form>
  );
}
