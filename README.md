# Workshop: React Native Custom Modules

This workshop will walk you through the process of creating a Custom Module from scratch in React Native, for __Android__ and __iOS__.

## Prerequisites

This is an advanced workshop, that requires prior experience using React Native. The following tools are required to follow this workshop:

1. react-native-cli + watchman (follow [Getting Started](https://facebook.github.io/react-native/docs/getting-started) with __React Native CLI Quickstart__, NOT the Expo Guide)
2. Android Studio 3+ and an AVD with API level 26+
3. for Apple users, Xcode `10.1` is required (`10.2` won't work, see below)

__IMPORTANT:__ Xcode `10.2` introduced some bugs for Swift Native Modules, so please [downgrade Xcode](https://medium.com/@tseboho/how-to-downgrade-xcode-4359df5158d5) to version `10.1` to be able to follow this workshop. Thank you for your understanding.

## Setup

1. Fork this repository
2. Clone it locally
3. Install dependencies: `npm install`
4. Run the packager: `npm start`

5. Start the project on Android:
   1. Open Android Studio
   2. Open the `./android` project in Android Studio
   3. Start an AVD
   4. Run the app

6. Start the project on iOS:
   1. Open Xcode
   2. Open `./ios/RNCustomModules.xcodeproj` in Xcode
   3. Run the app in a simulator

If everything goes well, you should see this screen:

<img src="/public/screenshot.png" width="300">
