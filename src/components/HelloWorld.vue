<template>
  <div class="hello">
    <h1>msg: {{ msg }}</h1>
    <h1>foo: {{ foo }}</h1>
    <h1>count: {{ count }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <span @click='addCount'>vue-cli documentation</span>.
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, InjectReactive, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    @Prop() private count!: number

    @InjectReactive() readonly foo!: string

    @Emit('add')
    addCount () {
      return this.count + 1
    }

    mounted () {
      console.log('foo', this.foo)
    }

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
