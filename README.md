# NFC Tag Reader Proof of Concept (POC)

This project is a simple Proof of Concept (POC) application designed to demonstrate the reading of data from NFC tags, cards, and other devices emitting NFC signals. The application uses the [react-native-nfc-manager](https://www.npmjs.com/package/react-native-nfc-manager) library to interface with NFC hardware on Android devices.

The primary goal of this POC is to perform a generic NFC reading operation within a configurable timeout period (default set to 10 seconds). It aims to provide a minimal but functional demonstration of NFC tag detection and data reading, including handling cases where no tag is found within the timeout.

***

# Getting Started

> **Note**: Make sure you have prepared your environment with the steps described below before proceeding.

## Environment Setup

Before running the project, ensure your development environment is properly configured as follows:

### 1. Install Java SDK (JDK)

- Download and install the latest [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) required by Android Studio and React Native.
- Set the `JAVA_HOME` environment variable to point to your JDK installation folder.
- Verify installation by running `java -version` in your terminal.


### 2. Install Android Studio

- Download and install [Android Studio](https://developer.android.com/studio).
- During installation, include the Android SDK, SDK Platform tools, and Android SDK Build-Tools components.
- Configure Android Studio for React Native development by installing necessary SDK packages and ensuring you have an Android virtual device (optional if working with a real device).


### 3. Connect an Android Device for Development

- Enable **Developer options** on your device by tapping the build number in Settings > About phone multiple times.
- Within Developer options, enable **USB Debugging**.
- Connect the device to your computer via USB.
- On your device, authorize the computer if prompted for USB debugging permissions.


### 4. Grant USB Permissions for Development

- Ensure your computer has the appropriate USB drivers installed (especially for Windows).
- Verify connection by running `adb devices` to see if your device is listed.
- If your device shows as unauthorized, accept the debugging prompt on your device.

***

## Step 1: Start Metro

First, you need to run **Metro**, the JavaScript bundler for React Native.

Run this from the root directory of the project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```


***

## Step 2: Build and Run Your App

With Metro running, open a new terminal and use one of the following commands to build and run your app on your Android device:

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```


***

## Step 3: Modify Your App

Now that you have successfully run the app, let's make changes!

Open `App.tsx` (or the relevant entry file) in your editor and make any changes you need. The app supports Fast Refresh so you can see your updates live.

Open the `NfcComponent.tsx` file in your text editor of choice. This file contains the main NFC reading logic, including tag detection, timeout handling, and error display.

When you save changes to this file, your app will automatically update and reflect these changes — this is powered by Fast Refresh.


***


# Troubleshooting

If you run into issues running the app:

- Confirm your device is properly connected and recognized by `adb devices`.
- Verify Java SDK and Android Studio installations and environment variables.
- Check NFC support on your device.
- Review permissions and USB Debugging status.
- See the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

***

# Learn More

- [React Native Official Documentation](https://reactnative.dev/docs/getting-started)
- [react-native-nfc-manager Documentation and Examples](https://github.com/revtel/react-native-nfc-manager)
- [Android Developer Setup](https://developer.android.com/studio)
- [NFC Basics](https://developer.android.com/guide/topics/connectivity/nfc)

***

This README provides a concise yet comprehensive guide on both setting up your environment and understanding the purpose and capabilities of this NFC reading proof of concept application.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7][^8]</span>

<div align="center">⁂</div>

[^1]: https://www.npmjs.com/package/react-native-nfc-manager/v/3.13.1

[^2]: https://innovision-software.com/blog/implementing-nfc-react-native

[^3]: https://www.clouddefense.ai/code/javascript/example/react-native-nfc-manager

[^4]: https://github.com/revtel/react-native-nfc-manager/wiki/Examples

[^5]: https://blog.logrocket.com/using-nfc-tags-react-native/

[^6]: https://github.com/revtel/react-native-nfc-manager

[^7]: https://codesandbox.io/examples/package/react-native-nfc-manager

[^8]: https://www.newline.co/courses/newline-guide-to-nfcs-with-react-native/tap-and-go-project-setup-with-react-native-and-nfc-manager

