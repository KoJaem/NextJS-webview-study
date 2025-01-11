"use client"

import useNavigation from "@/hooks/webview-study/useNavigation"
import { Gamepad2, UserRound } from "lucide-react"
import { Button } from "./Button"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const navigation = useNavigation()

  return (
    <header className="flex justify-between items-center px-[12px] py-[8px] bg-light dark:bg-dark-night border-b border-gray-20 dark:border-gray-70">
      <section className="flex gap-[8px]">
        <Logo onClick={() => navigation("/", "push")} aria-label="홈으로 가기" />
        <Button variant="custom" onClick={() => navigation("/game-create", "push")} aria-label="game-create">
          <Gamepad2 size={40} />
        </Button>
      </section>
      <section className="flex gap-[8px]">
        <ThemeToggle />
        <Button variant="custom" onClick={() => navigation("/my-page", "push")} aria-label="my-page">
          <UserRound size={40} />
        </Button>
      </section>
    </header>
  )
}
