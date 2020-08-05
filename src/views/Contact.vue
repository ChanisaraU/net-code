<template>
  <div class="contact">
    <v-app>
        <v-flex md12 xs12>
          <v-img
           :src="require('../assets//contact.png')">
                <fber></fber>
                <fboby></fboby>
          </v-img>
        </v-flex>       
    </v-app>
  </div>
</template>


<script>
import {Data} from '../models'
import fboby from '@/components/fboby.vue'
import fber from '@/components/fber.vue'
import { mapState, dispatch, mapActions, store } from 'vuex'
export default {
    name: 'contact.vue',
    components: {
      fboby,
      fber
    },
    computed: {
      ...mapState('datas',
      {
        data: 'data'
      }),
    }
}

</script>