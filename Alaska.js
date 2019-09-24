var Dog=require('./Dog');
var Food=require('./Food');

class Alaska extends Dog{
    constructor(food,envi,color,name,num){
        super(color,name,num);
        this.food=new Food();
        this.envi=envi;
    }
    intro(){
        console.log(this);

    }
}
module.exports=Alaska;
