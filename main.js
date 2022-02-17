// Процедура - процедура
// function name([params]) {
//     инструкция
// } 
// name([аргумент])

// sendMassege()
// function sendMassege(){
//     alert("Привет я изучаю функцию")
// }
// sendMassege()
// sendMassege()

// let name = prompt("Введите свое имя") //глобальная переменная
// let age = +prompt("Введитк свой возраст") //глобальная переменная
// function massege(name, age){
//     // let name = "Dan" //локальные переменная
//     // let age = "24" //локальная переменная
//     let a = `Привет, тебя зовут ${name}, твой возраст ${age}`
//     alert(a)
// }
// let k = prompt("Введите свое имя")
// let b = +prompt("Введите свой возраст")
// massege(k, b)

// Синтаксис функции
// function name(params) {
//     инструкция
//     return результат
// }
// let a = name()
// alert(a)


// function massege(name, age){
//     // let name = "Dan" //локальные переменная
//     // let age = "24" //локальная переменная
//     let a = `Привет, тебя зовут ${name}, твой возраст ${age}`
//     return a 
// }
// let b = massege("Dan", 24)
// alert(b)

function sum(a, b) {
    c = a+b
    return c
}
let result = sum(2, 2)
alert(result)