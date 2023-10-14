import { API_SOSIAL_URL } from "../../constant-api.mjs";
import { postData } from "../apiCall.mjs";
import { postComment } from "../../../modules/source.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const method = "GET";
const commentUrl = `${API_SOSIAL_URL}${action}/${productId}`;
const getCommentBase = `?_comments=true`;

const commentPostsSection = document.querySelector("#comment-posts-section");

/**
 * This retrieves the comments for a post
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */

async function loadComments(url, method, data) {
  try {
    commentPostsSection.innerHTML = "";
    const commentInfo = await postData(url, method, data);
    Object.values(commentInfo.comments).forEach(function (comment) {
      postComment(comment);
    });
  } catch (error) {
    console.log(error);
  }
}

loadComments(commentUrl + getCommentBase, method);

export { loadComments };
