let MyDate = new Date();
console.log(MyDate);
console.log(MyDate.toString()); // Converts date to string
console.log(MyDate.toDateString()); // Converts date to a readable string format
console.log(MyDate.toISOString()); // Converts date to ISO format
console.log(MyDate.toLocaleString()); // Converts date to locale-specific string format
console.log(MyDate.toLocaleDateString()); // Converts date to locale-specific date format
console.log(MyDate.toLocaleTimeString()); // Converts date to locale-specific time format
console.log(MyDate.getFullYear()); // Gets the year (e.g., 2023
console.log(MyDate.getMonth()); // Gets the month (0-11, where 0 is January)
console.log(MyDate.getDate()); // Gets the day of the month (1-31)
console.log(MyDate.getDay()); // Gets the day of the week (0-6, where 0 is Sunday)
console.log(MyDate.getTime()); // Gets the time in milliseconds since January 1, 1970
console.log(MyDate.getHours()); // Gets the hour (0-23)

let MyDate2 = new Date(2003, 12, 8);
console.log(MyDate2); // Creates a date object for December 8, 2003
console.log(MyDate2.toString()); // Converts date to string
console.log(MyDate2.toLocaleString()); // Converts date to a readable string format


let MyDate3 = new Date("12-08-2003");
console.log(MyDate3); // Creates a date object from a string
console.log(MyDate3.toString()); // Converts date to string


// Mydate.toLocaleString('en-IN', {
//     weekday: 'long', // Full name of the day
//     year: 'numeric', // Full numeric year
//     month: 'long', // Full name of the month
//     day: 'numeric', // Numeric day of the month
//     hour: '2-digit', // Two-digit hour
//     minute: '2-digit', // Two-digit minute
//     second: '2-digit' // Two-digit second
// });
console.log(MyDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})); // Formats date in a readable way for Indian locale
