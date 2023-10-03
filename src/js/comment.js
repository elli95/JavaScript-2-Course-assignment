// import { dateSetup } from "../../src/js/modules/source.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const API_BASE_URL = "https://api.noroff.dev";

const commentUrl = `${API_BASE_URL}/api/v1/social/posts/${productId}`;
const postCommentBase = `/comment`;
const getCommentBase = `?_comments=true`;

const commentPostsSection = document.querySelector("#comment-posts-section");
const commentForm = document.querySelector("#comment-form");
const commentText = document.querySelector("#comment-text");
commentForm.addEventListener("submit", formSubmission);

async function commentData(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const fetchPostData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(url, fetchPostData);
    // console.log("response", response);
    const data = await response.json();
    // console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function loadComments(data) {
  try {
    commentPostsSection.innerHTML = "";
    const commentInfo = await commentData(data);
    // console.log("commentInfo", commentInfo);
    Object.values(commentInfo.comments).forEach(function (comment) {
      console.log("comment", comment);
      postComment(comment);
    });
  } catch (error) {
    console.log(error);
  }
}

function postComment(comment) {
  //   let date = new Date(comment.created);
  //   const newCommentDate = date.toLocaleString("en-GB", dateSetup);

  const commentContainer = document.createElement("div");
  const commentBody = document.createElement("h2");
  const commentDate = document.createElement("h3");

  //   commentContainer.className = "list-group col";
  //   commentBody.className = "col-12 px-2";

  commentPostsSection.append(commentContainer);
  commentContainer.append(commentBody);
  commentContainer.append(commentDate);

  commentContainer.querySelector("h2").innerText = `${comment.body}`;
  //   commentContainer.querySelector("h5").innerText = `${newCommentDate}`;
}

loadComments(commentUrl + getCommentBase);

function formSubmission() {
  event.preventDefault();
  try {
    const commentPost = {
      body: commentText.value,
    };

    console.log("CommentPost", commentPost);

    const accessToken = localStorage.getItem("accessToken");

    //Reference: JavaScript Post Request – How to Send an HTTP Post Request in JS  https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/
    fetch(`${commentUrl} + ${postCommentBase}`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(commentPost),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // loadComments(commentUrl + getCommentBase);

    setTimeout(() => {
      loadComments(commentUrl + getCommentBase);
    }, 500);
  } catch (error) {
    console.log(error);
  }
}
