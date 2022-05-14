/************************** What are Streams ***************************** */
//Using streams we read data piece by piece.
//////////////////////////////////////////////////////////////////////////////

/************************** Benefit of Streams ***************************** */
/*** Memory efficiency: you don't need to load large amounts of data in memory before you are able to process it ***/
/*** Time efficiency: it takes way less time to start processing data, 
     since you can start processing as soon as you have it, rather than waiting till the whole data payload is available ***/
//////////////////////////////////////////////////////////////////////////////

/************************** Streams-powered Node.js APIs **********************/
process.stdin //returns a stream connected to stdin
process.stdout //returns a stream connected to stdout
process.stderr //returns a stream connected to stderr
fs.createReadStream() //creates a readable stream to a file
fs.createWriteStream() //creates a writable stream to a file
net.connect() //initiates a stream-based connection
http.request() //returns an instance of the http.ClientRequest class, which is a writable stream
zlib.createGzip() //compress data using gzip (a compression algorithm) into a stream
zlib.createGunzip() //decompress a gzip stream.
zlib.createDeflate() //compress data using deflate (a compression algorithm) into a stream
zlib.createInflate() //decompress a deflate stream
/////////////////////////////////////////////////////////////////////////////////////


/************************** Types of streams **********************/
Readable //a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.
Writable //a stream you can pipe into, but not pipe from (you can send data, but not receive from it)
Duplex //a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream
Transform //a Transform stream is similar to a Duplex, but the output is a transform of its input

/////////////////////////////////////////////////////////////////////////////////////


/************************** Creating Readable streams ******************************/
const Stream = require('stream');
const readableStream = new Stream.Readable();

readableStream._read = () => {};
// OR
const readableStream = new Stream.Readable({
  read() {},
});

//How to consume a readable stream directly
readableStream.on('readable', () => {
  console.log(readableStream.read());
});
/////////////////////////////////////////////////////////////////////////////////////


/************************** Creating Writable streams **********************/
const Stream = require('stream');
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};
process.stdin.pipe(writableStream);

//How to send data to a writable stream
writableStream.write('hey!\n');
/////////////////////////////////////////////////////////////////////////////////////

/************************ How to read and write stream using pipe method ****************/
const Stream = require('stream');

const readableStream = new Stream.Readable({
  read() {},
});
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream.pipe(writableStream);

readableStream.push('hi!');/* Push will send the string to readable stream and it will generate the _write method 
                            of writable stream. */
readableStream.push('ho!');

readableStream.on('close', () => writableStream.end());//end method will generate the close event of writableStream.
writableStream.on('close', () => console.log('ended'));

readableStream.destroy(); //destroy method will generate the close event of readableStream.
///////////////////////////////////////////////////////////////////////////////////////////////

/******************************* Example of Transform ************************************ */
const { Transform } = require('stream');
const transformStream = new Transform();

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(chunk.toString().toUpperCase());
  callback();
};

process.stdin.pipe(transformStream).pipe(process.stdout);
///////////////////////////////////////////////////////////////////////////////////////////////