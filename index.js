const { app, BrowserWindow, Menu } = require("electron");

const menuTemplate = [
  {
    label: "Edit",
    submenu: [{ role: "undo" }, { role: "redo" }]
  },
  {
    label: "Window",
    submenu: [{ role: "minimize" }, { role: "close" }]
  }
];

let win;
const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
