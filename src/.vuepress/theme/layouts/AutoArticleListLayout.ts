import { type VNode, defineComponent, h } from 'vue'


import CommonWrapper from '@theme-hope/components/CommonWrapper'
import SkipLink from '@theme-hope/components/SkipLink'
import { FadeSlideY } from '@theme-hope/components/transitions/index'

import AutoArticleList from '../components/AutoArticleList'

export default defineComponent({
  name: 'AutoArticleListLayout',

  setup() {

    return (): VNode[] => [
      h(SkipLink),
      h(
        CommonWrapper,
        {
          noSidebar: true,
        },
        {
          default: () => h(FadeSlideY, () => h(AutoArticleList)),
        }
      ),
    ]
  },
})