import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff6600',
        secondary: '#3c3c3c',
        accent: '#ffffff',
        error: '#ff0019',
        info: '#0099ff',
        success: '#99ff00',
        warning: '#ffe600'
      },
      dark: {
        primary: '#ff6600',
        secondary: '#3c3c3c',
        accent: '#ffffff',
        error: '#ff0019',
        info: '#0099ff',
        success: '#99ff00',
        warning: '#ffe600'
      },
    },
  },
});
