import Vue from 'vue'

const state = {
  hotMovies: [],
  comingMovies: [],
  topMovies: [],
  subjects: [],
  tag: '',
  start: 0,
  moviesTag: [
    {
      title: '同时入选IMDB250和豆瓣电影250的电影',
      link: 'https://m.douban.com/doulist/968362/',
      color: '#FFC46C'
    }, {
      title: '带你进入不正常的世界',
      link: 'https://m.douban.com/doulist/16002/',
      color: '#42BD56'
    }, {
      title: '用电【影】来祭奠逝去的岁月',
      link: 'https://m.douban.com/doulist/190343/',
      color: '#4F9DED'
    }, {
      title: '女孩们的故事【电影】',
      link: 'https://m.douban.com/doulist/1125971/',
      color: '#3BA94D'
    }, {
      title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
      link: 'https://m.douban.com/doulist/4253902/',
      color: '#2384E8'
    }, {
      title: '美国生活面面观',
      link: 'https://m.douban.com/doulist/121326/',
      color: '#FF4055'
    }, {
      title: '2015终极期待',
      link: 'https://m.douban.com/doulist/37479562/',
      color: '#FFAC2D'
    }, {
      title: '经典韩国电影——收集100部',
      link: 'https://m.douban.com/doulist/458087/',
      color: '#CC3344'
    }
  ],
  classification: [
    {
      title: '经典',
      tag: 'classic'
    }, {
      title: '冷门热片',
      tag: 'underrated'
    }, {
      title: '豆瓣高分',
      tag: 'doubantop'
    }, {
      title: '动作',
      tag: 'action'
    }, {
      title: '喜剧',
      tag: 'comedy'
    }, {
      title: '爱情',
      tag: 'love'
    }, {
      title: '悬疑',
      tag: 'mystery'
    }, {
      title: '恐怖',
      tag: 'horror'
    }, {
      title: '科幻',
      tag: 'scifi'
    }, {
      title: '治愈',
      tag: 'sweet'
    }, {
      title: '文艺',
      tag: 'artfilm'
    }, {
      title: '成长',
      tag: 'youth'
    }, {
      title: '动画',
      tag: 'animation'
    }, {
      title: '华语',
      tag: 'chinese'
    }, {
      title: '欧美',
      tag: 'western'
    }, {
      title: '韩国',
      tag: 'korean'
    }, {
      title: '日本',
      tag: 'japanese'
    }
  ]
}

const mutations = {
  getMovies (state, payload) {
    switch (payload.tag) {
      case 'hotMovies':
        state.hotMovies = payload.res
        break
      case 'comingMovies':
        state.comingMovies = payload.res
        break
      case 'topMovies':
        state.topMovies = payload.res
        break
      default:
        state.hotMovies = payload.res
    }
  },
  getSubjects (state, payload) {
    state.start = 18
    state.subjects = payload.res
  },
  loadMoreSubjects (state, payload) {
    state.start += 18
    state.subjects = state.subjects.concat(payload.res)
  },
  setMovieTag (state, payload) {
    state.tag = payload.tag
  },
  clearSubjects (state) {
    state.start = 0
    state.subjects = []
  }
}

const actions = {
  getMovies ({ commit }) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=8').then(res => {
      commit('getMovies', {
        tag: 'hotMovies',
        res: res.body.subjects
      })
    })
    Vue.http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=8').then(res => {
      commit('getMovies', {
        tag: 'comingMovies',
        res: res.body.subjects
      })
    })
    Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=8').then(res => {
      commit('getMovies', {
        tag: 'topMovies',
        res: res.body.subjects
      })
    })
  },
  getSubjects ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      if (payload.tag !== 'in_theaters' && payload.tag !== 'coming_soon' && payload.tag !== 'top250') {
        Vue.http.jsonp('https://api.douban.com/v2/movie/search?tag=' +
          state.tag.substr(0, state.tag.length - 2) + '&count=18').then(res => {
            commit('getSubjects', {
              res: res.body.subjects
            })
            resolve()
          }, () => {
            reject()
          })
      } else {
        Vue.http.jsonp('https://api.douban.com/v2/movie/' +
          payload.tag + '?count=18').then(res => {
            commit('getSubjects', {
              res: res.body.subjects
            })
            resolve()
          }, () => {
            reject()
          })
      }
    })
  },
  loadMoreSubjects ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      if (payload.tag !== 'in_theaters' && payload.tag !== 'coming_soon' && payload.tag !== 'top250') {
        Vue.http.jsonp('https://api.douban.com/v2/movie/search?tag=' +
          state.tag.substr(0, state.tag.length - 2) + '&start=' + state.start + '&count=18').then(res => {
            if (res.body.subjects.length > 0) {
              commit('loadMoreSubjects', {
                res: res.body.subjects
              })
              resolve()
            } else {
              reject()
            }
          })
      } else {
        Vue.http.jsonp('https://api.douban.com/v2/movie/' +
          payload.tag + '?start=' + state.start + '&count=18').then(res => {
            if (res.body.subjects.length > 0) {
              commit('loadMoreSubjects', {
                res: res.body.subjects
              })
              resolve()
            } else {
              reject()
            }
          })
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
