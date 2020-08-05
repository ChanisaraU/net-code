<template>
    <v-app>
            <v-flex md12 xs12>
                <v-layout align-center justify-center row fill-height >
                    <v-flex md2>
                        <v-card-title class="title">
                            Home page
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-flex>
    </v-app>
</template>


<script>
import {Data} from '../models'
import { mapState, dispatch, mapActions, store } from 'vuex'
export default {
    computed: {
      ...mapState('datas',
      {
        data: 'data'
      }),
    },
}

</script>