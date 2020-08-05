<template>
  <div id="app">
    <v-app class="overflow-hidden">
      <v-layout class="bg-new-color">
        <v-flex>
          <div class="text-center font-weight-black font-italic flex display-1">
            <br />
            <p class="w-font animated bounceInLeft">If you want teamwork to happen, you should good assistant like us.</p>
          </div>
          <v-container>
            <v-row> 
              <v-col cols="col-12 col-md-4">
                <div class="action animated bounceInLeft delay-2s fast">
                  <v-hover v-slot:default="{ hover }" open-delay="150">
                    <v-card class="card-out" :elevation="hover ? 12 : 2">
                      <v-hover v-slot:default="{ hover }" open-delay="700">
                        <v-card class="card-in">
                          <v-img
                            class="inner-img"
                            width="400px"
                            height="250px"
                            :src="require('../assets/icon-Recovered-Recovered0.png')"
                          ></v-img>
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="bg-new-div-et d-flex transition-fast-in-fast-out darken-3 v-card--reveal display-3 white--text"
                            >
                              $14.99
                              <v-btn color="orange" class="white--text" fab>
                                <v-icon>mdi-cart</v-icon>
                              </v-btn>
                            </div>
                          </v-expand-transition>
                        </v-card>
                      </v-hover>
                      <div class="bg-new-div text-center font-weight-black flex display-1" color>
                        <span>
                          <p class="b-font">Teams</p>
                        </span>
                      </div>
                      <ul class="emoji">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                      </ul>
                      <div class="text-center inner-btn btn-font">
                        <v-btn
                          rounded
                          color="primary"
                          dark
                          :ripple="{ class: 'blue--text' }"
                          text
                        >TRY FOR FREE</v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <br />
              </v-col>
              <v-col cols="col-12 col-md-4">
                <div class="action animated bounceInDown delay-1s fast">
                  <v-hover v-slot:default="{ hover }" open-delay="150">
                    <v-card class="card-out" :elevation="hover ? 16 : 1">
                      <v-hover v-slot:default="{ hover }" open-delay="700">
                        <v-card class="card-in">
                          <v-img
                            class="inner-img"
                            width="400px"
                            height="250px"
                            :src="require('../assets/icon-Recovered-Recovered1.png')"
                          ></v-img>
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="bg-new-div-et d-flex transition-fast-in-fast-out darken-3 v-card--reveal display-3 white--text"
                            >
                              $14.99
                              <v-btn color="orange" class="white--text" fab>
                                <v-icon>mdi-cart</v-icon>
                              </v-btn>
                            </div>
                          </v-expand-transition>
                        </v-card>
                      </v-hover>
                      <div class="bg-new-div text-center font-weight-black flex display-1">
                        <span>
                          <p class="b-font">Business</p>
                        </span>
                      </div>
                      <ul class="emoji">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                      </ul>
                      <div class="text-center inner-btn btn-font">
                        <v-btn
                          rounded
                          color="primary"
                          dark
                          :ripple="{ class: 'blue--text' }"
                          text
                        >TRY FOR FREE</v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <br />
              </v-col>
              <v-col cols="col-12 col-md-4">
                <div class="action animated bounceInRight delay-2s fast">
                  <v-hover v-slot:default="{ hover }" open-delay="150">
                    <v-card class="card-out" :elevation="hover ? 16 : 1">
                      <v-hover v-slot:default="{ hover }" open-delay="700">
                        <v-card class="card-in">
                          <v-img
                            class="inner-img"
                            width="400px"
                            height="250px"
                            :src="require('../assets/icon-Recovered-Recovered2.png')"
                          ></v-img>
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="bg-new-div-et d-flex transition-fast-in-fast-out darken-3 v-card--reveal display-3 white--text"
                            >
                              $14.99
                              <v-btn color="orange" class="white--text" fab>
                                <v-icon>mdi-cart</v-icon>
                              </v-btn>
                            </div>
                          </v-expand-transition>
                        </v-card>
                      </v-hover>
                      <div class="bg-new-div text-center font-weight-black flex display-1">
                        <span>
                          <p class="b-font">Enterprise</p>
                        </span>
                      </div>
                      <ul class="emoji">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                      </ul>
                      <div class="text-center inner-btn btn-font">
                        <v-btn
                          rounded
                          color="primary"
                          dark
                          :ripple="{ class: 'blue--text' }"
                          text
                        >TRY FOR FREE</v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </div>
                <br />
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import { Data } from "../models";
import { mapState, dispatch, mapActions, store } from "vuex";
import {UAnimateContainer, UAnimate} from 'vue-wow'
export default {
  computed: {
    UAnimateContainer,
    UAnimate,
    ...mapState("datas", {
      data: "data"
    })
  }
};
</script>


<style scoped>
.card-in {
  position: relative;
  width: 400px auto;
  height: 250px auto;
  background-color: rgb(134, 227, 206);
  overflow: hidden;
  margin:0px auto;
  padding: 0px auto;
}
.card-out {
  position: relative;
  width: 400px auto;
  height: 625px auto;
  background-color: rgb(255, 221, 148);
  overflow: hidden;
  margin: 0px auto;
  padding: 0px auto;
  border: 2px solid  rgb(204, 171, 216);
}
.inner-img {
  transition: 2s;
}
.inner-img:hover {
  transform: scale(1.2);
}
.inner-btn {
  transition: 1s;
}
.inner-btn:hover {
  transform: scale(1.3);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
ul {
  list-style: none;
}
ul.emoji li::before {
  content: "✔️";
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
}
/*.bg-new-img {
  background-image: url(https://www.freepik.com/free-photos-vectors/background);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}*/
.bg-new-color {
  background-color: rgb(255, 255, 255);
}
.bg-new-div {
  background-color: rgb(250, 137, 123);
}
.bg-new-div-et {
  background-color: rgb(204, 171, 216);
  height: 100%;
}
@import url("https://fonts.googleapis.com/css?family=Lacquer&display=swap");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");
@import url("https://fonts.googleapis.com/css?family=Fredoka+One&display=swap");
.w-font {
  font-family: "Lacquer", sans-serif;
  color: rgb(250, 137, 123);
  font-weight: 100;
}
.b-font {
  font-family: "Fredoka One", cursive;
  color: rgb(0, 0, 0);
  font-weight: 100;
}
li {
  font-family: "Playfair Display", serif;
  color: rgb(0, 0, 0);
  font-weight: 100;
}
.btn-font {
  font-family: "Fredoka One", cursive;
  color: rgb(0, 0, 0);
  font-weight: 100;
}
</style>
