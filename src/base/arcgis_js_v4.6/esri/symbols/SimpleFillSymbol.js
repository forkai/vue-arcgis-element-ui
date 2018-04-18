// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","./FillSymbol","./SimpleLineSymbol"],function(g,c,e,h,k){var f={style:"solid",outline:new k,color:[0,0,0,.25]},b=g(h,{declaredClass:"esri.symbols.SimpleFillSymbol",properties:{color:{},type:"simple-fill",style:{value:"solid",type:String,json:{read:function(a){return e.valueOf(this._styles,a)||void 0},write:function(a,b){b.style=this._styles[a]}}}},_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical",
"forward-diagonal":"esriSFSForwardDiagonal","backward-diagonal":"esriSFSBackwardDiagonal",cross:"esriSFSCross","diagonal-cross":"esriSFSDiagonalCross"},getDefaults:function(){return c.mixin(this.inherited(arguments),f)},normalizeCtorArgs:function(a,b,c){if(a&&"string"!==typeof a)return a;var d={};a&&(d.style=a);b&&(d.outline=b);c&&(d.color=c);return d},clone:function(){return new b({color:e.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}});c.mixin(b,{STYLE_SOLID:"solid",
STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forward-diagonal",STYLE_BACKWARD_DIAGONAL:"backward-diagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonal-cross"});b.defaultProps=f;return b});