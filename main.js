const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path"); //4th
const windowStateKeeper = require("electron-window-state");

let win;

function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 900,
    defaultHeight: 600,
  });

  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,

    // frame: false,
    //below 5th
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });
  // let child = new BrowserWindow({
  //   parent: win,
  // });
  //   child.loadFile("child.html");
  //   child.show();
  // open child window
  // win.webContents.openDevTools();
  mainWindowState.manage(win);
  let wc = win.webContents;
  wc.on("dom-ready", () => {
    console.log("dom-ready");
  });
  wc.on("did-finish-load", () => {
    console.log("did-finish-load");
  });
  wc.on("new-window", () => {
    console.log("new-window");
  });
  wc.on("before-input-event", () => {
    console.log("before-input-event");
  });
  win.loadFile("index.html");
  console.log("State file path:", mainWindowState.path);
}
// app.whenReady().then(createWindow);
//event listener
// app.on("window-all-closed", () => {
//   app.quit();
// });
// app.on("before-quit", () => {
//   console.log("before-quit");
//   a.preventDefault();
//   app.quit();
// });
// app.on("will-quit", () => {
//   console.log("will-quit");
// });
// app.on("browser-window-focus",()=>{

// })
// app.on("browser-window-blur", () => {});
// app.on("ready", () => {
//   createWindow();
// });
app.whenReady().then(createWindow);
// ipcMain.on("share-data", (event, data) => {
//   console.warn("Received data:", data); //6th receive data form renderer
//   event.reply("share-data", "hello from main"); //1st send data to renderer
// });
