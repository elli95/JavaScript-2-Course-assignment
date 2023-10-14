import { API_SOSIAL_URL } from "../api/constant-api.mjs";
import { postData } from "../api/posts/apiCall.mjs";
import { resultFeedUpdate } from "../modules/source.mjs";

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", inputContent);

/**
 * The filter/search function that searches through the api call for results that match the search (title)
 */
async function inputContent() {
  try {
    const action = "/posts";
    const method = "GET";
    const postAuthor = "?_author=true";
    const apiUrl = API_SOSIAL_URL + action + postAuthor;

    const postInfo = await postData(apiUrl, method);

    const value = searchInput.value.toLowerCase();

    let result = postInfo.filter((inputText) => inputText.title.toLowerCase().includes(value) || inputText.body.toLowerCase().includes(value));

    resultFeedUpdate(result);
  } catch (error) {
    console.log(error);
  }
}
