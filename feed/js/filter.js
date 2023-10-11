import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";
import { postContent } from "../../src/js/modules/source.mjs";

const popularPosts = document.querySelector("#popular-posts");
const newPosts = document.querySelector("#new-posts");
const oldPosts = document.querySelector("#old-posts");
popularPosts.addEventListener("click", popularFilter);
newPosts.addEventListener("click", newPostFilter);
oldPosts.addEventListener("click", oldPostFilter);

const action = "/posts";
const method = "GET";
const postAuthor = "?_author=true";
const postUrl = `${API_SOSIAL_URL}${action}${postAuthor}`;

/**
 * This feature allows you to sort the feed based on popularity
 */
async function popularFilter() {
  try {
    const postInfo = await postData(postUrl, method);
    const filterPosts = postInfo.sort((a, b) => b._count.reactions - a._count.reactions);
    resultFeedUpdate(filterPosts);
  } catch (error) {
    console.log(error);
  }
}

/**
 * This feature allows you to sort the feed based on age(new)
 */
async function newPostFilter() {
  try {
    const postInfo = await postData(postUrl);
    const newPostDate = postInfo.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    resultFeedUpdate(newPostDate);
  } catch (error) {
    console.log(error);
  }
}

/**
 * This feature allows you to sort the feed based on age(old)
 */
async function oldPostFilter() {
  try {
    const postInfo = await postData(postUrl);
    const oldPostDate = postInfo.sort((a, b) => new Date(a.updated) - new Date(b.updated));
    resultFeedUpdate(oldPostDate);
  } catch (error) {
    console.log(error);
  }
}

/**
 * This function shows the result in the feed page
 * @param {string} filterPosts The result of the sort (popular/new/old) from one of the other functions
 */
function resultFeedUpdate(filterPosts) {
  try {
    userPost.textContent = "";
    Object.values(filterPosts).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}
