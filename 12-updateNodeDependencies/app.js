/**
 * When you install a package using npm install <packagename>, 
 * the latest available version of the package is downloaded 
 * and put in the node_modules folder, and a corresponding entry is added to the package.json 
 * and package-lock.json files that are present in your current folder
 */

/**
 * Now those 2 files tell us that we installed version 1.3.1 of cowsay, 
 * and our rule for updates is ^1.3.1, 
 * which for the npm versioning rules means 
 * that npm can update to patch and minor releases: 1.3.2, 1.4.0 and so on.
 */

/**
 * If there is a new minor or patch release and we type 
 * npm update
 * and then the installed version is updated, 
 * and the package-lock.json file diligently filled with the new version
 */

/**
 * To discover new releases of the packages, you run npm outdated
 */

/**
 * To update all packages to a new major version, 
 * install the npm-check-updates package globally
 * e.g npm install -g npm-check-updates
 * and then run 
 * ncu -u
 * this will upgrade all the version hints in the package.json file, 
 * to dependencies and devDependencies, so npm can install the new major version
 * now just run
 * npm update
 */