const { contextBridge, webFrame } = require("electron");
//receive data from renderer 2nd
contextBridge.exposeInMainWorld("api", {
  zoomIn: () => webFrame.setZoomFactor(webFrame.getZoomFactor() + 0.1),
  zoomOut: () => webFrame.setZoomFactor(webFrame.getZoomFactor() - 0.1),
});
