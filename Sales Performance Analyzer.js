
// Task 1: Create a Function to Calculate Average Sales
// for average sales i will be usuing reduce ()
function calculateAverageSales (sales){
 let totalSales= sales.reduce((total, sales)=> total + sales, 0);
 return totalSales/sales.length;
}
// I used reduce() to sum elements and divide by length to find average value.
// Using sam[ple data to test task 1

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
];
// Testing task 1 
for (let i = 0; i < salesData.length; i++) {
    const averageSales = calculateAverageSales(salesData[i].sales);
    console.log(`${salesData[i].name}'s average sales: ${averageSales}`);
}

// output
Alice's average sales: 13333.333333333334
Bob's average sales: 6833.333333333333
Charlie's average sales: 3500
Diana's average sales: 8900

// Task 2: Create a Function to Determine Performance Rating


function determinePerformanceRating (averageSales) {
    if (averageSales > 10000) {
        return"Excellent";
    } else if (averageSales >= 7000 && averageSales <= 10000){
            return "Good";
    }else if (averageSales >= 4000 && averageSales < 7000) {
        return "Satisfactory";
    }else  {
        return "Needs Improvement";
      }
    }
// Testing task 2:

for (let i = 0; i < performanceData.length; i++) {
    console.log(`${performanceData[i].name} performance rating: ${performanceData[i].performanceRating}`);
}
// output
Alice performance rating: Excellent
Bob performance rating: Satisfactory
Charlie performance rating: Needs Improvement
Diana performance rating: Good


// Task 3: Create a Function to Identify Top and Bottom Performers
// i am using Array.prototype.reduce()

function findTopAndBottomPerformers(salesPeople) {
     
    // Use reduce to find both the top and bottom performer in one pass
    const result = salesPeople.reduce((result, salesPerson) => {
       
        // if total sales higher then its top performer
        if (salesPerson.totalSales > result.topPerformer.totalSales) {
            result.topPerformer = salesPerson;
        }

        // If total sales lower then it will be bottom performer
        if (salesPerson.totalSales < result.bottomPerformer.totalSales) {
            result.bottomPerformer = salesPerson;
        }

        return result;
    }, {
        topPerformer: salesPeople[0], 
        bottomPerformer: salesPeople[0] 
    });

    return result; 
    // Return object with topPerformer and bottomPerformer
}


// Task 4: Combine Functions to Generate a Performance Report
//I will be Calculating average sales and performance rating for each salesperson

function generatePerformanceReport(salesPeople) {
    
    
