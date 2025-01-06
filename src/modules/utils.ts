// 格式化日期字符串
export function getDateString(...param: number[]) {
  return param.map(function (value) {
    return ('' + value).padStart(2, '0');
  }).join('-');
}

// 农历有效期范围
export const LUNAR_VALIDITY_RANGE = {
  MIN_YAER: 1900,
  MAX_YAER: 2100,
  MIN_MONTH: 1,
  MAX_MONTH: 12,
  MIN_DAY: 30,
  MAX_DAY: 31
}