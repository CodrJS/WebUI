"use client";
import { useProfile } from "utils/contexts/ProfileContext";
import Button from "components/Button";

const SettingsPage = () => {
  const [profile] = useProfile();

  return (
    <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
      {/* Profile details */}
      <section aria-labelledby="payment-details-heading">
        <form>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment-details-heading"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Profile details
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update how other users see you within the platform.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
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
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Button type="submit" disabled>
                Save
              </Button>
            </div>
          </div>
        </form>
      </section>

      {/* User details */}
      <section aria-labelledby="profile-details-heading">
        <form>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment-details-heading"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  User details
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update your account information.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
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

                <div className="col-span-4 sm:col-span-2">
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

                <div className="col-span-4">
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

                <div className="col-span-4">
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
                      defaultValue={profile?.user.email || undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Button type="submit" disabled>
                Save
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SettingsPage;
