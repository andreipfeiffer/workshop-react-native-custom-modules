package com.rncustommodules;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nonnull;

public class CounterModule extends ReactContextBaseJavaModule {
    private int count = 0;

    public CounterModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Counter";
    }

    @ReactMethod
    public void increment() {
        count += 1;
        sendOnChangeEvent();
    }

    @ReactMethod
    public void getCount(Promise promise) {
        promise.resolve(count);
    }

    @ReactMethod
    public void setCount(int value) {
        count = value;
        sendOnChangeEvent();
    }

    private void sendOnChangeEvent() {
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("onChange", count);
    }
}
