class Animal {
    constructor(name, number) {
        this.name = name;
        this.cost = number;
    }
    intro() {
        console.log(this.name, "\n", this.cost);

    }

}
module.exports=Animal;
