# wdio-tests
WebDriverIO tests with Appium Service
This should now ideally run on Windows, Mac and Linux

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
        app: 'https://github.com/rahulmr/wdio-tests/blob/master/ApiDemos-debug.apk?raw=true',
        waitforTimeout: 30000,
        commandTimeout: 30000
    }
],
```

# Notes

1. For Android Apps, you can add appPackage and appActivity
2. `wdio.conf.js` appium arguments like command is specified due to bug in `wdio-appium-service`
3. `appium-controller` works fine but it was easy to use `wdio-appium-service` to start appium
4. `appium-controller` is used in `package.json` scripts to stop appium as appium is not automatically stopped after reply on windows. This may be dependent upon the commandtimeout parameters
5. Added docs folder for sample report generated using `wdio-mochawesome-reporter`, `mochawesome@2.3.1` and `mochawesome-report-generator@2.3.2`
6. To access report visit [here](https://rahulmr.github.io/wdio-tests)
7. APIDemos-debug.apk is accessed from internet that is github site so internet is required.
8. In case, you are using the app option for local path, provide absolute path to the apk file. Like `'D:\\Automation\\wdio-tests\\APIDemos-debug.apk'` or `'/tmp/APIDemos-debug.apk'` 
