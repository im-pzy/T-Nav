import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#64cc96',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  safelist: [
    'i-logos-vue',
    'i-logos-react',
    'i-tabler-api',
    'i-tabler-brand-blogger',
    'i-tabler-brand-codesandbox',
    'i-tabler-brand-github-filled',
    'i-tabler-brand-github',
    'i-tabler-device-tv',
    'i-tabler-video',
    'i-tabler-tool',
    'i-tabler-photo'
  ],
})
