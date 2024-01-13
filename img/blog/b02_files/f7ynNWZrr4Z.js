;/*FB_PKG_DELIM*/

__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();g["default"]=a}),98);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometMediaViewerFullscreenContext","CometRouteRenderType","CometScrollView.react","MWChatVisibilityOverrideContext","gkx","react","stylex","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext,l=c("gkx")("708253"),m=c("gkx")("1217157");b={chatSliver:{backgroundColor:"x1jx94hy",boxShadow:"x13tw4yp",display:"x78zum5",height:"xtp0wl1",top:"xxzkxad",width:"x1dmp6jm",zIndex:"x1vjfegm","@media (max-width: 899px)_display":"x1daaz14",$$css:!0},container:{height:"x3igimt",maxHeight:"xedcshv",overflowX:"x6ikm8r",overflowY:"x10wlt62","@media (max-width: 900px)_flexDirection":"x10o2a94",$$css:!0},containerFullScreenInPushView:{minHeight:"xg6iff7",$$css:!0},containerInPushView:{minHeight:"x1us19tq",$$css:!0},containerNotInPushView:{minHeight:"xat3117",$$css:!0},contentAreaInPushView:{height:"x1dr59a3","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaInPushViewUsesParentHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaNotInPushView:{height:"xtp0wl1","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},defaultBackground:{backgroundColor:"x2bj2ny",$$css:!0},rightRail:{height:"x3igimt",maxHeight:"xmz0i5r","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mr1erl",$$css:!0},rightRailFixed:{backgroundColor:"x2bj2ny",maxHeight:"x85a59c",minHeight:"x1t2pt76","@media (max-width: 900px)_maxHeight":"x12slza2","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mnsmir",$$css:!0},rightRailInner:{backgroundColor:"x2bj2ny",height:"x3igimt",maxWidth:"xxc7z9f",minWidth:"x1gvwcb","@media (max-width: 900px)_minWidth":"xusdqos",$$css:!0},rightRailOuter:{height:"x5yr21d",maxHeight:"x85a59c","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},rightRailOuterNoMaxHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},shadowBar:{backgroundColor:"x2bj2ny",borderBottom:"x3lcxq5",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0},shadowBarContentAreaResponsiveness:{display:"x1s85apg","@media (max-width: 900px)_display":"xhnf9zx",$$css:!0},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)_display":"xzd29fr",$$css:!0}};e={shadowBar:{backgroundColor:"x2bj2ny",borderBottomWidth:"x1co6499",borderBottomStyle:"x1q0q8m5",borderBottomColor:"x80vd3b",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0}};var n=c("gkx")("4855")?babelHelpers["extends"]({},b,e):b;function a(a){var b=a.children;b=b===void 0?null:b;var e=a.hideContainerBackground;e=e===void 0?!1:e;var f=a.isRightRailFixed;f=f===void 0?!1:f;var g=a.rightRail;g=g===void 0?null:g;var i=a.showChatSliverOverride;i=i===void 0?!0:i;var o=a.showShadowBar;o=o===void 0?!0:o;a=a.useParentHeight;a=a===void 0?!1:a;var p=d("CometRouteRenderType").useIsPushView(),q=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&l,r=c("useMWShouldCurrentRouteOverrideChatVisibility")();r=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(r);var s=k(c("CometMediaViewerFullscreenContext"));i=i&&q&&r;return j.jsxs(c("BaseRow.react"),{align:"start",xstyle:[n.container,!e&&n.defaultBackground,s&&p&&n.containerFullScreenInPushView,!s&&(p||a)&&n.containerInPushView,!p&&!a&&n.containerNotInPushView],children:[p&&!m?j.jsx("div",{className:(h||(h=c("stylex")))(o&&n.shadowBar,o&&n.shadowBarContentAreaResponsiveness)}):null,j.jsx(c("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?n.contentAreaInPushViewUsesParentHeight:p?n.contentAreaInPushView:n.contentAreaNotInPushView,children:b}),g!=null&&!s&&j.jsxs(c("BaseRowItem.react"),{role:"complementary",xstyle:f?n.rightRailFixed:n.rightRail,children:[p&&!m?j.jsx("div",{className:(h||(h=c("stylex")))(o&&n.shadowBar,o&&n.shadowBarRightRailResponsiveness)}):null,j.jsxs(c("BaseRow.react"),{xstyle:a?n.rightRailOuterNoMaxHeight:n.rightRailOuter,children:[j.jsx(c("BaseRowItem.react"),{xstyle:n.rightRailInner,children:f?j.jsx(c("CometScrollView.react"),{"data-testid":void 0,showsHorizontalScrollIndicator:!1,children:g}):g}),i?j.jsx("div",{className:(h||(h=c("stylex")))(n.chatSliver)}):null]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometContentNotAvailable.react",["fbt","CometContentArea.react","NullStateGeneral","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(){return j.jsx("div",{className:"x6s0dn4 x78zum5 xtp0wl1 xl56j7k xh8yej3",children:j.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:j.jsx(c("TetraNullState.react"),{headline:h._("__JHASH__C7tfZyxTgu9__JHASH__"),icon:c("NullStateGeneral")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryMenuOriginalStoryIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometFeedStoryDropdownMenuLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({nodeID:null});g["default"]=b}),98);
__d("CometPhotoViewerContainerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);