import { API_SOSIAL_URL } from "../../constant-api.mjs";
import { getLocalStorage } from "../../../localStorage/index.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const postIdUrl = `${API_SOSIAL_URL}${action}/${productId}?_author=true`;

const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postTags = document.querySelector("#post-tags");
const postMedia = document.querySelector("#post-media");
const errorMessage = document.querySelector("#error-message");

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

    if (!response.ok) {
      errorMessage.innerText = "There was an error: " + data.errors[0].message;
      errorMessage.style.display = "block";
      throw new Error(response.status);
    }
    window.location.replace("../../../../profile/index.html");
  } catch (error) {
    console.log(error);
  }
}
