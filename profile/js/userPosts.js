import { dateSetup } from "../../src/js/modules/source.mjs";
import { API_SOSIAL_URL } from "../../src/js/api/constant-api.mjs";
import { postData } from "../../src/js/api/posts/create.mjs";
import { getLocalStorage } from "../../src/js/storage/index.mjs";

const action = "/profiles";
const user = getLocalStorage("profile").name;
const postTrue = "?_posts=true";
const method = "GET";
const profileUrl = `${API_SOSIAL_URL}${action}/${user}${postTrue}`;

async function loadPosts(profileUrl, method, data) {
  try {
    const postInfo = await postData(profileUrl, method, data);
    Object.values(postInfo.posts).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts(profileUrl, method);

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
  const editBtn = document.createElement("a");

  listContainer.className = "list-group col";
  postContainer.className = "list-group-item rounded-3 border border-dark";
  postTitle.className = "col-12 px-2";
  postImg.className = "img-fluid rounded";
  postBody.className = "col-12 px-2";
  postTags.className = "col-12 px-2";
  editBtn.className = "btn btn-success edit-btn";

  editBtn.setAttribute(`ìd`, `${post.id}`);

  userPost.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(postTitle);
  postContainer.append(editBtn);
  postContainer.append(postImg);
  postContainer.append(postBody);
  postContainer.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);

  // listContainer.querySelector("div").href = `/specific-post.html?id=${post.id}`;
  postContainer.querySelector("h2").innerText = `${post.title}`;
  postContainer.querySelector("a").href = `../profile/editPosts.html?id=${post.id}`;
  postContainer.querySelector("a").innerText = `Edit`;
  postContainer.querySelector("h3").innerText = `${post.body}`;
  postContainer.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h5").innerText = `${newPostDate} `;
  if (post.media !== null) {
    postContainer.querySelector("img").src = `${post.media}`;
  } else {
    postContainer.querySelector("img").innerText = "NaN";
  }
}
