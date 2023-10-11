const dateSetup = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

// const userPost = document.getElementById("userPost");

/**
 * This will display the api post data on the html page
 * @param {string} post This is the api result for feed posts
 */

function postContent(post) {
  let datedate = new Date(post.updated);
  const newPostDate = datedate.toLocaleString("en-GB", dateSetup);

  const listContainer = document.createElement("li");
  const postContainer = document.createElement("div");
  const authorContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const postAuthor = document.createElement("h2");
  const postLink = document.createElement("a");
  const postTitle = document.createElement("h2");
  const postImg = document.createElement("img");
  const postBody = document.createElement("h3");
  const postTags = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const postDate = document.createElement("h4");
  const postLike = document.createElement("h5");

  listContainer.className = "list-group col";
  postContainer.className = "list-group-item d-flex flex-column justify-content-between rounded-3 border border-dark h-100 min-width post-margin";
  authorContainer.className = "d-flex flex-row border-bottom border-black";
  authorImg.className = "img-fluid rounded profile-avatar";
  postAuthor.className = "align-self-center";
  postLink.className = "text-reset text-decoration-none d-grid";
  postTitle.className = "col-12 px-2 text-center";
  postImg.className = "img-fluid rounded post-img";
  postBody.className = "col-12 px-2 text-break text-center";
  postTags.className = "col-12 px-2 text-center";
  dateContainer.className = "d-flex flex-row-reverse justify-content-between pt-3";
  postLike.className = "postLike";

  postLike.setAttribute(`id`, `${post.id}`);

  userPost.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(authorContainer);
  authorContainer.append(authorImg);
  authorContainer.append(postAuthor);
  postContainer.append(postLink);
  postLink.append(postTitle);
  postLink.append(postImg);
  postLink.append(postBody);
  postLink.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);
  dateContainer.append(postLike);

  listContainer.querySelector("a").href = `/feed/specific-post.html?id=${post.id}`;
  authorContainer.querySelector("img").src = `${post.author.avatar}`;
  authorContainer.querySelector("h2").innerText = `${post.author.name}`;
  postLink.querySelector("h2").innerText = `${post.title}`;
  postLink.querySelector("h3").innerText = `${post.body}`;
  postLink.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h4").innerText = `${newPostDate}`;
  dateContainer.querySelector("h5").innerText += `${post._count.reactions}👍`;
  // dateContainer.querySelector("h5").innerText += `${post.reactions[0].symbol}${post.reactions[0].count}`;
  if (post.media !== null) {
    postLink.querySelector("img").src = `${post.media}`;
  } else {
    postLink.querySelector("img").innerText = "NaN";
  }
  if (post.author.avatar === null || post.author.avatar === "") {
    authorContainer.querySelector("img").src = `../../../images/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg`;
  }
}

/**
 * This will display the api post data on the html page
 * @param {string} post This is the api result based on the id of one post
 */

function postContentID(post) {
  let datedate = new Date(post.updated);
  const newPostDate = datedate.toLocaleString("en-GB", dateSetup);

  const postContainer = document.createElement("div");
  const authorContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const postAuthor = document.createElement("h2");
  const postLink = document.createElement("div");
  const postTitle = document.createElement("h2");
  const postImg = document.createElement("img");
  const postBody = document.createElement("h3");
  const postTags = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const postDate = document.createElement("h4");
  const postLike = document.createElement("h5");

  postContainer.className = "card d-flex flex-column justify-content-between rounded-3 border border-dark h-100 min-width post-margin p-3 p-sm-5";
  authorContainer.className = "d-flex flex-row border-bottom border-black";
  authorImg.className = "img-fluid rounded profile-avatar";
  postAuthor.className = "align-self-center";
  postLink.className = "text-reset text-decoration-none d-grid";
  postTitle.className = "col-12 px-2 text-center";
  postImg.className = "img-fluid rounded post-img-id";
  postBody.className = "col-12 px-2 text-break";
  postTags.className = "col-12 px-2";
  dateContainer.className = "d-flex flex-row-reverse justify-content-between pt-3";
  postLike.className = "postLike";

  postLike.setAttribute(`id`, `${post.id}`);

  userPost.append(postContainer);
  postContainer.append(authorContainer);
  authorContainer.append(authorImg);
  authorContainer.append(postAuthor);
  postContainer.append(postLink);
  postLink.append(postTitle);
  postLink.append(postImg);
  postLink.append(postBody);
  postLink.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);
  dateContainer.append(postLike);

  authorContainer.querySelector("img").src = `${post.author.avatar}`;
  authorContainer.querySelector("h2").innerText = `${post.author.name}`;
  postLink.querySelector("h2").innerText = `${post.title}`;
  postLink.querySelector("h3").innerText = `${post.body}`;
  postLink.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h4").innerText = `${newPostDate}`;
  dateContainer.querySelector("h5").innerText += `${post._count.reactions}👍`;
  // dateContainer.querySelector("h5").innerText += `${post.reactions[0].symbol}${post.reactions[0].count}`;
  if (post.media !== null) {
    postLink.querySelector("img").src = `${post.media}`;
  } else {
    postLink.querySelector("img").innerText = "NaN";
  }
  if (post.author.avatar === null || post.author.avatar === "") {
    authorContainer.querySelector("img").src = `../../../images/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg`;
  }
}

/**
 * This will display the api post data on the html page
 * @param {string} post This is the api result of a users own posts
 */

function userPostsContent(post) {
  let datedate = new Date(post.updated);
  const newPostDate = datedate.toLocaleString("en-GB", dateSetup);

  const listContainer = document.createElement("li");
  const postContainer = document.createElement("div");
  const editBtnContainer = document.createElement("div");
  const editBtn = document.createElement("a");
  const postData = document.createElement("div");
  const postLink = document.createElement("a");
  const postTitle = document.createElement("h2");
  const postImg = document.createElement("img");
  const postBody = document.createElement("h3");
  const postTags = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const postDate = document.createElement("h4");
  const postLike = document.createElement("h5");

  listContainer.className = "list-group col";
  postContainer.className = "list-group-item d-flex flex-column justify-content-between rounded-3 border border-dark h-100 min-width post-margin";
  postLink.className = "text-reset text-decoration-none d-grid";
  postTitle.className = "col-12 px-2 text-center";
  postImg.className = "img-fluid rounded post-img";
  postBody.className = "col-12 px-2 text-break text-center";
  postTags.className = "col-12 px-2 text-center";
  dateContainer.className = "d-flex flex-row-reverse justify-content-between pt-3";
  // postLike.className = "postLike";
  editBtn.className = "btn btn-success edit-btn";

  editBtn.setAttribute(`ìd`, `${post.id}`);

  postLike.setAttribute(`id`, `${post.id}`);

  userPost.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(editBtnContainer);
  postContainer.append(postData);
  postContainer.append(postLink);
  postContainer.append(dateContainer);
  // editBtnContainer.append(postLink);
  editBtnContainer.append(editBtn);
  postData.append(postLink);
  postLink.append(postTitle);
  postLink.append(postImg);
  postLink.append(postBody);
  postLink.append(postTags);
  dateContainer.append(postDate);
  dateContainer.append(postLike);

  editBtnContainer.querySelector("a").href = `/profile/editPosts.html?id=${post.id}`;
  editBtnContainer.querySelector("a").innerText = `Edit`;
  postData.querySelector("a").href = `/feed/specific-post.html?id=${post.id}`;
  postLink.querySelector("h2").innerText = `${post.title}`;
  postLink.querySelector("h3").innerText = `${post.body}`;
  postLink.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h4").innerText = `${newPostDate}`;
  // dateContainer.querySelector("h5").innerText += `${post._count.reactions}👍`;
  // dateContainer.querySelector("h5").innerText += `${post.reactions[0].symbol}${post.reactions[0].count}`;
  if (post.media !== null) {
    postLink.querySelector("img").src = `${post.media}`;
  } else {
    postLink.querySelector("img").innerText = "NaN";
  }
}

/**
 * This will display the api profile data on the html page
 * @param {string} post This is the api result of a users profile data
 */

function profileContent(userData) {
  const userinfo = document.getElementById("userInfo");
  console.log("dd", userData);
  const profileContainer = document.createElement("div");
  const bannerContainer = document.createElement("div");
  const avatarNameContainer = document.createElement("div");
  const profileBanner = document.createElement("img");
  const profileAvatar = document.createElement("img");
  const profileUser = document.createElement("h1");

  profileContainer.className = "d-grid";
  profileBanner.className = "img-fluid rounded post-img position-absolute z-5 w-75 banner-img";
  avatarNameContainer.className = "position-relative z-1";
  profileAvatar.className = "img-fluid rounded post-img m-3";
  bannerContainer.className = "d-grid";
  profileUser.className = "text-center";

  userinfo.append(profileContainer);
  profileContainer.append(bannerContainer);
  profileContainer.append(avatarNameContainer);
  bannerContainer.append(profileBanner);
  avatarNameContainer.append(profileAvatar);
  avatarNameContainer.append(profileUser);

  bannerContainer.querySelector("img").src = `${userData.banner}`;
  avatarNameContainer.querySelector("img").src = `${userData.avatar}`;
  avatarNameContainer.querySelector("h1").innerText = `${userData.name}`;
}

export { dateSetup, postContent, postContentID, userPostsContent, profileContent };
