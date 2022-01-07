
function soma(a: number, b: number) {
  return a + b
}

// const readFile = async () => {return 10}

let c = 'banana1'

c = soma(1, 2)

// Interfaces

interface Point {
  x: number,
  y: number
}

const pointA: Point = { x: 1, y: 2 }

interface Person {
  name: string,
  age: number,
  gender?: 'm' | 'f',
  [key: string]: string | number
}

const jack: Person = { name: 'jack', age: 30, gender: 'm' }

function addPerson(person: Person) {
  console.log('Hello', person.name)
}

addPerson({ name: 'Anna', age: 25, gender: 'f' })

class Funcionario implements Person {
  constructor(nome: string) {
    this.name = nome
  }
  name: string;
  age: number;

  [key: string]: string | number
}


let func1: Funcionario
func1 = new Funcionario('bob')