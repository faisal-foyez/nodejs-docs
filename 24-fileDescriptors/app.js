const fs = require('fs');

fs.open('./test.txt', 'a+', (err,fd) =>{
  console.log(fd);
  fs.readFile(fd,'utf-8',(err,data)=>{
    if(!err){
      fs.writeFile(fd,'bb',()=>{
        console.log('updated');
      })
    }
  })
});

/* Before you're able to interact with a file that sits in your filesystem, 
 * you must get a file descriptor. */


/*
 * A file descriptor is a reference to an open file, 
 * a number (fd) returned by opening the file using the open() method offered by the fs module. 
 * This number (fd) uniquely identifies an open file in operating system:
 */

/** Flags
 * "r+" open the file for reading and writing, if file doesn't exist it won't be created.
 
 * "w+" open the file for reading and writing, positioning the stream at the beginning of the file.
 *  The file is created if not existing.
 
 * "a" open the file for writing, positioning the stream at the end of the file. 
 * The file is created if not existing.
 
 * "a+" open the file for reading and writing, positioning the stream at the end of the file. 
 * The file is created if not existing.
 */

  //We can open the file with openSync method. It will return the file descriptor.
 const fd = fs.openSync('/Users/joe/test.txt', 'r');


 /**
  * The fs/promises module is available starting only from Node.js v14. Before v14, after v10, 
  * you can use require('fs').promises instead. Before v10, after v8, 
  * you can use util.promisify to convert fs methods into promise-based methods.
  */

  const fs = require('fs/promises');

  async function example(){
    let fileHandle;
    try{
      fileHandle = await fs.open('./test.txt','r');
      console.log(fileHandle.fd);
      console.log(await fileHandle.readFile({encoding:'utf-8'}))
    }finally{
      await fileHandle.close();
    }
  }
  

  //Different example
  const fs = require('fs');
  const util = require('util');

  async function example2() {
    const open = util.promisify(fs.open);
    const fd = await open('/Users/joe/test.txt', 'r');
  }
  example2();