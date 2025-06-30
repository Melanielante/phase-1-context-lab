/* Your Code Here */

// Creates a single employee record from an array
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

// Creates an array of employee records from nested arrays
function createEmployeeRecords(arrOfArrs) {
  return arrOfArrs.map(createEmployeeRecord);
}

// Adds a timeIn event to an employee's record
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour)
  });
  return this;
}

// Adds a timeOut event to an employee's record
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour)
  });
  return this;
}

// Calculates hours worked on a given date
function hoursWorkedOnDate(targetDate) {
  const timeIn = this.timeInEvents.find(e => e.date === targetDate);
  const timeOut = this.timeOutEvents.find(e => e.date === targetDate);
  return (timeOut.hour - timeIn.hour) / 100;
}

// Calculates wages earned on a given date
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}


// Finds an employee by their first name
function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(e => e.firstName === firstNameString);
}

// Calculates total payroll for all employees
function calculatePayroll(employees) {
  return employees.reduce((total, emp) => total + allWagesFor.call(emp), 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

