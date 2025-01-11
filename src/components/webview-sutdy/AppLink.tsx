"use client"

import type { NavigationType } from "@/constants/webview-study/types/navigation.type"
import { WEBVIEW_POST_MESSAGE } from "@/constants/webview-study/webviewPostMessage"
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
          type: WEBVIEW_POST_MESSAGE.NAVIGATION.TYPE,
          method: WEBVIEW_POST_MESSAGE.NAVIGATION.METHOD.PUSH,
          path: props.href as string
        } satisfies NavigationType)
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
