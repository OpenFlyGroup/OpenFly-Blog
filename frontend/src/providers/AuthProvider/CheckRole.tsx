import { PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './authPage.types'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router';

const CheckRole: React.FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {
    isOnlyUser,
    isOnlyAdmin,
}, children}) => {

  const { user } = useAuth();
  const router = useRouter();

  if (user && user.isAdmin && isOnlyAdmin)
    return <>{children}</>;

  if (user && isOnlyUser)
    return <>{children}</>;

  router.pathname !== '/signin' && router.replace('/signin')
  return null;
}

export default CheckRole;