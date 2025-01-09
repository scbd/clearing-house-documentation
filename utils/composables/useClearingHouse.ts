import { computed } from "vue";
import { useData } from "vitepress"
import { getClearingHouseFromUrl } from "../helpers";

export function useClearingHouse() {
  const name = computed(() => {
    return getClearingHouseFromUrl(useData().page.value.relativePath);
  });

  const clearingHouseBase = (url: string) => {
    return `${name.value}/${url.replace(/^\/+/,"")}`
  }


  return {
    name,
    clearingHouseBase
  };
}
