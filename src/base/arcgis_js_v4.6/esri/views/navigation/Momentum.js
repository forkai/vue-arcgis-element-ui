// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/extendsHelper","./ValueHistory","../3d/lib/glMatrix"],function(f,g,k,m,n){Object.defineProperty(g,"__esModule",{value:!0});var l=function(){function c(a,b,d){this._initialVelocity=a;this._stopVelocity=b;this._friction=d;this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}Object.defineProperty(c.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0});c.prototype.isFinished=
function(a){return a>this.duration};Object.defineProperty(c.prototype,"friction",{get:function(){return this._friction},enumerable:!0,configurable:!0});c.prototype.value=function(a){a=Math.min(a,this.duration);var b=1-this._friction;return this._initialVelocity*(Math.pow(b,a)-1)/Math.log(b)};c.prototype.valueDelta=function(a,b){var d=this.value(a);return this.value(a+b)-d};return c}();g.Momentum=l;f=function(){function c(a,b,d,c){void 0===a&&(a=.05);this._minimumInitialVelocity=b;this._stopVelocity=
d;this._friction=c;this._history=new m.ValueHistory(1E3*a)}c.prototype.add=function(a,b){void 0!==b&&(b*=1E3);this._history.add(a,b)};c.prototype.reset=function(){this._history.reset()};Object.defineProperty(c.prototype,"stopVelocity",{get:function(){return this._stopVelocity},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"friction",{get:function(){return this._friction},enumerable:!0,configurable:!0});c.prototype.evaluateMomentum=function(){var a=this._evaluateVelocity();return null!==
a?new l(a,this._stopVelocity,this._friction):null};c.prototype._evaluateVelocity=function(){var a=this._history,b=a.oldest,a=a.newest;if(b&&a){var d=(a.timeStamp-b.timeStamp)/1E3;if(0<d&&(b=(a.value-b.value)/d,Math.abs(b)>=this._minimumInitialVelocity))return b}return null};return c}();g.MomentumEstimator=f;var p=function(c){function a(b,a,e){return c.call(this,b,a,e)||this}k(a,c);a.prototype.value=function(b){b=c.prototype.value.call(this,b);return Math.exp(b)};a.prototype.valueDelta=function(b,
a){var d=c.prototype.value.call(this,b);b=c.prototype.value.call(this,b+a);return Math.exp(b-d)};return a}(l);g.ZoomMomentum=p;var r=function(c){function a(b,a,e,h){void 0===b&&(b=.05);void 0===a&&(a=4);void 0===e&&(e=.01);void 0===h&&(h=.95);return c.call(this,b,a,e,h)||this}k(a,c);a.prototype.add=function(b,a){c.prototype.add.call(this,Math.log(b),a)};a.prototype.evaluateMomentum=function(){var b=this._evaluateVelocity();return null!==b?new p(b,this.stopVelocity,this.friction):null};return a}(f);
g.ZoomMomentumEstimator=r;f=function(c){function a(b,a,e,h){void 0===b&&(b=.05);void 0===a&&(a=4);void 0===e&&(e=.01);void 0===h&&(h=.95);return c.call(this,b,a,e,h)||this}k(a,c);a.prototype.add=function(b,a){var d=this._history.newest;if(d){d=d.value;for(b-=d;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;b=d+b}c.prototype.add.call(this,b,a)};return a}(f);g.RotationMomentumEstimator=f;var q=function(c){function a(b,a,e,h,f,g){b=c.call(this,b,a,e)||this;b.dataOldest=h;b.dataNewest=f;b.dataTimeDelta=
g;return b}k(a,c);a.prototype.velocityFactor=function(b){b=Math.min(b,this.duration);return Math.pow(1-this.friction,b)};a.prototype.valueFromInitialVelocity=function(b,a){a=Math.min(a,this.duration);var c=1-this.friction;return b*(Math.pow(c,a)-1)/Math.log(c)};return a}(l);g.ScreenspaceMomentum=q;f=function(){function c(a,b,c,e){void 0===a&&(a=.05);this._minimumInitialVelocity=b;this._stopVelocity=c;this._friction=e;this._entryPool=[];this._history=new m.ValueHistory(1E3*a)}c.prototype.add=function(a,
b,c,e){void 0!==e&&(e*=1E3);var d;0!==this._entryPool.length?(d=this._entryPool.pop(),d.x=a,d.y=b,n.vec3d.set(c,d.data)):d={x:a,y:b,data:n.vec3d.create(c)};this._history.add(d,e)};c.prototype.reset=function(){for(var a=0,b=this._history.values;a<b.length;a++)this._entryPool.push(b[a].value);this._history.reset()};Object.defineProperty(c.prototype,"stopVelocity",{get:function(){return this._stopVelocity},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"friction",{get:function(){return this._friction},
enumerable:!0,configurable:!0});c.prototype.evaluateMomentum=function(){var a=this._evaluateVelocity(),b=this._history.oldest,c=this._history.newest;return null!==a?new q(a,this._stopVelocity,this._friction,b.value.data,c.value.data,.001*(c.timeStamp-b.timeStamp)):null};c.prototype._evaluateVelocity=function(){var a=this._history,b=a.oldest,c=a.newest;if(b&&c&&(a=.001*(c.timeStamp-b.timeStamp),0<a)){var e=c.value.x-b.value.x,b=c.value.y-b.value.y,b=Math.sqrt(e*e+b*b)/a;if(Math.abs(b)>=this._minimumInitialVelocity)return b}return null};
return c}();g.ScreenspaceMomentumEstimator=f});