import Vue from 'vue'

const state = {
  subjects: [],
  start: 0,
  tag: '',
  type: '',
  subject: {}
}

// const getters = {
//   subjectMeta: state => {
//     if (state.type === 'movie') {
//       return state.subject.genres.join('/') + '/' +
//              state.subject.director.map(item => item.name + '(导演)').join('/') + '/' +
//              state.subject.casts.map(item => item.name).join('/') + '/' +
//              state.subject.year + '/' +
//              state.subject.countries.join('/')
//     } else if (state.type === 'book') {
//       return state.subject.author.join(' / ') +
//              state.subject.translator.join(' / ') + ' / ' +
//              state.subject.publisher + ' / ' +
//              state.subject.binding + ' / ' + state.subject.pages + ' / ' +
//              state.subject.price + ' / ' + state.subject.pubdate
//     }
//   },
//   genres: state => {
//     if (state.type === 'book') {
//       return state.subject.tags
//     } else if (state.type === 'movie') {
//       return state.subject.genres
//     }
//   }
// }

const mutations = {
  loadMoreSubjects (state, payload) {
    state.start += 18
    state.subjects = state.subjects.concat(payload.res)
  },
  setSubjectTag (state, payload) {
    state.tag = payload.tag
  },
  setSubjectType (state, payload) {
    state.type = payload.type
  },
  clearSubjects (state) {
    state.start = 0
    state.type = ''
    state.subjects = []
  },
  getSubject (state, payload) {
    state.subject = payload.res
  }
}

const actions = {
  loadMoreSubjects ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      if (state.type === 'movie') {
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
      } else {
        let tag = state.tag
        if (tag === '最受关注图书 | 虚构类' || tag === '最受关注图书 | 非虚构类') {
          tag = tag.substr(9, tag.length - 9)
        }
        Vue.http.jsonp('https://api.douban.com/v2/book/search?tag=' +
          tag + '&start=' + state.start + '&count=18').then(res => {
            if (res.body.books.length > 0) {
              commit('loadMoreSubjects', {
                res: res.body.books
              })
              resolve()
            } else {
              reject()
            }
          })
      }
    })
  },
  getSubject ({ commit, state }, payload) {
    switch (state.type) {
      case 'movie':
        Vue.http.jsonp('https://api.douban.com/v2/movie/subject/' + payload.id).then(res => {
          console.log(res)
          commit('getSubject', {
            res: res.body
          })
        })
        break
      case 'book':
        Vue.http.jsonp('https://api.douban.com/v2/book/' + payload.id).then(res => {
          commit('getSubject', {
            res: res.body
          })
        })
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

export default {
  state,
  mutations,
  actions
}
