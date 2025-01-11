"use client"
import { getOS } from "@/utils/device"
import { useEffect, useState } from "react"

const Home = () => {
  const [text, setText] = useState<string>()

  useEffect(() => {
    // 이벤트 리스너 함수
    const handleMessage = (event: MessageEvent) => {
      setText(event.data)
    }

    const os = getOS()

    const addMessageListener = () => {
      if (os === "android") {
        document.addEventListener("message", handleMessage as EventListener)
      } else if (os === "ios") {
        window.addEventListener("message", handleMessage)
      }
    }

    // 운영체제에 맞는 이벤트 리스너 제거
    const removeMessageListener = () => {
      if (os === "android") {
        document.removeEventListener("message", handleMessage as EventListener)
      } else if (os === "ios") {
        window.removeEventListener("message", handleMessage)
      }
    }

    // 컴포넌트가 마운트될 때 이벤트 리스너 추가
    addMessageListener()

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => removeMessageListener()
  }, [])

  // WebView에서 전송된 메시지에 대한 반응
  const sendMessageToNativeApp = () => {
    // * 데이터가 여러개 입력되는경우 JSON.stringify 필수
    if (window.ReactNativeWebView) {
      // window.ReactNativeWebView.postMessage(JSON.stringify("Hello from Next.js!"))
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          content: "텍스트",
          type: "test"
        })
      )
    }
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
