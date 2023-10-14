import { deleteKeyLocalStorage } from "../../localStorage/index.mjs";
import { isUserLogedIn } from "./loginCheck.mjs";

const logout = document.querySelector("#logout");
logout.addEventListener("click", userLogout);

/**
 * Deletes the security code and logout the user
 */

function userLogout() {
  deleteKeyLocalStorage("token");
  deleteKeyLocalStorage("profile");
  isUserLogedIn();
}
