/* group:lazher jouili
         yamna jouili
         khaled hannachi
*/         
// solution 1  
var firstMessage = " JS is awesome!";
var secondeMessage = "Happy decade of JS!";
var thirdMessage = "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈";

for (var year = 1996; year <= 2023; year++) {
  if (year == 1996) {
    console.log(year + firstMessage);
  } else if ((year - 1996) % 10 == 0) {
    console.log(secondeMessage);
  } else {
    if (year == 2023) {
      console.log(thirdMessage);
    } else {
      console.log(year + firstMessage);
    }
  }
}
// solution 2
var count = 0;
for (var i = 1996; i < 2024; i++) {
    if (i == 2023) {
        console.log("HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈");
    }else{
        if (count==10) {
            console.log("happy decade of JS!");
            count=0;
        } else {
            console.log(i+" JS is awesome!");
        }
        
        count = count + 1;

  }
  
}

