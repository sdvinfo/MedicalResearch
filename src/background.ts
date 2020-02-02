import { app, BrowserWindow, protocol, screen } from 'electron'
import Datastore from 'nedb'
import path from 'path'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

'use strict'
const isDevelopment = process.env.NODE_ENV !== 'production'

const collectionsDb = {
  main: new Datastore({
    filename: path.join(app.getPath('userData'), '/db/', 'main.db'),
    autoload: true,
    timestampData: true
  })
}
const globalAny: any = global

globalAny.collectionsDb = collectionsDb

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width: width,
    height: height,
    minWidth: 800,
    minHeight: 600,
    darkTheme: true,
    title: 'Даешь кандидатскую! :-)',
    webPreferences: {
      nodeIntegration: true,
      experimentalFeatures: true,
      // devTools: false,
      defaultEncoding: 'utf-8'
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
