import { isMobile, isServer } from "@/utils/device"

export function getOS() {
  if (isServer()) {
    return "server"
  }

  const isIos = !!window.navigator.userAgent.match(/ipad|iphone|ipod/i)
  if (isIos) {
    return "ios"
  }

  const isAndroid = !!window.navigator.userAgent.match(/Android/i)
  if (isAndroid) {
    return "android"
  }

  if (isMobile()) {
    return "otherMobile"
  }

  return "web"
}
