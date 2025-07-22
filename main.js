const { app, BrowserWindow, Tray } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
  tray = new Tray("icon.png");
  tray.setToolTip("this is a tray");
}
app.whenReady().then(createWindow);
