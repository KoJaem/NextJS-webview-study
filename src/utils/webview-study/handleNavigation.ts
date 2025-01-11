import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type RouterMethod = "push" | "replace"

export const handleNavigation = (path: string, routerMethod: RouterMethod, router: AppRouterInstance) => {
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
