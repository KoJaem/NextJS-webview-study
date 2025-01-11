"use client"

import { Button } from "@/components/Button"
import useNavigation from "@/hooks/webview-study/useNavigation"
import { useParams } from "next/navigation"
import { ImageUploadForm, YoutubeUploadForm } from "./_components"

export default function Medias() {
  const { id } = useParams()
  const navigation = useNavigation()

  return (
    <section className="flex flex-col items-center px-[16px] my-[80px] gap-[60px]">
      <ImageUploadForm />
      <YoutubeUploadForm />
      <Button className="bg-primary-10" onClick={() => navigation(`/game-create/${id}/resources`, "push")}>
        다음
      </Button>
    </section>
  )
}
