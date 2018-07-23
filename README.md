# wdio-tests
WebDriverIO tests with Appium Service

# Changes needed

Change the `wdio.conf.js` to include your desired capabilities.
```
capabilities: [
    {
        browserName: '',
        appiumVersion: '1.8.1',
        deviceName: 'Infinix X573',
        deviceOrientation: 'portrait',
        platformVersion: '8.0.0',
        platformName: 'Android',
        app: 'https://github.com/appium/sample-code/blob/master/sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk?raw=true',
        waitforTimeout: 30000,
        commandTimeout: 30000
    }
],
```
