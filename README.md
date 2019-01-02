# ble-explorer
React native blue tooth explorer

Project base on react-native init and not CRNA.
This project uses polidea blue toth library (thanks).
The App lists bluetooth devices, their services and characteristics, (actually filtering HRM service). Press a device for stop scanning, and then press on characteristic to begin a subscription to its data.

For android it requires ANDROID_HOME to be defined, in my case =/home/hans/Android/Sdk

To run the code use:
yarn start 
react-native run-android
