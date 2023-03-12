export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  "id": string
  "name": string,
  "email": string,

}

export interface IRegisterFormValue {
  "name": string,
  "email": string,
  "password": string,
  "confirmationPassword": string,
}

export interface ILoginFormValue {
  "email": string,
  "password": string,
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  registerUser: (dataRegister: IRegisterFormValue) => Promise<void>;
  userLogin: (dataLogin: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
}