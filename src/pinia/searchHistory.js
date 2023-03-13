import { defineStore } from "pinia"

export const useSearchHistoryStore = defineStore('searchHistoryStore', {
  state: () => {
    return {
      _list: [],
    }
  },
  persist: true,
  getters: {
    list: (state) => state._list,
  },
  actions: {
  },
})