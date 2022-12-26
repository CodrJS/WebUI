import { User } from "types/User";
import instance from "../Instance";

export const addUser = function addUser(data: FormData) {
  const user: Record<string, any> = {};
  Array.from(data.entries()).forEach(([key, value]) => {
    const regex = /(?<key>\w+)\[(?<nested>\w+)\]/;
    if (value) {
      if (regex.test(key)) {
        const match = regex.exec(key);
        const k1 = match?.groups?.key as string;
        const k2 = match?.groups?.nested as string;
        if (k1 in user) {
          user[k1][k2] = value.toString();
        } else {
          user[k1] = { [k2]: value.toString() };
        }
      } else if (key === "isAnonymous") {
        user.flags = { [key]: value.toString() === "on" ? true : false };
      } else {
        user[key] = value.toString();
      }
    }
  });
  return instance.post("/admin/users", { users: [user] });
};

export const getUsers = function getUsers() {
  return instance.get<{ message: string; details: { users: User[] } }>(
    "/admin/users",
  );
};

export const updateUsers = function updateUsers(users: User[]) {
  return instance.patch<{ message: string; details: { users: User[] } }>(
    "/admin/users",
    { users },
  );
};
