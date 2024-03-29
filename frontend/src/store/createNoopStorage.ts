import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null)
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value)
  },
  removeItem(_key: string) {
    return Promise.resolve()
  },
})

const Storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

export default Storage
