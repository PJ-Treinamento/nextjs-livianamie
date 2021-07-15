/* eslint-disable camelcase */
export type IPius = {
    pius: IPiu[];
};
export type IPiu = {
    id: string;
    user: IUser;
    likes: IPiuLike[];
    text: string;
    created_at: Date;
    updated_at: Date;
};

export type IPiuLike = {
    id: string;
    user: IUser;
    piu: IPiu;
};

export type IUser = {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    photo: string;
    pius: IPiu[];
    likes: IPiuLike[];
    following: IUser[];
    followers: IUser[];
    favorites: IPiu[];
};
