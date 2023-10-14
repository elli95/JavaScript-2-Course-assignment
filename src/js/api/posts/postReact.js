import { getLocalStorage } from "../../localStorage/index.mjs";
import { API_SOSIAL_URL } from "../constant-api.mjs";

const action = "/posts";
const apiUrl = API_SOSIAL_URL + action;

const errorMessage = document.querySelector("#error-message");

/**
 * This will allow users to react to posts, but this is still under construction/not done.
 */
async function react() {
  try {
    const postId = await this.id;

    const accessToken = getLocalStorage("token");
    // const method = "PUT";
    const reactUrl = `${apiUrl}/${postId}/react/👍`;
    const reactUpdate = {
      symbol: "👍",
      count: 1,
      postId: `${postId}`,
    };

    console.log(reactUrl);

    const postReact = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reactUpdate),
    };
    const response = await fetch(reactUrl, postReact);
    const data = await response.json();
    console.log("comment", data);

    if (!response.ok) {
      errorMessage.innerText = "There was an error: " + data.errors[0].message;
      errorMessage.style.display = "block";
      // window.alert(data.errors[0].message);
      throw new Error(response.status);
    }
  } catch (error) {
    errorMessage.innerText = "There was an error: " + data.errors[0].message;
    errorMessage.style.display = "block";
    console.log(error);
  }
}

export { react };
