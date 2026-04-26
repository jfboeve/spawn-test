import Blits from '@lightningjs/blits'

import Word from '../components/Word'

let interval

export default Blits.Component('Home', {
  components: {
    Word,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Word :for="(item, index) in $items" key="$item" :x="($index % 9) * 200" :y="Math.floor($index / 9) * 80" />
    </Element>
  `,
  state() {
    return {
      items: [],
    }
  },
  hooks: {
    ready() {
      interval = this.$setInterval(() => {
        this.items.push(Math.random())
        if (this.items.length >= 126) this.$clearInterval(interval)
      }, 800)
    },
  },
})
