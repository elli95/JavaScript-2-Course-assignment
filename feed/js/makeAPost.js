import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

const postSubmission = document.querySelector("#post-submission");
const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postTags = document.querySelector("#post-tags");
const postMedia = document.querySelector("#post-media");

postSubmission.addEventListener("submit", formSubmission);

async function formSubmission() {
  event.preventDefault();
  try {
    const post = {
      title: postTitle.value,
      body: postText.value,
      tags: [postTags.value],
      media: postMedia.value,
    };

    const action = "/posts";
    const method = "POST";
    const postUrl = `${API_SOSIAL_URL}${action}`;

    const postInfo = await postData(postUrl, method, post);

    // console.log("User", postInfo);

    window.location.replace("../../../../feed/index.html");
  } catch (error) {
    console.log(error);
  }
}
