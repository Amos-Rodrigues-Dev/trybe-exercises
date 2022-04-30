const url = 'http://localhost:5500/api';

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      const data = response.data;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userID.textContent = data.id;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.log(error));
}

function updateUser(newUser, id) {
  axios
    .put(`${url}/${id}`, newUser)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

const newUser = {
  name: 'Amós dos Santos Rodrigues',
  avatar: 'https://picsum.photos/200/300',
  city: 'Governador Valadares',
};

// addNewUser(newUser);

// updateUser(newUser, 2);

deleteUser(2);

getUser(1);

// getUsers();
