type User = {
  id: number;
  name: string;
};

type Char = {
  nickName: string;
  level: number;
};

type PlayerInfo = User & Char;

let info: PlayerInfo = {
  id: 1,
  name: 'Amós',
  nickName: 'jordas',
  level: 5,
};
