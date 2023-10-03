const API_BASE_URL = "https://api.noroff.dev";

const profileUrl = `${API_BASE_URL}/api/v1/social/profiles/Elli`;

// console.log(profileUrl);

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
    // console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

// profileInfo(profileUrl);

const userinfo = document.getElementById("userInfo");

async function loadProfile(data) {
  try {
    const userData = await profileInfo(data);
    // userName.innerText = "";
    userinfo.innerText += `${userData.avatar}`;
    userinfo.innerText += `${userData.name}`;
  } catch (error) {
    console.log(error);
  }
}

loadProfile(profileUrl);
