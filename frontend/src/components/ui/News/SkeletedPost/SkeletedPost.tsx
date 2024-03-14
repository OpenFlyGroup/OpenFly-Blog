/* eslint-disable max-len */

import { Skeleton } from 'primereact/skeleton'

const SkeletedPost = () => (
  <article className='drop-shadow-2xl p-5 flex flex-col lg:flex-row gap-5 bg-secondary text-white rounded-2xl cursor-pointer'>
    <div className='flex-1 flex flex-col gap-5'>
      <a className='flex justify-start items-center gap-5' href=''>
        {/* {props.logoImg  && <Image width={48} height={20} src={props.logoImg} alt="avatar" />} */}
        <Skeleton width='5rem' className='mb-2' />
      </a>
      <Skeleton width='100%' height='150px' />
      <Skeleton width='5rem' className='mb-2' />
    </div>
    <div className='flex flex-col gap-5'>
      <div className='flex'>
        <Skeleton width='5rem' className='mb-2' />
      </div>
      <Skeleton width='5rem' className='mb-2' />
      <div className=''>
        <Skeleton width='10rem' className='mb-2' />
      </div>
      <div>
        <div className='flex'>
          <Skeleton shape='circle' size='4rem' className='mr-2' />
          <div>
            <Skeleton width='10rem' className='mb-2' />
            <Skeleton width='5rem' className='mb-2' />
            <Skeleton height='.5rem' />
          </div>
        </div>
        <Skeleton width='100%' height='10px' />
      </div>
    </div>
  </article>
)

export default SkeletedPost
