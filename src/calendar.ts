import { getDateInfo } from './modules/date';
import { getTimestampBySolar } from './modules/solar';
import { getTimestampByLunar } from './modules/lunar';

export default {
  getDateBySolar: function (sYear: number, sMonth: number, sDay: number) {
    let timestamp = getTimestampBySolar(sYear, sMonth, sDay);
    return timestamp ? getDateInfo(timestamp) : null;
  },
  getDateByLunar: function (lYear: number, lMonth: number, lDay: number, isLeap: boolean) {
    let timestamp = getTimestampByLunar(lYear, lMonth, lDay, isLeap);
    return timestamp ? getDateInfo(timestamp) : null;
  },
  getToday: function () {
    let timestamp = Date.now();
    return getDateInfo(timestamp);
  }
};