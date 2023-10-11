import { authToken } from "../tokenFetch.mjs";

/**
 *
 * @param {string} postUrl api url
 * @param {string} method method used in api call
 * @param {string} post data that is retrieved
 * @returns {string} returns api data based on input (url, method, data)
 */

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
