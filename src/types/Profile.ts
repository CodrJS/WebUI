export interface IProfile {
  _id: string;
  username: string;
  user: {
    _id: string;
    name: {
      first: string;
      last: string;
      preferred: string;
    };
    email: string;
    role: string;
  };
  createdAt: string;
  updatedAt: string;
}
