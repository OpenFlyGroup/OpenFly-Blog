export interface IPost {
    id: number;
    title: string;
    logoImg: string;
    mainImg: string;
    category: string;
    date: string;
    text: string;
    likes: number;
    comments: ICommentsProps[];
}

export interface IPostProps {
    props: IPost;
}

export interface ICommentsProps {
    id: number;
    img?: string;
    nick: string;
    date: string;
    text: string;
}