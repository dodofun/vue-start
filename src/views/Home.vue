<template>
  <div class="home">
    <router-link to='/about'>
      <img ref='img' alt="Vue logo" src="../assets/logo.png">
    </router-link>
    <input v-focus/>
    <div @click='changeFoo'>Change foo</div>
    <HelloWorld msg="Welcome to Your Vue.js App" :count='count' @add='addCount'/>
  </div>
</template>

<script lang="ts">
  import '@/directives/focus'
  import {Component, Prop, PropSync, ProvideReactive, Vue, Watch} from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'
  import {Log} from '@/utils/decorators'
  import {mapActions, mapGetters} from 'vuex'

  @Component({
    components: {
      HelloWorld
    },
    computed: mapGetters([]),
    methods: mapActions([])
  })
  export default class Home extends Vue {
    count = 0
    @Prop() readonly propA: object | undefined
    @Prop({default: 'default value'}) readonly propB!: string
    @PropSync('name') syncedName!: string

    @ProvideReactive() foo = 'foo'

    @Watch('propA', {immediate: true, deep: true})
    onPropAChanged (val, oldVal) {
      console.log(val, oldVal)
    }

    created () {
      console.log('created')
    }

    mounted () {
      console.log('mounted', this.propB)
      this.test('OBJ')
    }

    @Log
    test (obj) {
      console.log('test methods', obj)
    }

    changeFoo () {
      console.log('changed foo')
      this.foo = 'changed foo'
    }

    addCount (val) {
      console.log('addCount', val)
      this.count = val
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
