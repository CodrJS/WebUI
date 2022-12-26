import { IProfile } from "types/Profile";
import { IResponse } from "types/Server";
import instance from "./Instance";

const getProfile = function getProfile() {
  return instance.get<IResponse<IProfile>>("/me/profile");
};

export default getProfile;
