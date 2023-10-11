import { deleteKeyLocalStorage, getLocalStorage } from "../../storage/index.mjs";

const logout = document.querySelector("#logout");
logout.addEventListener("click", userLogout);

/**
 * Deletes the security code and then logs the user out
 */
function userLogout() {
  deleteKeyLocalStorage("token");
  deleteKeyLocalStorage("profile");
  isUserLogedIn();
}

/**
 * Sends the user to the login page if they are not logged in/have a security code
 */
function isUserLogedIn() {
  if (!getLocalStorage("token")) {
    window.location.replace("/");
  }
}
isUserLogedIn();
