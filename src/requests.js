// // urls
const baseUrl = "http://localhost:3000";
const topicsUrl = `${baseUrl}/topics/`;
const authUrl = `${baseUrl}/login`;
const likesUrl = `${baseUrl}/likes`;
const dislikesUrl = `${baseUrl}/dislikes`;

// headers --> use these at your own discretion
const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
};

const headersAuth = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

// second arg for fetch
// simple get
const getRequest = { method: "GET", headers: headersAuth };

// parse incoming data
const parseData = (response) => response.json();
// error handler
const catchError = (error) => console.log(`%c${error}`, "color: red;");

// fetchs all topics with associated comments
// uses token in local storage for auth
// return promise
export const fetchTopics = () =>
  fetch(topicsUrl, getRequest).then(parseData).catch(catchError);

export const fetchLikes = () =>
  fetch(likesUrl, getRequest).then(parseData).catch(catchError);

export const fetchDisLikes = () =>
  fetch(dislikesUrl, getRequest).then(parseData).catch(catchError);
// login user
// return promise with token
export const loginUser = (arg) =>
  fetch(authUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user: arg }),
  })
    .then(parseData)
    .catch(catchError);


export const newLike = (arg1, arg2, arg3) =>
  fetch(likesUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: arg1,  topic_id: arg2, group_id: arg3}),
  })
    .then(parseData)
    .catch(catchError);

export const newDisLike = (arg1, arg2, arg3) =>
  fetch(dislikesUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: arg1,  topic_id: arg2, group_id: arg3}),
  })
    .then(parseData)
    .catch(catchError);
