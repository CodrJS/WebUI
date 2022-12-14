import instance from "./Instance";

interface ISetupForm {
  first: string;
  last: string;
  preferred?: string;
  username?: string;
}

const setup = async function setup(data: FormData) {
  const form = Object.fromEntries(data.entries()) as unknown as ISetupForm;
  const profile = { username: `${form.username as string}` };
  delete form.username;

  const errors: string[] = [];

  try {
    await instance.post("/me/profile", profile);
  } catch (e: any) {
    errors.push(e.response.data?.message);
  }

  try {
    await instance.post("/me/user", { name: form });
  } catch (e: any) {
    if (errors.find(v => v !== e.response.data?.message))
      errors.push(e.response.data?.message);
  }

  return {
    errors,
  };
};

export default setup;
