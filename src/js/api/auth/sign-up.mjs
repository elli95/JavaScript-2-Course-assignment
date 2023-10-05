import { API_SOSIAL_URL } from "../constant-api.mjs";

const action = "/auth/register";
const method = "POST";

async function signUp(profile) {
  const signUpUrl = API_SOSIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(signUpUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  console.log(data);
}

export { signUp };
