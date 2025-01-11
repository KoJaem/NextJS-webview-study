"use client"
import { Button } from "@/components/Button"
import { handleNavigation } from "@/utils/webview-study/handleNavigation"
import { useRouter } from "next/navigation"
interface Params {
  id: string
}
export function ActionButtons({ id }: Params) {
  const router = useRouter()
  return (
    <article className="flex flex-wrap">
      <Button
        className="bg-primary hover:bg-primary-60 text-light text-sm dark:bg-primary-70 dark:hover:bg-primary-80"
        onClick={() => handleNavigation(`/game/${id}`, "push", router)}
      >
        게임시작
      </Button>
      <Button className="bg-gray-10 hover:bg-gray-20 text-dark-30 text-sm dark:bg-gray-70 dark:hover:bg-gray-80 dark:text-light">
        🔥 랭킹확인
      </Button>
      <Button className="bg-blue hover:bg-blue-60 text-light text-sm dark:bg-blue-70 dark:hover:bg-blue-80">
        공유하기
      </Button>
    </article>
  )
}
