import Post from '@/components/ui/News/Post/Post'
import { IPost } from '@/types/ui/News/news.interface'

const NewsPage: React.FC = () => {
  const posts: IPost[] = [
    {
      id: 0,
      title: 'Project_Zero',
      logoImg: '/logo.svg',
      mainImg: 'https://plus.unsplash.com/premium_photo-1664439520373-c832fe4c3186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      category: 'game',
      date: '17.02.2024',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, mollitia perspiciatis laboriosam iusto eveniet nam? Cupiditate et minima sint similique laborum, ex voluptate, facilis aliquam ea facere expedita perspiciatis sequi!',
      likes: 23,
      comments: [
        {
            id: 0,
            nick: "Wonder",
            img: "https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg",
            date: "2015-12-23",
            text: "lorem ipsum dolor sit amet, consectetur adip",
        },
        {
            id: 1,
            nick: "Wonder",
            img: "https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg",
            date: "2015-12-23",
            text: "lorem ipsum dolor sit amet, consectetur adip",
        },
      ],
    },
    {
      id: 1,
      title: 'Project_Zero',
      logoImg: '/logo.svg',
      mainImg: 'https://plus.unsplash.com/premium_photo-1664439520373-c832fe4c3186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      category: 'game',
      date: '17.02.2024',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, mollitia perspiciatis laboriosam iusto eveniet nam? Cupiditate et minima sint similique laborum, ex voluptate, facilis aliquam ea facere expedita perspiciatis sequi!',
      likes: 33,
      comments: [
        {
            id: 0,
            nick: "Wonder",
            img: "https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg",
            date: "2015-12-23",
            text: "lorem ipsum dolor sit amet, consectetur adip",
        },
        {
            id: 1,
            nick: "Wonder",
            img: "https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg",
            date: "2015-12-23",
            text: "lorem ipsum dolor sit amet, consectetur adip",
        },
        {
            id: 2,
            nick: "WOW",
            img: "https://images.generated.photos/qI5uM1dlPhWuZfuUOvcIt7cWP0BrcyA_3RAXpw2EJ5k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc4Mjk0LmpwZw.jpg",
            date: "2015-12-23",
            text: "lorem ipsum dolor sit amet, consectetur adip",
        },
      ],
    },
  ]
  return (
    <>
    {posts.map(post => (
      <Post key={post.id} props={post}/>
    ))}
    </>
  )
}

export default NewsPage;