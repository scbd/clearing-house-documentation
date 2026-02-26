interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_CLEARING_HOUSE?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_ACCOUNTS_HOST_URL?: string;
  readonly VITE_ABS_URL?: string;
  readonly VITE_BCH_URL?: string;
  readonly VITE_CHM_URL?: string;
  readonly VITE_ORT_URL?: string;
  readonly VITE_API_EXTENSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
