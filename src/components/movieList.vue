<template>
  <ul class="subjects-content">
    <li v-for="item in items">
      <a>
        <div class="item-poster" :style="{ 'background-image': 'url(' + item.images.large + ')'}"></div>
        <span class="item-title">{{item.title}}</span>
        <score :score="item.rating.average"></score>
      </a>
    </li>
  </ul>
</template>

<script>
import score from '../components/score'

export default {
  name: 'movieList',
  props: ['items'],
  components: { score }
}
</script>

<style lang="less">
.subjects-content{
  display: flex;
  padding: 0.4rem 0;
  flex-wrap: wrap;
  max-width: 660px;
  font-size: 0;

  li{
    width: 33.33%;
    padding: 0 7.5*0.04rem;
    margin-bottom: 20px;
    overflow: hidden;
    font-size: 13px;
    box-sizing: border-box;

    a{
      display: block;
    }
  }
  @media (min-width: 600px) {
    li{
      width: 20%;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .item-poster{
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;

    &:after{
      float: left;
      content: '';
      margin-top: 142.85714%;
    }
  }
  .item-title{
    display: block;
    max-width: 100%;
    font-size: 15px;
    margin-top: 0.2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
