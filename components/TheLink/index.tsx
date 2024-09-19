import LinksData from '~/data/links'
import styles from './index.module.scss'

export default defineComponent({
  name: 'TheLink',
  setup() {
    return () => (
      <>
        <div class={['link mb-16 flex flex-col gap-1 text-sm ', styles.link]}>
          <h3 class="mb-4 text-2xl font-bold">
            友情链接
          </h3>
          <n-card hoverable>
            <div class="flex flex-wrap gap-1">
              {LinksData.map(link => (
                <>
                  <n-button
                    key={link.title}
                    text
                    ghost
                    class={styles['link-item']}
                    tag="a"
                    href={link.url}
                    target="_blank"
                    alt={link.title}
                  >
                    {link.title}
                  </n-button>
                  <n-button
                    text
                    ghost
                    tag="a"
                    class={styles['link-item']}
                    href="/links"
                    alt="更多链接"
                  >
                    更多链接
                  </n-button>
                </>
              ))}
            </div>
          </n-card>
        </div>
      </>
    )
  },
})
