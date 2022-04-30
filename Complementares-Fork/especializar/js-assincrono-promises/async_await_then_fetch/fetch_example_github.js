const fetch = require('node-fetch');
const GITHUB_API = 'https://api.github.com/users/';

const getInfoUserGitHub = (user) => {
  fetch(`${GITHUB_API}${user}`).then((response) =>
    response
      .json()
      .then((data) => fetch(data.repos_url))
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((err) => console.log(err)),
  );
};

getInfoUserGitHub('amos-rodrigues-dev');

// export default getInfoUserGitHub;
