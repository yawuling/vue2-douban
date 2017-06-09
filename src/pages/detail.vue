<template>
  <div class="subject-detail">
    <div class="download-bar">
      <div class="download-content">
        <div class="left">
          <div>用 App 打开</div>
          <div v-if="type === 'movie'">观看更多影视资源</div>
          <div v-if="type === 'book'">更多文学作品等你来看</div>
        </div>
        <div class="right">
          <a href="" class="download-btn">极速下载</a>
          <a href="">打开</a>
        </div>
      </div>
    </div>
    <div class="detail-card">
      <h1>{{subject.title}}</h1>
      <div class="detail-content">
        <div class="left">
          <div class="score-block">
            <score :score="subject.rating.average"></score>
            <span>{{subject.ratings_count}}人评价</span>
          </div>
          <div class="detail-header">{{getSubjectMeta}}</div>
          <a class="movie-tip" href="#" v-if="type === 'movie'">使用App查看影人资料</a>
          <a class="book-tip" href="#" v-if="type === 'book'">在豆瓣购买</a>
        </div>
        <div class="right">
          <img :src="subject.images.large" alt="" >
        </div>
      </div>
      <div class="detail-choose" v-if="type === 'movie'">
        <a>想看</a>
        <a>看过</a>
      </div>
      <div class="detail-choose" v-if="type === 'book'">
        <a>想读</a>
        <a>在读</a>
        <a>读过</a>
      </div>
      <div class="detail-summary">
        <h2>{{subject.title}}的剧情简介</h2>
        <div class="detail-summary-content">{{subject.summary}}</div>
      </div>
      <div class="detail-label" v-if="type === 'movie'">
        <h2>查看更多豆瓣高分电影电视剧</h2>
        <ul>
          <li v-for="item in subject.genres">
            <a>{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="detail-label" v-if="type === 'book'">
        <h2>查看更多豆瓣高分好书</h2>
        <ul>
          <li v-for="item in subject.tags">
            <a>{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <download></download>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import score from '../components/score'
import download from '../components/download'

export default {
  name: 'detail',
  components: { download, score },
  computed: {
    ...mapState({
      type: state => state.subjects.type,
      subject: state => state.subjects.subject
    }),
    getSubjectMeta: function () {
      if (this.type === 'movie') {
        return this.subject.genres.join('/') + '/' +
               this.subject.directors.map(item => item.name + '(导演)').join('/') + '/' +
               this.subject.casts.map(item => item.name).join('/') + '/' +
               this.subject.year + '/' +
               this.subject.countries.join('/')
      } else if (this.type === 'book') {
        return this.subject.author.join(' / ') +
               this.subject.translator.join(' / ') + ' / ' +
               this.subject.publisher + ' / ' +
               this.subject.binding + ' / ' + this.subject.pages + ' / ' +
               this.subject.price + ' / ' + this.subject.pubdate
      }
    }
  },
  methods: {
    ...mapActions([
      'getSubject'
    ])
  },
  created () {
    this.getSubject({
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="less">
.subject-detail{
  .download-bar{
    width: 7.5rem;
    height: 1.6rem;
    background: url('../assets/promotion_bg.jpg');
    background-size: cover;

    .download-content{
      display: flex;
      height: 100%;
      padding: 0 10px 0 18px;
      align-items: center;
      justify-content: space-between;
    }
    .left{
      font-size: 14px;
      color: #2CA532;
      line-height: 22px;
    }
    .right{
      font-size: 0;
    }
    .download-btn{
      margin-right: 8px;
      color: #fff;
      background-color: #42bd56;
    }
    a{
      display: inline-block;
      padding: 0 14px;
      color: #42bd56;
      border: 1px solid #42bd56;
      font-weight: bold;
      font-size: 13px;
      line-height: 2;
      border-radius: 3px;
    }
  }
  .detail-card{
    margin: 30px 18px 0;

    h1{
      font-size: 24px;
      font-weight: normal;
      line-height: 32px;
      word-break: break-all;
    }
  }
  .detail-content{
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;

    .score-block{
      display: flex;
      margin-bottom: 15px;
      align-items: center;
      font-size: 15px;
      color: #aaa;

      .score{
        margin-top: 0;
        margin-right: 8px;
      }
      .score-average{
        font-size: 15px;
        color: #494949;
      }
      .rating-star{
        width: 13px;
        height: 13px;
        background-size: 13px;
      }
    }
    .detail-header{
      font-size: 14px;
      line-height: 1.6;
      color: #494949;
    }
    .book-tip{
      color: #E76648;
      font-size: 13px;
      border: 1px solid #E76648;
      border-radius: 3px;
      height: 24px;
      padding: 0 6px;
      display: inline-block;
      text-align: center;
      line-height: 24px;
    }
    .movie-tip{
      display: block;
      color: #42bd56;
      margin-top: 10px;
      font-size: 14px;
    }
    .right{
      margin-left: 24px;

      img{
        width: 100px;
      }
    }
  }
  .detail-choose{
    display: flex;
    justify-content: space-between;

    a{
      flex: 1;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ffb712;
      border-radius: 3px;
      margin-right: 10px;
      font-size: 15px;
      color: #ffb712;

      &:last-child{
        margin-right: 0;
      }
    }
  }
  .detail-summary{

    h2{
      color: #aaa;
      font-size: 15px;
      font-weight: normal;
    }
    .detail-summary-content{
      font-size: 15px;
      color: #494949;
      line-height: 22px;
    }
  }
  .detail-label{
    h2{
      color: #aaa;
      font-size: 15px;
      font-weight: normal;
    }
    ul li{
      display: inline-block;
      margin: 10px 10px 0 0;
      font-size: 15px;

      a{
        display: block;
        height: 28px;
        line-height: 28px;
        border-radius: 28px;
        padding: 0 12px;
        text-align: center;
        color: #494949;
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
