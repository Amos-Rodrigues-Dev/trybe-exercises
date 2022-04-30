type TUser = {
  id: number;
  name: string;
};

interface IUser {
  id: number;
  name: string;
}

type TPayment = {
  method: string;
};

interface IPayment {
  method: string;
}

type TAccount = TUser & TPayment;

interface IAccount extends IUser, IPayment {}
