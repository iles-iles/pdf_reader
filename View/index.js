
const btn_exe = document.getElementById("EXE");
btn_exe.addEventListener("click" , ()=>{
   
   const reply = window.ipcRenderer.send("EXE","hello")

})