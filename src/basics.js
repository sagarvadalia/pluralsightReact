{
  // Block scope
}
if (true) {
  // block scope
}
for (let i = 1; i < 10; i++){
  // block scope
}
function sum(a, b) {
  // function scope
  var i = 5
}
// scalar values
const ans = 8
const greeting = "Hello"
// arrays and obj
const numbers = [2, 4, 6]
const person = {
  first: 'John',
  last: 'doe'
}
numbers[2] = 5
console.log(numbers)

const x = function () {
  // this is the caller of x (global window)
}
const a = () => {
  console.log(this)
  // this is the closed scope (closure)
}
const square = a => a * a
let mystery = 'ans'
// JS Obj
const obj = { key: 'value', f1() { }, f2: () => {}, [mystery]: 42 }
console.log(obj.mystery)
console.log(obj['ans'])

// Destructuring
const { Pi, E, SQRT2 } = Math
const { Component, Fragment, useState } = require('react')
// const [value, setValue] = useState(40)
const data = { key: 'value' }
const temp = { ...data }
// template literals
const str = `${5 + 10}`

// Oop

class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`${this.name}`)
  }
}
class Student extends Person {
  constructor(name, level) {
    super(name)
    this.level = level
  }
  greet() {
    console.log(`${this.name}${this.level}`)
  }
}
// Async with promises
const fetchData = () => {
  fetch(`https://api.github.com`).then(resp => {
    resp.json().then(data => {
      console.log(data)
    })
  })
}
fetchData()
// Async awaits
const fetch =  async () => {
  let res = await fetch(`https://api.github.com`)
  console.log(res.json())
}
