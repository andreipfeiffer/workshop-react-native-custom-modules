//
//  Counter.m
//  RNCustomModules
//
//  Created by Andrei Pfeiffer on 3/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)
RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(
                  getCount:(RCTPromiseResolveBlock) resolve
                  rejecter:(RCTPromiseRejectBlock) reject
                  )
RCT_EXTERN_METHOD(setCount:(nonnull NSNumber) value)
@end
