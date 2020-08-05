<template>
  <div class="features">
    <v-app class="overflow-hidden">
      <v-flex>
        <v-layout>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <div class="col-xs-12">
            <v-parallax src="backiee-124574.jpg" height="650" width="60%">
              <p class="white--text text-center animated bounceInDown bord">All Features</p>
            </v-parallax>

            <br />
            <br />
            <br />
            <br />
            <br />
            <!-- <section data-aos="fade-in"> 
              <div class="row">
                <div class="col col-8-12 offset-2-12 col-xl-10-12 offset-xl-1-12 col-md-11-12">
            <p>hello world</p>
            <h2>world hello</h2>
                </div>
              </div>
             </section> -->
            <v-flex xs12 md10 offset-md1>
              <v-layout py-12>
                <v-flex xs12 md6 class="mr-2">
                  <iframe
                    width="80%"
                    height="400"
                    src="https://www.youtube.com/embed/videoseries?list=PLbGvhTjhwzxMLHWFyoNN2BTxrpa7HjvNi"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card-text
                    data-aos="fade-left"
                    class="y font-weight-regular display-2"
                    style="font-size:48px"
                    align-start
                    justify-start
                    column
                  >
                    Video Call
                    <br />

                    <p
                      class="f mt-6 o"
                    >Call your team for group meeting by video high quality. Wherever you are, whenever you want.</p>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout py-12>
                <v-flex xs12 md6 class="mr-2">
                  <v-card-text
                    class="y font-weight-regular display-2"
                    data-aos="fade-right"
                    style="font-size:48px"
                  >
                    Robot
                    <br />

                    <p class="f o mt-6">Add bot to do something automatically instead.</p>
                  </v-card-text>
                </v-flex>
                <v-flex xs12 md6>
                  <img src="support.png" width="70%" height="70%" class="inner-img" />
                </v-flex>
              </v-layout>
              <v-layout py-12>
                <v-flex xs12 md6>
                  <img src="united.png" width="70%" height="70%" class="inner-img" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-card-text
                    class="y font-weight-regular display-2"
                    data-aos="fade-left"
                    style="font-size:48px"
                  >
                    Create Team
                    <br />

                    <p class="f mt-6 o">Create team room for communication privacy only your team.</p>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <v-row>
                  <v-flex md4 pl-3>
                    <img src="question.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Help Service
                      <br />
                      <p class="body-2 o">Help solve any problem about this app.</p>
                    </v-flex>
                  </v-flex>

                  <v-flex md4 pl-3>
                    <img src="bot.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Smart Bot
                      <p class="body-2 o">Bot can do many function for your comfortable.</p>
                    </v-flex>
                  </v-flex>
                  <v-flex md4 pl-3>
                    <img src="brain.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Task Process
                      <p class="body-2 o">Collaboration with your team to do task.</p>
                    </v-flex>
                  </v-flex>

                  <v-flex md4 pl-3>
                    <img src="computer.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Desktop and mobile applications
                      <p class="body-2 o">Use anywhere, anytime.</p>
                    </v-flex>
                  </v-flex>
                  <v-flex md4 pl-3>
                    <img src="user.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Guests
                      <p class="body-2 o">
                        Invite people who you want to join
                        <br />collaboration with specific subjects.
                      </p>
                    </v-flex>
                  </v-flex>
                  <v-flex md4 pl-3>
                    <img src="notification.png" width="5%" height="20%" class="inner-img" />
                    <v-flex class="font-weight-black title y">
                      Notification
                      <p class="body-2 o">The real time follow up the current situation.</p>
                    </v-flex>
                  </v-flex>
                </v-row>
              </v-layout>
              <br />
              <br />

              <!--<v-layout>
                <v-flex class="font-weight-black title">
                  -
                  <p class="body-2">A</p>
                </v-flex>
                <v-flex class="font-weight-black title">
                  -
                  <p class="body-2">A</p>
                </v-flex>
                <v-flex class="font-weight-black title">
                  -
                  <p class="body-2">A</p>
                </v-flex>
              </v-layout>-->
            </v-flex>
          </div>
        </v-layout>
      </v-flex>
    </v-app>
  </div>
</template>


<script>
import { Data } from "../models";
import { mapState, dispatch, mapActions, store } from "vuex";
import myVideo from "vue-video";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ delay: 550 });

export default {
  computed: {
    ...mapState("datas", {
      data: "data"
    })
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css?family=Unna&display=swap");
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.inner-img {
  transition: 2s;
}
.inner-img:hover {
  transform: scale(1.2);
}
p {
  font-family: "Dancing Script", cursive;
  font-size: 36px;
}
.k {
  font-family: "Oswald", sans-serif;
}
.f {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
}
.j {
  color: #86e3ce;
}
.e {
  color: #d0e6a5;
}
.l {
  color: #ffdd94;
}
.y {
  color: #fa897b;
}
.o {
  color: #ccabd8;
}
.bord {
  font-size: 60px;
}
.section-title{
  background-color: #f8fafc;
  text-transform: uppercase;
}
.section-title h2:before {
    top: 0;
    left: 0;
    width: 9px;
    content: '';
    height: 100%;
    margin-left: -50px;
    position: absolute;
    background-color: #94e04b;
}
</style>
