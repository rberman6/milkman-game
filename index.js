// VARIABLES: 1. milk COUNT, 2. total CASH, 3. SELL-MILK COUNT 4. Hire a worker
// 1. Click event on cow. Sell milk Button appears. Milk count goes up by one increment & Sell Milk goes up by 0.50 increment when cow is clicked.
// if sell milk button is clicked deduct the sell milk count and add it to the total CASH
// when total CASH reaches $25.00 create a button element (hire a worker with variable) and append it to "cash div".
// add an event click on the "hire a worker" that deducts $25 from total cash

// VARIABLES FOR GAME
let milkCount = 0;
let totalCash = 0;
let sellMilk = 0.5;
let hireWorker = 25.0;
// Target cow image & add event listener. Target milkjar paragraph tag to update the milkcount
const cow = document.querySelector(".cow");
const milkJar = document.querySelector("#milkjar-count");

cow.addEventListener("click", function () {
  console.log("clicked");
  milkCount = milkCount + 1;
  milkJar.textContent = `${milkCount}`;
  //   Target create sell milk button
  const sellMilkBtn = document.querySelector("#sell-milk");
  sellMilkBtn.style.visibility = "visible";
  sellMilk = 
  
});
