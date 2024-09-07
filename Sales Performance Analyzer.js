// Task 1: Create a Function to Calculate Average Sales
// for average sales i will be usuing reduce ()
function calculateAverageSales (sales){
 let totalSales= sales.reduce((total, sales)=> total + sales, 0);
 return totalSales/sales.length;
}
// I used reduce() to sum elements and divide by length to find average value.

// Task 2: Create a Function to Determine Performance Rating

funtion determinePerformanceRating (averageSales) {
if (averageSales > 10000) {
    return"Excelent";
} else if (averageSales >= 7000 && averageSales <= 10000){
        return "Good";
}else if (averageSales >= 4000 && averageSales < 7000) {
    return "Satisfactory";
}else if (averageSales < 4000) {
    return "Needs Improvement";
  }
}

