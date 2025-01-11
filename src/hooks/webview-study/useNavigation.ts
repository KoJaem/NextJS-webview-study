import { useRouter } from "next/navigation"

type RouterMethod = "push" | "replace"

const useNavigation = () => {
  const router = useRouter()

  const useNavigation = (path: string, routerMethod: RouterMethod) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "navigation",
          method: routerMethod,
          path
        })
      )
    } else {
      router[routerMethod](path)
    }
  }

  return useNavigation
}

export default useNavigation
