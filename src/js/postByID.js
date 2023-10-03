import { API_BASE_URL } from "../../src/js/api/constant-api.mjs";
import { dateSetup } from "../../src/js/modules/source.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

// const API_BASE_URL = "https://api.noroff.dev";

const profileUrl = `${API_BASE_URL}/api/v1/social/posts/${productId}`;

async function postData(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const fetchPostData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(url, fetchPostData);
    // console.log("response", response);
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

// postData(profileUrl);

// document.title = `Thought Alert | ${data.title}`;

const container = document.querySelector("#post-container");

async function loadPosts(data) {
  try {
    const postInfo = await postData(data);
    postContent(postInfo);
  } catch (error) {
    console.log(error);
  }
}

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

loadPosts(profileUrl);
// dasdasdsa.js kan skrives som ssdnpsdfjs.mjs (modul)
