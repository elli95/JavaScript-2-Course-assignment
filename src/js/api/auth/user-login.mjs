import { API_SOSIAL_URL } from "../constant-api.mjs";
import { setLocalStorage } from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

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
  userExist(accessToken);
  setLocalStorage("token", accessToken);
  setLocalStorage("profile", userProfile);
}

/**
 * This function redirects the user or gives an error message
 * @param {string} accessToken security code to verify whether the user has access
 */
function userExist(accessToken) {
  const errorMessage = document.querySelector("#error-message");
  if (accessToken) {
    errorMessage.style.display = "none";
    window.location.replace("../../../../profile/index.html");
  } else {
    errorMessage.style.display = "block";
  }
}

export { userLogin };
