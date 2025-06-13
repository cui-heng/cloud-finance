export const state = () => ({
  token: '',
  user: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  login({ commit }, payload) {
    commit('setToken', payload.token)
    commit('setUser', payload.user)
  },
  logout({ commit }) {
    commit('setToken', '')
    commit('setUser', null)
  }
}