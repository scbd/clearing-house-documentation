import { computed } from "vue";
import { useData } from "vitepress"
import { getClearingHouseFromUrl, getClearingHouseApiUrl } from '@/utils/helpers'

export function useClearingHouse() {
  const name = computed(() => {
    return getClearingHouseFromUrl(useData().page.value.relativePath)
  });

  const clearingHouseBase = (url: string) => {
    return `${name.value}/${url.replace(/^\/+/,"")}`
  }

  const apiUrl = getClearingHouseApiUrl(useData().page.value.relativePath)

  return {
    name,
    clearingHouseBase,
    apiUrl
  }
}
