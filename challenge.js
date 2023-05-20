// Good Luck! You got this 💪🏾
// Write your code here.

/*
## Tip Calculator Part I

Aisha wants to build a very simple tip calculator
 for whenever she goes eating in a restaurant.
  In her country, it's usual to tip 15% if the
   bill value is between 50 and 300. If the value
    is different, the tip is 20%.

##### Your Task 😃:
1. Calculate the tip, depending on the bill value.
 Create a variable called `bill` for this
2. Print a string to the console containing
 the bill value, the tip, and the final value (bill + tip).
  Example: *'The bill was 275, the tip was 41.25,
   and the total value 316.25'*

Good Luck 😀

*/

let bill = 275;
let tip;
let total;

if (bill>=50 && bill <=300){
    tip = bill*(15/100);
    total = bill + tip;
    console.log(`the bill was ${bill}, the tip is ${tip} and the total value is ${total}`)
}

else{
    tip = bill*(20/100);
    total = tip + bill;
    console.log(`the bill was ${bill}, the tip is ${tip} and the total value is ${total}`);
}

