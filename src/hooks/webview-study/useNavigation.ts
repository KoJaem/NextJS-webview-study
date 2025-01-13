import { RouterMethod, sendRouterEvent } from "@/utils/sendRouterEvent"
import { useRouter } from "next/navigation"

const useNavigation = () => {
  const router = useRouter()

  const useNavigation = (path: string, routerMethod: RouterMethod) => {
    if (window.ReactNativeWebView) {
      sendRouterEvent({ method: routerMethod, path })
    } else {
      router[routerMethod](path)
    }
  }

  return useNavigation
}

export default useNavigation
