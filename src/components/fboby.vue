<template>
    <v-flex md12 xs12>
      <v-container>
      <v-row>
        <v-flex md1 ></v-flex>
        <v-col cols="12" md="4" >
        <v-card class="action animated wobble delay-3s fast">
          <center><v-list-item-title class="headline primary--text topic paddingtop">contact us</v-list-item-title></center>
          <v-text-field class="primary--text title input-a " color="primary" id="Name" label="์Name " persistent-hint outlined></v-text-field>
          <v-text-field class="primary--text title input-a " color="primary" id="Email" label="Email"  persistent-hint outlined></v-text-field>
          <v-text-field class="primary--text title input-a " color="primary" id="Message" label="Message" persistent-hint outlined></v-text-field>
          <div class="my-2">
          <center>
           <div>
      <div class="text-xs-center">
        <v-btn color="primary"  v-on:click="com()" class="c" >
          click me
        </v-btn>
      </div>
    </div>        
          </center>
          </div>
        </v-card>
        </v-col>
        <v-flex md2 ></v-flex>
        <v-col cols="12" md="4">
        <v-card class="action animated wobble delay-4s fast " width= "100%" height="85%">
            <center><v-list-item-title class="headline primary--text topic paddingtop">Find us</v-list-item-title></center>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3874.5375750503495!2d100.55708091431218!3d13.806727099739382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1582268767319!5m2!1sth!2sth" width= "100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe> 
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
  computed: {
      ...mapState('datas',
      {
        data: 'data'
      }),
    },
   data () {
      return {
        alert: false,
      }
    },
  computed: {
    ...mapState("datas", {
      data: "data"
    })
  },
  methods: {
    com(){
      console.log("name"+document.getElementById("Name").value+"email"+document.getElementById("Email").value+"message"+document.getElementById("Message").value);
        var name = document.getElementById('Name').value;
        var email = document.getElementById('Email').value;
        var message = document.getElementById('Message').value;
        window.open("https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=net-code@mfec.co.th&su=+เมลล์จากคุณ"+name+" "+email+"&body="+message);
      // console.log("beforesendmail")
      // var nodemailer = require('nodemailer');
      // var transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'chanisaramint@gmail.com',
      //     pass: 'mint260440'
      //   }
      // });
      // var mailOptions = {
      //   from: 'chanisaramint@gmail.com',
      //   to: 'chanisarau58@email.nu.ac.th',
      //   subject: 'Sending Email using Node.js',
      //   text: 'That was easy!'
      // };
      // console.log("beforesendmail2")
      // transporter.sendMail(mailOptions, function(error, info){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' +name+ info.response);
      //   }
      // });
      // console.log("afetersendmail")
    }
  }
}
</script>
<style scoped>

.topic{
  margin-top: 10px;
}
.Findus{
  margin-top: 5px;
}
.input-a{
  margin-left: 30px;
  margin-right: 30px;
}
.c{
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.paddingtop {
  padding-top : 3px;
  
}
</style>