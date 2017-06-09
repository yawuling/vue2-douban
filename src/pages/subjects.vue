<template>
  <div class="subjects">
    <div class="subjects-title">{{ tag }}</div>
    <movie-list :items="subjects" v-if="type === 'movie'"></movie-list>
    <book-list :items="subjects" v-else></book-list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <load-more  slot="spinner"></load-more>
      <span slot="no-more"></span>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import movieList from '../components/movieList'
import bookList from '../components/bookList'
import infiniteLoading from 'vue-infinite-loading'
import loadMore from '../components/loadMore'

export default {
  namne: 'subjects',
  components: { movieList, infiniteLoading, loadMore, bookList },
  computed: {
    ...mapState({
      tag: state => state.subjects.tag,
      type: state => state.subjects.type,
      subjects: state => state.subjects.subjects
    })
  },
  methods: {
    ...mapMutations([
      'clearSubjects'
    ]),
    ...mapActions([
      'loadMoreSubjects'
    ]),
    onInfinite () {
      setTimeout(() => {
        this.loadMoreSubjects({
          tag: this.$route.params.tag
        }).then(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, () => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        })
      }, 1000)
    },
  },
  beforeRouteLeave (to, from, next) {
    this.clearSubjects()
    next()
  }
}
</script>

<style lang="less">
.subjects{
  padding: 0 7.5*0.02rem;
  margin: 0 auto;
  max-width: 650px;

  .subjects-title{
    margin-top: 0.32rem;
    margin-bottom: 6px;
    padding-left: 7.5*0.04rem;
    font-size: 24px;
  }
  @media (min-width: 600px) {
    .subjects-title{
      padding-left: 16px;
    }
  }
}
</style>
