<template>
  <div class="home">
    <router-link to='/'>
      <img alt="Vue logo" src="../assets/logo.png">
    </router-link>
    <div>This is a about page</div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    components: {
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
