import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'nuxt/schema' {
  interface AppConfig {}
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}

// It is always important to ensure you import/export something when augmenting a type
export {}
