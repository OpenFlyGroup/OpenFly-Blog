'use client'
import React, { useEffect } from 'react'
import Post from '@/components/ui/News/Post/Post'
import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
import { MenuItem } from 'primereact/menuitem'
// * Import for fetching data from backend without posts store
// import { NewsService } from '@/services/news/news.service'
import { useActions } from '@/hooks/useActions'
import { usePosts } from '@/hooks/usePosts'
import SkeletedPost from '@/components/ui/News/SkeletedPost/SkeletedPost'

// ? =========================== For midfinup
// TODO create separated AutoSearchForm component at components/ui/Form
// ? ===========================

const NewsPage: React.FC = () => {
  const crumbs: MenuItem[] = [
    {
      label: 'news',
      url: 'news',
    },
  ]
  // ! Fetching posts with posts store
  const { fetchAllPosts } = useActions()
  const { posts, status } = usePosts()
  useEffect(() => {
    fetchAllPosts({})
  }, [])
  // ! Only for local testing without backend
  // const allPosts: IPost[] = [
  //   {
  //     id: 0,
  //     title: 'string',
  //     logoImg: '/string',
  //     mainImg: '/string',
  //     category: 'string',
  //     date: 'string',
  //     text: 'string',
  //     likes: 0,
  //   },
  //   {
  //     id: 1,
  //     title: 'string',
  //     logoImg: '/string',
  //     mainImg: '/string',
  //     category: 'string',
  //     date: 'string',
  //     text: 'string',
  //     likes: 0,
  //   },
  // ]
  // ? const [searchQuery, setSearchQuery] = useState<string>('')
  // ! Add allPosts here if you are gonna test page without
  // ? const [filteredPosts, setFilteredPosts] = useState<IPost[]>(/* HERE */)
  // *Funcs for fetching data from backend without posts store
  // const fetch = async () => {
  //   const response = await NewsService.getAll()
  //   return response.data
  // }

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const allPosts = await fetch()
  //     if (searchQuery) {
  //       const filtered = allPosts.filter(
  //         (post) =>
  //           post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //           post.text.toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //       setFilteredPosts(filtered)
  //     } else {
  //       setFilteredPosts(allPosts)
  //     }
  //   }

  //   fetchPosts()
  // }, [searchQuery])

  return (
    <Container>
      <div className='w-full flex flex-col gap-6'>
        <Crumbs items={crumbs} />
        {/* <div className='mx-auto'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search'
            style={{ padding: '10px', marginRight: '10px', width: '300px' }}
          />
          <button
            onClick={() => setSearchQuery(searchQuery)}
            style={{ padding: '10px' }}
          >
            Поиск
          </button>
        </div> */}
        {status !== 'succeeded' && (
          <>
            <SkeletedPost />
            <SkeletedPost />
          </>
        )}
        {posts.map((post) => (
          <Post key={post.id} props={post} />
        ))}
      </div>
    </Container>
  )
}

export default NewsPage
