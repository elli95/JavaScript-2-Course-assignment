import { API_SOSIAL_URL } from "./api/constant-api.mjs";
import { postData } from "./api/posts/apiCall.mjs";
import { getLocalStorage } from "./localStorage/index.mjs";
import { profileContent } from "./modules/source.mjs";

const action = "/profiles";
const user = getLocalStorage("profile").name;
const method = "GET";
const profileUrl = `${API_SOSIAL_URL}${action}/${user}`;

/**
 * This gets the data about the user, and helps display it on the html page
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */

async function loadProfile(profileUrl, method, data) {
  try {
    const postAmount = document.querySelector("#post-amount");
    const followersAmount = document.querySelector("#followers-amount");
    const followingAmount = document.querySelector("#following-amount");

    const userData = await postData(profileUrl, method, data);
    // console.log(userData);
    profileContent(userData);

    postAmount.innerText = `${userData._count.posts}`;
    followersAmount.innerText = `${userData._count.followers}`;
    followingAmount.innerText = `${userData._count.following}`;
  } catch (error) {
    console.log(error);
  }
}

loadProfile(profileUrl, method);
