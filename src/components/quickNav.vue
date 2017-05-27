<template>
  <ul class="quick-nav">
    <li><a href="">影院热映</a></li>
    <li><a href="">华语新碟版</a></li>
    <li><a href="">豆瓣时间</a></li>
    <li><a href="">使用豆瓣App</a></li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="less">
.quick-nav{
  display: flex;
  margin: 40/100rem 0 0 0;
  padding-top: 6px;
  flex-wrap: wrap;
  overflow: hidden;

  li{
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;

    a{
      display: block;
      max-width: 100%;
      padding: 12px 0;
      border-radius: 2;
      line-height: 20px;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      overflow: hidden;
    }
  }
}
</style>
