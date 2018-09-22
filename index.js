const { app, BrowserWindow, Menu } = require("electron");
const menubar = require("menubar");

const mb = menubar({
  showDockIcon: true,
  tooltip: "My first menubar",
  alwaysOnTop: true
});

mb.on("ready", () => {
  console.log("app is ready");
});

mb.on("create-window", () => {
  console.log("create wiondow");
});

mb.on("show", () => {
  console.log("open menu");
});

mb.on("after-create-window", () => {
  mb.window.openDevTools();
});
