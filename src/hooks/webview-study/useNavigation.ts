import type { NavigationType } from "@/constants/webview-study/types/navigation.type"
import { WEBVIEW_POST_MESSAGE } from "@/constants/webview-study/webviewPostMessage"
import { useRouter } from "next/navigation"

type RouterMethod = "push" | "replace"

const useNavigation = () => {
  const router = useRouter()

  const useNavigation = (path: string, routerMethod: RouterMethod) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WEBVIEW_POST_MESSAGE.NAVIGATION.TYPE,
          method: routerMethod,
          path
        } satisfies NavigationType)
      )
    } else {
      router[routerMethod](path)
    }
  }

  return useNavigation
}

export default useNavigation
