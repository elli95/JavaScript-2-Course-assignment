import { postContent } from "../src/js/modules/source.mjs";
import { getLocalStorage } from "../src/js/storage/index.mjs";

const API_BASE_URL = "https://api.noroff.dev";

const profileUrl = `${API_BASE_URL}/api/v1/social/posts`;

async function postData() {
  try {
    const accessToken = getLocalStorage("token");

    const fetchPostData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(profileUrl, fetchPostData);
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
    const postInfo = await postData(data);
    // console.log(postInfo);
    Object.values(postInfo).forEach(function (post) {
      postContent(post);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts();
