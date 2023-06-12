// Constants
const hourlyWage = 20;
const partTimeHours = 4;
const fullTimeHours = 8;
const workingDaysPerMonth = 20;

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

  for (let day = 1; day <= workingDaysPerMonth; day++) {
    // Generate a random number to determine the work type
    const random = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2 (inclusive)

    // Get the work hours based on the random number
    const workHours = getWorkHours(random === 0 ? "part-time" : random === 1 ? "full-time" : "");

    // Calculate the daily wage
    const dailyWage = hourlyWage * workHours;

    // Add the daily wage to the total wage
    totalWage += dailyWage;
  }

  return totalWage;
}

// Calculate the monthly wage
const monthlyWage = calculateMonthlyWage();

console.log("Monthly wage: $" + monthlyWage);


