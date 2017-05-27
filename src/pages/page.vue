<template>
  <div>
    <header-bar></header-bar>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'page',
  components: { headerBar }
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
