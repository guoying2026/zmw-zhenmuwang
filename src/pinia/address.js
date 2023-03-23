/**
 * 记录用户的收货地址信息
 */
import { defineStore } from "pinia"

export const useAddressStore = defineStore('addressStore', {
  state: () => {
    return {
      name: '',
      phone: '',
      address_detailed: '',
    }
  },
  persist: true,
  getters: {},
  actions: {},
})