const KEY_TASKS = 'tasks'

interface Tasks {
  id: string,
  text: string,
  isComplete: boolean,
}

const localStorageApi = {
  updateLocalStorage(newState: Tasks[]) {
    localStorage.setItem(KEY_TASKS, JSON.stringify(newState))
  },

  clearLocalStorage() {
    localStorage.setItem(KEY_TASKS, JSON.stringify([]))
  },
}

export { localStorageApi }