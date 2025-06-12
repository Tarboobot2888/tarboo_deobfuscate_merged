import { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 bg-primary text-background rounded hover:bg-accent disabled:opacity-50"
      {...props}
    />
  )
}
