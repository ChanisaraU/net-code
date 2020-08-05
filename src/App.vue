<template>
  <v-app>
    <v-content>
      <bar/>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Home from './components/Home'
import Footer from './components/Footer'
import Bar from './components/Bar'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Home,
    Footer,
    Bar
  },

  data: () => ({
    //
  }),
};
</script>
