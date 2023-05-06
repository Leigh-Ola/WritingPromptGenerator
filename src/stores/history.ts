import { defineStore } from 'pinia'

export const historyStore = defineStore('history', {
  state: () => ({
    history: []
    // ...
  }),
  getters: {
    items(state: { history: any[] }) {
      return state.history.slice()
    },
    item(state: { history: any[] }) {
      return (index: number) => state.history[index]
    },
    count(state: { history: any[] }) {
      return state.history.length
    }
  },
  actions: {
    addItem(item: any) {
      this.history.push(item)
    },
    removeItem(index: number) {
      this.history.splice(index, 1)
    },
    clear() {
      this.history = []
    }
  }
})
