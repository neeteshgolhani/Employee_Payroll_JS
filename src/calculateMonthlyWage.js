// Constants
const hourlyWage = 20;
const partTimeHours = 4;
const fullTimeHours = 8;
const workingDaysPerMonth = 20;
const maxWorkingHours = 160;

// Function to get work hours based on work type
function getWorkHours(workType) {
  switch (workType) {
    case "part-time":
      return partTimeHours;
    case "full-time":
      return fullTimeHours;
    default:
      return 0;
  }
}

// Function to calculate monthly wage
function calculateMonthlyWage() {
  let totalWage = 0;
  let totalHours = 0;
  let workingDays = 0;
  const dailyWages = [];

  while (totalHours < maxWorkingHours && workingDays < workingDaysPerMonth) {
    // Generate a random number to determine the work type
    const random = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2 (inclusive)
    let workType;

    if (random === 0) {
      workType = "part-time";
    } else if (random === 1) {
      workType = "full-time";
    } else {
      workType = "";
    }

    // Get the work hours based on the work type
    const workHours = getWorkHours(workType);

    // Calculate the daily wage
    const dailyWage = hourlyWage * workHours;

    // Add the daily wage to the total wage
    totalWage += dailyWage;

    // Update the total hours and working days
    totalHours += workHours;
    workingDays++;

    // Store the daily wage in the array
    dailyWages.push(dailyWage);
  }

  return {
    totalWage,
    dailyWages,
  };
}

// Calculate the monthly wage and daily wages
const { totalWage, dailyWages } = calculateMonthlyWage();

console.log("Monthly wage: $" + totalWage);
console.log("Daily wages:", dailyWages);
