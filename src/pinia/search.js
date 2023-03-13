import { defineStore } from "pinia"
import { getSearchResultApi } from "../api/search"

export const useSearchStore = defineStore('searchStore', {
  state: () => {
    return {
      _name: '',
      _list: [],
      _currentPage: 0,
      _pageSize: 10,
      _totalPage: 0,
      _totalSize: 0,
    }
  },
  persist: true,
  getters: {
    name: (state) => state._name,
    list: (state) => state._list,
    currentPage: (state) => state._currentPage,
    pageSize: (state) => state._pageSize,
    totalPage: (state) => state._totalPage,
    totalSize: (state) => state._totalSize,
  },
  actions: {
    /**
     * @param {Object} data 
     * @param {string} data.name
     * @param {Number|string} data.page
     * @param {Number|string} [data.size]
     */
    search(data) {
      getSearchResultApi(data).then(res => {
        if (res.status != 200 || res.data.status != 1000) {
          return false
        }
        // 存储搜索结果
        this._name = data.name
        this._list = res.data.data.data
        this._currentPage = Number(res.data.data.current_page)
        this._pageSize = Number(res.data.data.page_size)
        this._totalPage = Number(res.data.data.total_page)
        this._totalSize = Number(res.data.data.total_size)
      })
    },
    nextPage() {
      if (this._currentPage >= this._totalPage) {
        return false
      }
      this.search({
        name: this._name,
        page: this._currentPage + 1,
        size: this._pageSize,
      })
    },
    prevPage() {
      if (this._currentPage <= 1) {
        return false
      }
      this.search({
        name: this._name,
        page: this._currentPage - 1,
        size: this._pageSize,
      })
    },
    /**
     * @param {Number} page 
     * @returns 
     */
    changePage(page) {
      if (page >= this._totalPage || page <= 1 || isNaN(Number(page))) {
        return false
      }
      this.search({
        name: this._name,
        page: page,
        size: this._pageSize,
      })
    },
  },
})