const os = require('os');
const log = console.log;
log(
os.arch(),//Return the string that identifies the underlying architecture, like arm, x64, arm64

os.cpus(),//Return information on the CPUs available on your system.

os.endianness(),//Return BE or LE depending if Node.js was compiled with Big Endian or Little Endian.

os.freemem(),//Return the number of bytes that represent the free memory in the system.

os.homedir(),//Return the path to the home directory of the current user.

os.hostname(),//Return the host name.

os.loadavg(),//Return the calculation made by the operating system on the load average.

os.networkInterfaces(),//Returns the details of the network interfaces available on your system.

os.platform(),//Return the platform that Node.js was compiled for:
// darwin
// freebsd
// linux
// openbsd
// win32
// ...more

os.release(),//Returns a string that identifies the operating system release number

os.tmpdir(),//Returns the path to the assigned temp folder.

os.totalmem(),//Returns the number of bytes that represent the total memory available in the system.


os.type(),//Identifies the operating system:
// Linux
// Darwin on macOS
// Windows_NT on Windows

os.uptime(),//Returns the number of seconds the computer has been running since it was last rebooted.

os.userInfo()//Returns an object that contains the current username, uid, gid, shell, and homedir
)