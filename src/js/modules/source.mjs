// Reference: Date.prototype.toLocaleString()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
const dateSetup = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

// const userPost = document.getElementById("userPost");

function postContent(post) {
  let datedate = new Date(post.updated);
  const newPostDate = datedate.toLocaleString("en-GB", dateSetup);

  const listContainer = document.createElement("li");
  const postContainer = document.createElement("a");
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

  userPost.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(postTitle);
  postContainer.append(postImg);
  postContainer.append(postBody);
  postContainer.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);

  listContainer.querySelector("a").href = `/specific-post.html?id=${post.id}`;
  postContainer.querySelector("h2").innerText = `${post.title}`;
  postContainer.querySelector("h3").innerText = `${post.body}`;
  postContainer.querySelector("h4").innerText = `${post.tags}`;
  // dateContainer.querySelector("h5").innerText = `${newPostDate} ${post._count.reactions}`;
  dateContainer.querySelector("h5").innerText = `${newPostDate} `;
  if (post.media !== null) {
    postContainer.querySelector("img").src = `${post.media}`;
  } else {
    postContainer.querySelector("img").innerText = "NaN";
  }
}

export { dateSetup, postContent };
