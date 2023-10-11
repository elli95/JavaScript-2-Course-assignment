import { getLocalStorage } from "../storage/index.mjs";

/**
 * This gets the headers used in a api call
 * @returns {string} content type and authorization code
 */

function apiHeaders() {
  const accessToken = getLocalStorage("token");
  // console.log("accessToken", accessToken);

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

/**
 * This is part of a api call to fetch api data
 * @param {string} url api url
 * @param {string} options options such as method and data
 * @returns {string} returnes api redult based on what values it receives
 */

async function authToken(url, options) {
  return fetch(url, {
    ...options,
    headers: apiHeaders(),
  });
}

export { apiHeaders, authToken };
