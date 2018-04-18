// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../core/HandleRegistry ../camera/intersectionUtils ../camera/constraintUtils".split(" "),function(b,d,g,f,e,h,k,l,m){Object.defineProperty(d,"__esModule",{value:!0});b=function(b){function a(c){c=b.call(this)||this;c.handles=new k;return c}g(a,b);a.prototype.initialize=function(){var c=this;this.handles.add(this.view.basemapTerrain.on("elevation-change",
function(a){return c.handleElevationChangeEvent(a)}))};a.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)};a.prototype.handleElevationChangeEvent=function(a){if(this.view.state.cameraController)return!1;l.eyeWithinExtent(this.view,this.view.state.camera,a.extent,a.spatialReference)&&this.applyToCurrentCamera()};a.prototype.applyToCurrentCamera=function(){var a=this;this.view.state.updateCamera(function(b){m.applySurfaceCollision(a.view,b,1)})};f([e.property({constructOnly:!0})],
a.prototype,"view",void 0);return a=f([e.subclass("esri.views.3d.state.ElevationCollisionConstraint")],a)}(e.declared(h));d.SurfaceCollisionConstraint=b;d.default=b});