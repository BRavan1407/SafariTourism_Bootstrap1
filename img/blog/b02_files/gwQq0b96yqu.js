;/*FB_PKG_DELIM*/

__d("EventCometDashboardRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7007470852667971"}),null);
__d("EventCometDashboardRootQuery$Parameters",["EventCometDashboardRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometDashboardRootQuery_facebookRelayOperation"),metadata:{},name:"EventCometDashboardRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometHomeRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7269379803074697"}),null);
__d("EventCometHomeRootQuery$Parameters",["EventCometHomeRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometHomeRootQuery_facebookRelayOperation"),metadata:{},name:"EventCometHomeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FeedsCometFilterPanelQuery$Parameters",["FeedsCometFilterPanelQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FeedsCometFilterPanelQuery_facebookRelayOperation"),metadata:{},name:"FeedsCometFilterPanelQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMemoriesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7698691353477729"}),null);
__d("CometMemoriesRootQuery$Parameters",["CometMemoriesRootQuery_facebookRelayOperation","CometUFIIsRTAEnabled.relayprovider","CometUFIReactionsEnableShortName.relayprovider","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMemoriesRootQuery_facebookRelayOperation"),metadata:{},name:"CometMemoriesRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider"),__relay_internal__pv__CometUFIIsRTAEnabledrelayprovider:b("CometUFIIsRTAEnabled.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometSaveDashboardRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7085295724860516"}),null);
__d("CometSaveDashboardRootQuery$Parameters",["CometSaveDashboardRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSaveDashboardRootQuery_facebookRelayOperation"),metadata:{},name:"CometSaveDashboardRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSavePrimaryNavigationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7964745310264333"}),null);
__d("SaveCollectionsFeatureParityComet.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("7185")===!0}};g["default"]=a}),98);
__d("CometSavePrimaryNavigationQuery$Parameters",["CometSavePrimaryNavigationQuery_facebookRelayOperation","SaveCollectionsFeatureParityComet.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSavePrimaryNavigationQuery_facebookRelayOperation"),metadata:{},name:"CometSavePrimaryNavigationQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__SaveCollectionsFeatureParityCometrelayprovider:b("SaveCollectionsFeatureParityComet.relayprovider")}}};e.exports=a}),null);
__d("buildCometEventDashboardRoute.entrypoint",["EventCometDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("EventCometDashboardRoot.react").__setRef("buildCometEventDashboardRoute.entrypoint"),function(a){a=a.routeProps;var e=c("gkx")("976093");return{query$key:{parameters:b("EventCometDashboardRootQuery$Parameters"),variables:{isHome:a.is_home===!0,isLoggedOut:e,scale:d("WebPixelRatio").get()}}}});g["default"]=a}),98);
__d("EventDiscoveryTabType.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["ARTS_CULTURE","CAUSES","CUSTOM","FILM","FITNESS","FOLLOWING","FOOD_DRINK","FRIENDS","GROUPS","HEALTH","KID_FRIENDLY","LEARNING_CLASS","LIVE_NOW","LOCAL","MUSIC","NETWORKING","NIGHTLIFE","NOW","ONLINE","POPULAR_NOW","RECOMMENDED","RELIGION","SALE","SHOPPING","THIS_WEEK","TOP_CATEGORY"]);c=a;f["default"]=c}),66);
__d("EventCometHomeRoot.entrypoint",["EventCometHomeRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometEventDashboardRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometEventDashboardRoute.entrypoint")(c("JSResourceForInteraction")("EventCometHomeRoot.react").__setRef("EventCometHomeRoot.entrypoint"),function(a){var c,e,f,g,h,i,j;a=a.routeProps;c=(c=a.discover_tab)!=null?c:"RECOMMENDED";e=(e=a.date_filter_option)!=null?e:null;f=(f=a.location_id)!=null?f:null;g=(g=a.event_flags)!=null?g:null;h=(h=(h=a.jnb_event_ids)==null?void 0:h.split(","))!=null?h:[];var k=a.ref_notif_type==="event_host_badge_award";i=(i=window.innerHeight)!=null?i:(i=a.browser_dimension)==null?void 0:i.y;j=(j=window.innerWidth)!=null?j:(j=a.browser_dimension)==null?void 0:j.x;var l=2;j>=2296?l=6:j>=1680?l=4:j>=1372&&(l=3);j=(j=a.start_date)!=null?j:null;a=(a=a.end_date)!=null?a:j;var m=j!=null?new Date(j):null,n=a!=null?new Date(a):null;n==null?void 0:n.setDate(n.getDate()+1);m=m!=null?m.getTime()/1e3:null;n=n!=null?n.getTime()/1e3:m;return{extraProps:{ISOEndDate:a,ISOStartDate:j,dateFilterOption:e,discoverTab:c,eventFlags:g,locationID:f},queries:{homeEvents$key:{parameters:b("EventCometHomeRootQuery$Parameters"),variables:{JNBEventID1:(a=h[0])!=null?a:"",JNBEventID2:(j=h[1])!=null?j:"",JNBEventID3:(e=h[2])!=null?e:"",discoverTab:c,endTimestamp:n,eventFlags:g,hasJNBEventID:h.length>0,initialCount:l*(i>=768?3:2),isFromSuperHostAwardBadgeNotification:k,locationID:f,scale:d("WebPixelRatio").get(),startTimestamp:m}}}}});g["default"]=a}),98);
__d("FeedsCometRoot.entrypoint",["CometHomeRootEntryPointVariables","CometModernHomeFeedQuery$Parameters","FeedsCometFilterPanelQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.sk;a=a.routeProps.feedStyle;a=d("CometHomeRootEntryPointVariables").getCometFeedVariablesForSk(a,b,"COLD_START");return{queries:{feedQueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:c("CometModernHomeFeedQuery$Parameters"),variables:a},filterQueryReference:{parameters:c("FeedsCometFilterPanelQuery$Parameters"),variables:{enableFeedsFilterNux:!0}}}}},root:c("JSResourceForInteraction")("FeedsCometRoot.react").__setRef("FeedsCometRoot.entrypoint")};g["default"]=a}),98);
__d("CometMemoriesRoot.entrypoint",["CometMemoriesRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{memoriesReference:{parameters:b("CometMemoriesRootQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:0,feedLocation:"GOODWILL_THROWBACK_PERMALINK",focusCommentID:null,goodwillTimestamp:a.routeProps.goodwillTimestamp,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"throwback_composer",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}}}},root:c("JSResourceForInteraction")("CometMemoriesRoot.react").__setRef("CometMemoriesRoot.entrypoint")};g["default"]=a}),98);
__d("buildSaveRoute.entrypoint",["CometSavePrimaryNavigationQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometSaveRoot.react").__setRef("buildSaveRoute.entrypoint"),function(a){return{navigationQueryReference:{parameters:b("CometSavePrimaryNavigationQuery$Parameters"),variables:{contributorRoles:["CONTRIBUTOR"]}}}});g["default"]=a}),98);
__d("CometSaveDashboardRoot.entrypoint",["CometSaveDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildSaveRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildSaveRoute.entrypoint")(c("JSResourceForInteraction")("CometSaveDashboardRoot.react").__setRef("CometSaveDashboardRoot.entrypoint"),function(a){var b=a.routeProps,e=b.content_filter,f=b.referrer;b=b.section;a=a.routeParams;var g=a.hoisted_item_id;a=a.notif_id;return{extraProps:{routeProps:{referrer:f,section:b}},queries:{rootQueryRef:{parameters:c("CometSaveDashboardRootQuery$Parameters"),variables:{content_filter:e!=null?[e]:null,hoisted_item_id:g!=null?String(g):null,notif_id:a!=null?String(a):null,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);