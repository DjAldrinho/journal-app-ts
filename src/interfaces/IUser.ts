interface IUser {
    uid?: string;
    displayName?: string;
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
}

export default IUser;
