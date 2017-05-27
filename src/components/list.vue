<template>
  <section id="recommend-feed">
    <ul>
      <li v-for="item in items">
        <a href="" class="feed-item">
          <div class="feed-content">
            <div class="feed-info">
              <h3>{{item.title}}</h3>
              <p>{{item.content | subStr}}</p>
            </div>
            <div class="feed-img">
              <img :src="item.image" alt="">
            </div>
          </div>
          <div class="feed-footer">
            <span class="feed-author">{{item.category_name}}</span>
            <span class="feed-label">{{item.tags}}</span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'list',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  filters: {
    subStr: function (value) {
      value = value.replace(/(<\/?[^>]*>|\s)/g, '')
      return value.slice(0, 34).concat('...')
    }
  }
}
</script>

<style lang="less">
.feed-item{
  display: block;
  padding: 25px 0;
  color: #494949;
}
.feed-content{
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;

  .feed-info{
    flex: 1;
    margin-right: 17px;

    h3{
      margin-top: 0;
      margin-bottom: 6px;
      font-size: 17px;
      font-weight: 500;
      line-height: 1.41;
    }
    p{
      display: -webkit-box;
      font-size: 12px;
      text-align: justify;
      color: #aaa;
      line-height: 1.5;
    }
  }
  .feed-img{
    width: 1.7rem;
    height: 1.7rem;
    overflow: hidden;

    img{
      width: 100%;
    }
  }
}
.feed-footer{
  display: flex;
  justify-content: space-between;
  color: #aaa;
}
</style>
