/*************** What is Buffer ************************** */
/*  A buffer is an area of memory.
    It represents a fixed-size chunk of memory (can't be resized) allocated 
    outside of the V8 JavaScript engine. 
*/
////////////////////////////////////////////////////////////

/*************** Why do we need Buffer? ************************** */
/*  Buffers were introduced to help developers deal with binary data.
    Buffers in Node.js are not related to buffering data. Buffering data
    is what happens when a stream processor receives data faster than it can digest.
*/  
////////////////////////////////////////////////////////////

/*************** Why do we need Buffer? ************************** */
/*  Buffers were introduced to help developers deal with binary data.
    Buffers in Node.js are not related to buffering data. Buffering data
    is what happens when a stream processor receives data faster than it can digest.
*/  
////////////////////////////////////////////////////////////


/********************** How to create a buffer **********************************/
//A buffer is created using the 
Buffer.from(), 
Buffer.alloc(),
Buffer.allocUnsafe() //methods.

const buf = Buffer.from('Hey!');

Buffer.from(array)
Buffer.from(arrayBuffer, byteOffset , length)
Buffer.from(buffer)
Buffer.from(string, encoding)
//You can also just initialize the buffer passing the size. This creates a 1KB buffer:
const buf2 = Buffer.alloc(1024);//1KB buffer
//OR
const buf3 = Buffer.allocUnsafe(1024);//1KB buffer

/* Difference between alloc and allocUnsafe */
//alloc will be initialized 
//with zeroes and the one created by allocUnsafe will be uninitialized. 
//So, allocUnsafe would be faster
//but, the allocated segment of memory may contain old data which could potentially be sensitive.
///////////////////////////////////////////////////////////////////////////////////////


/**************** Access the content of a buffer ****************** */
const buf4 = Buffer.from('Hey!');
console.log(buf[0]); // 72 -> H
console.log(buf[1]); // 101 -> e
console.log(buf[2]); // 121 -> y

//To make buffer string
console.log(buf.toString());

//length
const buf5 = Buffer.from('Hey!');
console.log(buf.length);

//Iterate over the contents of buffer
const buf6 = Buffer.from('Hey!');
for (const item of buf) {
  console.log(item); // 72 101 121 33
}

//We can write to buffer
const buf7 = Buffer.alloc(4);
buf.write('Hey!');

//We can set the buffer
const buf8 = Buffer.from('Hey!');
buf[1] = 111; // o in UTF-8
console.log(buf.toString()); // Hoy!


/*********** Slice the buffer **********************************/
//Slice does not copy the buffer. A slice is not a copy: 
//the original buffer is still the source of truth. If that changes, your slice changes.
const buf9 = Buffer.from('Hey!');
buf.subarray(0).toString(); // Hey!
const slice = buf.subarray(0, 2);
console.log(slice.toString()); // He
buf9[1] = 111; // o
console.log(slice.toString()); // Ho

/********************* Copy a buffer *******************************/
//Copying a buffer is possible using the set() method:

const buf = Buffer.from('Hey!');
const bufcopy = Buffer.alloc(4); // allocate 4 bytes
bufcopy.set(buf);

// By default you copy the whole buffer. 
// If you only want to copy a part of the buffer, 
// you can use .subarray() and the offset argument that specifies an offset to write to:

const buf = Buffer.from('Hey?');
const bufcopy2 = Buffer.from('Moo!');
bufcopy.set(buf.subarray(1, 3), 1);
bufcopy.toString();
////////////////////////////////////////////////////////////////////////