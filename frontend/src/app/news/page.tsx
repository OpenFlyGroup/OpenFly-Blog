'use client'
import React, { useState, useEffect } from 'react'
import Post from '@/components/ui/News/Post/Post'
import { IPost } from '@/store/post/post.interface'
// import { useActions } from '@/hooks/useActions'
// import { usePosts } from '@/hooks/usePosts'

const NewsPage: React.FC = () => {
  // const { fetchAllPosts } = useActions()
  // const { entities } = usePosts()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])

  const allPosts: IPost[] = [
    {
      id: 0,
      title: 'string',
      logoImg: 'string',
      mainImg: 'string',
      category: 'string',
      date: 'string',
      text: 'string',
      likes: 0,
    },
    {
      id: 1,
      title: 'string',
      logoImg: 'string',
      mainImg: 'string',
      category: 'string',
      date: 'string',
      text: 'string',
      likes: 0,
    },
  ]

  useEffect(() => {
    // fetchAllPosts({})
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
  }, [searchQuery])

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
