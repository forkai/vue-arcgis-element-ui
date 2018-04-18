// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/executeAsync ../../../../core/promiseUtils ../../../../core/promiseUtils ../../../../core/Error ../../../../core/MapPool ../../../../core/SetPool ../../../../geometry/SpatialReference ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/Extent ../../../../tasks/QueryTask ../../../../tasks/support/Query ../../../../renderers/support/jsonUtils ../../../../layers/support/TileInfo ../../../../layers/support/FeatureProcessing ../../tiling/TileInfoView ../../tiling/TileKey ../../layers/features/feat-store/FeatureTileStore ./displayObjectUtils ./rendererInfoUtils ./TileData ./Utils".split(" "),
function(R,S,A,q,B,C,v,u,D,E,y,F,G,H,I,J,K,L,M,N,O,P,x){function z(b,a){x.isMarkerSymbol(b)||x.isLineSymbol(b)?a.add(b):x.isFillSymbol(b)&&(a.add(b),b.outline&&"none"!==b.outline.style&&a.add(b.outline))}function Q(b,a,f){f.has(b)||f.set(b,new Set);b=f.get(b);f=a.length;for(var e=0;e<f;e++){var m=a.charCodeAt(e);b.add(m)}}return function(){function b(){this._symbolToMosaicItemMap=new Map}b.prototype.configure=function(a){if(!a.renderer)return q.reject("renderer is not initialized!");this._symbolToMosaicItemMap.clear();
var f=H.fromJSON(a.renderer),e=null!=a.spatialReference?D.fromJSON(a.spatialReference):null;this._tileInfo=this._tileInfo=I.create({spatialReference:e,size:512});this._tileInfoView=new K(this._tileInfo);this._rendererInfo=O.createRendererInfo(f,e);this._url=a.url;this._geometryType=a.geometryType;this._queryJSON=a.query;this._objectIdField=a.objectIdField;this._tilecoordRange=a.tileCoordRange;this._tileCoordRatio=a.tileCoordRatio;this._returnCentroid=a.returnCentroid;this._quantizationFactor=a.quantizationFactor;
this._pixelRatio=a.pixelRatio;this._outFields=a.outFields;this._processing=J.fromWorker(a.processing);this._processingInMainThread=!1;this._queryInMainThread=a.queryInMainThread;this._featureStore=new M.default(a.objectIdField,a.geometryType);return q.resolve({data:{status:"success"}})};b.prototype.unregisterTile=function(a){this._featureStore.delete(a.key);return q.resolve({data:{},buffers:[]})};b.prototype.registerTile=function(a,f){var e=this;return this._getFeatureSet(L.from(a.key),f).then(function(b){e._featureStore.set(a.key,
b);return b&&b.features&&0!==b.features.length?null==e._rendererInfo.heatmapInfo?e._getMosaicItems(b,e._symbolToMosaicItemMap,f).then(function(a){return e._createTileData(a)}):q.resolve({data:null,buffers:[]}):q.resolve({data:null,buffers:[]})})};b.prototype.getFeatures=function(a){var f=[],e=0;for(a=a.featureIds;e<a.length;e++){var b=this._featureStore.getFeature(a[e]);f.push(b)}return q.resolve({data:{features:f},buffers:[]})};b.prototype._createTileData=function(a){var b={},e=a.features,m=a.geometryType,
d=this._objectIdField,n=this._rendererInfo,h=this._tilecoordRange,c=this._tileCoordRatio,g=this._pixelRatio,r=this._symbolToMosaicItemMap,p=Array(e.length),l=0;return A(function(){p[l]=N.getDisplayObject(e[l],d,n,m,h,c,g,r,b);l++;return l===e.length},250).then(function(){return P.create(p,b).serialize()})};b.prototype._getFeatureSet=function(a,b){var e=this,f=new F(this._url),d=this._getResolutionParams(a);a=this._tileInfoView.getTileBounds([0,0,0,0],a);var n="esriGeometryPoint"===this._geometryType||
this._returnCentroid,h=n?20:0,c=h*d.tolerance;a[0]-=c;a[1]-=c;a[2]+=c;a[3]+=c;var g=null;(c=this._rendererInfo.renderer.visualVariables)&&c.some(function(a){if("size"===a.type&&a.field&&!a.normalizationField)return g=[a.field+" DESC"],!0});var c={hashes:new Set,drill:[],featureSet:{features:[],geometryType:this._geometryType,transform:{originPosition:"upperLeft",scale:[d.tolerance,d.tolerance],translate:[d.extent.xmin,d.extent.ymax]}}},r=u.acquire();return this._drillQuery(c,r,f,b,a,d).then(function(a){if(g){var c=
g[0].split(" "),b=c[0];"DESC"===c[1]&&a.featureSet.features.sort(function(a,c){return c.attributes[b]-a.attributes[b]})}return a.featureSet}).then(function(a){var c=e._tileInfo.size[0],b=a.features,f=e._tileInfo.spatialReference;if(!n||!f.isWrappable)return a;f=E.getInfo(f);f=Math.round((f.valid[1]-f.valid[0])/d.tolerance);if(f===c){for(var g=[],p=0;p<b.length;p++){var m=b[p],k=m.geometry,m=m.attributes;k.x<h?(k={geometry:__assign({},k),attributes:m},k.geometry.x+=f,g.push(k)):k.x>c-h&&(k={geometry:__assign({},
k),attributes:m},k.geometry.x-=f,g.push(k))}b.push.apply(b,g)}else for(g=0;g<b.length;g++)k=b[g].geometry,k.x<-h?k.x+=f:k.x>c+h&&(k.x-=f);u.release(r);return a})};b.prototype._drillQuery=function(a,b,e,m,d,n,h,c){var g=this;void 0===h&&(h=null);void 0===c&&(c=0);var f=a.featureSet;a.drill.push(d);return this._query(e,m,d,n,h).then(function(p){if(!p.exceededTransferLimit){var l=void 0,t=void 0,r=void 0,q=g._objectIdField,w=f.features;p=p.features;var v=w.length,k=p.length;w.length=v+k;for(var u=0,
l=0;l<k;++l)t=p[l],r=t.attributes[q],b.has(r)||(w[v+u]=t,b.add(r),u++);w.length-=k-u}else if(5>c&&p.exceededTransferLimit)return c++,l=(d[2]-d[0])/2,t=(d[3]-d[1])/2,r=[d[0]+l,d[1]+t,d[2],d[3]],q=[d[0],d[1],d[2]-l,d[3]-t],w=[d[0]+l,d[1],d[2],d[3]-t],B.all([g._drillQuery(a,b,e,m,[d[0],d[1]+t,d[2]-l,d[3]],n,h,c),g._drillQuery(a,b,e,m,r,n,h,c),g._drillQuery(a,b,e,m,q,n,h,c),g._drillQuery(a,b,e,m,w,n,h,c)]).then(function(b){return a});return a})};b.prototype._query=function(a,b,e,m,d){var f=this,h=this._tileInfo.spatialReference,
c=G.fromJSON(this._queryJSON);c.outFields=this._outFields;c.geometry=new y(e[0],e[1],e[2],e[3],h);c.outSpatialReference=h;c.quantizationParameters=m;c.maxAllowableOffset="esriGeometryPolyline"===this._geometryType?m.tolerance:null;c.resultType="tile";c.returnExceededLimitFeatures=!1;c.returnGeometry=!this._returnCentroid||this._rendererInfo.renderer.backgroundFillSymbol;c.returnJSON=!0;c.returnCentroid=this._returnCentroid;c.orderByFields=d;return(this._queryInMainThread?b.invoke("queryFeatures",
{query:c.toJSON()}).then(function(a){return JSON.parse(a.featureSet)}):a.rawExecute(c).then(function(a){return a.data})).then(function(a){var d=f._processing;if(!d)return a;if(f._processingInMainThread)return b.invoke("executeProcessing",{query:c.toJSON(),featureSet:JSON.stringify(a)}).then(function(a){return JSON.parse(a.featureSet)});try{var e=d.process(a,c,d.options);return e?e:q.reject(new C("FeatureLayer","invalid processing.process() method, returns nothing"))}catch(l){return f._processingInMainThread=
!0,b.invoke("executeProcessing",{query:c.toJSON(),featureSet:JSON.stringify(a)}).then(function(a){return JSON.parse(a.featureSet)})}})};b.prototype._getResolutionParams=function(a){this._tileInfo.updateTileInfo(a);var b=this._tileInfo.lodAt(a.level);return{mode:"view",originPosition:"upperLeft",tolerance:this._quantizationFactor*b.resolution,extent:new y(a.extent[0],a.extent[1],a.extent[2],a.extent[3],this._tileInfo.spatialReference)}};b.prototype._getMosaicItems=function(a,b,e){var f=this,d=a.features,
n=u.acquire(),h=v.acquire(),c=this._rendererInfo;c.renderer.backgroundFillSymbol&&z(c.renderer.backgroundFillSymbol,n);for(var g,r=0;r<d.length;r++)g=d[r],(g=c.getSymbol(g))&&(x.isTextSymbol(g)?Q(g,g.text,h):z(g,n));if(0===n.size&&0===h.size)return u.release(n),v.release(h),q.resolve();var p=v.acquire(),l=[],t=0;n.forEach(function(a){f._symbolToMosaicItemMap.has(a)||(p.set(t,a),l.push({symbol:a.toJSON(),id:t}),t++)});if(0<l.length)return e.invoke("getMaterialItems",{items:l}).then(function(c){c.items.forEach(function(a){var c=
p.get(a.id);b.set(c,a.mosaicItem)});v.release(p);return q.resolve(a)});u.release(n);v.release(h);return q.resolve(a)};return b}()});