module.exports = {
  ExponentAV: {
    getAudioRecordingStatus: { type: 'function' },
    getStatusForSound: { type: 'function' },
    getStatusForVideo: { type: 'function' },
    loadForSound: { type: 'function' },
    loadForVideo: { type: 'function' },
    pauseAudioRecording: { type: 'function' },
    prepareAudioRecorder: { type: 'function' },
    setAudioIsEnabled: { type: 'function' },
    setAudioMode: { type: 'function' },
    setErrorCallbackForSound: { type: 'function' },
    setStatusForSound: { type: 'function' },
    setStatusForVideo: { type: 'function' },
    setStatusUpdateCallbackForSound: { type: 'function' },
    startAudioRecording: { type: 'function' },
    stopAudioRecording: { type: 'function' },
    unloadAudioRecorder: { type: 'function' },
    unloadForSound: { type: 'function' },
    unloadForVideo: { type: 'function' },
  },
  ExponentAccelerometer: {
    addListener: { type: 'function' },
    removeListeners: { type: 'function' },
    setUpdateInterval: { type: 'function' },
  },
  ExponentAmplitude: {
    clearUserProperties: { type: 'function' },
    initialize: { type: 'function' },
    logEvent: { type: 'function' },
    logEventWithProperties: { type: 'function' },
    setGroup: { type: 'function' },
    setUserId: { type: 'function' },
    setUserProperties: { type: 'function' },
  },
  ExponentAppLoadingManager: { finishedAsync: { type: 'function' } },
  ExponentBarCodeScannerManager: {
    BarCodeType: { type: 'object' },
    TorchMode: { type: 'object' },
    Type: { type: 'object' },
  },
  ExponentBlurViewManager: {},
  ExponentConstants: {
    appOwnership: { type: 'string' },
    deviceId: { type: 'string' },
    deviceName: { type: 'string' },
    deviceYearClass: { type: 'number', mock: 2017 },
    expoVersion: { type: 'string' },
    getWebViewUserAgentAsync: { type: 'function' },
    isDevice: { type: 'boolean' },
    linkingUri: { type: 'string' },
    manifest: { type: 'object' },
    platform: { type: 'object' },
    sessionId: { type: 'string' },
    statusBarHeight: { type: 'number', mock: 20 },
    systemFonts: { type: 'array' },
  },
  ExponentContacts: { getContactsAsync: { type: 'function' } },
  ExponentDocumentPicker: { getDocumentAsync: { type: 'function' } },
  ExponentErrorRecovery: { setRecoveryProps: { type: 'function' } },
  ExponentFacebook: { logInWithReadPermissionsAsync: { type: 'function' } },
  ExponentFileSystem: {
    addListener: { type: 'function' },
    cacheDirectory: { type: 'string' },
    copyAsync: { type: 'function' },
    deleteAsync: { type: 'function' },
    documentDirectory: { type: 'string' },
    downloadAsync: { type: 'function' },
    downloadResumablePauseAsync: { type: 'function' },
    downloadResumableStartAsync: { type: 'function' },
    getInfoAsync: { type: 'function' },
    makeDirectoryAsync: { type: 'function' },
    moveAsync: { type: 'function' },
    readAsStringAsync: { type: 'function' },
    readDirectoryAsync: { type: 'function' },
    removeListeners: { type: 'function' },
    writeAsStringAsync: { type: 'function' },
  },
  ExponentFingerprint: {
    authenticateAsync: { type: 'function' },
    hasHardwareAsync: { type: 'function' },
    isEnrolledAsync: { type: 'function' },
  },
  ExponentFontLoader: { loadAsync: { type: 'function' } },
  ExponentGLObjectManager: {
    createObjectAsync: { type: 'function' },
    destroyObjectAsync: { type: 'function' },
  },
  ExponentGLViewManager: {},
  ExponentGoogle: { logInAsync: { type: 'function' } },
  ExponentGyroscope: {
    addListener: { type: 'function' },
    removeListeners: { type: 'function' },
    setUpdateInterval: { type: 'function' },
  },
  ExponentImagePicker: {
    launchCameraAsync: { type: 'function' },
    launchImageLibraryAsync: { type: 'function' },
  },
  ExponentKeepAwake: {
    activate: { type: 'function' },
    deactivate: { type: 'function' },
  },
  ExponentLegacyAsyncLocalStorage: {
    getAllKeys: { type: 'function' },
    isMigrationDone: { type: 'function' },
    multiGet: { type: 'function' },
    setMigrationDone: { type: 'function' },
  },
  ExponentLinearGradientManager: {},
  ExponentLocation: {
    addListener: { type: 'function' },
    geocodeAsync: { type: 'function' },
    getCurrentPositionAsync: { type: 'function' },
    getProviderStatusAsync: { type: 'function' },
    removeListeners: { type: 'function' },
    removeWatchAsync: { type: 'function' },
    reverseGeocodeAsync: { type: 'function' },
    watchDeviceHeading: { type: 'function' },
    watchPositionImplAsync: { type: 'function' },
  },
  ExponentMagnetometer: {
    addListener: { type: 'function' },
    removeListeners: { type: 'function' },
    setUpdateInterval: { type: 'function' },
  },
  ExponentMagnetometerUncalibrated: {
    addListener: { type: 'function' },
    removeListeners: { type: 'function' },
    setUpdateInterval: { type: 'function' },
  },
  ExponentNotifications: {
    cancelAllScheduledNotifications: { type: 'function' },
    cancelScheduledNotification: { type: 'function' },
    getBadgeNumberAsync: { type: 'function' },
    getDevicePushTokenAsync: { type: 'function' },
    getExponentPushTokenAsync: { type: 'function' },
    presentLocalNotification: { type: 'function' },
    scheduleLocalNotification: { type: 'function' },
    setBadgeNumberAsync: { type: 'function' },
  },
  ExponentPedometer: {
    addListener: { type: 'function' },
    getStepCountAsync: { type: 'function' },
    isAvailableAsync: { type: 'function' },
    removeListeners: { type: 'function' },
    stopWatchingStepCount: { type: 'function' },
    watchStepCount: { type: 'function' },
  },
  ExponentPermissions: {
    askAsync: { type: 'function' },
    getAsync: { type: 'function' },
  },
  ExponentSQLite: { exec: { type: 'function' } },
  ExponentScopedModuleRegistry: {},
  ExponentScreenOrientation: { allow: { type: 'function' } },
  ExponentSecureStore: {
    AFTER_FIRST_UNLOCK: { type: 'number', mock: 0 },
    AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: { type: 'number', mock: 1 },
    ALWAYS: { type: 'number', mock: 2 },
    ALWAYS_THIS_DEVICE_ONLY: { type: 'number', mock: 4 },
    WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: { type: 'number', mock: 3 },
    WHEN_UNLOCKED: { type: 'number', mock: 5 },
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: { type: 'number', mock: 6 },
    deleteValueWithKeyAsync: { type: 'function' },
    getValueWithKeyAsync: { type: 'function' },
    setValueWithKeyAsync: { type: 'function' },
  },
  ExponentSegment: {
    flush: { type: 'function' },
    identify: { type: 'function' },
    identifyWithTraits: { type: 'function' },
    initializeAndroid: { type: 'function' },
    initializeIOS: { type: 'function' },
    reset: { type: 'function' },
    screen: { type: 'function' },
    screenWithProperties: { type: 'function' },
    track: { type: 'function' },
    trackWithProperties: { type: 'function' },
  },
  ExponentSpeech: {
    addListener: { type: 'function' },
    isSpeaking: { type: 'function' },
    removeListeners: { type: 'function' },
    speak: { type: 'function' },
    stop: { type: 'function' },
  },
  ExponentUtil: {
    getCurrentDeviceCountryAsync: { type: 'function' },
    getCurrentLocaleAsync: { type: 'function' },
    getCurrentTimeZoneAsync: { type: 'function' },
    reload: { type: 'function' },
  },
  ExponentVideoManager: {
    ScaleAspectFill: { type: 'string' },
    ScaleAspectFit: { type: 'string' },
    ScaleNone: { type: 'string' },
    ScaleToFill: { type: 'string' },
    setFullscreen: { type: 'function' },
  },
  ExponentWebBrowser: {
    dismissBrowser: { type: 'function' },
    openBrowserAsync: { type: 'function' },
  },
};
