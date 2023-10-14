import { getLocalStorage } from "../../localStorage/index.mjs";

/**
 * Sends the user to the login page if they are not logged in/have a security code
 */

function isUserLogedIn() {
  if (!getLocalStorage("token")) {
    window.location.replace("/");
  }
}
isUserLogedIn();

export { isUserLogedIn };
