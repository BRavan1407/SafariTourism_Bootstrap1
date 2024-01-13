;/*FB_PKG_DELIM*/

__d("groupGeminiPendingPostReminderDecrementUpdater",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.groupID;a=a.store;a=a.get(b);if(a==null)return;b=a.getLinkedRecords("work_group_reminder_list_renderer");if(b==null)return;var c=[];for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;var g=!0;if(f!=null&&f.getValue("__typename")==="CometGroupPendingPostsReminderRenderer"){var h=f.getValue("count");if(typeof h==="number"){h=Math.max(h-1,0);h>0?f.setValue(h,"count"):g=!1}}g&&c.push(f)}a.setLinkedRecords(c,"work_group_reminder_list_renderer")}f["default"]=a}),66);
__d("groupsCometDeleteNodeFromConnection",["CometRelay","RelayFBConnectionHandler_UNSTABLE"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){b=a.get(b);if(b==null)return;((a=d("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a,b,e))!=null?a:[]).forEach(function(a){return d("CometRelay").ConnectionHandler.deleteNode(a,c)})}g["default"]=a}),98);
__d("viewerContentUpdaterUtils",["CometRelay"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){a=a.get(b);if(a==null)return;var f;e==="PENDING"?f=d("CometRelay").ConnectionHandler.getConnection(c,"GroupsCometViewerContentPendingPostsFeed_stories",{content_type:e,ordering:"NEWEST_FIRST"}):e==="PUBLISHED"&&(f=d("CometRelay").ConnectionHandler.getConnection(c,"GroupsCometViewerContentPublishedPostsFeed_stories",{content_type:e,ordering:"NEWEST_FIRST"}));if(f==null)return;d("CometRelay").ConnectionHandler.insertEdgeBefore(f,a)}function b(a,b,c){b=b.getDataID();b=(b=a.get(b))==null?void 0:b.getLinkedRecord("stories",{content_type:c});if(b==null)return;c=b.getDataID();b=a.get(c);if(b==null)return;a=b.getValue("count_up_to",{max:51});typeof a==="number"&&b.setValue(Math.max(a-1,0),"count_up_to",{max:51});c=b.getValue("count_up_to",{max:1});typeof c==="number"&&typeof a==="number"&&a-1===0&&b.setValue(Math.max(c-1,0),"count_up_to",{max:1})}g.addEdgeToViewerContentConnection=a;g.decrementSectionCounts=b}),98);
__d("viewerContentPendingPostUpdater",["CometRelay","groupsCometDeleteNodeFromConnection","viewerContentUpdaterUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.groupID,e=a.store;a=a.storyID;if(b==null)return;b=e.get(b);if(b==null)return;b=b.getLinkedRecord("viewer_content");if(b==null)return;var f=b.getDataID();c("groupsCometDeleteNodeFromConnection")(e,f,a,"GroupsCometViewerContentPendingPostsFeed_stories");d("viewerContentUpdaterUtils").decrementSectionCounts(e,b,"PENDING")}function b(a){return function(b){var c=b.getRootField("story_create");c=c&&c.getLinkedRecord("group_feed_story_edge");if(c==null)return;b=b.get(a);if(b==null)return;b=b.getLinkedRecord("viewer_content");if(b==null)return;b=d("CometRelay").ConnectionHandler.getConnection(b,"GroupsCometViewerContentPendingPostsFeed_stories",{content_type:"PENDING",ordering:"NEWEST_FIRST"});if(b==null)return;d("CometRelay").ConnectionHandler.insertEdgeBefore(b,c)}}g.viewerContentDeletePendingPostUpdater=a;g.viewerContentAddPendingPostUpdater=b}),98);
__d("CreatorStudioVideoCollaborationLoggerWrapper",["CpxCreatorCollaborationEventFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,b,d,e,f,g,h,i){c("CpxCreatorCollaborationEventFalcoEvent").log(function(){return{event_name:a,event_state:b,left_nav_first_level_tab:"overall",product_entry_point:null,right_nav_first_level_tab:"overall",selected_entity_ids:[],video_id:f,primary_collaborator_id:d,secondary_collaborator_id:e,exception_class:g,exception_message:h,exception_trace:i}})};g.creatorStudioVideoCollaborationEventsLoggerWrapper=a}),98);
__d("FbShortsAggregationPageClickedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1435");b=d("FalcoLoggerInternal").create("fb_shorts_aggregation_page_clicked",a);e=b;g["default"]=e}),98);
__d("FbShortsInstagramDeeplinkFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1518");b=d("FalcoLoggerInternal").create("fb_shorts_instagram_deeplink",a);e=b;g["default"]=e}),98);
__d("FbShortsSaveReelFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2035");b=d("FalcoLoggerInternal").create("fb_shorts_save_reel",a);e=b;g["default"]=e}),98);
__d("FbShortsSeeLessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1490");b=d("FalcoLoggerInternal").create("fb_shorts_see_less",a);e=b;g["default"]=e}),98);
__d("FbShortsUndoSeeLessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1491");b=d("FalcoLoggerInternal").create("fb_shorts_undo_see_less",a);e=b;g["default"]=e}),98);
__d("FbShortsViewerOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("936");b=d("FalcoLoggerInternal").create("fb_shorts_viewer_open",a);e=b;g["default"]=e}),98);
__d("SfvChainingNavigationExitFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("694");b=d("FalcoLoggerInternal").create("sfv_chaining_navigation_exit",a);e=b;g["default"]=e}),98);
__d("ShortsFollowFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1495");b=d("FalcoLoggerInternal").create("shorts_follow",a);e=b;g["default"]=e}),98);
__d("ShortsTapCreatorProfileFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1300");b=d("FalcoLoggerInternal").create("shorts_tap_creator_profile",a);e=b;g["default"]=e}),98);
__d("ShortsUnfollowFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1496");b=d("FalcoLoggerInternal").create("shorts_unfollow",a);e=b;g["default"]=e}),98);
__d("StarsCreatorEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3706");b=d("FalcoLoggerInternal").create("stars_creator_event",a);e=b;g["default"]=e}),98);
__d("XCometCreatorCollaborationInviteControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/collaboration_invite/{video_id}/{secondary_collaborator_id}/",Object.freeze({show_dialog:!1}),void 0);b=a;g["default"]=b}),98);
__d("FanFundingStarsEventsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:FanFundingStarsEventsLoggerConfig")}),null);