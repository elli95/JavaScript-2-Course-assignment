import { loadPosts } from "../index.js";
import { getLocalStorage } from "../../src/js/storage/index.mjs";
const API_BASE_URL = "https://api.noroff.dev";

const postUrl = `${API_BASE_URL}/api/v1/social/posts`;

// console.log(postUrl);

async function postData(url, data) {
  try {
    const accessToken = getLocalStorage("token");
    console.log("accessToken", accessToken);
    const postPostData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postPostData);
    console.log("response", response);
    const json = await response.json();
    console.log("data", json);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const postSubmission = document.querySelector("#post-submission");
const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postTags = document.querySelector("#post-tags");
const postMedia = document.querySelector("#post-media");

postSubmission.addEventListener("submit", formSubmission);

function formSubmission() {
  event.preventDefault();
  try {
    const post = {
      title: postTitle.value,
      body: postText.value,
      tags: [postTags.value],
      media: postMedia.value,
    };

    console.log("User", post);

    postData(postUrl, post);
  } catch (error) {
    console.log(error);
  }
}
