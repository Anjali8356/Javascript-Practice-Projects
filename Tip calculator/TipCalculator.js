
function calculateTip_and_Amount(food,tip){
  tip_percentage=tip/100
  tipAmount=food*tip_percentage
     function sum(food,tipAmount){
        sum=food+tipAmount
        return sum
     }
    total= sum(food,tipAmount)
     return total
   }
console.log(calculateTip_and_Amount(300,20))