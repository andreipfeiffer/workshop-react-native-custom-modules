# Workshop: React Native Custom Modules

This workshop will walk you through the process of creating a Custom Module from scratch in React Native, for __Android__ and __iOS__.

## Prerequisites

This is an advanced workshop, that requires prior experience using React Native, as we won't cover the basics of React or React Native.

The following tools are required to follow this workshop:

1. react-native-cli + watchman (follow [Getting Started](https://facebook.github.io/react-native/docs/getting-started) with __React Native CLI Quickstart__, NOT the Expo Guide)
2. Android Studio `3+` and an AVD with API level `26+`
3. for Apple users, Xcode `10.x`

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

If everything goes well, you should see the following screen, which doesn't do anything:

<img src="/public/screenshot.png" width="250">
