(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,l){e.exports=l(28)},22:function(e,t,l){},28:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(3),o=l.n(r),s=(l(22),l(9)),i=l.n(s),c=l(14),u=l(16),f=l(10),p=l(6),y=l(8),m=l(4),d=l(30),g=(l(27),["places"]),T={height:"100vh",width:"100vw"},b={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0},v={lat:-37.560902,lng:143.854965};function w(){var e=Object(p.d)({googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_MAPS_API_KEY,libraries:g}),t=e.isLoaded,l=e.loadError,a=n.a.useState([]),r=Object(f.a)(a,2),o=r[0],s=r[1],i=n.a.useState(null),c=Object(f.a)(i,2),y=c[0],m=c[1],w=n.a.useCallback((function(e){s((function(t){return[].concat(Object(u.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),h=n.a.useRef(),O=n.a.useCallback((function(e){h.current=e}),[]),S=n.a.useCallback((function(e){var t=e.lat,l=e.lng;h.current.panTo({lat:t,lng:l}),h.current.setZoom(14)}),[]);return l?"Error":t?n.a.createElement("div",null,n.a.createElement(E,{panTo:S}),n.a.createElement(p.a,{id:"map",mapContainerStyle:T,zoom:8,center:v,options:b,onClick:w,onLoad:O},o.map((function(e){return n.a.createElement(p.c,{key:"".concat(e.lat,"-").concat(e.lng),position:{lat:e.lat,lng:e.lng},onClick:function(){m(e)},icon:{url:"/logo.svg",origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15),scaledSize:new window.google.maps.Size(30,30)}})})),y?n.a.createElement(p.b,{position:{lat:y.lat,lng:y.lng},onCloseClick:function(){m(null)}},n.a.createElement("div",null,n.a.createElement("h2",null,"Fire spotted !"),n.a.createElement("p",null,"Spotted ",Object(d.a)(y.time,new Date)))):null)):"Loading..."}function E(e){var t=e.panTo,l=Object(y.a)({requestOptions:{location:{lat:function(){return-37.560902},lng:function(){return 143.854965}},radius:1e5}}),a=l.ready,r=l.value,o=l.suggestions,s=o.status,u=o.data,f=l.setValue,p=l.clearSuggestions,d=function(){var e=Object(c.a)(i.a.mark((function e(l){var a,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(l,!1),p(),e.prev=2,e.next=5,Object(y.b)({address:l});case 5:return a=e.sent,e.next=8,Object(y.c)(a[0]);case 8:n=e.sent,r=n.lat,o=n.lng,t({lat:r,lng:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("\ud83d\ude31 Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"search"},n.a.createElement(m.a,{onSelect:d},n.a.createElement(m.b,{value:r,onChange:function(e){f(e.target.value)},disabled:!a,placeholder:"Search your location"}),n.a.createElement(m.e,null,n.a.createElement(m.c,null,"OK"===s&&u.map((function(e){var t=e.id,l=e.description;return n.a.createElement(m.d,{key:t,value:l})}))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2b92d1c3.chunk.js.map