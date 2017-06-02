<template>
  <div id="search">
    <div class="search-bar">
      <a @click="hideSearch">关闭</a>
      <input type="text" :class="{ 'focus-bg': isFocus }" @focus="focusInput" @blur="blurInput">
    </div>
    <ul class="tag-list">
      <li v-for="items in tags">
        <a v-for="item in items">
          <div class="strong" :style="{color: item.color}">{{item.header}}</div>
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
    <sub-nav></sub-nav>
  </div>
</template>

<script>
import subNav from '../components/subNav'

export default {
  name: 'search',
  data () {
    return {
      isFocus: false,
      tags: [
        [
          {
            header: '电影',
            text: '影院热映',
            color: 'rgb(35, 132, 232)'
          }, {
            header: '电视',
            text: '正在热播',
            color: 'rgb(122, 106, 219)'
          }, {
            header: '图书',
            text: '畅销排行',
            color: 'rgb(159, 120, 96)'
          }
        ], [
          {
            header: '同城',
            text: '周末活动',
            color: 'rgb(230, 70, 126)'
          }, {
            header: '小组',
            text: '志趣相投',
            color: 'rgb(42, 184, 204)'
          }, {
            header: '音乐',
            text: '新碟榜',
            color: 'rgb(244, 143, 46)'
          }
        ], [
          {
            header: '阅读',
            text: '电子书',
            color: 'rgb(159, 120, 96)'
          }, {
            header: '游戏',
            text: '虚拟世界',
            color: 'rgb(87, 116, 197)'
          }, {
            header: '应用',
            text: '玩手机',
            color: 'rgb(89, 108, 221)'
          }
        ], [
          {
            header: '东西',
            text: '心爱之物',
            color: 'rgb(225, 100, 77)'
          }, {
            header: 'FM',
            text: '红心歌单',
            color: 'rgb(64, 207, 169)'
          }, {
            header: '市集',
            text: '购买原创',
            color: 'rgb(66, 189, 86)'
          }
        ]
      ]
    }
  },
  components: { subNav },
  methods: {
    focusInput: function () {
      this.isFocus = true
    },
    blurInput: function () {
      this.isFocus = false
    },
    hideSearch: function () {
      this.$emit('hideSearch')
    }
  }
}
</script>

<style lang="less">
#search{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
}
.search-bar{
  padding: 15px 18px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 0;

  a{
    color: #42bd56;
    font-size: 16px;
  }
  input{
    width: 297/50rem;
    height: 29px;
    border: none;
    border-radius: 3px;
    margin-left: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
    background-size: 17px;
    font-size: 14px;
  }
  .focus-bg{
    background: #f3f3f3;
  }
}
.tag-list{
  padding-top: 25px;

  li{
    display: flex;

    a{
      flex: 1;
      margin-bottom: 25px;
      text-align: center;
    }
    span{
      display: block;
      margin-top: 3px;
      color: #999;
      font-size: 12px;
      letter-spacing: 1px;
    }
    .strong{
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
    }
  }
}
</style>
