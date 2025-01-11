"use client"
// pages/index.tsx (Next.js)
import { useEffect, useState } from "react"

const Home = () => {
  const [text, setText] = useState<string>()
  useEffect(() => {
    // React Native로부터 메시지를 받기 위한 이벤트 리스너 설정
    const handleMessage = (event: MessageEvent) => {
      setText(event.data)
    }

    // Android에서 document.addEventListener로 이벤트 처리
    if (navigator.userAgent.includes("Android")) {
      document.addEventListener("message", handleMessage as EventListener)
    } else {
      // iOS의 경우 기존의 window.addEventListener 사용
      window.addEventListener("message", handleMessage)
    }

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      if (navigator.userAgent.includes("Android")) {
        document.removeEventListener("message", handleMessage as EventListener)
      } else {
        window.removeEventListener("message", handleMessage)
      }
    }
  }, [])

  // WebView에서 전송된 메시지에 대한 반응
  const sendMessageToNativeApp = () => {
    window.postMessage("Hello from Next.js!", "*")
  }

  return (
    <div>
      <h1>Hello, WebView!</h1>
      <p>받은데이터: {text || "없음"}</p>
      <button onClick={sendMessageToNativeApp}>Send Message to React Native</button>
    </div>
  )
}

export default Home
