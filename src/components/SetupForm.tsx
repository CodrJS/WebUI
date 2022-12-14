"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import setup from "utils/axios/Setup";
import { User } from "utils/session";

export interface SetupFormData {
  first: string;
  last: string;
  preferred?: string;
  username: string;
}

export default function SetupForm({ user }: { user: User }) {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) redirect("/");
  }, [success]);

  return (
    <form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={async e => {
        e.preventDefault();

        setLoading(true);

        // get data from form as SignInData (see type declaration above)
        const data = new FormData(e.currentTarget);

        const { errors: errs } = await setup(data);

        setLoading(false);

        if (errs?.length) setErrors(errs);
        else setSuccess(true);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          {errors.length ? (
            <div className="mb-6">
              {errors.map((v, i) => (
                <p key={`err-${i}`} className="text-red-700">
                  {v}
                </p>
              ))}
            </div>
          ) : null}
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
                htmlFor="first"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first"
                  id="first"
                  placeholder="Jonathan"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last"
                  id="last"
                  placeholder="Doe"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="preferred"
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
                  id="preferred"
                  name="preferred"
                  placeholder="Jon"
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
                  placeholder="JonDoe"
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
            disabled={loading}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </div>
    </form>
  );
}
