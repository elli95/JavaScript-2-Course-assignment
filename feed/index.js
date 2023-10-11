import { API_SOSIAL_URL } from "../src/js/api/constant-api.mjs";
import { postData } from "../src/js/api/posts/create.mjs";
import { postContent } from "../../src/js/modules/source.mjs";
import { getLocalStorage } from "../../src/js/storage/index.mjs";

const action = "/posts";
const method = "GET";
// const apiUrl = API_SOSIAL_URL + action + "?_reactions=true";

const apiUrl = API_SOSIAL_URL + action;
const postAuthor = "?_author=true";

/**
 * Here, all posts are fetched via api and displayed on the feed page
 * @param {string} profileUrl api url
 * @param {string} method method used in api call
 * @param {string} data data that is retrieved
 */
async function loadPosts(apiUrl, method, data) {
  try {
    const postInfo = await postData(apiUrl + postAuthor, method, data);
    Object.values(postInfo).forEach(function (post) {
      postContent(post);
    });

    const likeReaction = document.querySelectorAll(".postLike");
    for (let i = 0; i < likeReaction.length; i++) {
      likeReaction[i].addEventListener("click", react);
    }

    // Work in progress, please ignore
    // const allPostData = postInfo.map((data) => {
    //   return `${data.id}`;
    // });
    // console.log("postInfo", postInfo);
    // console.log("postInfo", allPostData);
    // return allPostData;
  } catch (error) {
    console.log(error);
  }
}
loadPosts(apiUrl, method);

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

    console.log("hello");
  } catch (error) {
    console.log(error);
  }
}

export { loadPosts };
