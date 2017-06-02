<template>
  <div class="card">
    <quick-nav></quick-nav>
    <list :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <load-more  slot="spinner"></load-more>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import quickNav from '../components/quickNav'
import list from '../components/list'
import loadMore from '../components/loadMore'
import infiniteLoading from 'vue-infinite-loading'

export default {
  name: 'home',
  components: { quickNav, list, infiniteLoading, loadMore },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore',
      'getEvents'
    ])
  },
  created() {
    this.getEvents()
  }
}
</script>

<style lang="less">
.card{
  margin: 0 36/100rem;
}
</style>
