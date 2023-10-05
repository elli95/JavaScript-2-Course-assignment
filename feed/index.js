import { API_SOSIAL_URL } from "../src/js/api/constant-api.mjs";
import { postData } from "../src/js/api/posts/create.mjs";
import { postContent } from "../../src/js/modules/source.mjs";

const action = "/posts";
const method = "GET";
const apiUrl = API_SOSIAL_URL + action;

async function loadPosts(apiUrl, method, data) {
  try {
    const postInfo = await postData(apiUrl, method, data);
    Object.values(postInfo).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts(apiUrl, method);

export { loadPosts };
