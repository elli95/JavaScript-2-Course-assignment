import { getLocalStorage } from "../../storage/index.mjs";

function isUserLogedIn() {
  if (!getLocalStorage("token")) {
    window.location.replace("/");
  }
}
isUserLogedIn();
