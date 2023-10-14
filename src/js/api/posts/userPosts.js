// import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../constant-api.mjs";
import { postData } from "./apiCall.mjs";
import { getLocalStorage } from "../../localStorage/index.mjs";
import { userPostsContent } from "../../modules/source.mjs";

const user = getLocalStorage("profile").name;
const method = "GET";
const action = "/profiles";
const postTrue = "?_posts=true";
const profileUrl = `${API_SOSIAL_URL}${action}/${user}${postTrue}&_count=true`;

/**
 * This gets the post the user has posted
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */

async function loadPosts(profileUrl, method, data) {
  try {
    const postInfo = await postData(profileUrl, method, data);
    const userPosts = postInfo.posts;

    const newPostInfo = userPosts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    Object.values(newPostInfo).forEach(function (post) {
      userPostsContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts(profileUrl, method);
