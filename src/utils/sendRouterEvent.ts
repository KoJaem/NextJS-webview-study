import { POSTMESSAGE_TYPE } from "@/constants/postMessage.type"

export type RouterMethod = "push" | "replace"

type Params = {
  method: RouterMethod
  path: string
}

export const sendRouterEvent = async ({ method, path }: Params) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: POSTMESSAGE_TYPE.ROUTER_EVENT,
        method: method,
        path: path as string
      })
    )
  }
}
