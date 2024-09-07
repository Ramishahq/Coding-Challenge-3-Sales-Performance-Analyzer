// Task 1: Create a Function to Calculate Average Sales
// for average sales i will be usuing reduce ()
function calculateAverageSales (sales){
 let totalSales= sales.reduce((total, sales)=> total + sales, 0);
 return totalSales/sales.length;
}
// I used reduce() to sum elements and divide by length to find average value.

// Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating (averageSales) {
if (averageSales > 10000) {
    return"Excellent";
} else if (averageSales >= 7000 && averageSales <= 10000){
        return "Good";
}else if (averageSales >= 4000 && averageSales < 7000) {
    return "Satisfactory";
}else if {
    return "Needs Improvement";
  }
}

// Task 3: Create a Function to Identify Top and Bottom Performers
// i am using Array.prototype.reduce()

function findTopAndBottomPerformers(salesPeople) {
    const result = salesPeople.reduce((result, salesPerson) => {
        
        if (salesPerson.totalSales > result.topPerformer.totalSales) {
          result.topPerformer = salesPerson;
        }
    // above I compared current salesPerson with the top performer
    if (salesPerson.totalSales < result.bottomPerformer.totalSales) {
        result.bottomPerformer = salesPerson;
      }
      // above I compared current salesPerson with the bottom performer
      return result;
}, {
    topPerformer: salesPeople[0], 
    bottomPerformer: salesPeople[0] 
});
return result;
}
