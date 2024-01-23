const obj = {
    name: 'bruce',
    age: 25,
    'key-three':true,

    sayMyName : function() {
        console.log(this.name)
    }
}

obj.hobby = 'Football'




//object constructor

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person('John','Doe',50,'blue')
const myMohter = new Person('Sally','Rally',48,'green')

console.log(myFather)
console.log(myMohter)


// object.keys()

const object = {a:1, b:2, c:3}
const keysArray = Object.keys(object)

console.log(keysArray)


for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`)
}