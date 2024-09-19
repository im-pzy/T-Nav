export default defineComponent({
  name: 'TheIcon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  setup(props, { attrs }) {
    const isIcon = computed(() => !!props.icon)
    return () => (
      <>
        {isIcon.value ? <i class={props.icon} {...attrs}></i> : <img src={props.src} alt="icon" {...attrs} />}
      </>
    )
  },
})
