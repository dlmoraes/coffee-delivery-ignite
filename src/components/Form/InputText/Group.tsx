import { HTMLAttributes, ReactNode } from 'react'

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Group(props: GroupProps) {
  return <div {...props} />
}
