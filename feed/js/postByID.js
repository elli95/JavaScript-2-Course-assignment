import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const action = "/posts";
const method = "GET";
const postIdUrl = `${API_SOSIAL_URL}${action}/${productId}`;

async function loadPosts(postIdUrl, method, data) {
  try {
    const postInfo = await postData(postIdUrl, method, data);
    postContent(postInfo);
  } catch (error) {
    console.log(error);
  }
}

loadPosts(postIdUrl, method);

const container = document.querySelector("#post-container");

function postContent(post) {
  let datedate = new Date(post.updated);
  const newPostDate = datedate.toLocaleString("en-GB", dateSetup);

  const listContainer = document.createElement("li");
  const postContainer = document.createElement("div");
  const postTitle = document.createElement("h2");
  const postImg = document.createElement("img");
  const postBody = document.createElement("h3");
  const postTags = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const postDate = document.createElement("h5");

  listContainer.className = "list-group col";
  postContainer.className = "list-group-item rounded-3 border border-dark";
  postTitle.className = "col-12 px-2";
  postImg.className = "img-fluid rounded";
  postBody.className = "col-12 px-2";
  postTags.className = "col-12 px-2";

  container.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(postTitle);
  postContainer.append(postImg);
  postContainer.append(postBody);
  postContainer.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);

  postContainer.querySelector("h2").innerText = `${post.title}`;
  postContainer.querySelector("img").src = `${post.media}`;
  postContainer.querySelector("h3").innerText = `${post.body}`;
  postContainer.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h5").innerText = `${newPostDate} ${post._count.reactions}`;
}
