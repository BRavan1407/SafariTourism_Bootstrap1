;/*FB_PKG_DELIM*/

__d("useCometTailLoadPageletTracker",["cr:1703077","intersectionObserverEntryIsIntersecting","react"],(function(a,b,c,d,e,f,g){"use strict";var h;e=h||d("react");var i=e.useCallback,j=e.useRef;function a(a,d,e){var f=j(null),g=j(!1),h=j(null);return i(function(i){if(i==null){h.current==null?void 0:h.current();h.current=null;return}if(b("cr:1703077")&&e===!0&&a!=null&&d!=null&&f.current!==i){f.current=i;var j=function(e){Array.prototype.forEach.call(e,function(e){c("intersectionObserverEntryIsIntersecting")(e)&&!g.current&&(g.current=!0,h.current==null?void 0:h.current(),h.current=null,b("cr:1703077")&&b("cr:1703077").logMarkerEnd(a,d,e.time,2))})},k=new IntersectionObserver(j);k.observe(i);h.current=function(){f.current=null,k.disconnect()}}},[a,d,e])}g["default"]=a}),98);
__d("HeroTracingCoreConfigWWW",["gkx"],(function(a,b,c,d,e,f,g){"use strict";b={alwaysMarkMutationRootAsVisualChange:(a=c("gkx"))("8232"),enableCascadingRenderDetector:a("443"),enableHeroLoggingVerbose:a("2954"),enableReactProfiling:a("1407308"),logNestedReactUpdates:c("gkx")("678680")&&c("gkx")("1902022")};g["default"]=b}),98);
__d("HeroTracingCoreDependenciesWWW",["cr:3798","useCometTailLoadPageletTracker"],(function(a,b,c,d,e,f,g){"use strict";a={useTailLoadPageletTracker:c("useCometTailLoadPageletTracker"),UserTimingUtils:b("cr:3798")};g["default"]=a}),98);