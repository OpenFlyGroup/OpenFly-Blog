"use client"
import { getAccessToken } from '@/services/auth/auth.helper';
import { TypeComponentAuthFields } from './authPage.types';
import { PropsWithChildren, useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false});

const AuthProvider: React.FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {
    isOnlyAdmin,
    isOnlyUser,
}, children}) => {

  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    accessToken ?
    checkAuth() : null;
  },[]);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    !refreshToken && user ?
    logout() : null;
  },[pathname]);

  return (isOnlyAdmin || isOnlyUser) ? (
    <DynamicCheckRole Component={{isOnlyAdmin, isOnlyUser}} >{children}</DynamicCheckRole>
  ) : (<>{children}</>)
}

export default AuthProvider