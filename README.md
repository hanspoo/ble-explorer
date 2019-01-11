# ble-explorer
React native blue tooth explorer

The App lists bluetooth devices, their services and characteristics, (actually filtering HRM service). Press a device for stop scanning, and then press on characteristic to begin a subscription to its data.

For android it requires ANDROID_HOME to be defined, in my case =/home/hans/Android/Sdk

To run the code use:
yarn start 
react-native run-android

For testing purposes i'm using the Android App "BLE Peripheral Simulator".

Based on react-native init and not CRNA.
Uses polidea bluetooth library (thanks polidea).

Build and install instructions:

 react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android
rm -rf app/src/main/res/drawable-*
./gradlew clean
./gradlew assembleRelease

or to build and install in the phone:

./gradlew installRelease



