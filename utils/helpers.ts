export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
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