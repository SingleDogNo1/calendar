# 中国农历公历换算算法

## 方法调用

```js
import calendar from 'calendar'

// 农历日期: 2024年腊月初七
calendar.getDateByLunar(2024,12,7,false);

// 公历日期：2025年1月6日
calendar.getDateBySolar(2025,1,6);

// 今天
calendar.getToday();
```

## 返回结果

返回值类型参考

```js
{
  sYear: 2025,
  sMonth: 1,
  sDay: 6,
  week: 1,
  weekZH: '星期一',
  date: '2025-01-06',
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
  festival: ''
}
```
