import Blits from '@lightningjs/blits'

import randomColor from '../utils/randomColor'

export default Blits.Component('Block', {
  template: `
    <Element :color="$color" w="200" h="80" />
  `,
  state() {
    return {
      color: '#ffffff',
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.color = randomColor()
      }, 500)
    },
  },
})
