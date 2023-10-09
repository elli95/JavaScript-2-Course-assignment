import { deleteKeyLocalStorage, getLocalStorage } from "../../storage/index.mjs";

const logout = document.querySelector("#logout");
logout.addEventListener("click", userLogout);

function userLogout() {
  deleteKeyLocalStorage("token");
  deleteKeyLocalStorage("profile");
  isUserLogedIn();
}

function isUserLogedIn() {
  if (!getLocalStorage("token")) {
    window.location.replace("/");
  }
}
isUserLogedIn();
