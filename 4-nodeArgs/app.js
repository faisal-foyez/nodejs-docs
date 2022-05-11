
// process.argv.forEach((val, index) => {
//     console.log(`${index} : ${val}`)
// })

// const args = process.argv.slice(2)

// console.log(args)

const args = require('minimist')(process.argv.slice(2))
console.log(process.argv);
console.log(args.name)


//Input : node app.js --name=jamal  /* because of minimist we need (--) before name
//Output : jamal

/**
 * process.argv gives always two arguments one is the location of node module
 * another is the location of app.js
 * [
    '/usr/local/bin/node',
    '/Users/faisalislam/Desktop/Faisal-Mumbi/nodejs-docs/4-nodeArgs/app.js',
    '--name=joe'
   ]
 */