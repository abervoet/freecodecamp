/*  https://www.freecodecamp.com/challenges/friendly-date-ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: 
if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, 
the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

*/
var currentYear = 2016;
var strMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getOrdinalDay(day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return day + 'st';
    case 2:
    case 22:
      return day + 'nd';
    case 3:
    case 23:
      return day + 'rd';
    default:
      return day + 'th';
  }
}

function getStrMonth(month) {
  return strMonths[month] + " ";
}

function getStrYear(year) {
  return ", " + year;
}

function strToDate(str) {
  var ymd = str.split('-');
  return new Date(Date.UTC(ymd[0], ymd[1] - 1, ymd[2]));
}

function dayDiff(date1, date2) {
  if (date2.getUTCMonth() === date1.getUTCMonth()) {
    return date1.getUTCDate() - date2.getUTCDate();
  }
  return 0;
}

function monthDiff(date1, date2) {
  var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
  var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
  return month2 - month1;
}

function makeFriendlyDates(arr) {
  var date1 = strToDate(arr[0]), date2 = strToDate(arr[1]);

  var y1 = date1.getFullYear(), y2 = date2.getFullYear(),
    m1 = date1.getUTCMonth(), m2 = date2.getUTCMonth(),
    d1 = date1.getUTCDate(), d2 = date2.getUTCDate();

  var dDiff = dayDiff(date1, date2);
  var mDiff = monthDiff(date1, date2);
  var res;

  // same exact date  (["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].)
  if (arr[0] === arr[1]) {
    return [getStrMonth(m1) + getOrdinalDay(d1) + getStrYear(y1)];
  }

  // same month and year (["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].)
  if (m1 == m2 && y1 == y2) {
    return [getStrMonth(m1) + getOrdinalDay(d1), getOrdinalDay(d2)];
  }

  // different year but less than 12months apart ["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"]
  if (mDiff < 12 && y1 !== y2) {
    return [getStrMonth(m1) + getOrdinalDay(d1), getStrMonth(m2) + getOrdinalDay(d2)];
  }

  // same month, different year, less than 1year diff  ["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
  if (mDiff <= 12 && dDiff > 0) {
    return [getStrMonth(m1) + getOrdinalDay(d1) + getStrYear(y1), getStrMonth(m2) + getOrdinalDay(d2)];
  }

  // same year, different month ["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
  if (mDiff < 12) {
    return [getStrMonth(m1) + getOrdinalDay(d1) + getStrYear(y1), getStrMonth(m2) + getOrdinalDay(d2)];
  }

  //general case : ["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"]
  return [getStrMonth(m1) + getOrdinalDay(d1) + getStrYear(y1), getStrMonth(m2) + getOrdinalDay(d2) + getStrYear(y2)];
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);


/*

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].

*/