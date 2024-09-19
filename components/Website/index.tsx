import type { MenuItem } from '~/data/menu'
import ToolCard from '../ToolCard'

export default defineComponent({
  name: 'Website',
  props: {
    modelValue: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
  },

  setup(props) {
    return () => (
      <>
        {props.modelValue.map(item => (
          <div id={item.title} key={item.title} class="m-b-17">
            <h3 class="mb-4 text-2xl font-bold">{item.title}</h3>
            <div class="grid grid-cols-1 gap-[12px] lg:grid-cols-4">
              {item.children?.map(tool => (
                <ToolCard modelValue={tool} key={tool.title} />
              ))}
            </div>
          </div>
        ))}
      </>
    )
  },
})
