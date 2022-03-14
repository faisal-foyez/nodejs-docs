// The package.json file is kind of a manifest for your project

/*author
Lists the package author name
{
  "author": "Joe <joe@whatever.com> (https://whatever.com)"
}
Or
{
  "author": {
    "name": "Joe",
    "email": "joe@whatever.com",
    "url": "https://whatever.com"
  }
}

*/


/**
 * contributors
{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}
Or
{
  "contributors": [
    {
      "name": "Joe",
      "email": "joe@whatever.com",
      "url": "https://whatever.com"
    }
  ]
}

 */



/**
 * bugs
Links to the package issue tracker, most likely a GitHub issues page
{
  "bugs": "https://github.com/whatever/package/issues"
}
 */



/**
 * homepage
Sets the package homepage
{
  "homepage": "https://whatever.com/package"
}
 */


/**
 * version
Indicates the current version of the package.
{"version": "1.0.0"}
This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: x.x.x.

The first number is the major version, the second the minor version and the third is the patch version.

There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.
 */