export interface IPost {
    id?: number;
    title: string;
    logoImg: string;
    mainImg: string;
    category: string;
    date?: string;
    text: string;
    likes?: number;
    comments?: IComment[];
};

export interface IComment {
    id: number;
    img?: string;
    nick: string;
    date: string;
    text: string;
};

export interface IInitialState {
    postArr: IPost[] | null;
    isLoading: boolean;
};