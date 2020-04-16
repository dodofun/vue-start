<template>
  <div class="home">
    <router-link to='/about'>
      <img alt="Vue logo" src="../assets/logo.png">
    </router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class Home extends Vue {
    @Prop() private msg!: string

    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
      next()
    }

    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate')
      next()
    }

    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave')
      next()
    }
  }
</script>
