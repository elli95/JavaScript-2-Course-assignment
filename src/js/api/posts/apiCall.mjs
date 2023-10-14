import { authToken } from "../tokenFetch.mjs";

const errorMessage = document.querySelector("#error-message");

/**
 * This function calls the api based on the values (postUrl, method, post) it receives.
 * @param {string} postUrl api url
 * @param {string} method method used in api call
 * @param {string} post data that is retrieved
 * @returns {string} returns api data based on input (url, method, data)
 */

async function postData(postUrl, method, post) {
  try {
    // console.log("postUrl", postUrl);
    const response = await authToken(postUrl, {
      method,
      body: JSON.stringify(post),
    });

    const data = await response.json();

    if (!response.ok) {
      errorMessage.innerText = "There was an error: " + data.errors[0].message;
      errorMessage.style.display = "block";
      // window.alert(data.errors[0].message);
      throw new Error(response.status);
    }

    return data;
  } catch (error) {
    event.preventDefault();
    console.log(error);
    errorMessage.innerText = "There was an error: " + error;
    errorMessage.style.display = "block";
    // window.alert(error);
  }
}

export { postData };
