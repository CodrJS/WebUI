export interface IProfile {
  _id: string;
  username: string;
  userId: {
    _id: string;
    name: {
      first: string;
      last: string;
      preferred: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
