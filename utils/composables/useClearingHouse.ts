import { computed, type ComputedRef } from 'vue'
import { useData } from 'vitepress'
import {
  getClearingHouseFromUrl, getClearingHouseUrl, getClearinghouseApiUrl
} from '@/utils/helpers'

export interface ClearingHouse {
  baseUrl: string
  apiUrl: string
  clearingHouseBase: (url: string)=> string
  domain: string
  name: ComputedRef<string>
}

export function useClearingHouse (): ClearingHouse {
  const { page: { value: { relativePath: url } } } = useData()

  const name = computed(() => getClearingHouseFromUrl(url) ?? '')

  const clearingHouseBase = (url: string) => `${name.value}/${url.replace(/^\/+/,"")}`

  const baseUrl = getClearingHouseUrl(`/${url}`)

  const apiUrl = getClearinghouseApiUrl(baseUrl)

  const domain = ((/\/\/(?<domain>.*?)\./v).exec(baseUrl ?? '') ?? [])[1] ?? ''

  return {
    name,
    apiUrl,
    clearingHouseBase,
    baseUrl: baseUrl ?? apiUrl,
    domain
  }
}
