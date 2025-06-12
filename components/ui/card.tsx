import { HTMLAttributes } from 'react'

export function Card({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="p-4 rounded shadow bg-background" {...props}>
      {children}
    </div>
  )
}
