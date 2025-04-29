import type { MenuItem } from '~/data/menu'
import TheIcon from '../TheIcon'

export default defineComponent({
  name: 'TheMenu',
  props: {
    modelValue: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { isSmallScreen, navCollapse } = useGlobal()
    const requestUrl = useRequestURL()
    // 是否为首页
    const index = computed(() => requestUrl.pathname === '/')
    /**
     * @description 点击a标签, 如果为首页则不跳转
     */
    function aTagClick(e: Event) {
      if (index.value) {
        e.preventDefault()
      }
    }
    /**
     * @description 点击菜单
     */
    function handleMenuItemClick(key: string) {
      // scrollIntoView 滚动会使fixed顶部导航导致位置不符遮挡 //好像也没解决
      const el = document.getElementById(key)
      if (el) {
        document.getElementsByClassName('c-content')[0].firstElementChild?.scrollTo({
          top: el.offsetTop - (document.getElementById('navbar')?.offsetHeight ?? 0),
          behavior: 'smooth',
        })
      }
      // 判断是否移动端，如果是移动端跳转则自动收缩menu
      if (isSmallScreen) {
        console.log('isSmallScreen', isSmallScreen.value)
        navCollapse.value = !navCollapse.value
      }
    }

    const menuOptions = computed(() => {
      return props.modelValue.map((item) => {
        // 判断item的icon是否为url or path
        const isIcon = item.icon?.startsWith('http') || item.icon?.startsWith('/') || item.icon?.startsWith('data:image')
        const defaultIcon = item.icon ? item.icon : 'i-tabler-layout-grid-filled'
        return {
          key: item.title,
          // 两者滚动动画不同
          label: () => h('a', { href: `${index.value ? '' : '/'}#${item.title}`, onClick: aTagClick }, item.title),
          icon: () => h(TheIcon, { icon: isIcon ? '' : defaultIcon, src: isIcon ? item.icon : '' }),
        }
      })
    })

    onMounted(() => {
      const hash = requestUrl?.hash
      if (hash) {
        // 解码 url解码
        const decodeHash = decodeURIComponent(hash.slice(1))
        handleMenuItemClick(decodeHash)
      }
    })

    return () => (
      <>
        <div class="h-full" overflow="auto">
          <n-menu
            options={menuOptions.value}
            collapsed-width={64}
            icon-size={25}
            onUpdate:value={handleMenuItemClick}
          />
        </div>
      </>
    )
  },
})
