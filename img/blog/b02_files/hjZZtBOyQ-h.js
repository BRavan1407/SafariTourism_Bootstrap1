;/*FB_PKG_DELIM*/

__d("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenCallToAction_attachment",selections:[{alias:"cta_screen_renderer",args:[{kind:"Literal",name:"supported",value:"3nzYXi"}],concreteType:null,kind:"LinkedField",name:"call_to_action_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLeadGenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenCallToActionRenderer",abstractKey:null}],storageKey:'call_to_action_renderer(supported:"3nzYXi")'}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_style",storageKey:null}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenCallToAction_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedVideoPlayerPlaceholder_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedVideoPlayerPlaceholder_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenOverlay_attachment"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenCallToAction.react",["CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql","CometRelay","CometTrackingNodeProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.attachment;a=babelHelpers.objectWithoutPropertiesLoose(a,["attachment"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql"),e);return e.cta_screen_renderer==null?null:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:186,children:j.jsx(d("CometRelay").MatchContainer,{match:e.cta_screen_renderer,props:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",["CometImage.react","CometPressable.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={image:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},interactiveArea:{height:"x5yr21d",opacity:"xg01cxk",position:"x10l6tqk",start:"x17qophe",left:null,right:null,width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",position:"x1n2onr6",textAlign:"x1yc453h",$$css:!0},smallImage:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},smallText:{lineHeight:"xo5v014",paddingStart:"x1e558r4",paddingLeft:null,paddingRight:null,position:"x1n2onr6",whiteSpace:"xuxw1ft",$$css:!0},text:{lineHeight:"xo5v014",paddingStart:"x1ye3gou",paddingLeft:null,paddingRight:null,position:"x1n2onr6",whiteSpace:"xuxw1ft",$$css:!0},textLinkDisplay:{marginTop:"x1gslohp",maxWidth:"x1racy4e",$$css:!0}};function a(a){var b=a.buttonSize;b=b===void 0?"large":b;var d=a.iconImageUri,e=a.label,f=a.linkDisplay,g=a.title,h=a.triggerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["buttonSize","iconImageUri","label","linkDisplay","title","triggerRef"]);return b==="small"?i.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x1n2onr6 x1yc453h",children:[i.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:j.smallImage}),i.jsx("div",{className:"xo5v014 x1e558r4 x1n2onr6 xuxw1ft",children:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"body4",children:g})}),i.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:h,xstyle:j.interactiveArea}))]}):i.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x1n2onr6 x1yc453h",children:[i.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:j.image}),i.jsxs("div",{className:"xo5v014 x1ye3gou x1n2onr6 xuxw1ft",children:[i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized3",children:g}),f!=null&&b!=="large_without_link"?i.jsx("div",{className:"x1gslohp x1racy4e",children:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"headline3",children:f})}):null]}),i.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:h,xstyle:j.interactiveArea}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction.react",["CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e,f,g=a.actionLink;a=a.buttonSize;a=a===void 0?"large":a;g=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"),g);g=g.action_link;if(g==null||g.url==null||g.title==null)return null;var i=g.url;e=(e=g.title)!=null?e:"";f=(f=g.link_display)!=null?f:"";g=(g=(g=g.link_video_endscreen_icon)==null?void 0:g.uri)!=null?g:"/images/calltoaction/videoendscreen/learnmore_40dp-2x.png";i={rel:"nofollow",target:"_blank",url:i};return j.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:a,iconImageUri:g,label:e,linkDisplay:f,linkProps:i,title:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenOverlay.react",["fbt","CometFeedStoryVideoCTAScreenCallToAction.react","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometFeedStoryVideoCTAScreenOverlay_attachment.graphql","CometImage.react","CometPressable.react","CometRelay","CometTrackingNodeProvider.react","TetraText.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=j||(j=d("react")),m=j.useState,n=["BUTTON_WITH_TEXT_ONLY","ATTACHMENT_AND_ENDSCREEN","VIDEO_DR_STYLE"],o={image:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},interactiveArea:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",left:null,right:null,width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",bottom:"x1ey2m1c",display:"x78zum5",flexDirection:"x1q0g3np",paddingTop:"xyinxu5",paddingEnd:"x1ou2tus",paddingBottom:"x1g2khh7",paddingStart:"x1egjynq",position:"x10l6tqk",start:"x17qophe",left:null,right:null,$$css:!0},title:{lineHeight:"xo5v014",paddingStart:"x1e558r4",paddingLeft:null,paddingRight:null,verticalAlign:"x3ajldb",$$css:!0}};function p(a){var b=a.iconImageUri,d=a.label,e=a.onClick;a=a.title;var f=m(!1),g=f[0],h=f[1];return l.jsxs("div",{className:"x6s0dn4 x1ey2m1c x78zum5 x1q0g3np xyinxu5 x1ou2tus x1g2khh7 x1egjynq x10l6tqk x17qophe",onMouseLeave:function(){h(!1)},onMouseOver:function(){h(!0)},children:[l.jsx(c("CometImage.react"),{src:b,xstyle:o.image}),g?l.jsx("div",{className:"xo5v014 x1e558r4 x3ajldb",children:l.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:a})}):null,l.jsx(c("CometPressable.react"),{label:d,onPress:e,xstyle:o.interactiveArea})]})}p.displayName=p.name+" [from "+f.id+"]";function a(a){var e,f=a.adClientToken,g=a.adID,j=a.attachment,m=a.buttonSize;m=m===void 0?"large":m;a=a.ctaScreenOverlayType;j=d("CometRelay").useFragment(i!==void 0?i:i=b("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),j);var o=(k||(k=d("VideoPlayerHooks"))).useController();if(j==null)return null;e=(e=j.action_links)!=null?e:[];e=e[0];if(e!=null&&e.__typename==="LinkOpenActionLink"&&(e.link_style!=null&&n.indexOf(e.link_style)===-1))return null;e=l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:186,children:l.jsx(c("CometFeedStoryVideoCTAScreenCallToAction.react"),{adClientToken:f,adID:g,attachment:j,buttonSize:m})});f=a==="pausescreen"?l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:206,children:l.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:m,iconImageUri:"/images/video/play_circle_40dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onPress:function(){o.play("user_initiated")},title:h._("__JHASH__YFf-NQx2b67__JHASH__")})}):null;g=a==="endscreen"?l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:188,children:m==="small"?l.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:m,iconImageUri:"/images/video/replay_20dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onPress:function(){o.play("user_initiated")},title:h._("__JHASH__lKcDNU8LjG___JHASH__")}):l.jsx(p,{iconImageUri:"/images/video/replay_20dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onClick:function(){o.play("user_initiated")},title:h._("__JHASH__lKcDNU8LjG___JHASH__")})}):null;return m==="small"?l.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:l.jsxs("div",{className:"x6s0dn4 xjb1437 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy x1d8287x x19991ni xl405pv",children:[l.jsxs("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:[f,f!=null?l.jsx("div",{className:"x1qx5ct2"}):null,e]}),g!=null?l.jsx("div",{className:"x1qx5ct2"}):null,l.jsx("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:g})]})}):l.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:l.jsxs("div",{className:"x6s0dn4 xjb1437 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy x1d8287x x19991ni xl405pv",children:[l.jsxs("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:[f,f!=null?l.jsx("div",{className:"x1qx5ct2"}):null,e]}),g]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedVideoPlayerPlaceholder.react",["fbt","CometFeedVideoPlayerPlaceholder_video.graphql","CometPressable.react","CometRelay","VideoPlayerCometFeedThumbnail.react","VideoPlayerPlayButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={pressable:{cursor:"x1ypdohk",display:"x1lliihq",pointerEvents:"x67bb7w",$$css:!0},root:{alignItems:"x6s0dn4",bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x78zum5",end:"xds687c",left:null,right:null,justifyContent:"xl56j7k",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){var e=a.onClick;a=a.video;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometFeedVideoPlayerPlaceholder_video.graphql"),a);a=k.jsxs(k.Fragment,{children:[k.jsx(c("VideoPlayerCometFeedThumbnail.react"),{video:a}),k.jsx(c("VideoPlayerPlayButton.react"),{isVisible:!0})]});return typeof e==="function"?k.jsx(c("CometPressable.react"),{display:"block",label:h._("__JHASH__pymzrO9zrya__JHASH__"),onPress:e,overlayDisabled:!0,xstyle:[l.root,l.pressable],children:a}):k.jsx("div",{className:"x6s0dn4 x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x47corl x10l6tqk x17qophe x13vifvy",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometObserveChildrenRenderedAnyDOM.react",["react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||(h=d("react"));e=h;var i=e.useEffect,j=e.useLayoutEffect,k=e.useRef,l={attributes:!1,characterData:!0,childList:!0,subtree:!1};function a(a){var b=a.children,d=a.onChanged,e=k(d);j(function(){e.current=d;return function(){e.current=null}},[d]);var f=k(!1),g=k(null),h=k(null);a=c("useStable")(function(){function a(){var a=e.current;if(a){var b,c=f.current;b=((b=h.current)==null?void 0:b.firstChild)!=null;f.current=b;b!==c&&a(b)}}function b(b){if(b!==h.current){h.current=b;var c=g.current;c&&(c.disconnect(),g.current=null);if(b==null)a();else{c=new MutationObserver(function(b){a()});g.current=c;c.observe(b,l);a()}}}return b});i(function(){return function(){g.current&&(g.current.disconnect(),g.current=null)}},[]);return b({containerElementRefCallback:a})}a.displayName=a.name+" [from "+f.id+"]";d=b.memo(a);g["default"]=d}),98);
__d("VideoPlayerObserveChildrenRenderedAnyDOM.react",["CometObserveChildrenRenderedAnyDOM.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useCallback;function a(a){var b=a.children;a=a.onChanged;var d=j(function(a){a=a.containerElementRefCallback;return i.jsx("div",{className:"xqtp20y x1plvlek xryxfnj x1uhb9sk xnalus7",ref:a,children:b})},[b]);return i.jsx(c("CometObserveChildrenRenderedAnyDOM.react"),{onChanged:a,children:d})}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("useCometFeedStoryVideoCTAScreenOverlay",["CometFeedStoryVideoCTAScreenOverlay.react","CometRelay","VideoPlayerHooks","VideoPlayerObserveChildrenRenderedAnyDOM.react","react","useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql","useVideoPlayerHasStartedPlayingAtLeastOnce"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=i||(i=d("react"));e=i;var l=e.useEffect,m=e.useState,n=["LinkOpenActionLink","LeadGenActionLink"];function o(a,b,c,d){if(a)if(d)return"endscreen";else if(b&&!c)return"pausescreen";return null}function a(a){var e=a.adClientToken,f=a.adID,g=a.attachment,i=a.buttonSize;i=i===void 0?"large":i;a=a.shouldFixVideoAdsPausedScreenCta;a=a===void 0?!1:a;g=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),g);var p=m(!1),q=p[0];p=p[1];var r=(j||(j=d("VideoPlayerHooks"))).useVideoPlaybackEnded(),s=j.useEnded(),t=j.useIsFullscreen(),u=j.usePaused(),v=m(!1),w=v[0],x=v[1];v=g==null?void 0:g.action_links.some(function(a){return n.includes(a.__typename)});l(function(){u||x(!0)},[u]);var y=c("useVideoPlayerHasStartedPlayingAtLeastOnce")();y=y&&!t&&v===!0;t=a?o(y,u,s,r):y&&r?"endscreen":y&&w&&u&&!s?"pausescreen":null;v=g!=null&&t!=null?k.jsx(c("VideoPlayerObserveChildrenRenderedAnyDOM.react"),{onChanged:p,children:k.jsx(c("CometFeedStoryVideoCTAScreenOverlay.react"),{adClientToken:e,adID:f,attachment:g,buttonSize:i,ctaScreenOverlayType:t})}):null;return{ctaScreenOverlayElement:v,ctaScreenOverlayType:t,isRenderedCTAScreenOverlay:q}}g["default"]=a}),98);
__d("CometComposerStoryLinkAttachmentPreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k=i.createContext(!1);function a(a){a=a.children;return i.jsx(k.Provider,{value:!0,children:a})}a.displayName=a.name+" [from "+f.id+"]";function b(){return j(k)}g.CometComposerStoryLinkAttachmentPreviewContextProvider=a;g.useCometComposerStoryLinkAttachmentPreviewContext=b}),98);