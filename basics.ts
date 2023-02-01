let age: number = 24
age = 12
let userName: string
userName = 'Max'
let isInstructor: boolean
isInstructor = true

// let hobbies: null
// hobbies = 12

let hobbies: string[]
hobbies = ['Sports', 'Cooking']

type Person = {
    name: string
    age: number
}
let person: Person 
person = {
    name: 'Max',
    age:32
}

let people: Person[]

let course: string | number = 'React - The Complete Guide'
course = 12

function add(a:number, b: number) {
    return a + b
}

function print(value: any) {
    console.log(value)
}

function insertAtBeginning<T>(arr: T[], value: T) {
    const newArray = [value, ...arr]
    return newArray
}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)
// updatedArray[0].split('')

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName:string, 
        public lastName: string,
        public age: number,
        private courses: string[]) {
    }

    enroll(courseName: string) {
        this.courses.push(courseName)
    }
    listCourses() {
        return this.courses.slice()
    }

}

const student = new Student('Max', 'Schwarz', 32, ['Angular'])
student.enroll('REACT')
student.listCourses()

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;
max  = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!')
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Helllo!')
    }
}