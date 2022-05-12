//fs.access to check if file exists and accesible to read and write
/************************************************************ */
const fs = require('fs');
const dir = './directory/test.txt';
fs.access(dir, fs.constants.F_OK | fs.constants.R_OK, err=>{
  if(err){
    console.error(err);
  }
  console.log('file is accessible and readable');
})
/************************************************************ */


//Use fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new folder.
/************************************************************ */

const folderName = './directory/test.txt';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
/************************************************************ */


//Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.
/************************************************************ */
const fs = require('fs');
const folderPath = './directory';

console.log(fs.readdirSync(folderPath)); //output: [ 'test.txt' ]
/************************************************************ */


//Use fs.rename() or fs.renameSync() or fsPromises.rename() to rename folder. 
//The first parameter is the current path, the second the new path:
/************************************************************ */
const fs = require('fs');

fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err);
  }
  // done
});


///////////////////////////////////////////////////
try {
  fs.renameSync('/Users/joe', '/Users/roger');
} catch (err) {
  console.error(err);
}
/////////////////////////////////////////////////////

const fs = require('fs/promises');

async function example() {
  try {
    await fs.rename('/Users/joe', '/Users/roger');
  } catch (err) {
    console.log(err);
  }
}
example();
/************************************************************ */


//Use fs.rmdir() or fs.rmdirSync() or fsPromises.rmdir() to remove a folder.
/************************************************************ */
const fs = require('fs');

fs.rmdir(dir, { recursive: true }, err => {
  if (err) {
    throw err;
  }
  console.log(`${dir} is deleted!`);
});
/* NOTE: In Node v16.x the option recursive is deprecated for fs.rmdir of callback API, 
   instead use fs.rm to delete folders that have content in them: */

//************ OR we can use this***************** */
fs.rm(dir, { recursive: true, force: true }, err => {
  if (err) {
    throw err;
  }
  console.log(`${dir} is deleted!`);
});
//////////////////////////////////////////////////////
/************************************************************ */


// We can use fs-extra package. Which provides more features than fs module.

/************************************************************************ */
const fs = require('fs-extra');

const folder = '/Users/joe';

fs.remove(folder, err => {
  console.error(err);
});

//************** Or ************** */
fs.remove(folder)
  .then(() => {
    // done
  })
  .catch(err => {
    console.error(err);
  });
/////////////////////////////////////////////

/**************** Or ***************** */
async function removeFolder(folder) {
  try {
    await fs.remove(folder);
    // done
  } catch (err) {
    console.error(err);
  }
}
const folder2 = '/Users/joe';
removeFolder(folder2);
/*************************************************************************** */