//!====================1
var hello;
console.log(hello);  
hello = 'world';                                 

//!====================2

var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test(); //magnet 
needle = 'haystack';

//!====================3

var brendan; 
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan= 'super cool';
console.log(brendan); //super cool

//!====================4

var food;
function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food  = 'gone';
    }
food = 'chicken';
console.log(food); // chicken
eat(); // half-chicken

//!====================5
var mean = function() {
        var food ;
        food = "chicken";
        console.log(food);
        food= "fish";
        console.log(food);
    }
mean(); //chicken  , fish
console.log(food); 
console.log(food);
//!====================6
var genre;
function rewind() {
        var genre ;
        genre = "rock";
        console.log(genre);
        genre= "r&b";
        console.log(genre);
    }
console.log(genre); 
genre = "disco";
rewind(); // rock , r&b
console.log(genre); // disco
//!====================7
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); //san jose
learn(); // seattle , burbank
console.log(dojo); // san jose 
//!====================8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));





