const os = require('os')
    //iNFO ABOUTcurrent userSelect
const user = os.userInfo()
console.log(user);
//Method return the system uptime in seconds
console.log(`The Systme Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOs);