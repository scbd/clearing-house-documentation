import { computed } from "vue";
import { useData } from "vitepress"
import { getClearingHouseFromUrl } from "../helpers";

export function useClearingHouse() {
  const name = computed(() => {
    return getClearingHouseFromUrl(useData().page.value.relativePath);
  });

  const clearingHouseBase = (url: string) => {
    return `/${encodeURIComponent(name.value)}/${url.replace(/^\/+/,"")}`
  }

  // `${encodeURIComponent(name.value)}/${url}`

  return {
    name,
    clearingHouseBase
  };
}
