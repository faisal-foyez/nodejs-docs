/*
  All three of 
    fs.writeFile(), 
    fs.writeFileSync() and 
    fsPromises.writeFile() 
  read the full content of the file in memory before returning the data.
 */

  
              //fs.writeFile (async method)
/*********************************************************** */
const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
/*********************************************************** */


               //fs.writeFileSync
/*********************************************************** */
const fs = require('fs');

const content2 = 'Some content!';

try {
  fs.writeFileSync('/Users/joe/test.txt', content2);
  // file written successfully
} catch (err) {
  console.error(err);
}

/*********************************************************** */


                //fsPromises.writeFile
/************************************************************ */
const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();
/*********************************************************** */


                //fs.appendFile()
/************************************************************ */
const content3 = 'Some content!';

fs.appendFile('file.log', content3, err => {
  if (err) {
    console.error(err);
  }
  // done!
});
/*********************************************************** */


            //fsPromises.appendFile()
/************************************************************ */
const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();
/*********************************************************** */