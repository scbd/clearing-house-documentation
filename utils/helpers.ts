import { APP_CONFIG } from '../docs/app-config'
import { useData } from 'vitepress'

export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function getClearingHouseApiUrl (url: string): string {
  const defaultApiUrl = 'https://absch.cbddev.xyz/api/v2013'

  const clearingHouse = getClearingHouseFromUrl(url)
  switch (clearingHouse) {
    case '/abs':
      return APP_CONFIG.ABS_API_URL ?? defaultApiUrl
    case '/bch':
      return APP_CONFIG.BCH_API_URL ?? defaultApiUrl
    case '/chm':
      return APP_CONFIG.CHM_API_URL ?? defaultApiUrl
    case '/ort':
      return APP_CONFIG.ORT_API_URL ?? defaultApiUrl
    default:
      return defaultApiUrl
  }
}

export function getClearingHouseFromUrl(url: string): string | null {
    if (url.includes("abs")) {
      return "/abs";
    } else if (url.includes("bch")) {
      return "/bch";
    } else if (url.includes("chm")) {
      return "/chm";
    } else if (url.includes("ort")) {
      return "/ort";
    }
    
    return null;
  }

