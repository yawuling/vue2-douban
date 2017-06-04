<template>
  <div class="movie-card">
    <scroller title="影院热映" type="picture" tag="in_theaters" :items="hotMovies"></scroller>
    <scroller title="即将上映" type="picture" tag="coming_soon" :items="comingMovies"></scroller>
    <scroller title="Top电影" type="picture" tag="top250" :items="topMovies"></scroller>
    <scroller title="发现好电影" type="label" :items="moviesTag"></scroller>
    <classification :items="classification" type="movie"></classification>
    <download></download>
  </div>
</template>

<script>
import scroller from '../components/scroller'
import classification from '../components/classification'
import download from '../components/download'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'movie',
  components: { scroller, classification, download },
  computed: {
    ...mapState({
      hotMovies: state => state.movies.hotMovies,
      comingMovies: state => state.movies.comingMovies,
      topMovies: state => state.movies.topMovies,
      moviesTag: state => state.movies.moviesTag,
      classification: state => state.movies.classification
    })
  },
  methods: {
    ...mapActions([
      'getMovies'
    ])
  },
  created () {
    this.getMovies()
  }
}
</script>

<style lang="less">

</style>
