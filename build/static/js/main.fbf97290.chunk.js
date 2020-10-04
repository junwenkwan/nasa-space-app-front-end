(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,n){e.exports=n(84)},63:function(e,t,n){},72:function(e,t){},74:function(e,t){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),i=(n(63),n(27)),c=n(1),s=n(16),u=n(13),p=n(14);function f(){var e=Object(u.a)(["\n  padding: 5px 10px;\n  text-align: center;\n  font-weight: bold;\n  color: ",";\n  transition: all 0.25s ease-in-out;\n"]);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n  position: absolute;\n  background-color: gray;\n  color: white;\n  border-radius: 10px;\n  margin: 10px 10px;\n  box-shadow: 5px 10px #d8d5d5;\n  left: 0;\n  padding: 10px 10px;\n  z-index: 10;\n  width: 10vw;\n  border: 1px solid rgba(0,0,0,0.1);\n"]);return d=function(){return e},e}p.a.div(d()),p.a.div(f(),(function(e){return e.active?"#FFFF00":""}));var g=n(7),m=n.n(g),y=n(18),b=n(30),h=(n(69),n(28)),v=n(52),w=n(53),T=function e(t,n,a){Object(h.a)(this,e),this.latitude=t,this.longitude=n,this.class_id=a},x=function(){function e(){Object(h.a)(this,e),this.flaskUrl="http://localhost:5000",this.AWSUrl="http://3.133.101.18:80/"}return Object(v.a)(e,[{key:"getCurrentFireAPI",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,n,a,r,l,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_Australia_NewZealand_7d.csv",console.log("HTTP Request to "+t),e.next=4,fetch(t);case 4:return n=e.sent,console.log(n.status),e.next=8,n.text();case 8:return a=e.sent,r=Object(w.a)(a,{header:!0}),l=r.data,o=l.filter((function(e){return e.latitude=Number(e.latitude),e.longitude=Number(e.longitude),e.bright_ti4=Number(e.bright_ti4),e.track=Number(e.track),delete e.version,delete e.satellite,delete e.bright_ti5,delete e.scan,delete e.frp,delete e.daynight,"high"===e.confidence})),console.log(o),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateAssetsAPI",value:function(){var e=Object(y.a)(m.a.mark((function e(t){var n,a,r,l,o,i,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.AWSUrl+"update_assets",t.toISOString().substr(0,10),"2020-04-01",(a=new Headers).append("Content-Type","application/json"),a.append("Accept","application/json"),r={datetime:"2020-04-01"},l=JSON.stringify(r),console.log(l),o={method:"POST",headers:a,body:l},console.log("HTTP Request to "+n),console.log(o),e.next=14,fetch(n,o);case 14:return i=e.sent,console.log(i.status),e.next=18,i.json();case 18:return c=e.sent,s=1===c.update_assets,e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPredictionAPI",value:function(){var e=Object(y.a)(m.a.mark((function e(t,n,a){var r,l,o,i,c,s,u,p,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.AWSUrl+"predict",a.toISOString().substr(0,10),"2020-04-01",(l=new Headers).append("Content-Type","application/json"),l.append("Accept","application/json"),o={top_left_lat_lng:t,bottom_right_lat_lng:n,date:"2020-04-01"},i=JSON.stringify(o),console.log(i),c={method:"POST",headers:l,body:i},console.log("HTTP Request to "+r),console.log(c),e.next=14,fetch(r,c);case 14:return s=e.sent,console.log(s.status),e.next=18,s.json();case 18:for(u=e.sent,p=[],f=0;f<u.class_id.length;f++)p.push(new T(u.latitude[f],u.longitude[f],u.class_id[f]));return console.log({record:p}),e.abrupt("return",p);case 23:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),O=n(20),j=n(29),k=n(19),E=n(86),S=["places"],_={height:"100vh",width:"100vw"},C={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0},A={lat:-37.560902,lng:143.854965},P=new x,I=!0,L=!0,N=null;function F(){var e=Object(O.d)({googleMapsApiKey:"AIzaSyCNGRXffJCE3ARTAFnMpgriHAkLqgaqzuY",libraries:S}),t=e.isLoaded,n=e.loadError,a=r.a.useState([]),l=Object(s.a)(a,2),o=l[0],i=l[1],c=r.a.useState(null),u=Object(s.a)(c,2),p=u[0],f=u[1],d=r.a.useState([]),g=Object(s.a)(d,2),m=g[0],y=g[1],h=r.a.useState([]),v=Object(s.a)(h,2),w=(v[0],v[1]),T=r.a.useCallback((function(e){i((function(t){return[].concat(Object(b.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),x=r.a.useRef(),j=r.a.useCallback((function(e){x.current=e}),[]),k=r.a.useCallback((function(e){var t=e.lat,n=e.lng;x.current.panTo({lat:t,lng:n}),x.current.setZoom(14)}),[]);if(n)return"Error";if(!t)return"Loading...";if(2===o.length&&I){I=!1,P.getPredictionAPI([-17,130],[-25,150],new Date).then((function(e){for(var t=0;t<e.length;t++){var n=new window.google.maps.LatLng(e[t].latitude,e[t].longitude);y((function(e){return[].concat(Object(b.a)(e),[{lat:n.lat(),lng:n.lng()}])}))}}))}if(null!=N&&L){L=!1;for(var F=0;F<N.length;F++){var q=new window.google.maps.LatLng(N[F].latitude,N[F].longitude);w((function(e){return[].concat(Object(b.a)(e),[{lat:q.lat(),lng:q.lng()}])}))}}return r.a.createElement("div",null,r.a.createElement(R,{panTo:k}),r.a.createElement(z,{panTo:k}),r.a.createElement(O.a,{id:"map",mapContainerStyle:_,zoom:8,center:A,options:C,onClick:T,onLoad:j},o.map((function(e){return r.a.createElement(O.c,{key:"".concat(e.lat,"-").concat(e.lng),position:{lat:e.lat,lng:e.lng,time:e.time},onClick:function(){f(e)}})})),m.map((function(e){return r.a.createElement(O.c,{key:"".concat(new Date,"+").concat(e.lat,"-").concat(e.lng),position:{lat:e.lat,lng:e.lng},icon:{url:"fire.svg",origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15),scaledSize:new window.google.maps.Size(30,30)}})})),p?r.a.createElement(O.b,{position:{lat:p.lat,lng:p.lng},onCloseClick:function(){f(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,"Fire spotted !"),r.a.createElement("p",null,"Spotted ",Object(E.a)(p.time,new Date)))):null))}function z(e){var t=e.panTo;return r.a.createElement("button",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(){return null}))}},r.a.createElement("img",{src:"/locate_me.png",alt:"compass - locate me"}))}function R(e){var t=e.panTo,n=Object(j.a)({requestOptions:{location:{lat:function(){return-37.560902},lng:function(){return 143.854965}},radius:1e5}}),a=n.ready,l=n.value,o=n.suggestions,i=o.status,c=o.data,s=n.setValue,u=n.clearSuggestions,p=function(){var e=Object(y.a)(m.a.mark((function e(n){var a,r,l,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(n,!1),u(),e.prev=2,e.next=5,Object(j.b)({address:n});case 5:return a=e.sent,e.next=8,Object(j.c)(a[0]);case 8:r=e.sent,l=r.lat,o=r.lng,t({lat:l,lng:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("\ud83d\ude31 Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search"},r.a.createElement(k.a,{onSelect:p},r.a.createElement(k.b,{value:l,onChange:function(e){s(e.target.value)},disabled:!a,placeholder:"Search your location"}),r.a.createElement(k.e,null,r.a.createElement(k.c,null,"OK"===i&&c.map((function(e){var t=e.id,n=e.description;return r.a.createElement(k.d,{key:t,value:n})}))))))}function q(){var e=Object(u.a)(["\n   margin-left: 15vw;\n"]);return q=function(){return e},e}P.getCurrentFireAPI().then((function(e){N=e}));p.a.div(q());function H(){var e=Object(u.a)(["\nmargin-left: 15vw;\n"]);return H=function(){return e},e}p.a.div(H());function U(e){e.props;return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",component:F,exact:!0})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.fbf97290.chunk.js.map