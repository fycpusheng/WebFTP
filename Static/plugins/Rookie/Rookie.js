Rookie.get_browser=function(){var $=navigator.userAgent.toLowerCase();if(window.ActiveXObject)return"ie";if(/firefox/i.test($))return"firefox";if(/chrome/i.test($)&&/webkit/i.test($)&&/mozilla/i.test($))return"chrome";if(window.opera)return"opera";if(window.openDatabase)return"safari";return"other"};Rookie.getSWF=function($){if(window.document[$])return window.document[$];else return document.getElementById($)};Rookie.swfReady=function(){Rookie.asToJs=true};Rookie.cross=function(){return Rookie.crossDomain};function Rookie($){var _=1;(function(){if(Rookie.local=Rookie.getSWF("rookieswf"))(function(){_++;if(Rookie.asToJs){try{Rookie.local.available=Rookie.local.callAS()}catch(A){try{console.warn("But your DOMAIN is NOT ALLOWED.")}catch(A){}return}$.call(Rookie.local)}else{if(_>150){try{console.warn("But network failure,or check your swf file path,or browser do not support Flash")}catch(A){}return}setTimeout(arguments.callee,20)}})();else setTimeout(arguments.callee,20)})()}(function(){var _=document.getElementsByTagName("script"),B=_[_.length-1].src.split("?")[1];if((/http:\/\//i).test(B)&&B.indexOf(window.location.host)==-1)Rookie.crossDomain=true;B+="?"+Math.floor(Math.random()*100000);var $="<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0\" width=\"1\" height=\"1\" id=\"rookieswf\"><param name=\"movie\" value=\""+B+"\" /><param name=\"allowScriptAccess\" value=\"always\" /><embed src=\""+B+"\" width=\"1\" height=\"1\" name=\"rookieswf\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" /></object>",A=document.createElement("div");(function(){if(document.body){A.innerHTML=$;document.body.insertBefore(A,document.body.firstChild)}else setTimeout(arguments.callee,15)})()})();