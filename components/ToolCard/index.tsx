import DefaultLogo from '~/assets/imgs/site/header-logo.png'
import type { MenuItem } from '~/data/menu'
import styles from './index.module.scss'

export default defineComponent({
  name: 'ToolCard',
  props: {
    modelValue: {
      type: Object as PropType<MenuItem>,
      default: () => ({}),
    },
  },
  setup(props) {
    const model = props.modelValue

    const isDefaultLogo = computed(() => model.logo === null || model.logo === undefined)
    const isPathIcon = computed(() => model.logo && (model.logo.startsWith('/') || model.logo.startsWith('http') || model.logo.startsWith('data:image')))
    const isIcon = computed(() => model.logo && !isPathIcon.value)

    const logo = computed(() => {
      if (isIcon.value) {
        return <i class={[model.logo, 'w-full h-full']}></i>
      }
      return (
        <img
          height="auto"
          width="auto"
          class={isDefaultLogo.value ? styles['default-logo'] : ''}
          src={model.logo || DefaultLogo}
          loading="lazy"
          alt={model.title}
          data-was-processed="true"
          data-src={model.logo || DefaultLogo}
        >
        </img>
      )
    })
    return () => (
      <>
        <nuxt-link id={model.title} to={model.url} target="_blank" class={styles['decoration-none']}>
          <n-card hoverable class={['w-full', styles['tool-card']]} border="rounded-2">
            <n-tooltip placement="bottom" trigger="" width="trigger">
              {{
                trigger: () => (
                  <>
                    <div class={['flex flex-col', styles['card-content']]}>
                      <div class="flex items-center" overflow="hidden" md="h-22">
                        <div class="w-16 h-16 flex items-center" overflow="hidden">
                          {logo.value}
                        </div>
                        <div class="flex-1 flex flex-col  justify-center ml-4">
                          <div class="text-lg font-bold text-gray-700 truncate overflow-hidden" color="$n-text-color">
                            {model.title}
                          </div>
                          <div class={[styles.description, 'text-sm text-gray-500 mt-2 text-clip overflow-hidden']}>
                            { model.description }
                          </div>
                        </div>
                      </div>
                      { model.tags && model.tags.length > 0 && (
                        <>
                          <div class={[' w-full mt-4 text-sm text-gray-500 flex gap-1 flex-wrap  pt-2', styles.tags]}>
                            { model.tags.map(tag => (
                              <>
                                <n-button
                                  class="tag"
                                  tag="span"
                                  size="tiny"
                                  secondary
                                >
                                  { tag }
                                </n-button>
                              </>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ),
                default: () => (
                  <>
                    <span>{model.description}</span>
                  </>
                ),
              }}
            </n-tooltip>
          </n-card>
        </nuxt-link>
      </>
    )
  },
})
