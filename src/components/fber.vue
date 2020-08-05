<template>
  <v-flex md12>
    <v-container>
      <v-row>
        <v-flex md1 ></v-flex>
        <v-col cols="12" md="3" class="action animated wobble">
          <v-card class="inner-img a ">
            <center>
              <img src="map.png" alt="map" class="imginner paddingtop"/></center>
              <p class="primary--text paddingleft paddingbottom">{{add}}</p>           
          </v-card>
        </v-col>
        <v-flex md1 ></v-flex>
        <v-col cols="12" md="3" class="action animated wobble delay-1s fast">
          <v-card class="inner-img a">
            <center>
              <img src="call.png" alt="map" class="imginner paddingtop"/></center>
              <p class="primary--text paddingleft paddingbottom">โทร : {{call}}<br>แฟกซ์ :{{call2}}</p>          
          </v-card>
        </v-col>
        <v-flex md1 ></v-flex>
        <v-col cols="12" md="3" class="action animated wobble delay-2s fast" >
          <v-card class="inner-img a">
            <center>
              <img src="envelope.png" alt="map" class="imginner paddingtop" /></center>   
              <p class="primary--text paddingleft paddingbottom">Email : {{map}}</p>       
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-flex>
</template>
<script>
import { Data } from "../models";
import { mapState, dispatch, mapActions, store } from "vuex";
export default {
    data(){
      return {
        add:"333 Vibhavadi-Rangsit Road, Chomphon Sub-district, Chatuchak District, Bangkok 10900",
        call:"+66 (0) 2821-7888 ",
        call2:"+66 (0) 2278-9279",
        map:"netcone@mfec.co.th"
      }
      }, 
    methods:{
      getadd: function(){
        return this.add
        },
        setadd: function(add){
        return this.add=n
        }}
  };
</script>
<style scoped>
.inner-img {
  transition: 2s;
}
.inner-img:hover {
  transform: scale(1.2);
}
.a {
  height: 90%;
  width: 90%;
}
.imginner {
  height: 25%;
  width: 25%;
}
.paddingtop {
  padding-top : 10px;
}
.paddingleft {
  padding-left: 10px;
  padding-top : 10px;
}
.paddingbottom {
  padding-bottom : 15px; 
}
</style>
