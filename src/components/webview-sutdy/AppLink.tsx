"use client"

import { cn } from "@/utils/cn"
import { sendRouterEvent } from "@/utils/sendRouterEvent"
import Link, { LinkProps } from "next/link"
import { MouseEvent, ReactNode, useEffect, useState } from "react"

interface AppLinkProps extends LinkProps {
  children: ReactNode
  replace?: boolean
  className?: string
}

export default function AppLink({ children, replace, className, ...props }: AppLinkProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const LinkClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    sendRouterEvent({ method: replace ? "replace" : "push", path: props.href as string })
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
