import { defineStore } from "pinia"

/**
 * 记录用户已选择的商品规格
 * 存储格式：
 * ``` 
 * [
 *  {
 *    type: {0|1}, // 判断是微店商品还是买木头商品
 *    goods_id: <string>, // 商品id
 *    specs: [ // 已选择的规格
 *      {
 *        s_id: <string>, // 规格id
 *        specification: <string>, // 规格，例如244cm*122cm*1.5cm
 *        select_count: <number>, // 购买数量
 *        is_add_manual: <0|1>, // 是否为手动添加的规格
 *      },
 *      ...
 *    ],
 *    unit: <string>, // 选择的购买单位
 *    order_notes: <string>, // 填写的备注
 *  },
 *  ...
 * ]
 * ```
 */
export const useSelectedGoodsSpecsStore = defineStore('selectedGoodsSpecsStore', {
  /**
   * @typedef SpecsList
   * @type {object}
   * @property {string|number} s_id 规格id
   * @property {string} specification 规格，例如244cm*122cm*1.5cm
   * @property {number} select_count 购买数量
   * @property {'0'|'1'} is_add_manual 是否为手动添加的规格
   * @typedef GoodsList
   * @type {object}
   * @property {'0'|'1'} type // 判断是微店商品还是买木头商品
   * @property {string|number} goods_id 商品id
   * @property {SpecsList[]} specs 选择的规格
   * @property {string} unit 选择的购买单位
   * @property {string} order_notes 填写的备注
   * @returns {{list: GoodsList[]}}
   */
  state: () => {
    return {
      list: [],
    }
  },
  persist: true,
  actions: {
    getGoodsByGoodsId(type, goods_id) {
      const index = this.list.findIndex(item => Number(item.goods_id)==Number(goods_id))
      if (index > -1) {
        return this.list[index]
      } else {
        this.list.push({
          type: type,
          goods_id: goods_id,
          specs: [],
          unit: -1,
          order_notes: '',
        })
        return this.list[this.list.length - 1]
      }
    },
    getSpecBySpec(type, goods_id, s_id, specification) {
      const goods = this.getGoodsByGoodsId(type, goods_id)
      const index = goods.specs.findIndex(item => {
        if (Number(s_id) > 0) {
          return Number(item.s_id) == Number(s_id)
        } else {
          return item.specification == specification
        }
      })
      if (index > -1) {
        return goods.specs[index]
      } else {
        const sid =  (!!Number(s_id)) ? s_id + '' : '0'
        goods.specs.push({
          s_id: sid,
          specification: specification,
          select_count: 0,
          is_add_manual: Number(sid) === 0 ? 1 : 0,
        })
        return goods.specs[goods.specs.length - 1]
      }
    },
    setUnit(type, goods_id, unit) {
      const goods = this.getGoodsByGoodsId(type, goods_id)
      goods.unit = unit
    },
    setSpecs(type, goods_id, s_id, specification, select_count) {
      const specs = this.getSpecBySpec(type, goods_id, s_id, specification)
      specs.select_count = select_count
    },
    setOrderNotes(type, goods_id, order_notes) {
      const goods = this.getGoodsByGoodsId(type, goods_id)
      goods.order_notes = order_notes
    },
  },
})