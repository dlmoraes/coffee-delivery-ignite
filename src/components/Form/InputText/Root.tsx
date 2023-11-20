import { ReactNode } from 'react'

export interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <>{children}</>
}
