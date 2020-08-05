<template>
  <div class="INTRGRATIONS">
    <v-app>
      <!-- Generate Selection Tab -->
      <v-tabs v-model="tab" background-color="purple lighten-4" dark grow style="flex:none"
        color="purple darken-3" slider-color="purple darken-3" slider-size="5">
        <v-tab v-for="item in items" :key="item.tab"  class="title">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <!-- Generate Content Tab -->
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
        <!-- Cisco Kinetic Tab Selection -->
        <div v-if="item.tab === 'Cisco Kinetic'">
          <v-flex>
            <v-layout wrap>
              <!-- Webex Teams Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="green darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/WebexTeamsLogo.png')" height="90" width="100" style="padding:10px" contain></v-img>
                          <div class="font-weight-bold"><br>Webex Teams</div>
                          <div class="body-2"><br>Integrate With Bot<br>By API From Cisco Kinetic</div>
                          <div><br><button @click="linkWebex()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
              <!-- Line Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="deep-orange darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/LineLogo.png')" height="90" width="100"></v-img>
                          <div class="font-weight-bold"><br>Line</div>
                          <div class="body-2"><br>Integrate With Bot<br>By API From Cisco Kinetic</div>
                          <div><br><button @click="linkLine()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
              <!-- Kafka Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="deep-orange darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/KafkaLogo.png')" height="90" width="100"></v-img>
                          <div class="font-weight-bold"><br>Kafka</div>
                          <div class="body-2"><br>Extract Information Directly<br>By Kafka DSlink For Cisco Kinetic</div>
                          <div><br><button @click="linkKafka()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
            </v-layout>
            <!-- MQTT Content -->
            <v-layout wrap>
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="green darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/MQTTLogo.png')" height="90" width="150" contain></v-img>
                          <div class="font-weight-bold"><br>MQTT</div>
                          <div class="body-2"><br>Send Data With MQTT Protocol<br>By MQTT DSlink For Cisco Kinetic</div>
                          <div><br><button @click="linkMQTT()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
              <!-- MySQL Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="deep-orange darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/MySQLLogo.png')" height="90" width="150" contain></v-img>
                          <div class="font-weight-bold"><br>MySQL</div>
                          <div class="body-2"><br>Extract Information Drectly<br>By MYSQL DSlink For Cisco Kinetic</div>
                          <div><br><button @click="linkMySQL()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
              <!-- OPC Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="deep-orange darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/OPCLogo.png')" height="90" width="150" contain></v-img>
                          <div class="font-weight-bold"><br>OPC DA</div>
                          <div class="body-2"><br>Extract Information Directly<br>By OPC DA DSlink For Cisco Kinetic</div>
                          <div><br><button @click="linkOPC()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </div>

        <!-- Webex Tab Selection -->
        <div v-else-if="item.tab === 'Webex'">
          <v-flex>
            <v-layout wrap>
              <!-- Moodle Content -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" height="325" width="85%" style="margin:10px" color="green darken-4">
                      <v-card class="body-1" height="100%" color="purple lighten-5" align="center" style="padding:10px">
                        <v-alert outlined color="purple darken-4" height="100%">
                          <v-img :src="require('../assets/MoodleLogo.png')" height="90" width="150" style="padding:10px" contain></v-img>
                          <div class="font-weight-bold"><br>Moodle</div>
                          <div class="body-2"><br>Learning Management System<br>Integrate With Webex Meetings</div>
                          <div><br><button @click="linkMoodle()" class="font-weight-bold">Link To Website</button></div>
                        </v-alert>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-flex>
              <!-- Template -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <!-- <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="0" height="300" width="85%" style="margin:10px" color="none">

                    </v-card>
                  </v-hover> -->
                </v-layout>
              </v-flex>
              <!-- Template -->
              <v-flex sm4 md4 lg4 xs12>
                <v-layout align-center justify-center row fill-height >
                  <!-- <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="0" height="300" width="85%" style="margin:10px" color="none">

                    </v-card>
                  </v-hover> -->
                </v-layout>
              </v-flex>

            </v-layout>
          </v-flex>
         </div>
        </v-tab-item>
      </v-tabs-items>
    </v-app>
  </div>
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

    data () {
     return {
       tab: null,
       items: [
         { tab: 'Cisco Kinetic', content: 'Tab 1 Content' },
         { tab: 'Webex', content: 'Tab 2 Content' },
       ],
     }
   },
   methods:{
      linkWebex: function () {
          window.open("https://www.webex.com/", "_blank");
      },
      linkLine: function () {
          window.open("https://developers.line.biz/en/", "_blank");
      },
      linkKafka: function () {
          window.open("https://kafka.apache.org/", "_blank");
      },
      linkMQTT: function () {
          window.open("http://mqtt.org/", "_blank");
      },
      linkMySQL: function () {
          window.open("https://www.mysql.com/", "_blank");
      },
      linkOPC: function () {
          window.open("https://opcfoundation.org/", "_blank");
      },
      linkMoodle: function () {
          window.open("https://moodle.org/", "_blank");
      },
    },
}
</script>
