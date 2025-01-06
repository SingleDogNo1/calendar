import type { SloarDateInfo } from '../types';

import { getDateString } from './utils';
import { getTiaoXiuDay } from './tiao_xiu';

// 星期
const weekMap = ['日', '一', '二', '三', '四', '五', '六'];

// 公历日期转时间戳
export function getTimestampBySolar(sYear: number, sMonth: number, sDay: number) {
  return Date.UTC(sYear, sMonth - 1, sDay, 0, 0, 0);
};

/**
 * 通过时间戳获取日期
 * @param timestamp 时间戳
 * @returns
 */
export function getSolarByTimestamp(timestamp: number): SloarDateInfo {
  let now = new Date(timestamp);
  let week = now.getDay();
  let item = {
    sYear: now.getFullYear(),
    sMonth: now.getMonth() + 1,
    sDay: now.getDate(),
    week: week,
    weekZH: '星期' + weekMap[week],
    date: getDateString(now.getFullYear(), now.getMonth() + 1, now.getDate()),
    tiaoXiu: getTiaoXiuDay(now.getFullYear(), now.getMonth() + 1, now.getDate())
  };
  return item;
}

/**
 * 获取公历一个月天数
 * @param sYear 公历年
 * @param sMonth 查询的月份
 * @returns 当月天数
 */
export function getSolarMonthDays(sYear: number, sMonth: number) {
  let day = new Date(sYear, sMonth, 0);
  return day.getDate();
}