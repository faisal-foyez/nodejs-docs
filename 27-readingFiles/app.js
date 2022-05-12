/**
 * All three of 
    fs.readFile(), 
    fs.readFileSync() and 
    fsPromises.readFile() 
   read the full content of the file in memory before returning the data.
 */
            //ReadFile Async
/*********************************************************** */
const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
/*********************************************************** */

               //ReadFile Sync
/*********************************************************** */
const fs = require('fs');

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

/*********************************************************** */

                //Read File with Promise
/************************************************************ */
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
/*********************************************************** */
