// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../Portal ../PortalItem ../../config ../../tasks/GeometryService ../../tasks/support/ProjectParameters ../../core/promiseUtils ../../core/Error".split(" "),function(n,b,e,l,f,g,m,c,h){function k(a){void 0===a&&(a=null);if(f.geometryServiceUrl)return c.resolve(new g({url:f.geometryServiceUrl}));if(!a)return c.reject(new h("internal:geometry-service-url-not-configured"));var d;a.isInstanceOf(l)?d=a.portal||e.getDefault():a.isInstanceOf(e)&&(d=a);return d.load().then(function(a){if(a.helperServices&&
a.helperServices.geometry&&a.helperServices.geometry.url)return c.resolve(new g({url:a.helperServices.geometry.url}));throw new h("internal:geometry-service-url-not-configured");})}Object.defineProperty(b,"__esModule",{value:!0});b.create=k;b.projectGeometry=function(a,d,b){void 0===b&&(b=null);return k(b).then(function(b){var c=new m;c.geometries=[a];c.outSpatialReference=d;return b.project(c)}).then(function(a){return a&&Array.isArray(a)&&1===a.length?a[0]:c.reject()})}});