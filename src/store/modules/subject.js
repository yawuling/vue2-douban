import Vue from 'vue'

const state = {
  subjects: [],
  start: 0,
  tag: '',
  type: ''
}

const mutations = {
  loadMoreSubjects (state, payload) {
    state.start += 18
    state.subjects = state.subjects.concat(payload.res)
  },
  setSubject (state, payload) {
    state.tag = payload.tag
    state.type = payload.type
  },
  clearSubjects (state) {
    state.start = 0
    state.type = ''
    state.subjects = []
  }
}
