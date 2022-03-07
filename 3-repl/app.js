const repl = require('repl');

var prompt = '>';
const local = repl.start(prompt);

local.on('exit',()=>{
    console.log('repl exited');
})