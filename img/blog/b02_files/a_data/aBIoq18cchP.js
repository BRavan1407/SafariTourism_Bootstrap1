;/*FB_PKG_DELIM*/

__d("LoginFormRedirect",[],(function(a,b,c,d,e,f){"use strict";var g=/c_user=(.+?)(;|$)/;function a(a){var b=window.setInterval(function(){g.test(document.cookie)&&(window.clearInterval(b),window.location.href=a)},5e3);window.addEventListener("beforeunload",function(){window.clearInterval(b)})}f.initCookiePolling=a}),66);
__d("XOauthDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dialog/oauth/",{display:{type:"Enum",enumType:1},auth_type:{type:"String"},logger_id:{type:"String"},redirect_uri:{type:"String"},sso_device:{type:"Enum",enumType:1},sdk:{type:"String"},ref:{type:"String"},ret:{type:"String"},scope:{type:"StringVector"},app_id:{type:"Int"},auth_method:{type:"Enum",enumType:1},facebook_sdk_version:{type:"String"},calling_package_key:{type:"String"},context_uri:{type:"String"},default_audience:{type:"Enum",enumType:1},domain:{type:"String"},encoded_state:{type:"String"},fallback_redirect_uri:{type:"String"},force_confirmation:{type:"Bool",defaultValue:!1},kid_directed_site:{type:"Bool",defaultValue:!1},install_nonce:{type:"String"},legacy_override:{type:"String"},loyalty_program_id:{type:"Int"},shop_id:{type:"Int"},native_login_button:{type:"Bool",defaultValue:!1},original_redirect_uri:{type:"String"},privacyx:{type:"String"},return_format:{type:"EnumVector",enumType:{member:1}},return_scopes:{type:"Bool",defaultValue:!1},scope_objects:{type:"String"},scope_objects_count:{type:"String"},sdk_version:{type:"String"},seen_scopes:{type:"String"},sheet_name:{type:"String"},singular_selected_asset_id:{type:"Int"},state:{type:"String"},user_mobile_phone:{type:"String"},android_key:{type:"String"},sso:{type:"String"},sso_key:{type:"String"},nonce:{type:"String"},user_code:{type:"String"},auth_nonce:{type:"String"},fbs:{type:"Int"},fbapp_pres:{type:"Bool",defaultValue:!1},is_comet_compat:{type:"Bool",defaultValue:!1},response_type:{type:"String"},ignore_reentry:{type:"Bool",defaultValue:!1},type:{type:"Enum",enumType:1},cbt:{type:"Int"},ies:{type:"Bool",defaultValue:!1},cct_over_app_switch:{type:"Bool",defaultValue:!1},cct_prefetching:{type:"Bool",defaultValue:!1},messenger_page_id:{type:"Int"},reset_messenger_state:{type:"Bool",defaultValue:!1},extras:{type:"String"},add_email_reauth_nonce:{type:"String"},tp:{type:"Enum",enumType:1},encrypted_query_string:{type:"String"},account_type:{type:"Enum",enumType:0},is_promote_auth:{type:"Bool",defaultValue:!1},window_width:{type:"Int"},window_height:{type:"Int"},code_challenge:{type:"String"},code_challenge_method:{type:"Enum",enumType:1},config_id:{type:"String"},token_type:{type:"Enum",enumType:1},steps:{type:"EnumVector",enumType:{member:1}},dialog_source:{type:"String"},cui_gk:{type:"String"},gdp_cookie_result:{type:"String"},loyalty_ad_id:{type:"String"},loyalty_referrer:{type:"Enum",enumType:1},privacy_mutation_token:{type:"String"}})}),null);
__d("qpl",["QPLHasteSupportDataStorage","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={};a={_:function(a,b){var d=h[b];if(d==null){var e=c("QPLHasteSupportDataStorage").get(b);e==null?(c("recoverableViolation")("Failed to find a Haste-supplied config for the QPL event "+("identified by token `"+b+"`."),"staticresources"),d={i:a}):d=babelHelpers["extends"]({i:a},e);h[b]=d}return d}};b=a;g["default"]=b}),98);
__d("PerfFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744178");b=d("FalcoLoggerInternal").create("perf",a);e=b;g["default"]=e}),98);
__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;f["default"]=c}),66);
__d("USIDFlag",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({HTTP_HEADER_SESSION:"HH",LOCAL_STORAGE_FAILURE:"LSF",SERVER_GENERATED_SESSION:"SGS",SERVER_PARSE_FAILURE:"SPF",SESSION_STORAGE_FAILURE:"SSF",UNKNOWN_VERSION_FAILURE:"UVF",UNKOWN_DATA_FAILURE:"UDF"});c=a;f["default"]=c}),66);
__d("USIDUtils",["Cookie","Random","WebStorage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=4294967295,j=36,k="usidt",l="usida",m=1,n=6;function a(){var a=[];(h||(h=c("WebStorage"))).isLocalStorageQuotaExceeded()&&a.push("LSF");(h||(h=c("WebStorage"))).isSessionStorageQuotaExceeded()&&a.push("SSF");return a}function o(a){var b=Math.floor(Date.now()/1e3),c=Math.floor(d("Random").random()*i);a=a+Number(b&i).toString(j)+c.toString(j);return a}function p(a,b,c){if(a==null)return{ver:m,id:o(c)};a=a.getItem(b);if(a==null)return{ver:m,id:o(c)};b=JSON.parse(a);return b.ver!==m?{ver:m,id:o(c)}:b}function q(a,b,d){if(a==null)return;(h||(h=c("WebStorage"))).setItemGuarded(a,b,JSON.stringify(d))}function r(a,b){if(c("Cookie")==null)return{ver:m,id:o(b)};a=c("Cookie").get(a);if(a==null||a=="")return{ver:m,id:o(b)};var d;try{d=JSON.parse(a)}catch(b){d=JSON.parse(atob(a))}return d.ver!==m?{ver:m,id:o(b)}:d}function s(a,b){if(c("Cookie")==null)return;c("Cookie").set(a,btoa(JSON.stringify(b)))}function b(){var a=p((h||(h=c("WebStorage"))).getSessionStorageForRead(),k,"T");return a.id}function e(a){q((h||(h=c("WebStorage"))).getSessionStorage(),k,{ver:m,id:a})}function t(){var a,b=r(l,"A");return{id:b.id,time:(a=b.time)!=null?a:0,startTime:(a=b.startTime)!=null?a:0}}function f(a){s(l,{ver:m,id:a.id,time:a.time});var b=t();return b.id===a.id&&b.time===a.time}g.VERSION=n;g.getFlags=a;g.generateId=o;g.getExistingTabId=b;g.writeTabId=e;g.getExistingActivityInfo=t;g.writeActivityInfo=f}),98);
__d("USIDCore",["DateConsts","USIDUtils","asyncParams"],(function(a,b,c,d,e,f,g){"use strict";var h=30,i=d("DateConsts").MIN_PER_HOUR*5,j=2,k="__usid";function l(){return Math.floor(Date.now()/d("DateConsts").MS_PER_SEC)}a=function(){function a(a,b,c,e,f,g){this.$1=a;this.$2=b;this.$3=c;this.$8=e;this.$9=f;this.$4=g.activityTrigger;this.$5=((b=g.activityTimeoutInMin)!=null?b:h)*60;this.$6=((c=g.activityMaxTimeInMin)!=null?c:i)*60;this.$7=((e=g.activityCacheTimeoutInMin)!=null?e:j)*60;this.$10=0;d("USIDUtils").writeTabId(a);this.triggerActivity()}var b=a.prototype;b.getFlags=function(){return this.$9};b.getRequestVersion=function(){return this.$8};b.getSessionVersion=function(){return d("USIDUtils").VERSION};b.getTabId=function(){return this.$1};b.getPageId=function(){return this.$2};b.getTransitionId=function(){return this.$3};b.getActivityId=function(){var a=this.$11();return a.id};b.getActivityTimeOut=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=l();return this.$5-(b-a.time)};b.getActivityMaxTime=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=l();return this.$6-(b-a.startTime)};b.getSessionID=function(){return this.getTabId()+":"+this.getPageId()+":"+this.getTransitionId()+"-"+this.getActivityId()};b.serializeForRequest=function(){this.$4==="request"&&this.triggerActivity();return this.$12()};b.$12=function(){var a=this.getSessionVersion(),b=this.getSessionID(),c=this.getRequestVersion(),d=this.getFlags().join(",");return a+"-"+b+"-RV="+c+":F="+d};b.contextData=function(){return{usid_override:""}};b.$11=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=this.$13(a);b&&this.$14(a);return a};b.$14=function(a){a=d("USIDUtils").writeActivityInfo(a);a&&d("asyncParams").add(k,this.$12())};b.$13=function(a){var b=l();if(b-a.time>this.$5){a.id=d("USIDUtils").generateId("A");a.time=b;a.startTime=b;return!0}return!1};b.triggerActivity=function(){var a=l();if(a-this.$10>this.$7){var b=this.$11();b.time=a;this.$14(b);this.$10=a}};b.nextTransition=function(){this.triggerActivity(),this.$3++};return a}();g["default"]=a}),98);
__d("USID",["USIDCore","USIDMetadata","USIDUtils"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=function(a){if(h!=null)return h;var b=d("USIDUtils").getExistingTabId(),e=c("USIDMetadata").page_id,f=c("USIDMetadata").transition_id,g=c("USIDMetadata").version,i=d("USIDUtils").getFlags();h=new(c("USIDCore"))(b,e,f,g,i,a);return h};a=function(){return i({activityTrigger:"request"})};b={init:i,get:a};g["default"]=b}),98);
__d("CurrentLocale",["IntlCurrentLocale"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("IntlCurrentLocale").code}};b=a;g["default"]=b}),98);
__d("PerfXSharedFields",["CurrentLocale","Locale","SiteData"],(function(a,b,c,d,e,f,g){var h=typeof window!=="undefined"?window:self,i={addCommonValues:function(a){var b=h==null?void 0:h.navigator;try{b&&b.hardwareConcurrency!==void 0&&(a.num_cores=b.hardwareConcurrency),b&&b.deviceMemory&&(a.ram_gb=b.deviceMemory),b&&b.connection&&(typeof b.connection.downlink==="number"&&(a.downlink_megabits=b.connection.downlink),typeof b.connection.effectiveType==="string"&&(a.effective_connection_type=b.connection.effectiveType),typeof b.connection.rtt==="number"&&(a.rtt_ms=b.connection.rtt))}catch(a){if(a.message!=="can't access dead object")throw a}a.client_push_phase=c("SiteData").push_phase;a.client_revision=c("SiteData").client_revision;c("SiteData").server_revision!=null&&(a.server_revision=c("SiteData").server_revision);a.locale=c("CurrentLocale").get();a.isRTL=Number(c("Locale").isRTL());return a},getCommonData:function(){var a={};i.addCommonValues(a);return a}};a=i;g["default"]=a}),98);
__d("QPLEvent",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.i}function b(a){return(a=a.r)!=null?a:0}function c(a){return(a=a.m)!=null?a:1}f.getMarkerId=a;f.getSampleRate=b;f.getSamplingMethod=c}),66);
__d("QPLTimestamp",[],(function(a,b,c,d,e,f){"use strict";function g(a){if(a===0)return"0";a=a.toFixed(6).split(".",2);var b=a[0];a=a[1];return b==="0"?a.replace(/^0+/,""):b+a}function a(a,b){b=b-a;return g(b)}f.timestampToSerializedNanoseconds=g;f.calculateDurationAsNanoseconds=a}),66);
__d("crc32",[],(function(a,b,c,d,e,f){function b(a){var b=-1;for(var c=0,d=a.length;c<d;c++)b=b>>>8^g[(b^a.charCodeAt(c))&255];return~b}var g=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];a.Int32Array!==void 0&&(g=new Int32Array(g));f["default"]=b}),66);
__d("QPLUtils",["crc32"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return c("crc32")(a)>>>0}function a(a){return a!=null?h(a):0}g.unsignedCrc32=h;g.deriveInstanceKey=a}),98);
__d("QuickPerformanceLoggerTypes",[],(function(a,b,c,d,e,f){"use strict";a=1;b=3;f.EVENT_BASED_SAMPLING=a;f.USER_BASED_SAMPLING=b}),66);
__d("QPLCore",["QPLEvent","QPLTimestamp","QPLUtils","QuickPerformanceLoggerTypes","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a,b,c,d){var e=b[a];if(!e||Object.entries(e).length===0)return null;var f={};Object.keys(e).forEach(function(a){var b=e[a];b==null||b.length===0?delete e[a]:d?f[a]=d(b):f[a]=b});return b={},b[a]=babelHelpers["extends"]({},c&&c[a],f),b}function j(a,b){if(a==null)return b;var c=babelHelpers["extends"]({},b,i("string",a,b),i("int",a,b,Math.trunc),i("double",a,b),i("bool",a,b),i("string_array",a,b),i("int_array",a,b,function(a){return a.map(Math.trunc)}),i("double_array",a,b),i("bool_array",a,b));Object.keys(c).forEach(function(a){var b=c[a];(b==null||Object.entries(b).length===0)&&delete c[a]});return Object.entries(c).length!==0?c:null}function k(a,b){var c={};b.trackedForLoss===!0&&(c.tracked_for_loss=!0);typeof b.absoluteTimeOrigin==="number"&&(c.absolute_time_origin_ns=d("QPLTimestamp").timestampToSerializedNanoseconds(b.absoluteTimeOrigin));b=babelHelpers["extends"]({},a,c);return b}function l(a,b){if(!b)return a;var c={};b.string&&(c.annotations=b.string);b["int"]&&(c.annotations_int=b["int"]);b["double"]&&(c.annotations_double=b["double"]);b.bool&&(c.annotations_bool=b.bool);b.string_array&&(c.annotations_string_array=b.string_array);b.int_array&&(c.annotations_int_array=b.int_array);b.double_array&&(c.annotations_double_array=b.double_array);b.bool_array&&(c.annotations_bool_array=b.bool_array);return babelHelpers["extends"]({},a,c)}var m=new Map([[d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,"random_sampling"],[d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,"per_user"]]);function n(a,b){if(a===0)return!1;if(a<=1)return!0;return typeof b==="string"?d("QPLUtils").unsignedCrc32(b)%a===0:Math.random()*a<=1}a=function(){function a(a){this.$2=1;this.$3=100;this.$4=new Map();this.$5=new Map();this.$6=null;this.$8=new Map();this.activeMarkers=new Map();this.$1=a;this.$7=a.logger;this.$5=(a=a.listenersWithMarker)!=null?a:new Map();this.$9=new Map()}var b=a.prototype;b.getMarker=function(a,b){a=this.$10((h||(h=d("QPLEvent"))).getMarkerId(a));if(!a)return null;a=a.get(b);return!a?null:a};b.isMarkerOn=function(a,b){b===void 0&&(b=0);a=this.$10((h||(h=d("QPLEvent"))).getMarkerId(a));if(!a)return!1;a=a.get(b);return!!a};b.$10=function(a){return this.activeMarkers.get(a)};b.addMarker=function(a,b,c){var d=this.activeMarkers.get(a);d||(d=new Map(),this.activeMarkers.set(a,d));d.set(b,c)};b.deleteMarker=function(a,b){(a=this.activeMarkers.get(a))==null?void 0:a["delete"](b)};b.markerStart=function(a,b,c,e){b===void 0&&(b=0);c===void 0&&(c=this.currentTimestamp());e=e===void 0?{}:e;var f=e.cancelExisting;f=f===void 0?!1:f;var g=e.cancelOnUnload;g=g===void 0?!1:g;var i=e.trackedForLoss;i=i===void 0?!1:i;var j=e.type;j=j===void 0?1:j;var k=e.samplingBasis;k=k===void 0?null:k;var l=e.qplInternalDoNotUseAbsoluteTimeOrigin;e=e.timeoutMS;e=e===void 0?null:e;var m=this.getMarker(a,b);if(m){m=Math.round(c-m.timestamp);f&&(this.markerAnnotate(a,{string:{cancelType:"DUPLICATE_EVENT"},"int":{time_between_markers_ms:m}},{instanceKey:b}),this.markerEnd(a,4,b,c))}f=this.$11(a,k);m=f[0];k=f[1];f=f[2];var n={event:a,passesSampling:m,timestamp:c,sampleRate:k,samplingMethod:f,points:[],cancelOnUnload:g,trackedForLoss:i,type:j};typeof l==="number"&&(n.absoluteTimeOrigin=l);this.$4.forEach(function(d){d.onMarkerStart&&d.onMarkerStart(a,b,c)});this.$5.forEach(function(d){d.onMarkerStartWithMarker(a,b,c,n)});m&&(this.addMarker((h||(h=d("QPLEvent"))).getMarkerId(a),b,n),e!=null&&this.$12(a,b,e));m&&i===!0&&this.$13({marker_id:27787271,action_id:51,sample_rate:1,annotations_int:{tracked_marker_id:(h||(h=d("QPLEvent"))).getMarkerId(a)},marker_type:1});m&&this.$4.forEach(function(d){d.onMarkerStarted&&d.onMarkerStarted(a,b,c)})};b.$14=function(a,b){var c=this.$9.get(a);c==null?void 0:c["delete"](b);(c==null?void 0:c.size)===0&&this.$9["delete"](a)};b.$15=function(a,b,c){this.$9.has(a)||this.$9.set(a,new Map());a=this.$9.get(a);a==null?void 0:a.set(b,c)};b.$16=function(a,b){var c,d;c=(c=this.$9.get(a))==null?void 0:c.get(b);if(!c)return;if(!((d=this.$1.runtimeAbstractionLayer)==null?void 0:d.clearTimeout))return;this.$1.runtimeAbstractionLayer.clearTimeout(c);this.$14(a,b)};b.$12=function(a,b,c){var e,f=this,g=(h||(h=d("QPLEvent"))).getMarkerId(a);this.$16(g,b);if(!((e=this.$1.runtimeAbstractionLayer)==null?void 0:e.setTimeout))return;e=(e=this.$1.runtimeAbstractionLayer)==null?void 0:e.setTimeout(function(){f.$4.forEach(function(c){c.onTimeoutEvent!=null&&c.onTimeoutEvent({event:a,instanceKey:b})}),f.$14(g,b),f.markerEnd(a,113,b)},c);this.$15(g,b,e)};b.markerAnnotate=function(a,b,c){c=c===void 0?{}:c;c=c.instanceKey;var d=c===void 0?0:c;this.$4.forEach(function(c){Object.keys(b).forEach(function(e){var f=b[e];if(!f)return;Object.keys(f).forEach(function(b){c.onAnnotation&&c.onAnnotation(a,d,b,f[b])})})});c=this.getMarker(a,d);if(!c)return;c.annotations=j(b,c.annotations)};b.markerPoint=function(a,b,c){c=c===void 0?{}:c;var d=c.instanceKey,e=d===void 0?0:d,f=c.data;d=c.timestamp;var g=d===void 0?this.currentTimestamp():d;this.$4.forEach(function(c){c.onMarkerPoint&&c.onMarkerPoint(a,e,b,f,g)});c=this.getMarker(a,e);if(!c)return;d={name:b,timeSinceStart:Math.trunc(g-c.timestamp)};var h=j(f);h&&(d.data=h);c.points.push(d)};b.markerEnd=function(a,b,c,e){c===void 0&&(c=0);e===void 0&&(e=this.currentTimestamp());var f=this.getMarker(a,c);if(!f){this.$4.forEach(function(d){var f={durationMs:0};d.onMarkerEnd&&d.onMarkerEnd(b,a,c,e,f)});return}var g={marker_id:(h||(h=d("QPLEvent"))).getMarkerId(a),action_id:b,instance_id:c,sample_rate:f.sampleRate,method:m.get(f.samplingMethod),duration_ns:d("QPLTimestamp").calculateDurationAsNanoseconds(f.timestamp,e),points:f.points,metadata:{application_analytics:{time_since_qpl_module_init:e-this.$1.moduleLoadTimestamp}},marker_type:f.type,flags:1,unique_marker_id_debug_only:f.uniqueMarkerDebugId};g=l(g,f.annotations);var i=k(g,f);this.$4.forEach(function(d){var g={durationMs:f?e-f.timestamp:0,logData:i};d.onMarkerEnd&&d.onMarkerEnd(b,a,c,e,g)});f.passesSampling&&(f.timestampIsApproximate!==!0&&this.$13(i),this.$6===(h||(h=d("QPLEvent"))).getMarkerId(a)&&this.$1.onDebuggingIdEnded&&this.$1.onDebuggingIdEnded(),this.$16((h||(h=d("QPLEvent"))).getMarkerId(a),c));this.deleteMarker(h.getMarkerId(a),c)};b.markerDrop=function(a,b){b===void 0&&(b=0);this.deleteMarker((h||(h=d("QPLEvent"))).getMarkerId(a),b);var c=this.currentTimestamp();this.$4.forEach(function(d){d.onMarkerDrop&&d.onMarkerDrop(a,b,c)})};b.markEvent=function(a,b,c,e){e=e===void 0?{}:e;var f=e.timestamp,g=f===void 0?this.currentTimestamp():f,i=e.annotations;this.$4.forEach(function(b){b.onMarkEvent&&b.onMarkEvent({event:a,timestamp:g,annotations:i})});if((f=this.$1.quickLogConfigHelper)==null?void 0:f.isKillswitchOn())return;e=this.$11(a);f=e[0];var k=e[1];e=e[2];if(!f)return;f=j(typeof i==="function"?i():i);k={marker_id:(h||(h=d("QPLEvent"))).getMarkerId(a),action_id:51,instance_id:0,sample_rate:k,method:m.get(e),da_type:b,da_level:c,metadata:{application_analytics:{time_since_qpl_module_init:g-this.$1.moduleLoadTimestamp}},marker_type:1,flags:1};this.$13(l(k,f))};b.dropAllMarkers=function(){this.activeMarkers.clear()};b.setAlwaysOnSampleRate=function(a,b){this.$8.set(a,b)};b.setDefaultSampleRate=function(a){this.$3=a};b.currentTimestamp=function(){return this.$1.performanceNow()};b.enableDebug=function(a){this.$6=a};b.disableDebug=function(){this.$6=null};b.addListener=function(a){var b=this,c=this.$2++;this.$4.set(c,a);return{dispose:function(){b.$4["delete"](c)}}};b.$11=function(a,b){if(this.$1.unsampleAllEvents&&this.$1.unsampleAllEvents()||this.$6===(h||(h=d("QPLEvent"))).getMarkerId(a))return[!0,1,d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING];var c=(h||(h=d("QPLEvent"))).getSampleRate(a),e=h.getSamplingMethod(a);if(this.$8.get(a)==null&&c!==0&&e===d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING){var f;return[!0,(f=c)!=null?f:1,d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING]}f=(a=(f=this.$8.get(a))!=null?f:c)!=null?a:this.$3;a=(c=e)!=null?c:d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;e=n(f,b);return[e,f,a]};b.$13=function(a){this.$4.forEach(function(b){b.onUploadEvent&&b.onUploadEvent(a)});var b=this.$1.decorateEventBeforeUpload?this.$1.decorateEventBeforeUpload(a):a;this.$1.sendEvent(a,b)};b.getActiveMarkerIds=function(a){var b=a.type,c=new Set();this.activeMarkers.forEach(function(a,d){a.forEach(function(a){if(a.type===b){c.add(d);return}})});return Array.from(c)};b.forEachMarkerInstance=function(a,b){a=this.$10(a);if(!a)return;for(var a=a.entries(),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];b(f,e.event)}};b.getMarkerStartTs=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;a=this.getMarker(a,b);if(!a)return;return a.timestamp};b.markerLogDebugPoints=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;var e=(h||(h=d("QPLEvent"))).getMarkerId(a);e=this.getMarker(a,b);if(!e)return;a=c("uuidv4")();e.uniqueMarkerDebugId=a};return a}();a.normalizeAnnotations=j;g["default"]=a}),98);
__d("QPLInspector",[],(function(a,b,c,d,e,f){a=function(){function a(){this.$1=[],this.$2={}}var b=a.prototype;b.appendLog=function(a){for(var b in this.$2){if(!Object.prototype.hasOwnProperty.call(this.$2,b)||a.marker_id!==b)continue;this.$2[a.marker_id].forEach(function(b){return b(a)})}this.$1.push(a)};b.dumpLogs=function(){return this.$1};b.addListener=function(a,b){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=[]),this.$2[a].push(b),this.$1.forEach(function(c){c.marker_id===a&&b(c)})};b.removeListener=function(a,b){b=this.$2[a].indexOf(b);b!==-1&&this.$2[a].splice(b,1)};return a}();b=new a();f["default"]=b}),66);
__d("QuickPerformanceLogger",["Arbiter","Env","FBLogger","PerfFalcoEvent","PerfXSharedFields","Promise","QPLCore","QPLEvent","QPLInspector","Run","USID","WebStorage","cr:1984081","cr:686","gkx","performanceAbsoluteNow","performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m,n=typeof window!=="undefined"?window:self;function o(a){var b=c("PerfXSharedFields").getCommonData();b={memory_stats:{total_mem:b.ram_gb!=null?b.ram_gb*1073741824:null},network_stats:{downlink_megabits:b.downlink_megabits,network_subtype:b.effective_connection_type,rtt_ms:b.rtt_ms},sitedata_info:{client_push_phase:b.client_push_phase,client_revision:b.client_revision,server_revision:b.server_revision},locale_info:{locale:b.locale,isRTL:b.isRTL}};c("gkx")("1224637")&&(b.workplace_info={is_gemini:c("gkx")("1217157")});if(c("gkx")("3752")&&typeof n.__sapienzMetadataCallback__==="function"){var d=n.__sapienzMetadataCallback__();b.sapienz={request_id:String(d.requestId),config_name:String(d.configName)}}c("gkx")("4075")&&(b.usid={usid_override:c("USID").get().serializeForRequest()});return babelHelpers["extends"]({},a,{metadata:babelHelpers["extends"]({},a.metadata,b)})}function p(a,b,c){return{i:a,m:c,r:b}}function q(a,d){return new(m||(m=b("Promise")))(function(){var b=d||a;typeof n.__je2e_recordQPLMarker==="function"&&n.__je2e_recordQPLMarker(b);(i||(i=c("Env"))).enable_qplinspector===!0&&c("QPLInspector").appendLog(b);c("gkx")("1554827")||c("gkx")("708253")||c("gkx")("3831")?c("PerfFalcoEvent").logImmediately(function(){return b}):c("gkx")("2772")?c("PerfFalcoEvent").logCritical(function(){return b}):c("PerfFalcoEvent").log(function(){return b})})}function r(a){a=babelHelpers["extends"]({},a,{config_type:c("gkx")("8126")?"alpha_beta":"prod"});return o(a)}function s(){return(i||(i=c("Env"))).enable_qplinspector===!0||typeof n.__je2e_recordQPLMarker==="function"||c("gkx")("1738486")}function t(){c("Arbiter").inform("qpl_debugger_finished")}var u=(j||(j=c("performanceAbsoluteNow")))();typeof n.__je2e_felabsTracePlugin_setQplInit==="function"&&n.__je2e_felabsTracePlugin_setQplInit((k||(k=c("performanceNow")))());var v={debug:function(a,b,c){},warn:function(a){c("FBLogger")("qpl").blameToPreviousDirectory().warn(a)}},w="qpl";a=function(a){babelHelpers.inheritsLoose(e,a);function e(){var b;b=a.call(this,{decorateEventBeforeUpload:r,unsampleAllEvents:s,onDebuggingIdEnded:t,performanceNow:j||(j=c("performanceAbsoluteNow")),moduleLoadTimestamp:u,logger:v,sendEvent:q,runtimeAbstractionLayer:{setTimeout:n.setTimeout,clearTimeout:n.clearTimeout},debugLoggingEnabled:(i||(i=c("Env"))).qpl_debug_logging})||this;var e=c("gkx")("2772")?c("gkx")("1393")?function(a){return d("Run").onBeforeUnload(a,!1)}:d("Run").onBeforeUnload:d("Run").onUnload;e(function(){b.$QuickPerformanceLogger1(),b.$QuickPerformanceLogger2(706,{respectUnloadPolicy:!0,timestamp:b.currentTimestamp()})});b.$QuickPerformanceLogger3();b.initQplFlipperPlugin();b.initQplSapienzPlugin();return b}var f=e.prototype;f.$QuickPerformanceLogger3=function(){var a=this,b=(l||(l=c("WebStorage"))).getSessionStorageForRead();if(!b){this.$QuickPerformanceLogger4("_loadSavedState","sessionStorage is not available");return}var d=b.getItem(w);if(d==null)return;b.removeItem(w);b=JSON.parse(d);if(b==null){this.$QuickPerformanceLogger4("_loadSavedState","Saved state failed to deserialize");return}if(b.markers==null||b.markers.length===0){this.$QuickPerformanceLogger4("_loadSavedState","No saved markers found");return}b.markers.forEach(function(b){var c=b[0],d=b[1];b=b[2];a.addMarker(c,d,b);a.$QuickPerformanceLogger4("_loadSavedState","Marker "+c+" (instanceKey: "+d+") resumed")})};f.$QuickPerformanceLogger1=function(){var a=this,b=[];this.activeMarkers.forEach(function(a,c){a.forEach(function(a,d){a.resumeAfterNavigation===!0&&(delete a.resumeAfterNavigation,b.push([c,d,a]))})});if(b.length>0){var d={markers:b},e=(l||(l=c("WebStorage"))).getSessionStorage();e=l.setItemGuarded(e,w,JSON.stringify(d));e&&(b.forEach(function(b){var c=b[0],d=b[1];b=b[2];c=p(c,b.sampleRate,b.samplingMethod);a.markerEnd(c,96,d)}),this.$QuickPerformanceLogger4("_storeSavedState","Failed to store saved state: "+e.message),c("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: "+JSON.stringify(d,null,2)));b.forEach(function(b){var c=b[0];b=b[1];a.deleteMarker(c,b)})}};f.markerStoreBeforeNavigation=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;var c=(h||(h=d("QPLEvent"))).getMarkerId(a);a=this.getMarker(a,b);if(!a){this.$QuickPerformanceLogger4("markerStoreBeforeNavigation","Failed to set marker to store on page unload. Could not find marker "+c+", instancekey="+b);return}a.resumeAfterNavigation=!0;this.$QuickPerformanceLogger4("markerStoreBeforeNavigation","Set marker "+c+" to store on page unload, instancekey="+b)};f.markerStartFromNavStart=function(a,b,d){b===void 0&&(b=0);d=d===void 0?{}:d;var e=d.cancelExisting;e=e===void 0?!1:e;var f=d.cancelOnUnload;f=f===void 0?!1:f;var g=d.trackedForLoss;g=g===void 0?!1:g;var h=d.type;h=h===void 0?1:h;d=d.qplInternalDoNotUseConvertToTimeOnServer;var i=c("performanceNavigationStart")();d=typeof d==="function"?d(i):void 0;this.markerStart(a,b,i,{cancelExisting:e,cancelOnUnload:f,trackedForLoss:g,type:h,qplInternalDoNotUseAbsoluteTimeOrigin:d});if(c("performanceNavigationStart").isPolyfilled){i=this.getMarker(a,b);i&&(i.timestampIsApproximate=!0)}};f.$QuickPerformanceLogger2=function(a,b){var c=this;b=b===void 0?{}:b;var d=b.timestamp,e=b.respectUnloadPolicy;this.activeMarkers.forEach(function(b,f){b.forEach(function(b,g){if(!e||b.cancelOnUnload===!0){b=p(f,b.sampleRate,b.samplingMethod);c.markerEnd(b,a,g,d)}})})};f.$QuickPerformanceLogger4=function(a,b,c){v.debug(a,b,c)};f.initQplFlipperPlugin=function(){b("cr:686")!=null&&this.addListener(b("cr:686").qplFlipperPlugin.listener())};f.initQplSapienzPlugin=function(){b("cr:1984081")!=null&&this.addListener(b("cr:1984081").getQplSapienzListener())};return e}(c("QPLCore"));e=new a();f.exports=e}),34);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(){}var b=a.prototype;b.logPoint=function(a,b,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:(h||(h=c("QuickPerformanceLogger"))).currentTimestamp();var i=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(i.string||(i.string={}),i.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var j;i.bool||(i.bool={});i.bool=babelHelpers["extends"]({},i.bool,(j={},j.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",j.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",j))}(h||(h=c("QuickPerformanceLogger"))).markerStart(a,void 0,f,{samplingBasis:d});h.markerPoint(a,b,{data:i,timestamp:f*2});e.annotations&&(h||(h=c("QuickPerformanceLogger"))).markerAnnotate(a,e.annotations);h.markerAnnotate(a,{string:(j={},j.join_id=d,j.qpl_join__source="client",j),bool:(b={},b.qpl_e2e__align_points=!0,b)});h.markerEnd(a,g,void 0,f)};return a}();b=new a();g["default"]=b}),98);
__d("PlatformOAuthDialogLoginFunnelLogger",["FBLogger","QPLE2E","URI","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=1;a=function(a,b,d,e,f,g){e===void 0&&(e=!0);if(null==d||""===d||e&&(null==b||""===b||0===b)){c("FBLogger")("platform_login_web_funnel_client_js").mustfix("\nerror: null_required_field\naction: "+a+"\nloggerId: "+String(d)+"\ncbt: "+String(b)+"\n        ");return}e="number"!==typeof b?parseInt(b,10):b;b=Date.now()-(isNaN(e)?0:e);var h=j(),m=k();h={string:{logger_id:d},"int":{first_paint_time:h,response_start_time:m,cbt_delta:b}};m={"int":{client_funnel_version:i,cbt:e},string:{},bool:{duo_like_passwordless_user:g}};m.string.gdp_type=f;if(a==="client_logged_out_init_impression"){b=l();m.string.login_uri=b}c("QPLE2E").logPoint(c("qpl")._(195562276,"891"),a,d,{pointData:h,annotations:m})};var j=function(){if(m()){var a=window.performance.getEntriesByType("paint").filter(function(a){return"first-paint"===a.name});if(null==a||0<!a.length)return null;a=a[0].startTime+a[0].duration;return a}return null},k=function(){if(m()){var a=window.performance.getEntriesByType("navigation");return null==a||0<!a.length?null:a[0].responseStart}return null},l=function(){return(h||(h=c("URI"))).getRequestURI().setQueryString("").toString()},m=function(){return window.performance&&typeof window.performance.getEntriesByType==="function"};g.CLIENT_FUNNEL_VERSION=i;g.log=a}),98);
__d("PlatformDialogCBTSetter",["PlatformOAuthDialogLoginFunnelLogger","URI","XOauthDialogController","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,c,e){if(a.value===""){var f=Date.now();a.value=f.toString()}d("PlatformOAuthDialogLoginFunnelLogger").log(b,a.value,c,!0,e)}function b(a,b,e){var f=new(h||(h=c("URI")))(a.action),g=f.getQueryData().next;if(!g)return;g=new h(g);var i=c("XOauthDialogController").getURIBuilder().getURI().getPath().toString();i.endsWith("/")&&(i=i.substr(0,i.length-1));if(!g.getPath().includes(i))return;i=g.getQueryData().cbt;var j=g.getQueryData().logger_id;i||(i=Date.now(),g.addQueryData("cbt",i),f.addQueryData("next",g.toString()),a.action=f.toString());j||(j=c("uuidv4")(),g.addQueryData("logger_id",j),f.addQueryData("next",g.toString()),a.action=f.toString());d("PlatformOAuthDialogLoginFunnelLogger").log(b,i,j,!0,null,e)}g.setCBTInFieldAndLog=a;g.setCBTInFormAndLog=b}),98);