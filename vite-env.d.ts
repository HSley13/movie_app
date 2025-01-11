/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string; // Add all your environment variables here
  // Add more variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
