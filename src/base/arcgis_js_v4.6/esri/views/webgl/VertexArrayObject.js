// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(r,t){return function(){function c(b,q,g,f,d){this._locations=this._layout=this._glName=this._context=null;this._indexBuffer=this._buffers=void 0;this._initialized=!1;this._context=b;this._layout=g;this._buffers=f;this._locations=q;d&&(this._indexBuffer=d);this._id=c._nextId++}Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!0,
configurable:!0});Object.defineProperty(c.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0});c.prototype.dispose=
function(b){void 0===b&&(b=!0);if(this._context){var c=this._context.extensions.vao;c&&this._glName&&(c.deleteVertexArrayOES(this._glName),this._glName=null);this._context.getBoundVAO()===this&&this._context.bindVAO(null);if(b){for(var g in this._buffers)this._buffers[g].dispose(),delete this._buffers[g];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context=null}};c.prototype.initialize=function(){if(!this._initialized){var b=this._context.extensions.vao;if(b){var c=
b.createVertexArrayOES();b.bindVertexArrayOES(c);this._bindLayout();b.bindVertexArrayOES(null);this._glName=c}this._initialized=!0}};c.prototype.bind=function(){this.initialize();var b=this._context.extensions.vao;b?b.bindVertexArrayOES(this.glName):(this._context.bindVAO(null),this._bindLayout())};c.prototype._bindLayout=function(){var b=this._buffers,c=this._context.extensions.vao,g=this._layout,f=this._indexBuffer;b||console.error("Vertex buffer dictionary is empty!");var d=this._context.gl,a,
k,l=0,h;for(h in b)for((a=b[h])||console.error("Vertex buffer is uninitialized!"),(k=g[h])||console.error("Vertex element descriptor is empty!"),this._context.bindBuffer(a),l=0;l<k.length;++l){a=k[l];var e=this._locations[a.name],m=a.baseInstance?a.baseInstance*a.stride:0;void 0===e&&console.error("There is no location for vertex attribute '"+a.name+"' defined.");a.baseInstance&&!a.divisor&&console.error("Vertex attribute '"+a.name+"' uses baseInstanceOffset without divisor.");if(4>=a.count){if(d.enableVertexAttribArray(e),
d.vertexAttribPointer(e,a.count,a.type,a.normalized,a.stride,a.offset+m),a.divisor&&0<a.divisor){var p=this._context.extensions.angleInstancedArrays;p&&p.vertexAttribDivisorANGLE(e,a.divisor)}}else if(16===a.count&&5126===a.type)for(var n=0;4>n;n++)d.enableVertexAttribArray(e+n),d.vertexAttribPointer(e+n,4,a.type,a.normalized,a.stride,a.offset+16*n+m),a.divisor&&0<a.divisor&&(p=this._context.extensions.angleInstancedArrays)&&p.vertexAttribDivisorANGLE(e+n,a.divisor);else console.error("Unsupported vertex attribute element count: "+
a.count)}f&&(c?d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,f.glName):this._context.bindBuffer(f))};c.prototype.unbind=function(){this.initialize();var b=this._context.extensions.vao;b?b.bindVertexArrayOES(null):this._unbindLayout()};c.prototype._unbindLayout=function(){var b=this._buffers,c=this._layout,g=this._locations,f=this._context;b||console.error("Vertex buffer dictionary is empty!");var d=f.gl,a,k,l,h=0,e=0,m;for(m in b){(a=b[m])||console.error("Vertex buffer is uninitialized!");k=c[m];h=0;for(e=
k.length;h<e;++h)l=k[h],d.disableVertexAttribArray(g[l.name]);f.unbindBuffer(a.bufferType)}(b=this._indexBuffer)&&f.unbindBuffer(b.bufferType)};c._nextId=0;return c}()});