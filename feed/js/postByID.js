// import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postContentID } from "../../src/js/modules/source.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const method = "GET";
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
    postContentID(postInfo);
  } catch (error) {
    console.log(error);
  }
}

loadPosts(postIdUrl, method);
