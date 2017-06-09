<template>
  <div class="scroll-item">
    <div class="header">
      <span>{{title}}</span>
      <router-link :to="{ name: 'subjects', params: {tag: tag} }" v-if="type === 'picture'" @click.native="setTag">更多</router-link>
    </div>
    <div class="content">
      <ul class="items" v-if="type === 'picture'">
        <li v-for="item in items">
          <router-link :to="{ name: 'detail', params: { id: item.id} }">
            <div class="item-poster" :style="{ 'background-image': 'url(' + item.images.large + ')'}"></div>
            <span class="item-title">{{item.title}}</span>
            <score :score="item.rating.average"></score>
          </router-link>
        </li>
      </ul>
      <ul class="movie-label" v-else>
        <template v-for="(item, index) in items">
          <li v-if="index === 4" class="line">
          </li>
          <li>
            <a :href="item.href" :style="{ 'border-color': item.color, 'color': item.color }">{{item.title}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import score from '../components/score'
import { mapMutations } from 'vuex'

export default {
  name: 'scroller',
  props: ['title', 'type', 'items', 'tag'],
  components: { score },
  methods: {
    ...mapMutations([
      'setSubjectTag'
    ]),
    setTag: function () {
      this.setSubjectTag({
        tag: this.title
      })
      // if (this.tag === 'hotfiction' || this.tag === 'hotnonfiction') {
      //   this.$store.commit('setBookTag', {
      //     tag: this.title
      //   })
      // } else {
      //   this.$store.commit('setMovieTag', {
      //     tag: this.title
      //   })
      // }
    }
  }
}
</script>

<style lang="less">
.scroll-item{
  max-width: 650px;
  margin: 0 auto;
  overflow: hidden;

  &:first-child{
    padding-top: 10px;
  }
  .header{
    display: flex;
    padding: 0 36/100rem;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    span{
      color: #111;
      font-size: 17px;
    }
    a{
      color: #42bd56;
      font-size: 15px;
    }
  }
  .content{
    box-sizing: content-box;
    margin-bottom: -16px;
  }
  .items{
    padding: 15px 0 43px 0;
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;

    li{
      display: inline-block;
      width: 100px;
      margin-left: 16/100rem;

      &:first-child{
        margin-left: 36/100rem;
      }
       &:last-child{
         margin-right: 36/100rem;
       }
      a{
        color: #111;
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
  .movie-label{
    padding: 15px 15px 43px 15px;
    overflow-x: auto;
    font-size: 0;
    margin-left: -5px;
    white-space: nowrap;

    .line{
      display: block;
      width: 100%;
      height: 1px;
      margin: 0;
      border: 0;
    }
    li{
      display: inline-block;
      font-size: 15px;
      margin: 0 0 8px 8px;

      a{
        display: block;
        padding: 17px 25px;
        border: 1px solid;
        border-radius: 4px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
