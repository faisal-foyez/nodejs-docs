//Node.js assumes it's always running in a development environment. 
//You can signal Node.js that you are running in production by setting the NODE_ENV=production environment variable.

/* This is usually done by executing the command export NODE_ENV=production */


//You can also apply the environment variable by prepending it to your application initialization command:
/* NODE_ENV=production node app.js */

//Setting the environment to production generally ensures that

/*  logging is kept to a minimum, essential level
    more caching levels take place to optimize performance */

if (process.env.NODE_ENV === 'development') {
  // ...
}
if (process.env.NODE_ENV === 'production') {
  // ...
}
if (['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
  // ...
}



/************* For example, in an Express app, you can use this to set different error handlers per environment:************/
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}
//////////////////////////////////////////////////////////////////////////////////////////////////