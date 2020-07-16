function isLeapYear(year) {
    if (year > 1582) {
      if (year%4 == 0) {
          if (year%100 == 0 && year%400 !== 0) {
              return false;
          }
          return true;
      }
    }
    return false;
}

module.exports = isLeapYear;