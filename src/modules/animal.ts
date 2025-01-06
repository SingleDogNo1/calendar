import { LUNAR_VALIDITY_RANGE } from './utils'

const animalMap = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

/**
 * 获取公历年对应的生肖
 * @param sYear 查询的年份
 * @returns 生肖
 */
export function getAnimalYear(sYear?: number) {
  if (!sYear) return
  if (sYear - LUNAR_VALIDITY_RANGE.MIN_YAER < 0) {
    throw new Error(`The minimum year for query is ${LUNAR_VALIDITY_RANGE.MIN_YAER}`);
  }

  // 1984年为鼠年
  let diff = sYear - 1984;
  let animal = diff % 12;
  return animalMap[animal > -1 ? animal : animal + 12];
}