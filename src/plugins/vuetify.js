import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#CCABD8',
            secondary: '#D0E6A5',//balck
            accent: '#FFDD94',//blue
            info: '#FA897B',//blue
            success: '#86E3CE',//green
            warning: '#86E3CE'//yellow
    
          },
        },
      },
});
