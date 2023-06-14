// Daily wage object
const dailyWageObject = {
  day1: { wage: 100 },
  day2: { wage: 80 },
  day3: { wage: 120 },
  day4: { wage: 160 },
  day5: { wage: 200 },
  day6: { wage: 80 },
  day7: { wage: 160 },
};

// a. Calculate total wage using Object.values and reduce helper functions
const totalWage = Object.values(dailyWageObject).reduce((total, { wage }) => total + wage, 0);
console.log("Total Wage:", totalWage);

// b. Show the Day along with Daily Wage using Object.entries and Map helper function
const dailyWageWithDay = new Map(Object.entries(dailyWageObject).map(([day, { wage }]) => [`Day ${day.slice(3)}`, wage]));
console.log("Daily Wage with Day:");
dailyWageWithDay.forEach((wage, day) => {
  console.log(`${day}: $${wage}`);
});

// c. Show Days when Full-time wage of 160 using Object.entries and filter helper function
const fullTimeWageDays = Object.entries(dailyWageObject)
  .filter(([_, { wage }]) => wage === 160)
  .map(([day]) => `Day ${day.slice(3)}`);
console.log("Days when Full-time wage of 160 were earned:", fullTimeWageDays);

// d. Find the first occurrence when Full Time Wage was earned using Object.entries and find helper function
const firstFullTimeWageDay = Object.entries(dailyWageObject).find(([_, { wage }]) => wage === 160);
console.log("First occurrence when Full Time Wage was earned:", firstFullTimeWageDay ? `Day ${firstFullTimeWageDay[0].slice(3)}` : "Not found");

// e. Check if every element of Full Time Wage is truly holding Full time wage using Object.values and every helper function
const isFullTimeWage = Object.values(dailyWageObject).every(({ wage }) => wage === 160);
console.log("Every element holding Full Time Wage:", isFullTimeWage);

// f. Check if there is any Part Time Wage using Object.values and some helper function
const hasPartTimeWage = Object.values(dailyWageObject).some(({ wage }) => wage < 160);
console.log("Has any Part Time Wage:", hasPartTimeWage);

// g. Find the number of days the Employee Worked using Object.keys and length
const numDaysWorked = Object.keys(dailyWageObject).length;
console.log("Number of days the Employee Worked:", numDaysWorked);


