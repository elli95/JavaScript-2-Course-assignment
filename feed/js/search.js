import { postContent } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

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
    // console.log("postInfo", postInfo);

    const value = searchInput.value.toLowerCase();
    // console.log("value", value);

    let result = postInfo.filter((inputText) => inputText.title.toLowerCase().includes(value));
    // let result = postInfo.filter((inputText) => inputText.tags[0].toLowerCase().includes(value));
    // let result = postInfo.filter((inputText) => inputText.title.toLowerCase().includes(value) || inputText.body.toLowerCase().includes(value));
    // console.log("search", result);

    resultFeedUpdate(result);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Displays the result of the above filter/search function
 * @param {string} result The result of the filter/search function above
 */
function resultFeedUpdate(result) {
  try {
    // console.log("searchresult", result);
    userPost.textContent = "";
    Object.values(result).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}
