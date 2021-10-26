class Card{
    constructor(name, cost,){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    
    attack(target){
        if( target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name}! ${target.name}\'s Resilience is now ${target.resilience}`)
        } else {
            throw new Error('Target must be a Unit!')
        }
    }

}


class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if( target instanceof Unit){
            if(this.stat == 'power'){
                target.power += this.magnitude;
                console.log(`${target.name} has increased Power to ${target.power}`)
            }
            if(this.stat == 'resilience'){
                target.resilience += this.magnitude;
                console.log(`${target.name} has changed resilience to ${target.resilience}`)
            }
            
        } else {
            throw new Error('Target must be a Unit!');
        }
    }
}

const unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
const unit2 = new Unit('Black Belt Ninja', 4, 5, 4);
const effect1 = new Effect('Hard Algorithm', 2, 'Increase Target\'s resilience by 3', 'resilience', 3);
const effect2 = new Effect('Unhandled Promise', 1, 'Reduce target\'s resilience by 2', 'resilience', -2);
const effect3 = new Effect('Pair Programming', 3, 'Increase target\'s power by 2', 'power', 2);

effect1.play(unit1);
effect2.play(unit1);
effect3.play(unit1);
unit1.attack(unit2);

console.log(unit2)


