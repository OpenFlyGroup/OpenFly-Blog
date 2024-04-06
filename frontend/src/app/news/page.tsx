'use client'
import React, { useEffect } from 'react'
import Post from '@/components/ui/News/Post/Post'
import Container from '@/components/layout/Container/Container'
import Crumbs from '@/components/sections/Crumbs/Crumbs'
import { MenuItem } from '@/types/sections/sections.interface'
// import SkeletedPost from '@/components/ui/News/SkeletedPost/SkeletedPost'

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
        {/* {status === 'loading' ? (
          <>
            <SkeletedPost />
            <SkeletedPost />
          </>
        ) : (
          posts.map((post) => <Post key={post.id} props={post} />)
        )} */}
      </div>
    </Container>
  )
}

export default NewsPage
