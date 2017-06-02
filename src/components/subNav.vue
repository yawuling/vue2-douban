<template>
  <div class="sub-nav">
    <div class="nav-item">
      <a href="">注册账号</a>
      <a href="">登录豆瓣</a>
    </div>
    <div class="nav-item">
      <a href="">使用桌面版</a>
      <a href="">使用豆瓣App</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-nav'
}
</script>

<style lang="less">
.sub-nav{
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
}
.nav-item{
  display: flex;
  padding: 13px 0;
  border-top: 1px solid #f3f3f3;

  a{
    flex: 1;
    text-align: center;
    font-size: 15px;
    color:#42bd56;
    height: 20px;

    &:first-child{
      border-right: 1px solid #e5e5e5;
    }
  }
}
</style>
