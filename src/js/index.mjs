import { signupFormListener } from "./handlers/sign-up.mjs";
import { userLoginFormListener } from "./handlers/user-login.mjs";

const path = location.pathname;
if (path === "/") {
  userLoginFormListener();
} else if (path === "/profile/sign-up.html") {
  signupFormListener();
}
