class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power=power
        this.resilience=resilience
    }
    attack(target){
        target.resilience-=this.power
        return this
    }
}

class Effect extends Card{
    constructor(name,cost,text){
        super(name,cost)
        this.text=text
    }

}

class Red_Belt_Ninja extends Unit{
    constructor(name="Red Belt Ninja",cost=3,power=3,resilience=4){
        super(name,cost,power,resilience)
    }
    
}

class black_Belt_Ninja extends Unit{
    constructor(name="black Belt Ninja",cost=4,power=5,resilience=4){
        super(name,cost,power,resilience)
    }
    
}

class Hard_Algorithm extends Effect{
    constructor(name="Hard Algorithm",cost=2,text="increase target's resilience by 3"){
        super(name,cost,text)
    }
    play(target){
        target.resilience+=3
        return this
    }
}

class Unhandled_Promise_Rejection extends Effect{
    constructor(name="Unhandled Promise Rejection",cost=1,text="reduce target's resilience by 2"){
        super(name,cost,text)
    }
    play(target){
        target.resilience-=2
        return this
    }
}

class Pair_Programming extends Effect{
    constructor(name="Pair Programming",cost=3,text="increase target's power by 2"){
        super(name,cost,text)
    }
    play(target){
        target.power+=2
        return this
    }
}

const RedBeltNinja= new Red_Belt_Ninja()
const HardAlgorithm= new Hard_Algorithm ()

HardAlgorithm.play(RedBeltNinja)
console.log(RedBeltNinja);

const BlackBeltNinja=new black_Belt_Ninja()
const UnhandledPromiseRejection=new Unhandled_Promise_Rejection()
UnhandledPromiseRejection.play(RedBeltNinja)

const PairProgramming=new Pair_Programming()
PairProgramming.play(RedBeltNinja)

RedBeltNinja.attack(BlackBeltNinja)

console.log(RedBeltNinja);
console.log(BlackBeltNinja);