const KEY_TASKS = 'tasks'

const localStorageApi = {
  updateLocalStorage(newState) {
    localStorage.setItem(KEY_TASKS, JSON.stringify(newState))
  },

  clearLocalStorage() {
    localStorage.setItem(KEY_TASKS, JSON.stringify([]))
  },
}

export { localStorageApi }