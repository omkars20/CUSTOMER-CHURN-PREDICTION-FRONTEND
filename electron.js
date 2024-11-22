const { app, BrowserWindow } = require('electron');
app.disableHardwareAcceleration();

const { spawn } = require('child_process');
const path = require('path');

let mainWindow;
let backendProcess;

const createWindow = () => {
    const { BrowserWindow } = require('electron');

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    // Load the React development server
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};


const startBackend = () => {
    const path = require('path');
    const { spawn } = require('child_process');

    const backendPath = path.join(
        __dirname,
        '../Churn_prediction_Using_ANN/app.py' // Correct backend path
    );

    const backendProcess = spawn('python', [backendPath]);

    backendProcess.stdout.on('data', (data) => {
        console.log(`Backend: ${data}`);
    });

    backendProcess.stderr.on('data', (data) => {
        console.error(`Backend Error: ${data}`);
    });

    backendProcess.on('close', (code) => {
        console.log(`Backend process exited with code ${code}`);
    });
};

app.whenReady().then(() => {
    startBackend();
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
        if (backendProcess) backendProcess.kill();
    }
});

