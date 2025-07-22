const { contextBridge, ipcRenderer } = require("electron");
//receive data from renderer 2nd
contextBridge.exposeInMainWorld("api", {
  shareData: () => ipcRenderer.send("share-data", "hello from preload"), //3rd send data to main process
  onShareData: (callback) =>
    ipcRenderer.on("share-data", (event, data) => callback(data)), //2nd receive data form main and send it to renderer
});
