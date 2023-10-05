import { postContent } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", inputContent);

async function inputContent() {
  try {
    const action = "/posts";
    const method = "GET";
    const apiUrl = API_SOSIAL_URL + action;

    const postInfo = await postData(apiUrl, method);
    console.log("postInfo", postInfo);

    const value = searchInput.value.toLowerCase();
    console.log("value", value);

    let result = postInfo.filter((inputText) => inputText.title.toLowerCase().includes(value));
    console.log("search", result);

    resultFeedUpdate(result);
  } catch (error) {
    console.log(error);
  }
}

function resultFeedUpdate(result) {
  try {
    console.log("searchresult", result);
    userPost.textContent = "";
    Object.values(result).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}
