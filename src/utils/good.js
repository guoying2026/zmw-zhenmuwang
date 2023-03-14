/**
 * 格式化库存单位
 * @param {Number} unit
 * @returns {string}
 */
export const formatUnit = (unit) => {
  // 0吨，1立方，2根，3张，4块，5平方，6米，7条，8件
  const unitArr = ['吨','立方','根','张','块','平方','米','条','件','个']
  let unitName = unitArr[unit]
  if (!unitName) {
    unitName = unitArr[0]
  }
  return unitName
}
