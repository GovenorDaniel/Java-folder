
class Human{
    constructor(name,colour,gender,age){

    this.name=name
    this.colour=colour
    this.gender=gender
    this.age=age

} 
    talk(){
      return "Hi," + "I'm" + this.name + "You're Welcome to my page"
    }

    
}

class Man extends Human{
    features(){
        return this.name + "is a" + this.gender

    }
}

const firstperson = new Human("Govenor,","Black","Male",55)
console.log(firstperson.talk())

const secondperson = new Human("Samuel,","Brown","Male",40)
console.log(secondperson.talk())

const thirdperson = new Man("Abena","red","Female", 60)
console.log(thirdperson.features())


