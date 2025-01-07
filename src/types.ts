export interface SloarDateInfo {
  /** 公历年 */
  sYear: number,
  /** 公历月 */
  sMonth: number,
  /** 公历日 */
  sDay: number,
  /** 星期几 */
  week: number,
  /** 星期几(中文) */
  weekZH: string,
  /** 日期(YYYY-MM-DD) */
  date: string
  /**是否调休 -1: 不调休; 0: 调休(工作日); 1: 调休(休息) */
  tiaoXiu: number
}

export interface LunarDateInfo {
  /** 农历年 */
  lYear: number,
  /** 农历月 */
  lMonth: number,
  /** 农历日 */
  lDay: number,
  /** 是否闰月 */
  isLeap: boolean,
  /** 农历月(中文) */
  lMonthZH: string,
  /** 农历日(中文) */
  lDayZH: string
}

export interface DateInfo extends SloarDateInfo, LunarDateInfo {
  /** 生肖 */
  animal: string
  /** 农历节气 */
  term: string
  /** 当天干支年 */
  gzYearZH: string
  /** 当天干支月 */
  gzMonthZH: string
  /** 当天干支日 */
  gzDayZH: string
  /** 当天星座 */
  zodiac: string
  /** 今日节日 */
  festival: string[]
}

export interface Params {
  /** 查询的年份 */
  year: number
  /** 查询的月份 */
  month: number
  /** 查询的日期 */
  day: number,
  /** (查询农历时)是否闰月 */
  isLeap?: boolean
}