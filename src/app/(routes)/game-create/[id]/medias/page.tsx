"use client"

import { Button } from "@/components/Button"
import { handleNavigation } from "@/utils/webview-study/handleNavigation"
import { useParams, useRouter } from "next/navigation"
import { ImageUploadForm, YoutubeUploadForm } from "./_components"

export default function Medias() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <section className="flex flex-col items-center px-[16px] my-[80px] gap-[60px]">
      <ImageUploadForm />
      <YoutubeUploadForm />
      <Button
        className="bg-primary-10"
        onClick={() => handleNavigation(`/game-create/${id}/resources`, "push", router)}
      >
        다음
      </Button>
    </section>
  )
}
