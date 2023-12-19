class Ninja{
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;

    }
    sayName(){
        console.log(`the Ninja's ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`the Ninja's ${this.name} has strength is ${this.strength} and speed is ${this.speed} and health is ${this.health}`);
        return this;
    }
    drinkSake() {
        this.health+=10
        return this
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().drinkSake()
ninja1.showStats()
