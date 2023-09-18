const eventEmitter = require("node:events")

emitter = new eventEmitter()
emitter.emit("myCustomEvent",{"name":"Ramesh"})

emitter.on("myCustomEvent",(...obj) => { console.log("Registered Listener Recieved args :: ",obj.name) });
