// import { userEmailValidation, valueLength } from "../../src/js/modules/validator.mjs";

const API_BASE_URL = "https://api.noroff.dev";

async function registerUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

const signUpForm = document.querySelector("#signUpForm");

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.getElementById("password");
const userPassword2 = document.getElementById("password2");

// const userNameError = document.querySelector("#name-error");
// const userEmailError = document.querySelector("#email-error");
// const userPasswordError = document.querySelector("#password-error");
const userPassword2Error = document.querySelector("#password2-error");
const errorMessage = document.querySelector("#error-message");

signUpForm.addEventListener("submit", signUpFormValidator);
signUpForm.addEventListener("submit", formSubmission);

const signUpUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

function signUpFormValidator(event) {
  try {
    event.preventDefault();

    // if (valueLength(userName.value, 2) === true) {
    //   userNameError.style.display = "none";
    // } else {
    //   userNameError.style.display = "block";
    // }
    // if (userEmailValidation(userEmail.value) === true) {
    //   userEmailError.style.display = "none";
    // } else {
    //   userEmailError.style.display = "block";
    // }
    // if (valueLength(userPassword.value, 8) === true) {
    //   userPasswordError.style.display = "none";
    // } else {
    //   userPasswordError.style.display = "block";
    // }
    if (userPassword2.value === userPassword.value) {
      userPassword2Error.style.display = "none";
    } else {
      userPassword2Error.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

function formSubmission() {
  if (
    // valueLength(userName.value, 2) &&
    // userEmailValidation(userEmail.value) &&
    // valueLength(userPassword.value, 8) &&
    userPassword2.value === userPassword.value
  ) {
    const user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
      // email: 'user-elli-test@noroff.no',
      // password: 'my-password-elli',
    };

    console.log("User", user);

    registerUser(signUpUrl, user);
  } else {
    console.log("Its bad!");
  }
}

function userExist(accessToken) {
  if (accessToken) {
    errorMessage.style.display = "none";
    location.href = "http://127.0.0.1:5501/profile/index.html";
  } else {
    console.log("baad!");
    errorMessage.style.display = "block";
  }
}

// const API_BASE_URL = 'https://api.noroff.dev';

// async function loginUser(url, data) {
//   try {
//     console.log(url, data);

//     // const postData = {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(data),
//     // };

//     // const response = await fetch(url, postData);
//     // console.log(response);
//     // const json = await response.json();
//     // console.log(json);
//     // return json;
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// const userEmail = document.querySelector("#email");
// const userPassword = document.querySelector("#password");

// const user = {
//     email: userEmail,
//     password: userPassword,
// };

// // console.log(user);

// const login = document.getElementById("loginBtn");
// console.log(login);
// login.addEventListener("click", loginThisUser);

// // const loginThisUser("hello");

// function loginThisUser() {
//     console.log("hello", user);
// }

// // registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);
