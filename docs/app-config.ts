/// <reference path="./vite-env.d.ts" />
// Environment-driven config. Vite loads these from docs/.env.development
// (npm run dev) or docs/.env.production (npm run build); real environment
// variables override the files. Falls back to production (cbd.int).
export const APP_CONFIG = {
  ACCOUNTS_HOST_URL: import.meta.env.VITE_ACCOUNTS_HOST_URL || 'https://accounts.cbd.int',
  API_URL: import.meta.env.VITE_API_URL || 'https://api.cbd.int',
  ABS_URL: import.meta.env.VITE_ABS_URL || 'https://absch.cbd.int',
  BCH_URL: import.meta.env.VITE_BCH_URL || 'https://bch.cbd.int',
  CHM_URL: import.meta.env.VITE_CHM_URL || 'https://chm.cbd.int',
  ORT_URL: import.meta.env.VITE_ORT_URL || 'https://ort.cbd.int',
  API_EXTENSION: 'api/v2013'
}
