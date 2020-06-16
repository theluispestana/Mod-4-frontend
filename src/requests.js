// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const baseUrl = "http://localhost:3000";
const topicsUrl = `${baseUrl}/topics/`;

// parse incoming data
const parseData = (response) => response.json();
// error handler
const catchError = (error) => console.log(`%c${error}`, "color: red;");

// fetchs all topics with associated comments
// return promise
export const fetchTopics = () =>
  fetch(topicsUrl).then(parseData).catch(catchError);
