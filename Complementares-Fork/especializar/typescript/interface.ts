interface User {
  id: number;
  name: string;
}

let newUser: User = {
  name: 'Amos',
  id: 1,
};

function registerNewUser(newUser: User) {
  return newUser;
}

registerNewUser(newUser);
