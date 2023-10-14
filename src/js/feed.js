import { API_SOSIAL_URL } from "./api/constant-api.mjs";
import { postData } from "./api/posts/apiCall.mjs";
import { postContent } from "../../src/js/modules/source.mjs";
import { react } from "./api/posts/postReact.js";

const action = "/posts";
const method = "GET";

const apiUrl = API_SOSIAL_URL + action;
const postAuthor = "?_author=true";

/**
 * Here, all posts are fetched via api and displayed on the feed page
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */
async function loadPosts(apiUrl, method, data) {
  try {
    const postInfo = await postData(apiUrl + postAuthor, method, data);
    Object.values(postInfo).forEach(function (post) {
      postContent(post);
    });

    const likeReaction = document.querySelectorAll(".postLike");
    for (let i = 0; i < likeReaction.length; i++) {
      likeReaction[i].addEventListener("click", react);
    }
  } catch (error) {
    console.log(error);
  }
}
loadPosts(apiUrl, method);

export { loadPosts };
