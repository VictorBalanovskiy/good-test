<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Factory />
    <Cripto />
    <Market />
    <Storage />
    <Production />
  </div>
</template>

<script>
// @ is an alias to /src
import Factory from '@/components/Factory.vue'
import Cripto from '@/components/Cripto.vue'
import Market from '@/components/Market.vue'
import Storage from '@/components/Storage.vue'
import Production from '@/components/Production.vue'

export default {
  name: 'Home',
  components: {
    Factory,
    Cripto,
    Market,
    Storage,
    Production,
  }
}
</script>
