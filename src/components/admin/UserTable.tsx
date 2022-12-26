import useSWR from "swr";
import Button from "components/Button";
import Select from "components/Select";
import { useEffect, useRef, useState } from "react";
import { User, USERROLE } from "types/User";
import { getUsers, updateUsers } from "utils/axios/admin/User";
import classNames from "utils/classNames";
import AddUserSlideOver from "./SlideOvers/AddUser";
import { useNotification } from "utils/contexts/NotificationContext";

const getData = async function getData() {
  try {
    const res = await getUsers();
    return res.data.details.users;
  } catch (e: any) {
    console.error(e);
  }
};

export default function UserTable() {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<User[]>([]);
  const [changes, setChanges] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const { data: people } = useSWR("/admin/users", getData);
  const { addNotification, removeNotification } = useNotification();

  function togglePanel() {
    setOpen(!open);
  }

  useEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 &&
      selectedPeople.length < (people ? people.length : 0);
    setChecked(selectedPeople.length === people?.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) checkbox.current.indeterminate = isIndeterminate;
  }, [people, selectedPeople]);

  function toggleAll() {
    const isIndeterminate =
      selectedPeople.length > 0 &&
      selectedPeople.length < (people ? people.length : 0);

    function completeToggle() {
      setSelectedPeople(checked || indeterminate ? [] : people ? people : []);
      setChecked(!checked && !indeterminate);
      setIndeterminate(false);
    }

    if ((isIndeterminate || checked) && edit) {
      const save = confirm("Do you want to save your changes?");
      if (!save) {
        setChanges([]);
      }
      setEdit(false);
    }
    completeToggle();
  }

  /**
   * Update a user and store changes locally.
   * @param person User being effected
   * @param param1 Key-value pair to be updated
   */
  function onChange(
    person: User,
    { key, value }: { key: string; value: unknown },
  ) {
    // find and replace the user object using array functions.
    const p: User = changes.find(p => p.email === person.email) || person;
    const filtered = changes.filter(p => p.email !== person.email);

    const regex = /(?<key>\w+)(\.(?<item>\w+))+/;

    // update field IFF it already exists.
    if (regex.test(key)) {
      const match = regex.exec(key);
      const k1 = match?.groups?.key as "flags";
      const k2 = match?.groups?.item as keyof User["flags"];
      if (k1 && k2) {
        p[k1][k2] = value as boolean;
        setChanges([...filtered, p]);
      }
    } else if (Object.hasOwn(p, key)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      p[key] = value;
      setChanges([...filtered, p]);
    }
  }

  useEffect(() => {
    if (!edit && changes.length) {
      // save when editing is complete.
      updateUsers(changes).then(() => {
        const n = addNotification({
          status: "success",
          title: "Success!",
          message: "All changes have been saved!",
          hasSeen: false,
        });
        setChanges([]);
        setTimeout(() => {
          removeNotification(n);
        }, 5000);
      });
    }
  }, [edit, changes]);

  return (
    <>
      <AddUserSlideOver open={open} toggleOpen={togglePanel} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage all users in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Button onClick={togglePanel}>Add user</Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col flex-1">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedPeople.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  {edit ? (
                    <button
                      type="button"
                      onClick={() => setEdit(!edit)}
                      className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setEdit(!edit)}
                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Bulk edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Delete all
                      </button>
                    </>
                  )}
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 sm:left-6 cursor-pointer"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Created
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Last Updated
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people?.map(person => {
                    const name = person.flags.isAnonymous
                      ? "Anonymous User"
                      : person.name
                      ? (person.name?.preferred
                          ? person.name.preferred
                          : person.name.first) +
                        " " +
                        person.name.last
                      : "New User";
                    return (
                      <tr
                        key={person.email}
                        className={
                          selectedPeople.includes(person)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedPeople.includes(person) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-sky-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 sm:left-6 cursor-pointer"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={e =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter(p => p !== person),
                              )
                            }
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                            selectedPeople.includes(person)
                              ? "text-sky-600"
                              : "text-gray-900",
                          )}
                        >
                          {name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {edit && selectedPeople.includes(person) ? (
                            <Select
                              name={`${person.email} role`}
                              defaultValue={person.role}
                              options={Object.entries(USERROLE).map(v => ({
                                name: v[1],
                                value: v[0],
                              }))}
                              onChange={e => {
                                onChange(person, { key: "role", value: e });
                              }}
                            />
                          ) : (
                            USERROLE[person.role]
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {edit && selectedPeople.includes(person) ? (
                            <Select
                              name={`${person.email} disabled`}
                              defaultValue={Boolean(
                                person.flags.isDisabled,
                              ).toString()}
                              options={[
                                { name: "Enabled", value: "" },
                                { name: "Disabled", value: "true" },
                              ]}
                              onChange={e => {
                                onChange(person, {
                                  key: "flags.isDisabled",
                                  value: Boolean(e),
                                });
                              }}
                            />
                          ) : person.flags.isDisabled ? (
                            <p className="font-medium text-red-700">Disabled</p>
                          ) : (
                            <p className="font-base text-gray-500">Enabled</p>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(person.createdAt).toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.updatedAt === person.createdAt
                            ? "Never"
                            : new Date(person.updatedAt).toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            onClick={() => {
                              setEdit(!edit);
                              setSelectedPeople([person]);
                            }}
                            className="text-sky-600 hover:text-sky-900"
                          >
                            Edit<span className="sr-only">, {name}</span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
