// Funçao em js é First-Class Object (Citizens)
// Higher-order function


// A funçao pode ser:
// Criada de forma literal
function fun1() {}

// Armazenada em uma variavel
const fun2 = function () {}

// Armazenada em um array
const array = [ function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenada em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passada uma funçao com parametro (param)
function run(fun) {
    fun()
}
run(function () { console.log('Executando...')})

// Uma funçao pode retornar/conter uma funçao
function soma(a, b) {
    return function (c) {
        console.log( a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)









