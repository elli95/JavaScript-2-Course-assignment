import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";
import { getLocalStorage } from "../../src/js/storage/index.mjs";

const action = "/profiles";
const user = getLocalStorage("profile").name;
const method = "GET";
const profileUrl = `${API_SOSIAL_URL}${action}/${user}`;

const userinfo = document.getElementById("userInfo");

async function loadProfile(profileUrl, method, data) {
  try {
    const userData = await postData(profileUrl, method, data);
    userinfo.innerText += `${userData.avatar}`;
    userinfo.innerText += `${userData.name}`;
  } catch (error) {
    console.log(error);
  }
}

loadProfile(profileUrl, method);
