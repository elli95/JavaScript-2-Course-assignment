import { userEmailValidation, valueLength } from "../../src/js/modules/validator.mjs";

const API_BASE_URL = "https://api.noroff.dev";

async function userLogin(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    const accessToken = json.accessToken;
    userExist(accessToken);
    localStorage.setItem("accessToken", accessToken);

    return json;
  } catch (error) {
    console.log(error);
  }
}

const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");

const userEmailError = document.querySelector("#email-error");
const userPasswordError = document.querySelector("#password-error");
const errorMessage = document.querySelector("#error-message");

loginForm.addEventListener("submit", loginFormValidator);
loginForm.addEventListener("submit", formSubmission);

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

function loginFormValidator(event) {
  try {
    event.preventDefault();

    if (userEmailValidation(userEmail.value) === true) {
      userEmailError.style.display = "none";
    } else {
      userEmailError.style.display = "block";
    }
    if (valueLength(userPassword.value, 8) === true) {
      userPasswordError.style.display = "none";
    } else {
      userPasswordError.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

function formSubmission() {
  if (userEmailValidation(userEmail.value) && userPassword.value) {
    const user = {
      email: userEmail.value,
      password: userPassword.value,
      // email: 'testdemo-account-elli@noroff.no',
      // password: 'my-password-elli',
    };

    userLogin(loginUrl, user);
  } else {
    console.log("Its bad!");
  }
}

function userExist(accessToken) {
  if (accessToken) {
    errorMessage.style.display = "none";
    // location.href = "http://127.0.0.1:5501/profile/index.html";
    window.location.replace("profile/index.html");
  } else {
    console.log("baad!");
    errorMessage.style.display = "block";
  }
}
