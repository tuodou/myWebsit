export default {
  state: {
    subjectList: [],
    currentSubject: {
      subjectId: '',
      subjectName: ''
    }
  },
  getters: {
    getSubjectList (state) {
      return state.subjectList
    },
    getCurrentSubject (state) {
      return state.currentSubject
    },
  },
  mutations: {
    setSubjectList (state, val) {
      state.subjectList = val
    },
    setCurrentSubject (state, val) {
      state.currentSubject = val
    }
  }
}
