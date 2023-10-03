import { dateSetup } from "../../src/js/modules/source.mjs";

const API_BASE_URL = "https://api.noroff.dev";

const profileUrl = `${API_BASE_URL}/api/v1/social/profiles/Elli?_posts=true`;

console.log(profileUrl);

async function profileInfo(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const profileData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(url, profileData);
    // console.log("response", response);
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function loadPosts(data) {
  try {
    const postInfo = await profileInfo(data);
    // console.log(postInfo);
    Object.values(postInfo.posts).forEach(function (post) {
      postContent(post);
    });

    const editBtn = document.querySelectorAll(".edit-btn");
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", editPost);
    }
  } catch (error) {
    console.log(error);
  }
}

loadPosts(profileUrl);

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

  listContainer.querySelector("div").href = `/specific-post.html?id=${post.id}`;
  postContainer.querySelector("h2").innerText = `${post.title}`;
  postContainer.querySelector("a").href = `/specific-post.html?id=${post.id}`;
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

const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", deletePost);

function editPost() {
  try {
    const thisPost = this.attributes[1].value;
    console.log("helllllo", thisPost);
    document.getElementById("edit-post-form").style.display = "block";
    // console.log("helllllo", deletePostBase);
    return thisPost;
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(thisPost) {
  const urlId = await editPost(thisPost);
  const deletePostBase = `/social/posts/${urlId}`;
  console.log("NOOOO! Dont delete me :C", deletePostBase);
}
