import { API_SOSIAL_URL } from "../constant-api.mjs";
import { setLocalStorage } from "../../localStorage/index.mjs";

const action = "/auth/login";
const method = "POST";
const errorMessage = document.querySelector("#error-message");

/**
 * This function logs in a user
 * @param {string} profile User data of those who log in
 */

async function userLogin(profile) {
  const userLoginUrl = API_SOSIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(userLoginUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const { accessToken, ...userProfile } = await response.json();
  setLocalStorage("token", accessToken);
  setLocalStorage("profile", userProfile);

  if (!response.ok) {
    errorMessage.innerText = "There was an error: " + userProfile.errors[0].message;
    errorMessage.style.display = "block";
    throw new Error(response.status);
  } else {
    errorMessage.style.display = "none";
    window.location.replace("../../../../profile/index.html");
  }
}

export { userLogin };
