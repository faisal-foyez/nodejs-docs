/*
  Now, all is fine until a certain level of nesting. 
  After two levels of nesting, 
  Node.js gives up and prints [Object] as a placeholder:
*/

const obj = {
  name:'jimmy',
  address:{
    city:'Dhaka',
    postOffice:{
      area:'alskdfj',
      local:{
        union:{
          Elaka:'elaka'
        }
      }
    }
  }
}
console.log(obj);

/**** Then, How can you print the whole object? */
//One way is to stringify the object
console.log(JSON.stringify(obj, null, 2));//where 2 is the number of spaces to use for indentation.
//Another option is to use
require('util').inspect.defaultOptions.depth = null;
console.log(obj);

//If you don't want to touch any kinds of defaultOptions, a perfect alternative is console.dir

// `depth` tells util.inspect() how many times to recurse while formatting the object, default is 2
console.dir(obj, {
  depth: 10,
});

// ...or pass `null` to recurse indefinitely
console.dir(obj, {
  depth: null,
});

