import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'
export default new Vuetify({
  theme: {
    // dark: true,
    themes: {
      dark: {
        primary: colors.green,
        secondary: colors.grey.darken4
      },
      light: {
        primary: colors.green,
        secondary: colors.grey.lighten4
      }
    }
  }
});
