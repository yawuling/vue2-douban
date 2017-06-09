<template>
  <ul class="tag-books">
    <li v-for="item in items">
      <router-link :to="{ name: 'detail', params: { id: item.id } }" class="tag-books-item">
        <div class="cover">
          <img :src="item.images.large" alt="">
        </div>
        <div class="info">
          <h3>{{item.title}}</h3>
          <score :score="item.rating.average"></score>
          <p>{{item.author.toString()}}/{{item.translator.toString()}}/{{item.publisher}}/{{item.pubdate}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import score from '../components/score'

export default {
  name: 'bookList',
  props: ['items'],
  components: { score }
}
</script>

<style lang="less">
.tag-books-item{
  display: flex;
  padding: 20px 4%;
  border-bottom: 1px solid #e3e3e3;

  .cover{
    min-height: 100px;
    margin-right: 15px;

    img{
      width: 100px;
    }
  }
  .info{
    h3{
      font-size: 17px;
      padding: 0 0 5px;
      margin: 5px 0 0;
    }
    .score{
      text-align: left;
    }
    p{
      margin: 0;
      padding-top: 5px;
      color: #9b9b9b;
    }
  }
}
</style>
