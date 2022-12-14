import { IProfile } from "types/Profile";
import createCtx from "utils/context";

const [useContext, Provider] = createCtx<IProfile>("profile");

const ProfileContext = {
  useProfile: useContext,
  ProfileProvider: Provider,
};

export default ProfileContext;
export const ProfileProvider = Provider;
export const useProfile = useContext;
