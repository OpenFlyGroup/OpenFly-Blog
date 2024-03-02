'use client'
import Post from '@/components/ui/News/Post/Post'
import { useActions } from '@/hooks/useActions'

const NewsPage: React.FC = () => {
  const { fetchAllPosts } = useActions()
  const posts = fetchAllPosts({})
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} props={post} />
      ))}
      {posts.map((post) => (
        <Post key={post.id} props={post} />
      ))}
    </>
  );
};

export default NewsPage
