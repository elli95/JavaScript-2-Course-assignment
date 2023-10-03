const API_BASE_URL = 'https://api.noroff.dev';

const postUrl = `${API_BASE_URL}/api/v1/social/posts`;

// console.log(postUrl);

async function postData(url, data) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    
    const postPostData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postPostData);
    console.log("response", response);
    const json = await response.json();
    console.log("data",json);

    return data;

  } catch (error) {
    console.log(error);
  }
}

// postData(postUrl);


const postSubmission = document.querySelector("#post-submission");
const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postTags = document.querySelector("#post-tags");
const postMedia = document.querySelector("#post-media");

postSubmission.addEventListener("submit", formSubmission);

function formSubmission(){
        event.preventDefault();
    try{
    const post = {
        title: postTitle.value, 
        body: postText.value, 
        tags: [postTags.value], 
        media: postMedia.value
        
        // title: "Test", 
        // body: "Hello again! This is also a test :D", 
        // tags: ["#test"], 
        // media: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
      };
  
      console.log("User", post)
      
      postData(postUrl, post);
    }catch(error){
        console.log(error)
    }
}

// formSubmission();
  
// function test(){}
