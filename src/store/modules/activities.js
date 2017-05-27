import Vue from 'vue'

const state = {
  events: [],
  sum: 0,
  eventDetail: {}
}

const mutations = {
  getEvents (state, payload) {
    state.events = payload.res;
  },
  loadMore (state, payload) {
    state.sum += 10
    state.events = state.events.concat(payload.res)
  },
  getEventDetail (state, payload) {
    state.eventDetail = payload.res
  }
}

const actions = {
  getEvents ({ commit }) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count=10').then(res => {
      commit('getEvents', {
        res: res.body.events
      })
    })
  },
  loadMore ({ commit, state }) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=' + state.sum + '$count=10').then(res => {
      commit('loadMore', {
        res: res.body.events
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
