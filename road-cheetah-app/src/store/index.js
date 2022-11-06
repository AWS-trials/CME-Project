import { createStore } from 'vuex'

export default createStore({
  state: {
    currentAuthenticatedUser: null,
    currentUserRole: null
  },
  getters: {
    getCurrentUserRole: state => {
      return state.currentUserRole
    },
    getCurrentAuthenticatedUser: state => {
      return state.currentAuthenticatedUser
    }
  },
  mutations: {
    setCurrentAuthenticatedUser(state, user) {
      state.currentAuthenticatedUser = user;
    },
    setCurrentUserRole(state, role) {
      state.currentUserRole = role;
    }
  },
  actions: {
  },
  modules: {
  }
})
