import  octopus  from "jd-octopus"


var c = octopus("10.222.50.39:8080")
var {device} = octopus()
console.log(device.getOnline())
let uuids = ["7e:03:ab:92:73:13"]

device.bindDevices(uuids)

device.runKeyCode(3) // home键

device.screenCapture("./",4) // 截图
