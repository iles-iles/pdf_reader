const {app , BrowserWindow, dialog , globalShortcut } = require("electron")
const {exec} = require("child_process")
const path = require("path")
const { stdout, stderr } = require("process")
const ipc = require("electron").ipcMain
let win ;
const CreateWindow  = ()=>{
   
   win = new BrowserWindow ({
        height:600,
        width:800,
        icon : path.join(__dirname ,"View/icon.ico"),
        webPreferences : {
            preload :path.join(__dirname ,"preload.js"),
            contextIsolation: true, 
            nodeIntegration : false
        }
    })

    win.setMenu(null)
    win.loadFile("View/index.html");
  
}



app.whenReady().then(()=>{
    globalShortcut.register('Esc', () => {
        win.loadFile("View/index.html");
  
      })
    CreateWindow();
})

ipc.on("EXE" ,(event , arg)=>{
     dialog.showOpenDialog({properties:['openFile']}).then((files)=>{
    
        win.loadURL(files.filePaths[0]).catch((err)=>{
            console.error(err)
        })
        win.maximize()
      
       
     })
})