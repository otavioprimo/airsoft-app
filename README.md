# Airsfot APP

### Gerar AAB release
```bash
$ cd android
$ ./gradlew bundleRelease -PMYAPP_UPLOAD_STORE_PASSWORD='${{ secrets.KEYSTORE_PASSWORD }}' -PMYAPP_UPLOAD_KEY_PASSWORD='${{ secrets.KEYSTORE_PASSWORD }}'
```

### Gerar APK release
```bash
$ cd android
$ ./gradlew assembleRelease -PMYAPP_UPLOAD_STORE_PASSWORD='${{ secrets.KEYSTORE_PASSWORD }}' -PMYAPP_UPLOAD_KEY_PASSWORD='${{ secrets.KEYSTORE_PASSWORD }}'
```

# Testar build release 
```bash
$ npx react-native run-android --variant=release
```

