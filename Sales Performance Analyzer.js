// Task 1: Create a Function to Calculate Average Sales
// for average sales i will be usuing reduce ()
function calculateAverageSales (sales){
 let totalSales= sales.reduce((total, sales)=> total + sales, 0);
 return totalSales/sales.length;
}
// I used reduce() to sum elements and divide by length to find average value.
