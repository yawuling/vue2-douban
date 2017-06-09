<template>
  <div class="classification">
    <div class="header">分类浏览</div>
    <ul class="content">
      <li v-for="item in items">
        <router-link :to="{ name: 'subjects', params: { tag: item.tag } }" @click.native="setTag(item.title)">{{item.title}}</router-link>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'classification',
  props: ['items'],
  computed: {
    type: state => state.subjects.type
  },
  methods: {
    ...mapMutations([
      'setSubjectTag'
    ]),
    setTag: function (name) {
      if (this.type === 'movie') {
        this.setSubjectTag({
          tag: name + '电影'
        })
      } else {
        this.setSubjectTag({
          tag: name
        })
      }
    }
  }
}
</script>

<style lang="less">
.classification{
  padding-left: 36/100rem;
  max-width: 650px;
  margin:  auto;

  .header{
    font-size: 17px;
    color: #111;
  }
  .content{
    display: flex;
    padding: 18px 0;
    flex-wrap: wrap;
    font-size: 0;

    li{
      position: relative;
      width: 50%;
      border-top: 1px solid #eee;
      box-sizing: border-box;

      &:nth-child(odd){
        border-right: 1px solid #eee;
      }
      a{
        display: block;
        padding: 12px 0 12px 12px;
        border-top: 1px solid #eee;
        font-size: 15px;
        color: #42bd56;
      }
      span{
        position: absolute;
        display: inline-block;
        width: 8px;
        height: 8px;
        right: 10px;
        top: 16px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
