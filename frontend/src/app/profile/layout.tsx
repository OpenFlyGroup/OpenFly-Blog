import AppProfile from '@/components/layout/Profile/AppProfile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  icons: {
    shortcut: { url: '/favicon.ico', type: 'image/x-icon' },
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      {
        url: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '57x57', type: 'image/png' },
      { url: '/safari-pinned-tab.svg', type: 'image/svg' },
    ],
  },
}

const ProfileLayout = ({
  base,
  admin,
}: Readonly<{
  base: React.ReactNode
  admin: React.ReactNode
}>) => <AppProfile base={base} admin={admin} />

export default ProfileLayout
