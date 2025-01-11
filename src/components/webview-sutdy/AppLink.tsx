"use client"

import { cn } from "@/utils/cn"
import Link, { LinkProps } from "next/link"
import { MouseEvent, ReactNode, useEffect, useState } from "react"

interface AppLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export default function AppLink({ children, className, ...props }: AppLinkProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const LinkClick = (e: MouseEvent) => {
    if (window.ReactNativeWebView) {
      e.preventDefault()
      e.stopPropagation()
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "navigation",
          method: "push",
          path: props.href
        })
      )
    }
  }

  return (
    <section onClick={LinkClick}>
      <Link
        {...props}
        className={cn(
          className,
          mounted && typeof window !== "undefined" && window.ReactNativeWebView
            ? "pointer-events-none"
            : "pointer-events-auto"
        )}
      >
        {children}
      </Link>
    </section>
  )
}
