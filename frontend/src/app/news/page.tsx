'use client'
import React, { useState, useEffect } from 'react'
import Post from '@/components/ui/News/Post/Post'
import { IPost } from '@/store/post/post.interface'
import { NewsService } from '@/services/news/news.service'
// import { useActions } from '@/hooks/useActions'
// import { usePosts } from '@/hooks/usePosts'

const NewsPage: React.FC = () => {
  // const { fetchAllPosts } = useActions()
  // const { posts } = usePosts()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
  const fetch = async () => {
    const response = await NewsService.getAll()
    return response.data
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await fetch()
      if (searchQuery) {
        const filtered = allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredPosts(filtered)
      } else {
        setFilteredPosts(allPosts)
      }
    }

    fetchPosts()
  }, [searchQuery])

  // const allPosts: IPost[] = [
  //   {
  //     id: 0,
  //     title: 'string',
  //     logoImg: 'string',
  //     mainImg: 'string',
  //     category: 'string',
  //     date: 'string',
  //     text: 'string',
  //     likes: 0,
  //   },
  //   {
  //     id: 1,
  //     title: 'string',
  //     logoImg: 'string',
  //     mainImg: 'string',
  //     category: 'string',
  //     date: 'string',
  //     text: 'string',
  //     likes: 0,
  //   },
  // ]

  // useEffect(() => {
  //   // fetchAllPosts({})
  //   if (searchQuery) {
  //     const filtered = data.posts.filter(
  //       (post: IPost) =>
  //         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         post.text.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //     setFilteredPosts(filtered)
  //   } else {
  //     setFilteredPosts(data.posts)
  //   }
  // }, [searchQuery])

  return (
    <>
      <div style={{ margin: '20px 0' }}>
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
      </div>
      {filteredPosts.map((post) => (
        <Post key={post.id} props={post} />
      ))}
    </>
  )
}

export default NewsPage
