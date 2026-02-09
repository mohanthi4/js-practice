/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */
function nextDate(date) {
  const day = divisionOfDate(date,0,2);
  const isValidDate = isValid(day, 1, 31);

  const month = divisionOfDate(date,3,5);
  const isValidMonth = isValid(month,1,12);

  const year = divisionOfDate(date,6,10); 
  const isValidYear = isValid(year, 0, 9999);

  if (isValidDate && isValidMonth && isValidYear) {
    let nextDay = dayIncrements(day, month, year);
    return nextDay;
  }

  return "Invalid Date";
}

function isValid(date, startOfRange, endOfRange) {
  return date >= startOfRange && date <= endOfRange;
}

function divisionOfDate(date, startIndex, endIndex) {
  return date.slice(startIndex, endIndex) * 1;
}

function dateFormat(date, month, year) {
  return `${date}-${month}-${year}`;
}


function dayIncrements(day, month, year) {
  const simpleEnd = 29;
  const april = "04";
  const june = "06";
  const september = "09";
  const november = "11";

  if (day <= simpleEnd && month != "02") {

    let nextDay = day + 1 + "";
    nextDay = nextDay.padStart(2, "0");
    return dateFormat(nextDay, month, year);
  }

  if (day >= 30) {
    if (day === 30) {
      if (month !== april && month !== june && month !== september && month !== november) {
        let nextDay = day + 1 + "";
        nextDay = nextDay.padStart(2, "0");
        return dateFormat(nextDay, month, year);
      }
    }

    if (day === 31 && month === "12") {
      if (year === "9999") {
        return "Invalid Date";
      }

      let nextMonth = monthIncrements(month);
      let nextYear = parseInt(year) + 1 + "";
      nextYear = nextYear.padStart(4, "0");

      return dateFormat(day, nextMonth, nextYear);
    }

    let nextMonth = monthIncrements(month);
    return dateFormat(day, nextMonth, year);
  }

  if (month === "02") {
    let isLeapYear = leapYear(year);

    if (isLeapYear && day !== 29) {
      let nextDay = day + 1 + "";
      return dateFormat(nextDay, month, year);
    }

    let nextMonth = monthIncrements(month);
    return dateFormat(day, nextMonth, year);
  }

}

function monthIncrements(month) {
  let nextDate = 1;
  let nextMonth;

  if (month === "12") {
    nextMonth = "01";
  } else {
    nextMonth = parseInt(month) + 1 + "";
  }

  nextMonth = nextMonth.padStart(2, "0");
  return nextDate + "-" + nextMonth;
}

function leapYear(year) {
  if (year !== "0000") {
    const yearNotDivisibleBy100 = year % 100 !== 0;
    const yearDivisibleBy4 = year % 4 === 0;
    const yearDivisibleBy400 = year % 400 === 0;

    const isLeapYear = yearNotDivisibleBy100 ? yearDivisibleBy4 : yearDivisibleBy400;
    return isLeapYear;
  }

  return false;
}

function resultMessage(gist, date, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";
  const finalDescription = symbol + gist;

  if (symbol === "❌") {
    const values = outputFragment(date, expected, actual);
    return finalDescription + values;
  }

  return finalDescription;
}

function outputFragment(date, expected, actual) {
  return " '" + date + "' expected : " + expected + " actual : " + actual;
}

function testNextDate(gist, date, expected) {
  const actual = nextDate(date);
  const message = resultMessage(gist, date, expected, actual);

  console.log(message);
}

function allTestCases() {
  testNextDate("normal date increments", "15-04-2025", "16-04-2025");
  testNextDate("30 days increments 29 to 30", "29-01-2025", "30-01-2025");
  testNextDate("31 days last increments 30 to 31", "30-01-2025", "31-01-2025");
  testNextDate("30 days last to next month increments", "30-04-2025", "01-05-2025");
  testNextDate("31 days last to next month increments", "31-01-2025", "01-02-2025");
  testNextDate("february leap year 28 to 29", "28-02-2024", "29-02-2024");
  testNextDate("february leap year", "29-02-2024", "01-03-2024");
  testNextDate("february non leap year", "28-02-2025", "01-03-2025");
  testNextDate("Convert to new year by one vaue in year increments ", "31-12-1884 ", "01-01-1885");
  testNextDate("Four values in a year changes", "31-12-1999  ", "01-01-2000");
  testNextDate("Convering to first new year", "31-12-0001", "01-01-0002");
  testNextDate("Year is in zeroes", "28-02-0000", "01-03-0000");
  testNextDate("Date is zero", "00-01-1994", "Invalid Date");
  testNextDate("Date is more than 31days", "32-01-1111", "Invalid Date");
  testNextDate("Month is zero ", "01-00-1445", "Invalid Date");
  testNextDate("Month exceeds more than 12", "01-13-2025", "Invalid Date");
  testNextDate("Year is exceeding more than four values", "31-12-9999", "Invalid Date");
}

allTestCases();