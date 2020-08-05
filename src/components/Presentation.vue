<template>
    <v-app>
        <v-flex md12 xs12>
                <v-img
                    :src="require('../assets/presentation_home3.png')"
                >
                 <v-layout 
                 align-center 
                 row 
                 fill-height 
                 wrap>
                <v-flex md4 offset-md2>
                     <v-card
                     elevation = 0
                     >
                        <v-card-text>
                            <div class="display-2 ">Connect  <b class="font-weight-black primary--text">YOU</b></div>
                            <p class="body-1" style="padding-left:10%"> to everyone <b class="">by Cisco Webex</b></p>
                        </v-card-text>
                    </v-card>
                    <br/>
                    <br/>
                    <v-card-text>
                        <v-text-field label="JOIN TO EVERYONE" outlined dense hide-details rounded v-model="email"></v-text-field>
                        <div style="padding-top:2%">
                            <v-btn color="success" rounded @click="getStart">GET STARTED</v-btn>
                            <i class="font-weight-light "> Enter you email</i>
                        </div>
                    </v-card-text>
                </v-flex>
                <v-flex md12></v-flex>
                <v-flex md12></v-flex>s
                </v-layout>
                </v-img>
        </v-flex>
    </v-app>
</template>


<script>
import {Data} from '../models'
import { mapState, dispatch, mapActions, store } from 'vuex'
export default {
    data: vm => ({
        email: null
    }),
    computed: {
      ...mapState('datas',
      {
        data: 'data'
      }),
    },
    methods: ({
        getStart(){
            console.log(this.email)
            this.email = null
        }
    })
}

</script>