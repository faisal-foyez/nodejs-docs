const fs = require('fs'); 

fs.stat('./test.txt',(err,stats)=>{
  if(err){
    console.error(err);
  }
  console.log(stats)
})

//We can do a lot with stats object
/**
 * if the file is a directory or a file, 
 * using 
      stats.isFile() and 
      stats.isDirectory()
 * if the file is a symbolic link using 
      stats.isSymbolicLink()
 * the file size in bytes using 
      stats.size.
 */
  const fs = require('fs');

  fs.stat('./test.txt', (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
  
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
  });

/**
 * We can use fs/promises
 */
 const fs = require('fs/promises');

 async function example() {
   try {
     const stats = await fs.stat('/Users/joe/test.txt');
     stats.isFile(); // true
     stats.isDirectory(); // false
     stats.isSymbolicLink(); // false
     stats.size; // 1024000 //= 1MB
   } catch (err) {
     console.log(err);
   }
 }
 example();
//The stats information example:
/* 
 Stats {
   dev: 16777221,
   mode: 33188,
   nlink: 1,
   uid: 501,
   gid: 20,
   rdev: 0,
   blksize: 4096,
   ino: 12898977049,
   size: 26,
   blocks: 8,
   atimeMs: 1652339433198.2844,
   mtimeMs: 1652339309968.997,
   ctimeMs: 1652339431919.24,
   birthtimeMs: 1652339286105.9158,
   atime: 2022-05-12T07:10:33.198Z,
   mtime: 2022-05-12T07:08:29.969Z,
   ctime: 2022-05-12T07:10:31.919Z,
   birthtime: 2022-05-12T07:08:06.106Z
 } */