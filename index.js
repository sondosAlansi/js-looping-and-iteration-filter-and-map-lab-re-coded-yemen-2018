// Code your solution here:
function driversWithRevenueOver(driver,revenue){
 return driver.filter(function(driver){
    
    return driver.revenue>revenue;
  })
  
}

function driverNamesWithRevenueOver(driver,revenue){

  let d1= driver.filter(function(driver){
    
  
   
   return  driver.revenue>revenue;
      
      
    });
    let d2= d1.map(function(d1){
       
       return d1.name;
     });
    
    return d2;
}



function exactMatch(driver,prop){
  return driver.filter(function(driver){
    for(let keys in prop){
    let test= driver[key]===prop[keys];
    }
     return test;
  });
  
}