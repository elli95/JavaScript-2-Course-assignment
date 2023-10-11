import { API_SOSIAL_URL } from "../constant-api.mjs";

const action = "/auth/register";
const method = "POST";

/**
 * This function creates a new user on use
 * @param {string} profile The information used to create a new user
 */
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
  if (data.status) {
    window.alert(data.errors[0].message);
  } else {
    const signUpForm = document.querySelector("#signUpForm");
    const signUpSuccess = document.querySelector(".signup-success");
    signUpForm.className = "editForm";
    signUpSuccess.className = "d-flex flex-column gap-2 p-2 align-items-center ";
  }
}

export { signUp };
