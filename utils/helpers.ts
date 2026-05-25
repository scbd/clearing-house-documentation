import { APP_CONFIG } from '../docs/app-config'

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function getClearingHouseUrl (url: string): string | undefined {
  const clearingHouse = getClearingHouseFromUrl(url)

  switch (clearingHouse) {
    case 'abs':
      return APP_CONFIG.ABS_URL
    case 'bch':
      return APP_CONFIG.BCH_URL
    case 'chm':
      return APP_CONFIG.CHM_URL
    case 'ort':
      return APP_CONFIG.ORT_URL
    default:
      return APP_CONFIG.ABS_URL
  }
}

export function getClearinghouseApiUrl (clearinghouseUrl: string | undefined): string {

  // if(typeof clearinghouseUrl === 'string') {
  //   return `${clearinghouseUrl}/${APP_CONFIG.API_EXTENSION}`
  // }

  const defaultApiUrl = APP_CONFIG.API_URL ?? 'https://api.cbddev.xyz'

  return `${defaultApiUrl}/${APP_CONFIG.API_EXTENSION}`;
}

export function getClearingHouseFromUrl (url: string): string | null {
  if (url.includes('/abs/')) {
    return 'abs'
  } else if (url.includes('/bch/')) {
    return 'bch'
  } else if (url.includes('/chm/')) {
    return 'chm'
  } else if (url.includes('/ort/')) {
    return 'ort'
  }

  return null
}
