import { postData } from "../apiCall.mjs";
import { API_SOSIAL_URL } from "../../constant-api.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const postIdUrl = `${API_SOSIAL_URL}${action}/${productId}?_author=true`;

const deleteThisPost = document.querySelector("#post-delete-btn");
deleteThisPost.addEventListener("click", deletePost);

/**
 * This feature allows the user to delete their own posts
 */
async function deletePost() {
  try {
    const method = "DELETE";
    const postInfo = await postData(postIdUrl, method);
    window.location.replace("../../../../profile/index.html");
  } catch (error) {
    console.log(error);
  }
}
