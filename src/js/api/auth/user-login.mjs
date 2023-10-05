// export { userLogin };
// password: 'my-password-elli',

// name:Elli1234
// email:Elli9000@stud.noroff.no
// password:elli

import { API_SOSIAL_URL } from "../constant-api.mjs";
import { setLocalStorage } from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

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
