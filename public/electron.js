const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const LOCAL = "http://localhost:5000/graphql";
const PROD = "https://dev-booking-lite.stayjanda.cloud/graphql";
let mainWindow;


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        title: "JUNGLE BOOKING SUPER ADMIN",
        icon: path.join(__dirname, "./favicon.ico"),
        webPreferences: {
            webSecurity: false
        }
    });
    mainWindow.loadURL(
        isDev ?
        "http://localhost:4125" :
        `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));

    mainWindow.webContents.openDevTools();

    mainWindow.setMenu(null);
    const filter = {
        urls: [LOCAL, PROD]
    }

    const session = electron.session 

    session.defaultSession.webRequest.onHeadersReceived(filter, (details, callback) => {
		const cookies = (details.responseHeaders['set-cookie'] || []).map(cookie => cookie.replace('SameSite=Lax', 'SameSite=None'));
		if(cookies.length > 0){
			details.responseHeaders['set-cookie'] = cookies;
		}
		callback({ cancel: false, responseHeaders: details.responseHeaders });
	});
    
    session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        if(details.requestHeaders) {
            details.requestHeaders['Origin'] = "https://jungle.booking.stayjanda.cloud";
        }
        callback({ requestHeaders: details.requestHeaders})
    });
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