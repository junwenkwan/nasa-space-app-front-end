(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,l){e.exports=l(25)},20:function(e,t,l){},21:function(e,t,l){},25:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(3),r=l.n(o),i=(l(20),l(14)),s=l(8),c=(l(21),l(5)),f=l(27),y=l(12),u=l(7),p=["places"],m={width:"100vw",height:"100vh"},d={lat:43.6,lng:-79},g={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0};var T=function(){var e=Object(c.d)({googleMapsApiKey:"AIzaSyDFhbeuJOSP7CpjPVNLT-KqNwPFrUbwFKc",libraries:p}),t=e.isLoaded,l=e.loadError,a=n.a.useState([]),o=Object(s.a)(a,2),r=o[0],y=o[1],u=n.a.useState(null),T=Object(s.a)(u,2),w=T[0],h=T[1],v=n.a.useCallback((function(e){y((function(t){return[].concat(Object(i.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),E=n.a.useRef(),k=n.a.useCallback((function(e){E.current=e}),[]);return l?"Error loading maps":t?n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement(c.a,{mapContainerStyle:m,zoom:8,center:d,options:g,onClick:v,onLoad:k},r.map((function(e){return n.a.createElement(c.c,{key:e.time.toISOString(),position:{lat:e.lat,lng:e.lng},icon:{url:"/logo.svg",scaledSize:new window.google.maps.Size(30,30),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){h(e)}})})),w?n.a.createElement(c.b,{position:{lat:w.lat,lng:w.lng},onCloseClick:function(){h(null)}},n.a.createElement("div",null,n.a.createElement("h2",null,"Fire spotted!"),n.a.createElement("p",null,"Spotted ",Object(f.a)(w.time,new Date)))):null)):"Loading maps"};function b(){var e=Object(y.a)({requestOptions:{location:{lat:function(){return 43.6},lng:function(){return-79}},radius:2e5}}),t=e.ready,l=e.value,a=e.suggestions,o=(a.status,a.data,e.setValue);e.clearSuggestion;return n.a.createElement(u.a,{onSelect:function(e){alert(e)}},n.a.createElement(u.b,{value:l,onChange:function(e){o(e.target.value)},disabled:!t,placeholder:"Enter an address"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1b338442.chunk.js.map