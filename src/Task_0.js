function Animal(type, name) {

    if(type)
        this.type = type.toString();

    if(name)
        this.name = name.toString();

    this.Run = function(distance) {
        if(typeof distance === "number" && distance >= 0)
            console.log('Животное пробежало ' + distance + '  метров');
        else{
            throw new Error('Неверно указана дистанция');
        }
    };

    this.Eat = function() {
        this.name ? console.log(this.name + ' ест') : console.log('Животное ест');
    }

}

function Dog(name){
    Animal.apply(this, arguments);
    this.type = 'Млекопитающее';
    if(name)
        this.name = name;

    this.Bark = function() {
        this.name ? console.log(this.name + ' лает') : console.log('Животное лает');
    };

    let animalEat = this.Eat;
    this.Eat = function (somebody) {
        if(somebody instanceof Dog){
            throw new Error('Собаки не едят собак');
        }
        animalEat.call(this);
    }

}

//Не обговаривали в ес6 или нет, сделал оба варианта

class AnimalES6 {
    constructor(type, name){
        if(type)
            this.type = type.toString();

        if(name)
            this.name = name.toString();
    }

    Run(distance){
        if(typeof distance === "number" && distance >= 0)
            console.log('Животное пробежало ' + distance + '  метров');
        else{
            throw new Error('Неверно указана дистанция');
        }
    }

    Eat(){
        this.name ? console.log(this.name + ' ест') : console.log('Животное ест');
    }

}

class DogES6 extends AnimalES6{
    constructor(name){
        super('Млекопитающее', name);
        this.type = 'Млекопитающее';
    }

    Bark(){
        this.name ? console.log(this.name + ' лает') : console.log('Животное лает');
    }

    Eat(somebody) {
        if(somebody instanceof DogES6){
            throw new Error('Собаки не едят собак');
        }
        super.Eat();
    }
}

