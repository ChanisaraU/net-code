<template>
  <div>
    <v-app-bar
      color="white"
      dark
      flat
    >

      <v-spacer></v-spacer>
      <v-btn text class="primary--text title"  @click="clickmenu('Home')">Netcode</v-btn>

      <v-spacer></v-spacer>

      <div v-for="(menu,number) in data.menus"
       :key="number"
       >
        <v-btn text class="primary--text" @click="clickmenu(menu.menu)">{{menu.menu}}</v-btn>
      </div>

      <v-spacer></v-spacer>
        <v-btn text class="primary--text" @click="dialog = true">Login</v-btn>
        <v-btn outlined class="primary--text">Try Product</v-btn>
        <v-spacer></v-spacer>
      

    </v-app-bar>
    <v-dialog
      width="20%"
      v-model="dialog"
    >
      <v-card
      width="100%"
      >
      <v-row justify="center">
        <v-col cols="12"></v-col>
        <v-col cols="12">
          <v-card-text class="font-weight-black primary--text headline text-center">
            LOGIN
          </v-card-text>
        </v-col>
        <v-col cols=8>
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            required
        ></v-text-field>  
        </v-col>
        <v-col cols=6>
          <v-btn text class="info--text overline">
            Forgot Password ?
          </v-btn>
        </v-col>
        <v-col cols=4>
          <v-btn class="warning overline" @click="login">
            <div class="subtitle-1">
              send
            </div>
          </v-btn>
        </v-col>
        </v-row>
        <v-col cols=12>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {Data} from '../models'
import { mapState, dispatch, mapActions, store } from 'vuex'
export default {
    data: vm => ({
        dialog: false,
        username: null,
        password: null,
    }),
    computed: {
      ...mapState('datas',
      {
        data: 'data'
      }),
    },
    methods: {
        clickmenu (menu) {
            // console.log(menu)
            this.$router.push({
        name: menu
        });
        },
        login () {
          console.log(this.username)
          console.log(this.password)
          this.dialog = false
          this.username = null
          this.password = null
        }
    }
}

</script>