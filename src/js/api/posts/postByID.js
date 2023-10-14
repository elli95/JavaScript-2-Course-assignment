// import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../constant-api.mjs";
import { postContentID } from "../../modules/source.mjs";
import { editPostContentForm } from "../../modules/source.mjs";
import { loadComments } from "./comments/loadComments.mjs";
import { postData } from "./apiCall.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const method = "GET";
const action = "/posts";
const postAuthor = "?_author=true";
const postIdUrl = `${API_SOSIAL_URL}${action}/${productId}${postAuthor}`;

/**
 * This retrieves data from a specific post based on the post's id
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */
async function loadPosts(postIdUrl, method, data) {
  try {
    const postInfo = await postData(postIdUrl, method, data);
    // postContentID(postInfo);

    const path = location.pathname;
    if (path.includes("/profile/editPosts.html")) {
      editPostContentForm(postInfo);
      loadComments;
    } else if (path.includes("/feed/specific-post.html")) {
      postContentID(postInfo);
    }
  } catch (error) {
    console.log(error);
  }
}

loadPosts(postIdUrl, method);
