'use client'
import React, { useState, useEffect } from 'react'
import Post from '@/components/ui/News/Post/Post'
import { IPost } from '@/store/post/post.interface'
import { NewsService } from '@/services/news/news.service'
import { AutoComplete } from 'primereact/autocomplete';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
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
    <div className="p-inputgroup flex-1">
      <AutoComplete value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for post" />
      <Button icon="pi pi-search" className="p-button-warning" onClick={() => setSearchQuery(searchQuery)} />
    </div>
      {/* {filteredPosts.map((post) => (
        <Post key={post.id} props={post} />
      ))} */}
    </>
  )
}

export default NewsPage
