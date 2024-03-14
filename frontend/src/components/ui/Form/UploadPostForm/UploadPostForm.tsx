'use client'
import { useActions } from '@/hooks/useActions'
import { IPost } from '@/store/post/post.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import FormLabel from '../FormLabel/FormLabel'
import BtnSubmit from '../../Buttons/BtnSubmit/BtnSubmit'
import { Toast } from 'primereact/toast'
import { useRef, useState } from 'react'
import { FileUpload } from 'primereact/fileupload'
import { Editor, EditorTextChangeEvent } from 'primereact/editor'

const UploadPostForm = () => {
  const { createNewPost } = useActions()
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPost>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IPost> = (data) => {
    createNewPost(data)
    reset()
  }
  const toast = useRef<Toast>(null)

  const onUpload = () => {
    toast.current?.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    })
  }
  const [text, setText] = useState<string>('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'spring' }}
      className='w-full bg-secondary rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0'
    >
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl'>
          Upload new post
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-4 md:space-y-6'
        >
          <div>
            <Toast ref={toast} />
            <FileUpload
              mode='basic'
              name='demo[]'
              url='/api/upload'
              accept='image/*'
              maxFileSize={1000000}
              onUpload={onUpload}
              auto
              chooseLabel='Browse'
            />
          </div>
          <div>
            <FormLabel>Title</FormLabel>
            <input
              type='text'
              {...formRegister('title', {
                required: 'title',
              })}
              // eslint-disable-next-line max-len
              className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
              placeholder='title'
              required
            />
          </div>
          <div>
            <FormLabel>Category</FormLabel>
            <input
              type='text'
              {...formRegister('category', {
                required: 'category is required',
              })}
              placeholder='category'
              // eslint-disable-next-line max-len
              className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
              required
            />
          </div>
          <div>
            <FormLabel>Text</FormLabel>
            <Editor
              pt={{
                root: {
                  className: 'bg-white rounded-2xl',
                },
              }}
              value={text}
              onTextChange={(event: EditorTextChangeEvent) =>
                setText(event.htmlValue)
              }
              style={{ height: '320px' }}
            />
            {/* <input
              type='text'
              {...formRegister('text', {
                required: 'text is required',
              })}
              placeholder='text'
              // eslint-disable-next-line max-len
              className='bg-gray-50 border border-gray-300 text-secondary sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
              required
            /> */}
          </div>
          <BtnSubmit text='Publish post' />
        </form>
      </div>
    </motion.div>
  )
}

export default UploadPostForm
