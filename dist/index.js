function soma(a, b) {
    return a + b;
}
// const readFile = async () => {return 10}
var c = 'banana1';
c = soma(1, 2);
var pointA = { x: 1, y: 2 };
var jack = { name: 'jack', age: 30, gender: 'm' };
function addPerson(person) {
    console.log('Hello', person.name);
}
addPerson({ name: 'Anna', age: 25, gender: 'f' });
var Funcionario = /** @class */ (function () {
    function Funcionario(nome) {
        this.name = nome;
    }
    return Funcionario;
}());
var func1;
func1 = new Funcionario('bob');
