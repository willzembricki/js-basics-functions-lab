// Code your solution in this file!
function distanceFromHqInBlocks(blockStart){
    let blockDistance = Math.abs(42 - blockStart) 
    return blockDistance
}
function distanceFromHqInFeet(blockS){
    let blockDistance = Math.abs(42 - blockS); 
    let feetdistance = blockDistance * 264;
    return feetdistance
}
function distanceTravelledInFeet(beginBlock,endBlock){
    let blockDistance = Math.abs(endBlock-beginBlock);
    let travelled = blockDistance * 264 
    return travelled
    
}

let greeting;
function calculatesFarePrice(beginBlock,endBlock){
let feet = distanceTravelledInFeet(beginBlock,endBlock)
if (feet <= 400){
  
  return 0 
}
  else if (feet > 400 && feet <= 2000){
  let billableFeet = feet - 400
  let cost = billableFeet * .02
  return cost 
}
  else if (feet > 2000 && feet < 2500){
let greeting = 25
return greeting 
  }
  else { 
      return `cannot travel that far`
  }
}