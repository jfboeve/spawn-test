import Blits from '@lightningjs/blits'

import randomWord from '../utils/randomWord'

export default Blits.Component('Word', {
  template: `
    <Text :content="$word" />
  `,
  state() {
    return {
      word: '',
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.word = randomWord()
      }, 500)
    },
  },
})
