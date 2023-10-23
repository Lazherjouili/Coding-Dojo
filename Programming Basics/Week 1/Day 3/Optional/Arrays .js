var arr1 = [8, 6, 7, 5, 3, 0, 9];
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var arr3 = [6, 2, 12, 14, -24, 5, 0];
// loop 1
for(var i=0;i<=arr1.length-1;i++){
    console.log(arr1[i]);
}
// loop 2
var sum = 0;
for (var i = 0; i <= arr2.length - 1; i++) {
  sum = sum + arr2[i];
  console.log(sum);
  console.log(i);
}

// loop 3
for(var i=0;i<=arr3.length-1;i++){
    if(arr3[i]>5){
        console.log(arr3[i]);
    }
}

// ninja 
for(var i=0;i<=arr3.length-1;i++){
    if(arr3[i]<5){
        (arr3[i]="No dice");
    }
    else{
        console.log(arr3[i])
    }
}

