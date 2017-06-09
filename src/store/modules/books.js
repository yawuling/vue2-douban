import Vue from 'vue'

const state = {
  fiction: [],
  nonfiction: [],
  booksTag: [
    {
      title: '小波看书',
      link: 'https://m.douban.com/doulist/10372/',
      color: '#FF4055'
    }, {
      title: '村上春树周边',
      link: 'https://m.douban.com/doulist/105583/',
      color: '#3BA94D'
    }, {
      title: '我凭名字认定了你',
      link: 'https://m.douban.com/doulist/99294/',
      color: '#4F9DED'
    }, {
      title: '不可饶恕的女人们',
      link: 'https://m.douban.com/doulist/35573/',
      color: '#FFAC2D'
    }, {
      title: '爱欲书',
      link: 'https://m.douban.com/doulist/38088147/',
      color: '#FFC46C'
    }, {
      title: '他们还写侦探小说',
      link: 'https://m.douban.com/doulist/645579/',
      color: '#42BD56'
    }, {
      title: '人生识字始忧患',
      link: 'https://m.douban.com/doulist/192653/',
      color: '#CC3344'
    }, {
      title: '詩歌書店',
      link: 'https://m.douban.com/doulist/89925/',
      color: '#2384E8'
    }
  ],
  classification: [
    {
      title: '小说',
      link: 'novel'
    }, {
      title: '爱情',
      link: 'love'
    }, {
      title: '历史',
      link: 'history'
    }, {
      title: '外国文学',
      link: 'foreign'
    }, {
      title: '青春',
      link: 'youth'
    }, {
      title: '励志',
      link: 'motivation'
    }, {
      title: '随笔',
      link: 'essay'
    }, {
      title: '传记',
      link: 'bio'
    }, {
      title: '推理',
      link: 'detective'
    }, {
      title: '旅行',
      link: 'travel'
    }, {
      title: '奇幻',
      link: 'fantasy'
    }, {
      title: '经营',
      link: 'business'
    }
  ]
}

const mutations = {
  getBooks (state, payload) {
    switch (payload.tag) {
      case 'fiction':
        state.fiction = payload.res
        break
      case 'nonfiction':
        state.nonfiction = payload.res
        break
      default:
        state.fiction = payload.res
    }
  }
}

const actions = {
  getBooks ({ commit }) {
    Vue.http.jsonp('https://api.douban.com/v2/book/search?tag=虚构类&count=8').then(res => {
      commit('getBooks', {
        tag: 'fiction',
        res: res.body.books
      })
    })
    Vue.http.jsonp('https://api.douban.com/v2/book/search?tag=非虚构类&count=8').then(res => {
      commit('getBooks', {
        tag: 'nonfiction',
        res: res.body.books
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
