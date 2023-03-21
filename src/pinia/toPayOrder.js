import { defineStore } from "pinia"

export const useToPayOrderStore = defineStore('toPayOrderStore', {
  state: () => {
    return {
      _type: '',
      _goodsId: 0,
      _goodsName: '',
      _sId: [],
      _unit: '',
      _remarks: '',
      _is_agree: 0,
    }
  },
  persist: {
    storage: sessionStorage,
  },
  getters: {
    type: (state) => state._type,
    goodsId: (state) => state._goodsId,
    goodsName: (state) => state._goodsName,
    sId: (state) => state._sId,
    unit: (state) => state._unit,
    remarks: (state) => state._remarks,
    isAgree: (state) => state._is_agree,
  },
  actions: {
    clear() {
      this._type = ''
      this._goodsId = 0
      this._goodsName = ''
      this._sId = []
      this._unit = ''
      this._remarks = ''
      this._is_agree = 0
    },
  },
})