//
//  Counter.swift
//  RNCustomModules
//
//  Created by Andrei Pfeiffer on 3/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Counter)
class Counter: RCTEventEmitter {
  
  private var count = 0
  
  @objc
  func increment() {
    count += 1
    print(count)
    sendEvent(withName: "onChange", body: count)
  }
  
  @objc
  func getCount(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    resolve(count)
  }
  
  @objc
  func setCount(_ value: NSNumber) {
    count = Int(truncating: value)
    print(count)
    sendEvent(withName: "onChange", body: count)
  }
  
  override func supportedEvents() -> [String]! {
    return ["onChange"]
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
