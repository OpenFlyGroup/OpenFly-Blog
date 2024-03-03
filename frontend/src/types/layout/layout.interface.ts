export interface IDefaultLayout {
  children: React.ReactNode
}

export interface IContainerProps {
  children: React.ReactNode
  addClass?: string
}

export type TypeNavLink = {
  id: number
  name: string
  path: string
}
