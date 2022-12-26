type Role = "admin" | "researcher" | "annotator";
export type UserRole = `codr:${Role}`;

export enum USERROLE {
  "codr:admin" = "Admin",
  "codr:researcher" = "Researcher",
  "codr:annotator" = "Annotator",
}

export interface User {
  _id: string;
  name?: {
    first: string;
    last: string;
    preferred?: string;
  };
  email: string;
  role: UserRole;
  flags: {
    isAnonymous: boolean;
    isDisabled: boolean;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
