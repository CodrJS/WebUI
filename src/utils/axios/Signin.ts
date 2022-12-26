import instance from "./Instance";

const signin = function signin(data: FormData) {
  const form = Object.fromEntries(data.entries());
  return instance.post("/auth/email", form);
};

export default signin;
