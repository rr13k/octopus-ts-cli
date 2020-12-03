import  octopus  from 'jd-octopus'

describe("演示示例", function () {
  var c = octopus("10.222.50.39:8080")
  var {device,info,img,text,point,swipe,sleep} = octopus()
  let uuids = ["7e:03:ab:92:73:13"]
  var err = ""
  function throwErr(err : string){
    if(err!=''){
      throw new Error(err)
    }
  }

  it("获取控制设备",()=>{
    device.bindDevices(uuids)
    sleep(1000)
  })

  it("打开浏览器",()=>{
    device.runKeyCode(64)
    sleep(1000)
  })

  it("返回home",()=>{
    device.runKeyCode(3)
    sleep(1000)
  })

  it("打开微信", ()=>{
    try {
      text("微信").clickByOCR()
    } catch (error) {
      err = "没有微信！"
    }
    sleep(1000)
    
    throwErr(err)
  })

  it("返回home",()=>{
    device.runKeyCode(3)
    sleep(1000)
  })

  it("打开八爪鱼", ()=>{
    try {
      text("八爪鱼").clickByOCR()
    } catch (error) {
      err = "没有八爪鱼！"
    }
    sleep(1000)

    throwErr(err)
  })

  it("熄灭屏幕",()=>{
    device.runKeyCode(223)
  })
  
})