import Vue from 'vue'

const state = {
  events: [],
  sum: 0,
  eventDetail: {}
}

const mutations = {
  loadMore (state, payload) {
    state.sum += 10
    state.events = state.events.concat(payload.res)
  },
  getEventDetail (state, payload) {
    state.eventDetail = payload.res
  }
}

const actions = {
  loadMore ({ commit, state }) {
    return new Promise((resolve,reject) => {
      Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=' + state.sum + '&count=10').then(res => {
        if (res.body.events.length > 0) {
          commit('loadMore', {
            res: res.body.events
          })
          resolve()
        } else {
          reject()
        }
      })
    })
  },
  getEventDetail ({ commit }, payload) {
    Vue.http.jsonp('https://api.douban.com/v2/event/' + payload.id).then(res => {
      commit('getEventDetail', {
        res: res.body
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
