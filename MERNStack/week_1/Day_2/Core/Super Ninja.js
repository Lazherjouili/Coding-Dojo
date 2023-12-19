class Ninja{
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;

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

class Sensei extends Ninja{
    constructor(name,health=200,speed=10,strength=10,wisdom=10){
        super(name,health,speed,strength);
        this.wisdom=wisdom;
    }
    speakWisdom(){
        const message = super.drinkSake();
        return this
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom().showStats()
