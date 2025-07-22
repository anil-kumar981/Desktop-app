const { app, BrowserWindow, Menu } = require("electron");
let template = [
  {
    label: "Home",
    click: () => {
      createWindow();
    },
  },
  {
    label: "About",
    click: () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
      });
      win.loadFile("about.html");
    },
  },
];
let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);
