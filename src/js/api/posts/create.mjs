import { authToken } from "../tokenFetch.mjs";

async function postData(postUrl, method, post) {
  try {
    console.log("postUrl", postUrl);
    const response = await authToken(postUrl, {
      method,
      body: JSON.stringify(post),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export { postData };
