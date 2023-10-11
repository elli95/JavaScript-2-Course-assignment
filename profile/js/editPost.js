import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";
import { getLocalStorage } from "../../src/js/storage/index.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const method = "GET";
const postIdUrl = `${API_SOSIAL_URL}${action}/${productId}?_author=true`;
const getCommentBase = `&_comments=true`;

/**
 * This retrieves data about the post
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */
async function loadPosts(postIdUrl, method, data) {
  try {
    const postInfo = await postData(postIdUrl, method, data);
    console.log(postInfo);
    postContent(postInfo);
  } catch (error) {
    console.log(error);
  }
}

loadPosts(postIdUrl, method);
const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postTags = document.querySelector("#post-tags");
const postMedia = document.querySelector("#post-media");

/**
 * This function displays the data from the post in a new form, ready for editing
 * @param {string} post Api data with the data for a post
 */
function postContent(post) {
  postTitle.value = `${post.title}`;
  postText.value = `${post.body}`;
  postTags.value = `${post.tags}`;
  postMedia.value = `${post.media}`;
}

const updateForm = document.querySelector("#post-update-form");
updateForm.addEventListener("submit", formSubmission);

/**
 * Updates the content of a post
 */
async function formSubmission() {
  event.preventDefault();

  const accessToken = getLocalStorage("token");
  try {
    const postUpdate = {
      title: postTitle.value,
      body: postText.value,
      tags: [postTags.value],
      media: postMedia.value,
    };

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postUpdate),
    };
    const response = await fetch(postIdUrl, postData);
    const data = await response.json();
    console.log("comment", data);

    window.location.replace("../../../../profile/index.html");
  } catch (error) {
    console.log(error);
  }
}

/**
 * This retrieves the comments for a post
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */
async function loadComments(url, method, data) {
  try {
    const commentInfo = await postData(url, method, data);
    Object.values(commentInfo.comments).forEach(function (comment) {
      postComment(comment);
    });
  } catch (error) {
    console.log(error);
  }
}

loadComments(postIdUrl + getCommentBase, method);

const commentPostsSection = document.querySelector("#post-comments");

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

const deleteThisPost = document.querySelector("#post-delete-btn");
deleteThisPost.addEventListener("click", deletePost);

/**
 * This feature allows the user to delete their own posts
 */
async function deletePost() {
  try {
    const method = "DELETE";
    const postInfo = await postData(postIdUrl, method);
    console.log("delete this post", postInfo);
    window.location.replace("../../../../profile/index.html");
  } catch (error) {
    console.log(error);
  }
}
