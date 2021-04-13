const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        title: "JUNGLE BOOKING SUPER ADMIN",
        icon: path.join(__dirname, "./favicon.ico"),
    });
    mainWindow.loadURL(
        isDev ?
        "http://localhost:4125" :
        `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));

    mainWindow.webContents.openDevTools();

    mainWindow.setMenu(null);

}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});