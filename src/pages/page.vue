<template>
  <div>
    <header-bar @showSearch="changeShowSearch"></header-bar>
    <div class="page">
      <router-view></router-view>
    </div>
    <search v-show="isShowSearch" @hideSearch="changeShowSearch"></search>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
import search from './search'

export default {
  name: 'page',
  data () {
    return {
      isShowSearch: false
    }
  },
  components: { headerBar, search },
  methods: {
    changeShowSearch: function() {
      this.isShowSearch = !this.isShowSearch
    }
  }
}
</script>

<style lang="less">
.page{
  padding-top: 47px;
  max-width: 7.5rem;
  margin: 0 auto;
  background-color: #fff;
}
</style>
