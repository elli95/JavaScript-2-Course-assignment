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
  const postContainer = document.createElement("div");
  const postLink = document.createElement("a");
  const postTitle = document.createElement("h2");
  const postImg = document.createElement("img");
  const postBody = document.createElement("h3");
  const postTags = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const postDate = document.createElement("h4");
  const postLike = document.createElement("h5");

  listContainer.className = "list-group col";
  postContainer.className = "list-group-item rounded-3 border border-dark h-100 min-width post-margin";
  postLink.className = "text-reset text-decoration-none";
  postTitle.className = "col-12 px-2";
  postImg.className = "img-fluid rounded";
  postBody.className = "col-12 px-2 text-break";
  postTags.className = "col-12 px-2";
  postLike.className = "postLike";

  postLike.setAttribute(`id`, `${post.id}`);

  userPost.append(listContainer);
  listContainer.append(postContainer);
  postContainer.append(postLink);
  postLink.append(postTitle);
  postLink.append(postImg);
  postLink.append(postBody);
  postLink.append(postTags);
  postContainer.append(dateContainer);
  dateContainer.append(postDate);
  dateContainer.append(postLike);

  listContainer.querySelector("a").href = `/feed/specific-post.html?id=${post.id}`;
  postContainer.querySelector("h2").innerText = `${post.title}`;
  postContainer.querySelector("h3").innerText = `${post.body}`;
  postContainer.querySelector("h4").innerText = `${post.tags}`;
  dateContainer.querySelector("h4").innerText = `${newPostDate},  `;
  dateContainer.querySelector("h5").innerText += `${post._count.reactions}`;
  // dateContainer.querySelector("h5").innerText += `${post.reactions[0].symbol}${post.reactions[0].count}`;
  if (post.media !== null) {
    postContainer.querySelector("img").src = `${post.media}`;
  } else {
    postContainer.querySelector("img").innerText = "NaN";
  }
}

export { dateSetup, postContent };
