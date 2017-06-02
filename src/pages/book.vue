<template>
  <div class="book-card">
    <scroller title="最受关注图书 | 虚构类" type="picture" :items="fiction"></scroller>
    <scroller title="最受关注图书 | 非虚构类" type="picture" :items="nonfiction"></scroller>
    <scroller title="发现好图书" type="label" :items="booksTag"></scroller>
    <classification :items="classification"></classification>
    <download></download>
  </div>
</template>

<script>
import scroller from '../components/scroller'
import classification from '../components/classification'
import download from '../components/download'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'book',
  components: { scroller, classification, download },
  computed: {
    ...mapState({
      fiction: state => state.books.fiction,
      nonfiction: state => state.books.nonfiction,
      booksTag: state => state.books.booksTag,
      classification: state => state.books.classification
    })
  },
  methods: {
    ...mapActions([
      'getBooks'
    ])
  },
  created () {
    this.getBooks()
  }
}
</script>

<style lang="less">

</style>
