/** 4 features of npx */

/**
 * 1.
 * Easily run local commands:
 * Running npx commandname automatically finds the correct reference of the command 
 * inside the node_modules folder of a project, 
 * without needing to know the exact path, 
 * and without requiring the package to be installed globally and in the user's path.
 */

/**
 * 2.
 * Installation-less command execution:
 * you don't need to install anything.
 * you can run different versions of the same command, using the syntax @version
 * npx create-react-app my-react-app
 */

/**
 * 3.
 * Run some code using a different Node.js version:
 * npx node@10 -v #v10.18.1
 * npx node@12 -v #v12.14.1
 * This helps to avoid tools like nvm or the other Node.js version management tools.
 */

/**
 * 4.
 * Run arbitrary code snippets directly from a URL:
 * You can run code that sits in a GitHub gist, for example:
 * npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
 */