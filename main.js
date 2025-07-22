const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
let temp = [
  { label: "file" },
  { label: "edit" },
  { label: "view" },
  { label: "help" },
];
let contextMenu = Menu.buildFromTemplate(temp);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
  win.webContents.on("context-menu", () => {
    contextMenu.popup();
  });
}
app.whenReady().then(createWindow);
