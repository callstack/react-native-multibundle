#import "Multibundle.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

@implementation Multibundle

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(loadBundle:(NSString *)bundleName
    bundleId:(nonnull NSNumber *)bundleId
    sync:(BOOL)sync
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    RCTBridge *bridge = [RCTBridge alloc];

    @try
    {
        NSURL *u = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
        [bridge registerSegmentWithId:bundleId path:u.absoluteString];

        resolve(nil);
        
    } @catch (NSException * exception)
    {
        reject(@"error", @"error", nil);
    }
}

@end
