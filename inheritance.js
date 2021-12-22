class Parent {
    constructor () {
        this.fatherName = "Nur";
    }
};

class Child extends Parent {
    constructor(name) {
        super()
        this.name = name ;
    }
    getFullName (){
        return this.name  + " " + this.fatherName;
    }
};

const baby1 = new Child("Sifat");
console.log(baby1.getFullName());