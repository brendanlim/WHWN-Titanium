/**
 * Appcelerator Titanium Mobile
 * This is generated code. Do not modify. Your changes will be lost.
 * Generated code is Copyright (c) 2009 by Appcelerator, Inc.
 * All Rights Reserved.
 */
#import <Foundation/Foundation.h>

@protocol TitaniumAppAssetResolver
- (NSData*) resolveAppAsset:(NSURL*)url;
- (oneway void)release;
- (id)retain;
@end

@interface ApplicationRouting : NSObject<TitaniumAppAssetResolver> {
}
- (NSData*) resolveAppAsset:(NSURL*)url;
- (NSData*) pageNamedCategory_feed;
- (NSData*) pageNamedHaves;
- (NSData*) pageNamedNeeds;
- (NSData*) pageNamedSettings;
- (NSData*) scriptNamedJavascripts_api;
- (NSData*) scriptNamedJavascripts_category_feed;
- (NSData*) scriptNamedJavascripts_haves;
- (NSData*) scriptNamedJavascripts_jquery_1_4;
- (NSData*) scriptNamedJavascripts_needs;
- (NSData*) scriptNamedJavascripts_settings;
- (NSData*) styleNamedStylesheets_index;

@end
