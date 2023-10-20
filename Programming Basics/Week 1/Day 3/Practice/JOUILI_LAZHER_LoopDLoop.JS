// because there are tasks repeatedly
// the loop start with 0
// the loop stop at 6
// The loop will know when to stop based on the condition
// incremented by a fixed value for each iteration
// we need one variable (i)

for(var i=0;i<7;i++){
    if(i==6){
        console.log("stop giving piece of candy");
    }
    else if(i%2==0 && i!=0){
        console.log("piece of candy");
    }
}
