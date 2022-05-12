const log = function(a){}


//****** Getting information out of a path *****//
const path = require('path');
const filePath = './pathTest.txt';
log(path.basename(filePath));
log(path.dirname(filePath));
log(path.extname(filePath));

//You can get the file name without the extension by specifying a second argument to basename
path.basename(filePath, path.extname(filePath)); // second parameter will be removed which is ext.
//********************************************** */


//****** Working with paths *****//
/////////You can join two or more parts of a path by using path.join()/////////////
const name = 'joe';
log(path.join('/', 'users', name, 'notes.txt')); // '/users/joe/notes.txt'
////////////////////////////////////////////////////////////////////////////////

///////You can get the absolute path calculation of a relative path using path.resolve()/////
log(path.resolve('joe.txt'));
////////////////////////////////////////////////////////////////////////////////////////////

/*In this case Node.js will simply append /joe.txt to the current working directory.//
  If you specify a second parameter folder, resolve will use the first as a base for the second:*/
log(path.resolve('tmp', 'joe.txt')); // '/Users/joe/tmp/joe.txt' if run from my home folder
////////////////////////////////////////////////////////////////////////////////


/////If the first parameter starts with a slash, that means it's an absolute path:////////
log(path.resolve('/etc', 'joe.txt')); // '/etc/joe.txt'
////////////////////////////////////////////////////////////////////////////////

/*path.normalize() is another useful function, that will try and calculate the actual path, 
   when it contains relative specifiers like . or .., or double slashes: */
log(path.normalize('/users/joe/..//test.txt')); // '/users/test.txt'
/////////////////////////////////////////////////////////////////////////////////////////
//********************************************** */


console.log(path.resolve('tmp'));
console.log(path.resolve('./pathTest.txt'));

