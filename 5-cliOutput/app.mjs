const a = 'a'
const b = 'b'

console.log(a , b)

console.log('My name is %s, and  I have %d eyes', 'Mumbi', 2)

console.log('%i', 100.45)  //100. integer part only

console.log('%i', 100.56)  //100

console.log('%o', Number)  //format variable as object

console.clear()

/*
    Counting elements
*/

const x = 1
const y = 2
const z = 3

console.count(
    "The value of x is and has been checked .. how many times?"
)

console.count(
    "The value of x is and has been checked .. how many times?"
)

console.count(
    'The value of y is' + y +
    'and has been checked .. how many times?'
)

console.log("Hello")

console.count("Hello")

const oranges1 = ['orange', 'orange']
const apples = ['just one apple']

oranges1.forEach(fruit => {
    console.count(fruit)
})

apples.forEach(fruit => {
    console.count(fruit)
})

/*
    Reset Counting
*/

const oranges2 = ['orange', 'orange', 'orange']

oranges2.forEach(fruit => {
    console.count(fruit)
})

console.countReset('orange')

oranges2.forEach(fruit => {
    console.count(fruit)
})
 
/* 
    PRINT THE STACK TRACE
*/

const function2 = () => console.trace()
const function1 = () => function2()

function1()

/* 
   Calculate the time spent
*/

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
    console.time('doSomething fun')
    doSomething()
    console.timeEnd('doSomething fun')
}

measureDoingSomething()

/* 
   Calculate the time spent
*/

process.stdout.write("Hello \n") 

console.error("Fatal !!")

/* 
   Color the output
*/

console.log('\x1b[33m%s\x1b[0m','Hello')

import chalk from 'chalk';
console.log(chalk.yellow.underline("Hello"))

/**
 * Node progress bar
 */

import ProgressBar  from 'progress';

const bar = new ProgressBar(':bar', {total:10});

const intervalId = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        //finish the interval
        clearInterval(intervalId);
    }
},1000)
