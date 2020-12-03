import  octopus  from 'jd-octopus'

describe("rrTest", function () {
  var c = octopus("10.222.50.39:8080")
  var {device,info,img,text,point,swipe,sleep} = octopus()
  let uuids = ["7e:03:ab:92:73:13"]
  var err = ""
  function throwErr(err : string){
    if(err!=''){
      throw new Error(err)
    }
  }

  it("rr1",()=>{
    device.bindDevices(uuids)
    sleep(1000)
  })

  it("rr2",()=>{
    device.runKeyCode(223)
  })
  
})