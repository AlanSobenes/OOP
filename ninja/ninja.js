class Ninja {
    constructor (name, health, speed=3, strength=3){
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

const ninja1 = new Ninja("Ryu", 100, 15, 10);

