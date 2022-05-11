/**
 * ^: It will only do updates that do not change the leftmost non-zero number i.e there can be changes in minor version or patch version but not in major version. If you write ^13.1.0, when running npm update, it can update to 13.2.0, 13.3.0 even 13.3.1, 13.3.2 and so on, but not to 14.0.0 or above.
 * ~: if you write ~0.13.0 when running npm update it can update to patch releases: 0.13.1 is ok, but 0.14.0 is not.
 * >: you accept any version higher than the one you specify
 * >=: you accept any version equal to or higher than the one you specify
 * <=: you accept any version equal or lower to the one you specify
 * <: you accept any version lower than the one you specify
 * =: you accept that exact version
 * -: you accept a range of versions. Example: 2.1.0 - 2.6.0
 * ||: you combine sets. Example: < 2.1 || > 2.6
 */

/**
 * You can combine some of those notations, 
 * for example use 1.0.0 || >=1.1.0 <1.2.0 to either use 1.0.0 
 * or one release from 1.1.0 up, but lower than 1.2.0.
 */

/**
 * latest: if you want to use the latest version available
 */