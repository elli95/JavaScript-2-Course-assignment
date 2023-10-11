// import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";
import { getLocalStorage } from "../../src/js/storage/index.mjs";
import { userPostsContent } from "../../src/js/modules/source.mjs";

const action = "/profiles";
const user = getLocalStorage("profile").name;
const postTrue = "?_posts=true";
const method = "GET";
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
    Object.values(postInfo.posts).forEach(function (post) {
      userPostsContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts(profileUrl, method);
