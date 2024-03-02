import { useTypedSelector } from './useTypedSelector'

export const usePosts = () => useTypedSelector((state) => state.post)
