import { API_SOSIAL_URL } from "../../constant-api.mjs";
import { postData } from "../apiCall.mjs";
import { loadComments } from "./loadComments.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const commentUrl = `${API_SOSIAL_URL}${action}/${productId}`;
const postCommentBase = `/comment`;
const getCommentBase = `?_comments=true`;

const commentForm = document.querySelector("#comment-form");
const commentText = document.querySelector("#comment-text");
commentForm.addEventListener("submit", formSubmission);

/**
 * This allows a user to write a comment on a post
 */

async function formSubmission() {
  event.preventDefault();
  try {
    const method = "POST";
    const postCommentUrl = `${commentUrl} + ${postCommentBase}`;

    const commentPost = {
      body: commentText.value,
    };

    const postInfo = await postData(postCommentUrl, method, commentPost);

    setTimeout(() => {
      loadComments(commentUrl + getCommentBase);
    }, 500);
  } catch (error) {
    console.log(error);
  }
}
