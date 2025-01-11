"use client"

import Link, { LinkProps } from "next/link"
import { MouseEvent, ReactNode } from "react"

interface AppLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export default function AppLink({ children, className, ...props }: AppLinkProps) {
  const LinkClick = (e: MouseEvent) => {
    if (window.ReactNativeWebView) {
      e.preventDefault() // 기본 이벤트 방지
      e.stopPropagation() // 이벤트 전파 방지
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
      {!window.ReactNativeWebView ? (
        <Link {...props} className={className}>
          {children}
        </Link>
      ) : (
        <span className={className}>{children}</span> // 이벤트 차단용 대체 태그
      )}
    </section>
  )
}
