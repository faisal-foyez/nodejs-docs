/******path.basename()**********/
//Return the last portion of a path. A second parameter can filter out the file extension:
require('path').basename('/test/something'); // something
require('path').basename('/test/something.txt'); // something.txt
require('path').basename('/test/something.txt', '.txt'); // something

/***************path.dirname()*********************/
//Return the directory part of a path:
require('path').dirname('/test/something'); // /test
require('path').dirname('/test/something/file.txt'); // /test/something

/****************path.extname()********************/
//Return the extension part of a path
require('path').extname('/test/something'); // ''
require('path').extname('/test/something/file.txt'); // '.txt'

/*****************path.format()*********************/
/****Returns a path string from an object, This is the opposite of path.parse
path.format accepts an object as argument with the following keys:

root: the root
dir: the folder path starting from the root
base: the file name + extension
name: the file name
ext: the file extension
root is ignored if dir is provided
ext and name are ignored if base exists*****************/
// POSIX
require('path').format({ dir: '/Users/joe', base: 'test.txt' }); //  '/Users/joe/test.txt'
require('path').format({ root: '/Users/joe/', name: 'test', ext: '.txt' }); //  '/Users/joe/test.txt'
// WINDOWS
require('path').format({ dir: 'C:\\Users\\joe', base: 'test.txt' }); //  'C:\\Users\\joe\\test.txt'


/**********path.isAbsolute()*********************/
//Returns true if it's an absolute path
require('path').isAbsolute('/test/something'); // true
require('path').isAbsolute('./test/something'); // false

/***********path.join()**************************/
//Joins two or more parts of a path:
name = 'joe'
require('path').join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'


/**************path.normalize()*******************/
//Tries to calculate the actual path when it contains relative specifiers like . or .., or double slashes:
require('path').normalize('/users/joe/..//test.txt'); // '/users/test.txt'


/***************path.parse()*********************/
//Parses a path to an object with the segments that compose it:

// root: the root
// dir: the folder path starting from the root
// base: the file name + extension
// name: the file name
// ext: the file extension
require('path').parse('/users/test.txt');
/*{
  root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}*/




/***************path.resolve()**************************/
//You can get the absolute path calculation of a relative path using path.resolve():
require('path').resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder
//By specifying a second parameter, resolve will use the first as a base for the second:
require('path').resolve('tmp', 'joe.txt'); // '/Users/joe/tmp/joe.txt' if run from my home folder
//If the first parameter starts with a slash, that means it's an absolute path:
require('path').resolve('/etc', 'joe.txt'); // '/etc/joe.txt'
