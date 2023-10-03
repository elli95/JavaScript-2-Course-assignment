import { postContent } from "../../src/js/modules/source.mjs";
const API_BASE_URL = "https://api.noroff.dev";

// const profileUrl = `${API_BASE_URL}/api/v1/social/posts?_tag=SciFi&_active=true`;
const profileUrl = `${API_BASE_URL}/api/v1/social/posts`;

// console.log(profileUrl);

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
    // console.log("data",data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

// postData(profileUrl);

// // Reference: Date.prototype.toLocaleString()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// const dateSetup = {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
// };

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", inputContent);

async function inputContent() {
  console.log(searchInput.value);
  try {
    const postInfo = await postData(profileUrl);
    // console.log("postInfo",postInfo);

    const value = searchInput.value.toLowerCase();
    // console.log("value",value);

    let result = postInfo.filter((inputText) => inputText.title.toLowerCase().includes(value));
    // console.log("search",result);

    resultFeedUpdate(result);
  } catch (error) {
    console.log(error);
  }
}

const userPost = document.getElementById("userPost");

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

// function postContent(post){
//   let datedate =  new Date(post.updated);
//   const newPostDate = datedate.toLocaleString("en-GB", dateSetup);
//   // console.log("postDate", newPostDate);

//   const listContainer = document.createElement("li");
//   const postContainer = document.createElement("div");
//   const postTitle = document.createElement("h2");
//   const postImg = document.createElement("img");
//   const postBody = document.createElement("h3");
//   const postTags = document.createElement("h4");
//   const dateContainer = document.createElement("div");
//   const postDate = document.createElement("h5");

//   listContainer.className = "list-group col";
//   postContainer.className = "list-group-item rounded-3 border border-dark";
//   postTitle.className = "col-12 px-2";
//   postImg.className = "img-fluid rounded";
//   postBody.className = "col-12 px-2";
//   postTags.className = "col-12 px-2";

//   userPost.append(listContainer);
//   listContainer.append(postContainer);
//   postContainer.append(postTitle);
//   postContainer.append(postImg);
//   postContainer.append(postBody);
//   postContainer.append(postTags);
//   postContainer.append(dateContainer);
//   dateContainer.append(postDate);

//   postContainer.querySelector("h2").innerText = `${post.title}`;
//   postContainer.querySelector("img").src = `${post.media}`;
//   postContainer.querySelector("h3").innerText = `${post.body}`;
//   postContainer.querySelector("h4").innerText = `${post.tags}`;
//   dateContainer.querySelector("h5").innerText = `${newPostDate}`;
// }
