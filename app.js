const EventEmitter = require('events');

const customEmiter = new EventEmitter()

customEmiter.on('response',()=>{
    console.log(`data recieved`)
})
customEmiter.on('response',()=>{
    console.log(`some`)
})


customEmiter.emit('response')
