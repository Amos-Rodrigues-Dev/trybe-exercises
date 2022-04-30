const axios = require('axios');
const URL_GITHUB = 'https://api.github.com/users/amos-rodrigues-dev';

async function fetchRepos() {
  try {
    const user = await axios.get(URL_GITHUB);
    const repos = await axios.get(user.data.repos_url);
    console.log(repos.data);
  } catch (error) {
    console.log(error.message);
  }
}

// fetchRepos();

// axios
//   .get(URL_GITHUB)
//   .then((response = axios.get(response.data.repos_url)))
//   .then((repos) => console.log(repos.data))
//   .catch((error) => console.log(error));

Promise.all([axios.get(URL_GITHUB), axios.get(`${URL_GITHUB}/repos`)])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((err) => console.log(err.message));
