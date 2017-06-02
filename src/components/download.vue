<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" alt="">
      <div class="info-content">
        <span>豆瓣</span>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1">
      去 App Store 免费下载 iOS 客户端
    </a>
  </div>
</template>

<script>
export default {
  name: 'download'
}
</script>

<style lang="less">
.download-app{
  margin: 50px 0;
  text-align: center;
  font-size: 15px;

  .info{
    margin-bottom: 20px;
    color: #111;

    img{
      display: inline-block;
      margin-right: 10px;
      width: 48px;
      vertical-align: top;
    }
    .info-content{
      display: inline-block;
      text-align: left;
      font-size: 14px;
      vertical-align: top;

      span{
        font-size: 24px;
        line-height: 28px;
      }
      div{
        line-height: 20px;
      }
    }
  }
  a{
    color: #42bd56;
  }
}
</style>
