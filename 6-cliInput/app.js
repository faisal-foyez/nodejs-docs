
/** input readline */
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// readline.question(`What is you name`, userName =>{
//     console.log(`Hi ${userName}`);
//     readline.close();
// })
///////////////////////

//** reading with inquirer */
const inquirer  = require('inquirer');

const questions = [
    {
        type:'output',
        name:'fname',
        message:'What is your name?'
    }
]

inquirer.prompt(questions).then(answer =>{
    console.log(`Hi ${answer['fname']}`);
})
////////////////////////////////
