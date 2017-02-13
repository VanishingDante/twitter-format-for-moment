'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.twitterLong=exports.twitterShort=exports.twitterFormat=undefined;var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// Times in millisecond
var second=1e3;var minute=6e4;var hour=36e5;var day=864e5;var week=6048e5;var formats={seconds:{short:'s',long:' sec'},minutes:{short:'m',long:' min'},hours:{short:'h',long:' hr'},days:{short:'d',long:' day'}};var twitterFormat=exports.twitterFormat=function twitterFormat(date,format){var diff=Math.abs(date.diff(new _moment2.default));var unit=void 0,num=void 0,unitStr=void 0;if(diff<=second){unit='seconds';num=1}else if(diff<minute){unit='seconds'}else if(diff<hour){unit='minutes'}else if(diff<day){unit='hours'}else if(format==='short'){if(diff<week){unit='days'}else{return date.format('M/D/YY')}}else{return date.format('MMM D')}if(!(num&&unit)){num=_moment2.default.duration(diff)[unit]()}unitStr=unit=formats[unit][format];if(format==='long'&&num>1){unitStr+='s'}return num+unitStr};var twitterShort=exports.twitterShort=function twitterShort(date){return twitterFormat(date,'short')};var twitterLong=exports.twitterLong=function twitterLong(date){return twitterFormat(date,'long')};

//# sourceMappingURL=index.js.map