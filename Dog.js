var Animal = require('./Animal')
class Dog extends Animal{
    constructor(color,name,num){
        super(name,num);
        this.color =color;
    }
    intro(){
        console.log(this);

    }
}

module.exports=Dog;
