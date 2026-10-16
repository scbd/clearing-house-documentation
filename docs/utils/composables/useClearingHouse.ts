import { computed, type ComputedRef } from 'vue'
import { useData, withBase } from 'vitepress'
import {
  getClearingHouseFromUrl, getClearingHouseUrl, getClearinghouseApiUrl, getRealm
} from '@/utils/helpers'

export interface ClearingHouse {
  baseUrl: string
  apiUrl: string
  realm: string
  clearingHouseBase: (url: string)=> string
  domain: string
  name: ComputedRef<string>
}

export function useClearingHouse (): ClearingHouse {
  const { page: { value: { relativePath: url } } } = useData()

  const name = computed(() => getClearingHouseFromUrl(`/${url}`) ?? '')

  // The route segment (e.g. 'absch') can differ from the clearing-house code
  // (e.g. 'abs' used in Solr schema names), so links are built from the path.
  const routeSegment = computed(() => url.split('/')[0] || name.value)

  const clearingHouseBase = (path: string): string => withBase(`/${routeSegment.value}/${path.replace(/^\/+/, '')}`)

  const baseUrl = getClearingHouseUrl(`/${url}`)

  const apiUrl = getClearinghouseApiUrl(baseUrl)

  const domain = ((/\/\/(?<domain>.*?)\./v).exec(baseUrl ?? '') ?? [])[1] ?? ''

  const realm = getRealm(getClearingHouseFromUrl(`/${url}`) ?? 'abs')

  return {
    name,
    apiUrl,
    realm,
    clearingHouseBase,
    baseUrl: baseUrl ?? apiUrl,
    domain
  }
}
