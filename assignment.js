// GITHUB LINK NEEDED!!!!!!!!!!!!!!!!!!


/* 1st Problem : Kilometer to meter */

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('Input a Valid Number!')
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(45);
console.log(result);


/* 2nd Problem : Budget Calculator */

function budgetCalculator(watch, mobile, laptop){
    var totalBudget = watch*2 + mobile*3 + laptop*4;
    return totalBudget;
}
var totalAmount = budgetCalculator(50,100,500);
console.log(totalAmount);


/* 3rd Problem : Hotel Cost */

function hotelCost(days){
    var costForTen = 1000;
    var costForTwenty = 800;

    if(days < 0){
        console.log('Input a valid number') 
    }
    else if(days <= 10){
        var totalCost = days * 100; 
    }
    else if(days > 10 && days <= 20){
        var totalCost = (days -10) * 80 + costForTen;
    }
    else if(days > 20 ){
        var totalCost = (days-20) * 50 + costForTen + costForTwenty;
    }
    return totalCost;
}

var cost = hotelCost(39);
console.log(cost);



/* 3rd Problem : Find longest name */

function megaFriend(name) {
    var longestName = "";
  
    name.forEach(function(word) {
      if(word.length > longestName.length) {
        longestName = word;
      }
    });
  
    return longestName;
  }
  
  var findLongestName = megaFriend(["aba", "aa", "ad", "vcd","abaa"]);
  console.log(findLongestName);

