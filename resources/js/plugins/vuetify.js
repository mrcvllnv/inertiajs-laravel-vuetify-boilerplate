import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const options = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey.darken4,
        secondary: colors.orange.base,
        accent: colors.blue.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.cyan.base,
        success: colors.green.base,
      },
    },
  },
  icons: {
    iconfont: 'md', // default - only for display purposes
  },
}

export default new Vuetify(options)