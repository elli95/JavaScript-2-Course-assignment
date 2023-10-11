import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const method = "GET";
const commentUrl = `${API_SOSIAL_URL}${action}/${productId}`;
const postCommentBase = `/comment`;
const getCommentBase = `?_comments=true`;

const commentPostsSection = document.querySelector("#comment-posts-section");
const commentForm = document.querySelector("#comment-form");
const commentText = document.querySelector("#comment-text");
commentForm.addEventListener("submit", formSubmission);

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
      console.log("comment", comment);
      postComment(comment);
    });
  } catch (error) {
    console.log(error);
  }
}

loadComments(commentUrl + getCommentBase, method);

/**
 * Displays comments on a post
 * @param {string} comment comments taken from previous api call
 */

function postComment(comment) {
  const commentContainer = document.createElement("div");
  const commentBody = document.createElement("h2");

  commentContainer.className = "list-group col align-items-center";
  commentBody.className = "card text-center rounded-3 border border-dark col-6 p-2 my-2 comment-style text-break";

  commentPostsSection.append(commentContainer);
  commentContainer.append(commentBody);

  commentContainer.querySelector("h2").innerText = `${comment.body}`;
}

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
    console.log("comment", postInfo);

    setTimeout(() => {
      loadComments(commentUrl + getCommentBase);
    }, 500);
  } catch (error) {
    console.log(error);
  }
}
