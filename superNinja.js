class Ninja {
    constructor (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this)
    }

    drinkSake(){
        this.strength += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10 ,wisdom=10){
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake()
        console.log(`🥋${this.name} has a strength of 🦾${this.strength} and Says Most martial artists want to know how A technique is done, A seasoned Sensei will demonstrate why 🤔`);
        
    }
}

const sensei1 = new Sensei('Master Shredder')

sensei1.speakWisdom()
console.log(sensei1)