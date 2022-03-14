/**
 *  The goal of package-lock.json file is to keep track of the exact version of every package
 *  that is installed so that a product is 100% reproducible in the same way 
 *  even if packages are updated by their maintainers.  
 */  

/**
 * This solves a very specific problem that package.json left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the semver notation, for example:
 *if you write ~0.13.0, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
 *if you write ^0.13.0, you want to get updates that do not change the leftmost non-zero number: 0.13.1, 0.13.2 and so on. If you write ^1.13.0, you will get patch and minor releases: 1.13.1, 1.14.0 and so on up to 2.0.0 but not 2.0.0.
 *if you write 0.13.0, that is the exact version that will be used, always 
 */

 /**
  * The package-lock.json sets your currently installed version of each package in stone, 
  * and npm will use those exact versions when running npm ci
  */