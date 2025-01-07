# 中国农历公历换算算法

## 请求参数

[Params](https://github.com/SingleDogNo1/calendar/blob/main/src/types.ts#L50)

| props  |          desc           |  type  | default |
| :----: | :---------------------: | :----: | :-----: |
|  year  | 要查询的年份(公历/阴历) | number |    -    |
| month  | 要查询的月份(公历/阴历) | number |    -    |
|  day   | 要查询的日期(公历/阴历) | number |    -    |
| isLeap | (查询阴历时)是否为闰月  | number |    -    |

## 返回值格式

[DateInfo](https://github.com/SingleDogNo1/calendar/blob/main/src/types.ts#L33)

## 方法调用

```js
import calendar from '@singledog/calendar'

// 按照农历日期查询: 2023年闰二月初一
calendar.getDateByLunar(2023, 2, 1, true)
/* ==> {
  sYear: 2023,
  sMonth: 3,
  sDay: 22,
  week: 3,
  weekZH: '星期三',
  date: '2023-03-22',
  tiaoXiu: -1,
  zodiac: '白羊座',
  lYear: 2023,
  lMonth: 2,
  lDay: 1,
  isLeap: true,
  lMonthZH: '闰二月',
  lDayZH: '初一',
  gzYearZH: '癸卯',
  gzMonthZH: '乙卯',
  gzDayZH: '己卯',
  animal: '兔',
  term: '',
  festival: [ '世界水日' ]
} */

// 按照农历日期查询: 2023年二月初一
calendar.getDateByLunar(2023, 2, 1)

/* ==> {
  sYear: 2023,
  sMonth: 2,
  sDay: 20,
  week: 1,
  weekZH: '星期一',
  date: '2023-02-20',
  tiaoXiu: -1,
  zodiac: '双鱼座',
  lYear: 2023,
  lMonth: 2,
  lDay: 1,
  isLeap: false,
  lMonthZH: '二月',
  lDayZH: '初一',
  gzYearZH: '癸卯',
  gzMonthZH: '甲寅',
  gzDayZH: '己酉',
  animal: '兔',
  term: '',
  festival: []
} */

// 公历日期：2025年1月6日
calendar.getDateBySolar(2025,1,6);
// 今天
calendar.getToday();
/* ==> {
  sYear: 2025,
  sMonth: 1,
  sDay: 6,
  week: 1,
  weekZH: '星期一',
  date: '2025-01-06',
  tiaoXiu: -1,
  zodiac: '摩羯座',
  lYear: 2024,
  lMonth: 12,
  lDay: 7,
  isLeap: false,
  lMonthZH: '腊月',
  lDayZH: '初七',
  gzYearZH: '甲辰',
  gzMonthZH: '丁丑',
  gzDayZH: '乙亥',
  animal: '龙',
  term: '',
  festival: []
} */
```
