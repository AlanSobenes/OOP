class Card{
    constructor(name, cost,){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
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
    
    hardAlgorithm(target){
        if( target instanceof Unit){
            target.resilience += 3;
            console.log(`${target.name} has increased Resilience to ${target.resilience}`);
        } else {
            throw new Error('Target must be a Unit!');
        }
    }
            

    unhandledPromise(target){
        if( target instanceof Unit){
            target.resilience -= 2;
            console.log(`${target.name} has decreased Resilience to ${target.resilience}`);
        } else {
            throw new Error('Target must be a Unit!');
        }
    }
            

    pairProgramming(target){
        if( target instanceof Unit){
            target.power += 2;
            console.log(`${target.name} has increased Power to ${target.power}`)
        } else {
            throw new Error('Target must be a Unit!');
        }
    }


}

const unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
const unit2 = new Unit('Black Belt Ninja', 4, 5, 4);
const effect1 = new Effect('Hard Algorithm', 2, 'Increase Target\'s resilience by 3', 'resilience', +3);
const effect2 = new Effect('Unhandled Promise', 1, 'Reduce target\'s resilience by 2', 'resilience', -2);
const effect3 = new Effect('Pair Programming', 3, 'Increase target\'s power by 2', 'power', +2);

effect1.hardAlgorithm(unit1);
effect2.unhandledPromise(unit2);
effect3.pairProgramming(unit1);
unit1.attack(unit2);


