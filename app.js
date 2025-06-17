
//----------------------------------//
// // Modules
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// //console.log(names)
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')

// // sayHi('rayan')
// // sayHi(names.john)
// // sayHi(names.peter)
// //sayHi(names.john)

//---------------------------------//

const os = require('os')

const user = os.userInfo()


// method returns the system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)