const {contextBridge , ipcRenderer} = require("electron")
contextBridge.exposeInMainWorld('ipcRenderer' , {
    send : (channel ,data) => ipcRenderer.send(channel,data),
    on :  (channel , funct) => ipcRenderer.on(channel ,(event ,...args)=> funct(event,...args))

})