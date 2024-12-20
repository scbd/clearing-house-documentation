import { computed } from "vue";
import { useData } from "vitepress"
import { getClearingHouseFromUrl } from "../helpers";

export function useClearingHouse() {
  const name = computed(() => {
    return getClearingHouseFromUrl(useData().page.value.relativePath);
  });

  return {
    name,
  };
}
