export interface IPost {
  id?: number
  title: string
  logoImg?: string
  mainImg?: string
  category: string
  date?: string
  text: string
  likes?: number
  comments?: IComment[]
}

export interface IComment {
  id: number
  authorImg?: string
  author: string
  date: string
  text: string
}

export interface IPostResponse {
  posts: IPost[]
}

export interface IInitialState {
  postArr: IPost[] | null
  isLoading: boolean
}
