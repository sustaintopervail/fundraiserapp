/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

!function(){function t(e,n){e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=n)}function e(t,e,n,i,r){this.stream=t,this.header=e,this.length=n,this.tag=i,this.sub=r}function n(t){var e,n,i="";for(e=0;e+3<=t.length;e+=3)n=parseInt(t.substring(e,e+3),16),i+=et.charAt(n>>6)+et.charAt(63&n);for(e+1==t.length?(n=parseInt(t.substring(e,e+1),16),i+=et.charAt(n<<2)):e+2==t.length&&(n=parseInt(t.substring(e,e+2),16),i+=et.charAt(n>>2)+et.charAt((3&n)<<4));(3&i.length)>0;)i+=nt;return i}function i(t){var e,n,i,r="",o=0;for(e=0;e<t.length&&t.charAt(e)!=nt;++e)i=et.indexOf(t.charAt(e)),0>i||(0==o?(r+=l(i>>2),n=3&i,o=1):1==o?(r+=l(n<<2|i>>4),n=15&i,o=2):2==o?(r+=l(n),r+=l(i>>2),n=3&i,o=3):(r+=l(n<<2|i>>4),r+=l(15&i),o=0));return 1==o&&(r+=l(n<<2)),r}function r(t){var e,n=i(t),r=new Array;for(e=0;2*e<n.length;++e)r[e]=parseInt(n.substring(2*e,2*e+2),16);return r}function o(t,e,n){null!=t&&("number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function s(){return new o(null)}function a(t,e,n,i,r,o){for(;--o>=0;){var s=e*this[t++]+n[i]+r;r=Math.floor(s/67108864),n[i++]=67108863&s}return r}function c(t,e,n,i,r,o){for(var s=32767&e,a=e>>15;--o>=0;){var c=32767&this[t],u=this[t++]>>15,l=a*c+u*s;c=s*c+((32767&l)<<15)+n[i]+(1073741823&r),r=(c>>>30)+(l>>>15)+a*u+(r>>>30),n[i++]=1073741823&c}return r}function u(t,e,n,i,r,o){for(var s=16383&e,a=e>>14;--o>=0;){var c=16383&this[t],u=this[t++]>>14,l=a*c+u*s;c=s*c+((16383&l)<<14)+n[i]+r,r=(c>>28)+(l>>14)+a*u,n[i++]=268435455&c}return r}function l(t){return ct.charAt(t)}function h(t,e){var n=ut[t.charCodeAt(e)];return null==n?-1:n}function p(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function d(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function f(t){var e=s();return e.fromInt(t),e}function m(t,e){var n;if(16==e)n=4;else if(8==e)n=3;else if(256==e)n=8;else if(2==e)n=1;else if(32==e)n=5;else{if(4!=e)return void this.fromRadix(t,e);n=2}this.t=0,this.s=0;for(var i=t.length,r=!1,s=0;--i>=0;){var a=8==n?255&t[i]:h(t,i);0>a?"-"==t.charAt(i)&&(r=!0):(r=!1,0==s?this[this.t++]=a:s+n>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,s+=n,s>=this.DB&&(s-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),r&&o.ZERO.subTo(this,this)}function y(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function g(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var n,i=(1<<e)-1,r=!1,o="",s=this.t,a=this.DB-s*this.DB%e;if(s-->0)for(a<this.DB&&(n=this[s]>>a)>0&&(r=!0,o=l(n));s>=0;)e>a?(n=(this[s]&(1<<a)-1)<<e-a,n|=this[--s]>>(a+=this.DB-e)):(n=this[s]>>(a-=e)&i,0>=a&&(a+=this.DB,--s)),n>0&&(r=!0),r&&(o+=l(n));return r?o:"0"}function b(){var t=s();return o.ZERO.subTo(this,t),t}function v(){return this.s<0?this.negate():this}function _(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return this.s<0?-e:e;for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function E(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n}function w(){return this.t<=0?0:this.DB*(this.t-1)+E(this[this.t-1]^this.s&this.DM)}function A(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;e.t=this.t+t,e.s=this.s}function C(t,e){for(var n=t;n<this.t;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s}function N(t,e){var n,i=t%this.DB,r=this.DB-i,o=(1<<r)-1,s=Math.floor(t/this.DB),a=this.s<<i&this.DM;for(n=this.t-1;n>=0;--n)e[n+s+1]=this[n]>>r|a,a=(this[n]&o)<<i;for(n=s-1;n>=0;--n)e[n]=0;e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function T(t,e){e.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)return void(e.t=0);var i=t%this.DB,r=this.DB-i,o=(1<<i)-1;e[0]=this[n]>>i;for(var s=n+1;s<this.t;++s)e[s-n-1]|=(this[s]&o)<<r,e[s-n]=this[s]>>i;i>0&&(e[this.t-n-1]|=(this.s&o)<<r),e.t=this.t-n,e.clamp()}function O(t,e){for(var n=0,i=0,r=Math.min(t.t,this.t);r>n;)i+=this[n]-t[n],e[n++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;n<this.t;)i+=this[n],e[n++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;n<t.t;)i-=t[n],e[n++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=0>i?-1:0,-1>i?e[n++]=this.DV+i:i>0&&(e[n++]=i),e.t=n,e.clamp()}function S(t,e){var n=this.abs(),i=t.abs(),r=n.t;for(e.t=r+i.t;--r>=0;)e[r]=0;for(r=0;r<i.t;++r)e[r+n.t]=n.am(0,i[r],e,r,0,n.t);e.s=0,e.clamp(),this.s!=t.s&&o.ZERO.subTo(e,e)}function I(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;for(n=0;n<e.t-1;++n){var i=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,i,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function R(t,e,n){var i=t.abs();if(!(i.t<=0)){var r=this.abs();if(r.t<i.t)return null!=e&&e.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=s());var a=s(),c=this.s,u=t.s,l=this.DB-E(i[i.t-1]);l>0?(i.lShiftTo(l,a),r.lShiftTo(l,n)):(i.copyTo(a),r.copyTo(n));var h=a.t,p=a[h-1];if(0!=p){var d=p*(1<<this.F1)+(h>1?a[h-2]>>this.F2:0),f=this.FV/d,m=(1<<this.F1)/d,y=1<<this.F2,g=n.t,b=g-h,v=null==e?s():e;for(a.dlShiftTo(b,v),n.compareTo(v)>=0&&(n[n.t++]=1,n.subTo(v,n)),o.ONE.dlShiftTo(h,v),v.subTo(a,a);a.t<h;)a[a.t++]=0;for(;--b>=0;){var _=n[--g]==p?this.DM:Math.floor(n[g]*f+(n[g-1]+y)*m);if((n[g]+=a.am(0,_,n,b,0,h))<_)for(a.dlShiftTo(b,v),n.subTo(v,n);n[g]<--_;)n.subTo(v,n)}null!=e&&(n.drShiftTo(h,e),c!=u&&o.ZERO.subTo(e,e)),n.t=h,n.clamp(),l>0&&n.rShiftTo(l,n),0>c&&o.ZERO.subTo(n,n)}}}function x(t){var e=s();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(o.ZERO)>0&&t.subTo(e,e),e}function P(t){this.m=t}function D(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function M(t){return t}function U(t){t.divRemTo(this.m,null,t)}function k(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function F(t,e){t.squareTo(e),this.reduce(e)}function L(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function B(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function j(t){var e=s();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(o.ZERO)>0&&this.m.subTo(e,e),e}function H(t){var e=s();return t.copyTo(e),this.reduce(e),e}function V(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var n=32767&t[e],i=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(n=e+this.m.t,t[n]+=this.m.am(0,i,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function Y(t,e){t.squareTo(e),this.reduce(e)}function z(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function G(){return 0==(this.t>0?1&this[0]:this.s)}function W(t,e){if(t>4294967295||1>t)return o.ONE;var n=s(),i=s(),r=e.convert(this),a=E(t)-1;for(r.copyTo(n);--a>=0;)if(e.sqrTo(n,i),(t&1<<a)>0)e.mulTo(i,r,n);else{var c=n;n=i,i=c}return e.revert(n)}function q(t,e){var n;return n=256>t||e.isEven()?new P(e):new B(e),this.exp(t,n)}function K(t,e){return new o(t,e)}function Q(t,e){if(e<t.length+11)throw new Error("Message too long for RSA");for(var n=new Array,i=t.length-1;i>=0&&e>0;){var r=t.charCodeAt(i--);128>r?n[--e]=r:r>127&&2048>r?(n[--e]=63&r|128,n[--e]=r>>6|192):(n[--e]=63&r|128,n[--e]=r>>6&63|128,n[--e]=r>>12|224)}n[--e]=0;for(var s=0,a=0,c=0;e>2;)0==c&&(a=lt.random.randomWords(1,0)[0]),s=a>>c&255,c=(c+8)%32,0!=s&&(n[--e]=s);return n[--e]=2,n[--e]=0,new o(n)}function $(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function Z(t,e){if(!(null!=t&&null!=e&&t.length>0&&e.length>0))throw new Error("Invalid RSA public key");this.n=K(t,16),this.e=parseInt(e,16)}function X(t){return t.modPowInt(this.e,this.n)}function J(t){var e=Q(t,this.n.bitLength()+7>>3);if(null==e)return null;var n=this.doPublic(e);if(null==n)return null;var i=n.toString(16);return 0==(1&i.length)?i:"0"+i}t.prototype.get=function(t){if(void 0==t&&(t=this.pos++),t>=this.enc.length)throw"Requesting byte offset "+t+" on a stream of length "+this.enc.length;return this.enc[t]},t.prototype.hexDigits="0123456789ABCDEF",t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e){for(var n="",i=t;e>i;++i)switch(n+=this.hexByte(this.get(i)),15&i){case 7:n+="  ";break;case 15:n+="\n";break;default:n+=" "}return n},t.prototype.parseStringISO=function(t,e){for(var n="",i=t;e>i;++i)n+=String.fromCharCode(this.get(i));return n},t.prototype.parseStringUTF=function(t,e){for(var n="",i=0,r=t;e>r;){var i=this.get(r++);n+=String.fromCharCode(128>i?i:i>191&&224>i?(31&i)<<6|63&this.get(r++):(15&i)<<12|(63&this.get(r++))<<6|63&this.get(r++))}return n},t.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,t.prototype.parseTime=function(t,e){var n=this.parseStringISO(t,e),i=this.reTime.exec(n);return i?(n=i[1]+"-"+i[2]+"-"+i[3]+" "+i[4],i[5]&&(n+=":"+i[5],i[6]&&(n+=":"+i[6],i[7]&&(n+="."+i[7]))),i[8]&&(n+=" UTC","Z"!=i[8]&&(n+=i[8],i[9]&&(n+=":"+i[9]))),n):"Unrecognized time: "+n},t.prototype.parseInteger=function(t,e){var n=e-t;if(n>4){n<<=3;var i=this.get(t);if(0==i)n-=8;else for(;128>i;)i<<=1,--n;return"("+n+" bit)"}for(var r=0,o=t;e>o;++o)r=r<<8|this.get(o);return r},t.prototype.parseBitString=function(t,e){var n=this.get(t),i=(e-t-1<<3)-n,r="("+i+" bit)";if(20>=i){var o=n;r+=" ";for(var s=e-1;s>t;--s){for(var a=this.get(s),c=o;8>c;++c)r+=a>>c&1?"1":"0";o=0}}return r},t.prototype.parseOctetString=function(t,e){var n=e-t,i="("+n+" byte) ";n>20&&(e=t+20);for(var r=t;e>r;++r)i+=this.hexByte(this.get(r));return n>20&&(i+=String.fromCharCode(8230)),i},t.prototype.parseOID=function(t,e){for(var n,i=0,r=0,o=t;e>o;++o){var s=this.get(o);i=i<<7|127&s,r+=7,128&s||(void 0==n?n=parseInt(i/40)+"."+i%40:n+="."+(r>=31?"bigint":i),i=r=0),n+=String.fromCharCode()}return n},e.prototype.typeName=function(){if(void 0==this.tag)return"unknown";var t=this.tag>>6,e=(this.tag>>5&1,31&this.tag);switch(t){case 0:switch(e){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+e.toString(16)}case 1:return"Application_"+e.toString(16);case 2:return"["+e+"]";case 3:return"Private_"+e.toString(16)}},e.prototype.content=function(){if(void 0==this.tag)return null;var t=this.tag>>6;if(0!=t)return null==this.sub?null:"("+this.sub.length+")";var e=31&this.tag,n=this.posContent(),i=Math.abs(this.length);switch(e){case 1:return 0==this.stream.get(n)?"false":"true";case 2:return this.stream.parseInteger(n,n+i);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(n,n+i);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(n,n+i);case 6:return this.stream.parseOID(n,n+i);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(n,n+i);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(n,n+i);case 23:case 24:return this.stream.parseTime(n,n+i)}return null},e.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null==this.sub?"null":this.sub.length)+"]"},e.prototype.print=function(t){if(void 0==t&&(t=""),document.writeln(t+this),null!=this.sub){t+="  ";for(var e=0,n=this.sub.length;n>e;++e)this.sub[e].print(t)}},e.prototype.toPrettyString=function(t){void 0==t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,32&this.tag?e+=" (constructed)":3!=this.tag&&4!=this.tag||null==this.sub||(e+=" (encapsulates)"),e+="\n",null!=this.sub){t+="  ";for(var n=0,i=this.sub.length;i>n;++n)e+=this.sub[n].toPrettyString(t)}return e},e.prototype.posStart=function(){return this.stream.pos},e.prototype.posContent=function(){return this.stream.pos+this.header},e.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},e.decodeLength=function(t){var e=t.get(),n=127&e;if(n==e)return n;if(n>3)throw"Length over 24 bits not supported at position "+(t.pos-1);if(0==n)return-1;e=0;for(var i=0;n>i;++i)e=e<<8|t.get();return e},e.hasContent=function(n,i,r){if(32&n)return!0;if(3>n||n>4)return!1;var o=new t(r);3==n&&o.get();var s=o.get();if(s>>6&1)return!1;try{var a=e.decodeLength(o);return o.pos-r.pos+a==i}catch(c){return!1}},e.decode=function(n){n instanceof t||(n=new t(n,0));var i=new t(n),r=n.get(),o=e.decodeLength(n),s=n.pos-i.pos,a=null;if(e.hasContent(r,o,n)){var c=n.pos;if(3==r&&n.get(),a=[],o>=0){for(var u=c+o;n.pos<u;)a[a.length]=e.decode(n);if(n.pos!=u)throw"Content size is not correct for container starting at offset "+c}else try{for(;;){var l=e.decode(n);if(0==l.tag)break;a[a.length]=l}o=c-n.pos}catch(h){throw"Exception while decoding undefined length content: "+h}}else n.pos+=o;return new e(i,s,o,r,a)};var tt,et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nt="=",it=0xdeadbeefcafe,rt=15715070==(16777215&it);rt&&"Microsoft Internet Explorer"==navigator.appName?(o.prototype.am=c,tt=30):rt&&"Netscape"!=navigator.appName?(o.prototype.am=a,tt=26):(o.prototype.am=u,tt=28),o.prototype.DB=tt,o.prototype.DM=(1<<tt)-1,o.prototype.DV=1<<tt;var ot=52;o.prototype.FV=Math.pow(2,ot),o.prototype.F1=ot-tt,o.prototype.F2=2*tt-ot;var st,at,ct="0123456789abcdefghijklmnopqrstuvwxyz",ut=new Array;for(st="0".charCodeAt(0),at=0;9>=at;++at)ut[st++]=at;for(st="a".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;for(st="A".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;P.prototype.convert=D,P.prototype.revert=M,P.prototype.reduce=U,P.prototype.mulTo=k,P.prototype.sqrTo=F,B.prototype.convert=j,B.prototype.revert=H,B.prototype.reduce=V,B.prototype.mulTo=z,B.prototype.sqrTo=Y,o.prototype.copyTo=p,o.prototype.fromInt=d,o.prototype.fromString=m,o.prototype.clamp=y,o.prototype.dlShiftTo=A,o.prototype.drShiftTo=C,o.prototype.lShiftTo=N,o.prototype.rShiftTo=T,o.prototype.subTo=O,o.prototype.multiplyTo=S,o.prototype.squareTo=I,o.prototype.divRemTo=R,o.prototype.invDigit=L,o.prototype.isEven=G,o.prototype.exp=W,o.prototype.toString=g,o.prototype.negate=b,o.prototype.abs=v,o.prototype.compareTo=_,o.prototype.bitLength=w,o.prototype.mod=x,o.prototype.modPowInt=q,o.ZERO=f(0),o.ONE=f(1),$.prototype.doPublic=X,$.prototype.setPublic=Z,$.prototype.encrypt=J;var lt={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};"undefined"!=typeof module&&module.exports&&(module.exports=lt),lt.cipher.aes=function(t){this._tables[0][0][0]||this._precompute();var e,n,i,r,o,s=this._tables[0][4],a=this._tables[1],c=t.length,u=1;if(4!==c&&6!==c&&8!==c)throw new lt.exception.invalid("invalid aes key size");for(this._key=[r=t.slice(0),o=[]],e=c;4*c+28>e;e++)i=r[e-1],(e%c===0||8===c&&e%c===4)&&(i=s[i>>>24]<<24^s[i>>16&255]<<16^s[i>>8&255]<<8^s[255&i],e%c===0&&(i=i<<8^i>>>24^u<<24,u=u<<1^283*(u>>7))),r[e]=r[e-c]^i;for(n=0;e;n++,e--)i=r[3&n?e:e-4],o[n]=4>=e||4>n?i:a[0][s[i>>>24]]^a[1][s[i>>16&255]]^a[2][s[i>>8&255]]^a[3][s[255&i]]},lt.cipher.aes.prototype={encrypt:function(t){return this._crypt(t,0)},decrypt:function(t){return this._crypt(t,1)},_tables:[[[],[],[],[],[]],[[],[],[],[],[]]],_precompute:function(){var t,e,n,i,r,o,s,a,c,u=this._tables[0],l=this._tables[1],h=u[4],p=l[4],d=[],f=[];for(t=0;256>t;t++)f[(d[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!h[e];e^=i||1,n=f[n]||1)for(s=n^n<<1^n<<2^n<<3^n<<4,s=s>>8^255&s^99,h[e]=s,p[s]=e,o=d[r=d[i=d[e]]],c=16843009*o^65537*r^257*i^16843008*e,a=257*d[s]^16843008*s,t=0;4>t;t++)u[t][e]=a=a<<24^a>>>8,l[t][s]=c=c<<24^c>>>8;for(t=0;5>t;t++)u[t]=u[t].slice(0),l[t]=l[t].slice(0)},_crypt:function(t,e){if(4!==t.length)throw new lt.exception.invalid("invalid aes block size");var n,i,r,o,s=this._key[e],a=t[0]^s[0],c=t[e?3:1]^s[1],u=t[2]^s[2],l=t[e?1:3]^s[3],h=s.length/4-2,p=4,d=[0,0,0,0],f=this._tables[e],m=f[0],y=f[1],g=f[2],b=f[3],v=f[4];for(o=0;h>o;o++)n=m[a>>>24]^y[c>>16&255]^g[u>>8&255]^b[255&l]^s[p],i=m[c>>>24]^y[u>>16&255]^g[l>>8&255]^b[255&a]^s[p+1],r=m[u>>>24]^y[l>>16&255]^g[a>>8&255]^b[255&c]^s[p+2],l=m[l>>>24]^y[a>>16&255]^g[c>>8&255]^b[255&u]^s[p+3],p+=4,a=n,c=i,u=r;for(o=0;4>o;o++)d[e?3&-o:o]=v[a>>>24]<<24^v[c>>16&255]<<16^v[u>>8&255]<<8^v[255&l]^s[p++],n=a,a=c,c=u,u=l,l=n;return d}},lt.bitArray={bitSlice:function(t,e,n){return t=lt.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),void 0===n?t:lt.bitArray.clamp(t,n-e)},extract:function(t,e,n){var i,r=Math.floor(-e-n&31);return i=-32&(e+n-1^e)?t[e/32|0]<<32-r^t[e/32+1|0]>>>r:t[e/32|0]>>>r,i&(1<<n)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var n=t[t.length-1],i=lt.bitArray.getPartial(n);return 32===i?t.concat(e):lt.bitArray._shiftRight(e,i,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e,n=t.length;return 0===n?0:(e=t[n-1],32*(n-1)+lt.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var n=t.length;return e=31&e,n>0&&e&&(t[n-1]=lt.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return 32===t?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(lt.bitArray.bitLength(t)!==lt.bitArray.bitLength(e))return!1;var n,i=0;for(n=0;n<t.length;n++)i|=t[n]^e[n];return 0===i},_shiftRight:function(t,e,n,i){var r,o,s=0;for(void 0===i&&(i=[]);e>=32;e-=32)i.push(n),n=0;if(0===e)return i.concat(t);for(r=0;r<t.length;r++)i.push(n|t[r]>>>e),n=t[r]<<32-e;return s=t.length?t[t.length-1]:0,o=lt.bitArray.getPartial(s),i.push(lt.bitArray.partial(e+o&31,e+o>32?n:i.pop(),1)),i},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}},lt.codec.hex={fromBits:function(t){var e,n="";for(e=0;e<t.length;e++)n+=((0|t[e])+0xf00000000000).toString(16).substr(4);return n.substr(0,lt.bitArray.bitLength(t)/4)},toBits:function(t){var e,n,i=[];for(t=t.replace(/\s|0x/g,""),n=t.length,t+="00000000",e=0;e<t.length;e+=8)i.push(0^parseInt(t.substr(e,8),16));return lt.bitArray.clamp(i,4*n)}},lt.codec.utf8String={fromBits:function(t){var e,n,i="",r=lt.bitArray.bitLength(t);for(e=0;r/8>e;e++)0===(3&e)&&(n=t[e/4]),i+=String.fromCharCode(n>>>24),n<<=8;return decodeURIComponent(escape(i))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],i=0;for(e=0;e<t.length;e++)i=i<<8|t.charCodeAt(e),3===(3&e)&&(n.push(i),i=0);return 3&e&&n.push(lt.bitArray.partial(8*(3&e),i)),n}},lt.codec.base64={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(t,e,n){var i,r="",o=0,s=lt.codec.base64._chars,a=0,c=lt.bitArray.bitLength(t);for(n&&(s=s.substr(0,62)+"-_"),i=0;6*r.length<c;)r+=s.charAt((a^t[i]>>>o)>>>26),6>o?(a=t[i]<<6-o,o+=26,i++):(a<<=6,o-=6);for(;3&r.length&&!e;)r+="=";return r},toBits:function(t,e){t=t.replace(/\s|=/g,"");var n,i,r=[],o=0,s=lt.codec.base64._chars,a=0;for(e&&(s=s.substr(0,62)+"-_"),n=0;n<t.length;n++){if(i=s.indexOf(t.charAt(n)),0>i)throw new lt.exception.invalid("this isn't base64!");o>26?(o-=26,r.push(a^i>>>o),a=i<<32-o):(o+=6,a^=i<<32-o)}return 56&o&&r.push(lt.bitArray.partial(56&o,a,1)),r}},lt.codec.base64url={fromBits:function(t){return lt.codec.base64.fromBits(t,1,1)},toBits:function(t){return lt.codec.base64.toBits(t,1)}},void 0===lt.beware&&(lt.beware={}),lt.beware["CBC mode is dangerous because it doesn't protect message integrity."]=function(){lt.mode.cbc={name:"cbc",encrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");var r,o=lt.bitArray,s=o._xor4,a=o.bitLength(e),c=0,u=[];if(7&a)throw new lt.exception.invalid("pkcs#5 padding only works for multiples of a byte");for(r=0;a>=c+128;r+=4,c+=128)n=t.encrypt(s(n,e.slice(r,r+4))),u.splice(r,0,n[0],n[1],n[2],n[3]);return a=16843009*(16-(a>>3&15)),n=t.encrypt(s(n,o.concat(e,[a,a,a,a]).slice(r,r+4))),u.splice(r,0,n[0],n[1],n[2],n[3]),u},decrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");if(127&lt.bitArray.bitLength(e)||!e.length)throw new lt.exception.corrupt("cbc ciphertext must be a positive multiple of the block size");var r,o,s,a=lt.bitArray,c=a._xor4,u=[];for(i=i||[],r=0;r<e.length;r+=4)o=e.slice(r,r+4),s=c(n,t.decrypt(o)),u.splice(r,0,s[0],s[1],s[2],s[3]),n=o;if(o=255&u[r-1],0==o||o>16)throw new lt.exception.corrupt("pkcs#5 padding corrupt");if(s=16843009*o,!a.equal(a.bitSlice([s,s,s,s],0,8*o),a.bitSlice(u,32*u.length-8*o,32*u.length)))throw new lt.exception.corrupt("pkcs#5 padding corrupt");return a.bitSlice(u,0,32*u.length-8*o)}}},lt.misc.hmac=function(t,e){this._hash=e=e||lt.hash.sha256;var n,i=[[],[]],r=e.prototype.blockSize/32;for(this._baseHash=[new e,new e],t.length>r&&(t=e.hash(t)),n=0;r>n;n++)i[0][n]=909522486^t[n],i[1][n]=1549556828^t[n];this._baseHash[0].update(i[0]),this._baseHash[1].update(i[1])},lt.misc.hmac.prototype.encrypt=lt.misc.hmac.prototype.mac=function(t,e){var n=new this._hash(this._baseHash[0]).update(t,e).finalize();return new this._hash(this._baseHash[1]).update(n).finalize()},lt.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},lt.hash.sha256.hash=function(t){return(new lt.hash.sha256).update(t).finalize()},lt.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"==typeof t&&(t=lt.codec.utf8String.toBits(t));var e,n=this._buffer=lt.bitArray.concat(this._buffer,t),i=this._length,r=this._length=i+lt.bitArray.bitLength(t);for(e=512+i&-512;r>=e;e+=512)this._block(n.splice(0,16));return this},finalize:function(){var t,e=this._buffer,n=this._h;for(e=lt.bitArray.concat(e,[lt.bitArray.partial(1,1)]),t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this._length/4294967296)),e.push(0|this._length);e.length;)this._block(e.splice(0,16));return this.reset(),n},_init:[],_key:[],_precompute:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}var e,n=0,i=2;t:for(;64>n;i++){for(e=2;i>=e*e;e++)if(i%e===0)continue t;8>n&&(this._init[n]=t(Math.pow(i,.5))),this._key[n]=t(Math.pow(i,1/3)),n++}},_block:function(t){var e,n,i,r,o=t.slice(0),s=this._h,a=this._key,c=s[0],u=s[1],l=s[2],h=s[3],p=s[4],d=s[5],f=s[6],m=s[7];for(e=0;64>e;e++)16>e?n=o[e]:(i=o[e+1&15],r=o[e+14&15],n=o[15&e]=(i>>>7^i>>>18^i>>>3^i<<25^i<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+o[15&e]+o[e+9&15]|0),n=n+m+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(f^p&(d^f))+a[e],m=f,f=d,d=p,p=h+n|0,h=l,l=u,u=c,c=n+(u&l^h&(u^l))+(u>>>2^u>>>13^u>>>22^u<<30^u<<19^u<<10)|0;s[0]=s[0]+c|0,s[1]=s[1]+u|0,s[2]=s[2]+l|0,s[3]=s[3]+h|0,s[4]=s[4]+p|0,s[5]=s[5]+d|0,s[6]=s[6]+f|0,s[7]=s[7]+m|0}},lt.random={randomWords:function(t,e){var n,i,r=[],o=this.isReady(e);if(o===this._NOT_READY)throw new lt.exception.notReady("generator isn't seeded");for(o&this._REQUIRES_RESEED&&this._reseedFromPools(!(o&this._READY)),n=0;t>n;n+=4)(n+1)%this._MAX_WORDS_PER_BURST===0&&this._gate(),i=this._gen4words(),r.push(i[0],i[1],i[2],i[3]);return this._gate(),r.slice(0,t)},setDefaultParanoia:function(t){this._defaultParanoia=t},addEntropy:function(t,e,n){n=n||"user";var i,r,o,s=(new Date).valueOf(),a=this._robins[n],c=this.isReady(),u=0;switch(i=this._collectorIds[n],void 0===i&&(i=this._collectorIds[n]=this._collectorIdNext++),void 0===a&&(a=this._robins[n]=0),this._robins[n]=(this._robins[n]+1)%this._pools.length,typeof t){case"number":void 0===e&&(e=1),this._pools[a].update([i,this._eventId++,1,e,s,1,0|t]);break;case"object":var l=Object.prototype.toString.call(t);if("[object Uint32Array]"===l){for(o=[],r=0;r<t.length;r++)o.push(t[r]);t=o}else for("[object Array]"!==l&&(u=1),r=0;r<t.length&&!u;r++)"number"!=typeof t[r]&&(u=1);if(!u){if(void 0===e)for(e=0,r=0;r<t.length;r++)for(o=t[r];o>0;)e++,o>>>=1;this._pools[a].update([i,this._eventId++,2,e,s,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this._pools[a].update([i,this._eventId++,3,e,s,t.length]),this._pools[a].update(t);break;default:u=1}if(u)throw new lt.exception.bug("random: addEntropy only supports number, array of numbers or string");this._poolEntropy[a]+=e,this._poolStrength+=e,c===this._NOT_READY&&(this.isReady()!==this._NOT_READY&&this._fireEvent("seeded",Math.max(this._strength,this._poolStrength)),this._fireEvent("progress",this.getProgress()))},isReady:function(t){var e=this._PARANOIA_LEVELS[void 0!==t?t:this._defaultParanoia];return this._strength&&this._strength>=e?this._poolEntropy[0]>this._BITS_PER_RESEED&&(new Date).valueOf()>this._nextReseed?this._REQUIRES_RESEED|this._READY:this._READY:this._poolStrength>=e?this._REQUIRES_RESEED|this._NOT_READY:this._NOT_READY},getProgress:function(t){var e=this._PARANOIA_LEVELS[t?t:this._defaultParanoia];return this._strength>=e?1:this._poolStrength>e?1:this._poolStrength/e},startCollectors:function(){if(!this._collectorsStarted){if(window.addEventListener)window.addEventListener("load",this._loadTimeCollector,!1),window.addEventListener("mousemove",this._mouseCollector,!1);else{if(!document.attachEvent)throw new lt.exception.bug("can't attach event");document.attachEvent("onload",this._loadTimeCollector),document.attachEvent("onmousemove",this._mouseCollector)}this._collectorsStarted=!0}},stopCollectors:function(){this._collectorsStarted&&(window.removeEventListener?(window.removeEventListener("load",this._loadTimeCollector,!1),window.removeEventListener("mousemove",this._mouseCollector,!1)):window.detachEvent&&(window.detachEvent("onload",this._loadTimeCollector),window.detachEvent("onmousemove",this._mouseCollector)),this._collectorsStarted=!1)},addEventListener:function(t,e){this._callbacks[t][this._callbackI++]=e},removeEventListener:function(t,e){var n,i,r=this._callbacks[t],o=[];for(i in r)r.hasOwnProperty(i)&&r[i]===e&&o.push(i);for(n=0;n<o.length;n++)i=o[n],delete r[i]},_pools:[new lt.hash.sha256],_poolEntropy:[0],_reseedCount:0,_robins:{},_eventId:0,_collectorIds:{},_collectorIdNext:0,_strength:0,_poolStrength:0,_nextReseed:0,_key:[0,0,0,0,0,0,0,0],_counter:[0,0,0,0],_cipher:void 0,_defaultParanoia:6,_collectorsStarted:!1,_callbacks:{progress:{},seeded:{}},_callbackI:0,_NOT_READY:0,_READY:1,_REQUIRES_RESEED:2,_MAX_WORDS_PER_BURST:65536,_PARANOIA_LEVELS:[0,48,64,96,128,192,256,384,512,768,1024],_MILLISECONDS_PER_RESEED:3e4,_BITS_PER_RESEED:80,_gen4words:function(){for(var t=0;4>t&&(this._counter[t]=this._counter[t]+1|0,!this._counter[t]);t++);return this._cipher.encrypt(this._counter)},_gate:function(){this._key=this._gen4words().concat(this._gen4words()),this._cipher=new lt.cipher.aes(this._key)},_reseed:function(t){this._key=lt.hash.sha256.hash(this._key.concat(t)),this._cipher=new lt.cipher.aes(this._key);for(var e=0;4>e&&(this._counter[e]=this._counter[e]+1|0,!this._counter[e]);e++);},_reseedFromPools:function(t){var e,n=[],i=0;for(this._nextReseed=n[0]=(new Date).valueOf()+this._MILLISECONDS_PER_RESEED,e=0;16>e;e++)n.push(4294967296*Math.random()|0);for(e=0;e<this._pools.length&&(n=n.concat(this._pools[e].finalize()),i+=this._poolEntropy[e],this._poolEntropy[e]=0,t||!(this._reseedCount&1<<e));e++);this._reseedCount>=1<<this._pools.length&&(this._pools.push(new lt.hash.sha256),this._poolEntropy.push(0)),this._poolStrength-=i,i>this._strength&&(this._strength=i),this._reseedCount++,this._reseed(n)},_mouseCollector:function(t){var e=t.x||t.clientX||t.offsetX||0,n=t.y||t.clientY||t.offsetY||0;lt.random.addEntropy([e,n],2,"mouse")},_loadTimeCollector:function(t){lt.random.addEntropy((new Date).valueOf(),2,"loadtime")},_fireEvent:function(t,e){var n,i=lt.random._callbacks[t],r=[];for(n in i)i.hasOwnProperty(n)&&r.push(i[n]);for(n=0;n<r.length;n++)r[n](e)}},function(){try{var t=new Uint32Array(32);crypto.getRandomValues(t),lt.random.addEntropy(t,1024,"crypto.getRandomValues")}catch(e){}}(),function(){for(var t in lt.beware)lt.beware.hasOwnProperty(t)&&lt.beware[t]()}();var ht={sjcl:lt,version:"1.3.10"};ht.generateAesKey=function(){return{key:lt.random.randomWords(8,0),encrypt:function(t){return this.encryptWithIv(t,lt.random.randomWords(4,0))},encryptWithIv:function(t,e){var n=new lt.cipher.aes(this.key),i=lt.codec.utf8String.toBits(t),r=lt.mode.cbc.encrypt(n,i,e),o=lt.bitArray.concat(e,r);return lt.codec.base64.fromBits(o)}}},ht.create=function(t){return new ht.EncryptionClient(t)},ht.EncryptionClient=function(t){var i=this,o=[];i.publicKey=t,i.version=ht.version;var s=function(t,e){var n,i,r;n=document.createElement(t);for(i in e)e.hasOwnProperty(i)&&(r=e[i],n.setAttribute(i,r));return n},a=function(t){return window.jQuery&&t instanceof jQuery?t[0]:t.nodeType&&1===t.nodeType?t:document.getElementById(t)},c=function(t){var e,n,i,r,o=[];if("INTEGER"===t.typeName()&&(e=t.posContent(),n=t.posEnd(),i=t.stream.hexDump(e,n).replace(/[ \n]/g,""),o.push(i)),null!==t.sub)for(r=0;r<t.sub.length;r++)o=o.concat(c(t.sub[r]));return o},u=function(t){var e,n,i=[],r=t.children;for(n=0;n<r.length;n++)e=r[n],1===e.nodeType&&e.attributes["data-encrypted-name"]?i.push(e):e.children&&e.children.length>0&&(i=i.concat(u(e)));return i},l=function(){var n,i,o,s,a,u;try{a=r(t),n=e.decode(a)}catch(l){throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'"}if(o=c(n),2!==o.length)throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'";return s=o[0],i=o[1],u=new $,u.setPublic(s,i),u},h=function(){return{key:lt.random.randomWords(8,0),sign:function(t){var e=new lt.misc.hmac(this.key,lt.hash.sha256),n=e.encrypt(t);return lt.codec.base64.fromBits(n)}}};i.encrypt=function(t){var e=l(),r=ht.generateAesKey(),o=h(),s=r.encrypt(t),a=o.sign(lt.codec.base64.toBits(s)),c=lt.bitArray.concat(r.key,o.key),u=lt.codec.base64.fromBits(c),p=e.encrypt(u),d="$bt4|javascript_"+i.version.replace(/\./g,"_")+"$",f=null;return p&&(f=n(p)),d+f+"$"+s+"$"+a},i.encryptForm=function(t){var e,n,r,c,l,h;for(t=a(t),h=u(t);o.length>0;){try{t.removeChild(o[0])}catch(p){}o.splice(0,1)}for(l=0;l<h.length;l++)e=h[l],r=e.getAttribute("data-encrypted-name"),n=i.encrypt(e.value),e.removeAttribute("name"),c=s("input",{value:n,type:"hidden",name:r}),o.push(c),t.appendChild(c)},i.onSubmitEncryptForm=function(t,e){var n;t=a(t),n=function(n){return i.encryptForm(t),e?e(n):n},window.jQuery?window.jQuery(t).submit(n):t.addEventListener?t.addEventListener("submit",n,!1):t.attachEvent&&t.attachEvent("onsubmit",n)},i.formEncrypter={encryptForm:i.encryptForm,extractForm:a,onSubmitEncryptForm:i.onSubmitEncryptForm},lt.random.startCollectors()},window.Braintree=ht;

}(),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.braintree=t()}}(function(){var t;return function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){(function(n){"use strict";function i(t,e,i){if(!c.hasOwnProperty(e))throw new Error(e+" is an unsupported integration");i=i||{},o._getConfiguration({enableCORS:i.enableCORS||!1,clientToken:t},function(t,o){var s;return t?(s=h(i)(u.ROOT_ERROR_CALLBACK,l),void s({message:t.errors})):void new c[e]({channel:p(),gatewayConfiguration:o,integrationType:e,merchantConfiguration:i,analyticsConfiguration:{sdkVersion:"braintree/web/"+r,merchantAppId:n.location.host}})})}var r="2.14.5",o=t("braintree-api"),s=t("../paypal"),a=t("../dropin"),c=t("./integrations"),u=t("./constants"),l=t("./lib/fallback-error-handler"),h=t("./lib/lookup-callback-for"),p=t("braintree-utilities").uuid;e.exports={api:o,cse:n.Braintree,paypal:s,dropin:a,hostedFields:{VERSION:t("../hosted-fields").VERSION},setup:i,VERSION:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../dropin":161,"../hosted-fields":169,"../paypal":175,"./constants":133,"./integrations":138,"./lib/fallback-error-handler":140,"./lib/lookup-callback-for":142,"braintree-api":15,"braintree-utilities":76}],2:[function(t,e,n){(function(n){"use strict";function i(t){var e=t.analyticsConfiguration||{},i=n.braintree?n.braintree.VERSION:null,r=i?"braintree/web/"+i:"";return{sdkVersion:e.sdkVersion||r,merchantAppId:e.merchantAppId||n.location.host}}function r(t){var e,n,r;this.attrs={},t.hasOwnProperty("sharedCustomerIdentifier")&&(this.attrs.sharedCustomerIdentifier=t.sharedCustomerIdentifier),e=a(t.clientToken),r=i(t),this.driver=t.driver||m({enableCORS:y(t)}),this.analyticsUrl=e.analytics?e.analytics.url:null,this.clientApiUrl=e.clientApiUrl,this.customerId=t.customerId,this.challenges=e.challenges,this.integration=t.integration||"",this.sdkVersion=r.sdkVersion,this.merchantAppId=r.merchantAppId,n=s.create(this,{container:t.container,clientToken:e}),this.verify3DS=o.bind(n.verify,n),this.attrs.sharedCustomerIdentifierType=t.sharedCustomerIdentifierType,e.merchantAccountId&&(this.attrs.merchantAccountId=e.merchantAccountId),t.clientKey?this.attrs.clientKey=t.clientKey:e.authorizationFingerprint&&(this.attrs.authorizationFingerprint=e.authorizationFingerprint),this.requestTimeout=t.hasOwnProperty("timeout")?t.timeout:6e4}var o=t("braintree-utilities"),s=t("braintree-3ds"),a=t("./parse-client-token"),c=t("./util"),u=t("./sepa-mandate"),l=t("./europe-bank-account"),h=t("./credit-card"),p=t("./coinbase-account"),d=t("./paypal-account"),f=t("./normalize-api-fields").normalizeCreditCardFields,m=t("braintree-request").chooseDriver,y=t("./should-enable-cors"),g=t("./constants");r.prototype.getCreditCards=function(t){this.driver.get(c.joinUrlFragments([this.clientApiUrl,"v1","payment_methods"]),this.attrs,function(t){var e=0,n=t.paymentMethods.length,i=[];for(e;n>e;e++)i.push(new h(t.paymentMethods[e]));return i},t,this.requestTimeout)},r.prototype.tokenizeCoinbase=function(t,e){t.options={validate:!1},this.addCoinbase(t,function(t,n){t?e(t,null):n&&n.nonce?e(t,n):e("Unable to tokenize coinbase account.",null)})},r.prototype.tokenizePayPalAccount=function(t,e){t.options={validate:!1},this.addPayPalAccount(t,function(t,n){t?e(t,null):n&&n.nonce?e(null,n):e("Unable to tokenize paypal account.",null)})},r.prototype.tokenizeCard=function(t,e){t.options={validate:!1},this.addCreditCard(t,function(t,n){n&&n.nonce?e(t,n.nonce,{type:n.type,details:n.details}):e("Unable to tokenize card.",null)})},r.prototype.lookup3DS=function(t,e){var n=c.joinUrlFragments([this.clientApiUrl,"v1/payment_methods",t.nonce,"three_d_secure/lookup"]),i=c.mergeOptions(this.attrs,{amount:t.amount});this.driver.post(n,i,function(t){return t},e,this.requestTimeout)},r.prototype.createSEPAMandate=function(t,e){var n=c.mergeOptions(this.attrs,{sepaMandate:t});this.driver.post(c.joinUrlFragments([this.clientApiUrl,"v1","sepa_mandates.json"]),n,function(t){return{sepaMandate:new u(t.europeBankAccounts[0].sepaMandates[0]),sepaBankAccount:new l(t.europeBankAccounts[0])}},e,this.requestTimeout)},r.prototype.getSEPAMandate=function(t,e){var n=c.mergeOptions(this.attrs,t);this.driver.get(c.joinUrlFragments([this.clientApiUrl,"v1","sepa_mandates.json"]),n,function(t){return{sepaMandate:new u(t.sepaMandates[0])}},e,this.requestTimeout)},r.prototype.addCoinbase=function(t,e){var n;delete t.share,n=c.mergeOptions(this.attrs,{coinbaseAccount:t,_meta:{integration:this.integration||"custom",source:"coinbase"}}),this.driver.post(c.joinUrlFragments([this.clientApiUrl,"v1","payment_methods/coinbase_accounts"]),n,function(t){return new p(t.coinbaseAccounts[0])},e,this.requestTimeout)},r.prototype.addPayPalAccount=function(t,e){var n;delete t.share,n=c.mergeOptions(this.attrs,{paypalAccount:t,_meta:{integration:this.integration||"paypal",source:"paypal"}}),this.driver.post(c.joinUrlFragments([this.clientApiUrl,"v1","payment_methods","paypal_accounts"]),n,function(t){return new d(t.paypalAccounts[0])},e,this.requestTimeout)},r.prototype.addCreditCard=function(t,e){var n,i,r=t.share;delete t.share,i=f(t),n=c.mergeOptions(this.attrs,{share:r,creditCard:i,_meta:{integration:this.integration||"custom",source:"form"}}),this.driver.post(c.joinUrlFragments([this.clientApiUrl,"v1","payment_methods/credit_cards"]),n,function(t){return new h(t.creditCards[0])},e,this.requestTimeout)},r.prototype.sendAnalyticsEvents=function(t,e){var i,r,o=this.analyticsUrl,s=[];if(t=c.isArray(t)?t:[t],!o)return void(e&&e(null,{}));for(r in t)t.hasOwnProperty(r)&&s.push({kind:t[r]});i=c.mergeOptions(this.attrs,{braintree_library_version:this.sdkVersion,analytics:s,_meta:{merchantAppId:this.merchantAppId,platform:"web",platformVersion:n.navigator.userAgent,integrationType:this.integration,sdkVersion:this.sdkVersion}}),this.driver.post(o,i,function(t){return t},e,g.ANALYTICS_TIMEOUT_MS)},r.prototype.decryptBrowserswitchPayload=function(t,e){var n=c.mergeOptions(this.attrs,{asymmetric_encrypted_payload:t}),i=c.joinUrlFragments([this.clientApiUrl,"/v1/paypal_browser_switch/decrypt"]);this.driver.post(i,n,function(t){return t},e,this.requestTimeout)},r.prototype.encryptBrowserswitchReturnPayload=function(t,e,n){var i=c.mergeOptions(this.attrs,{payload:t,aesKey:e}),r=c.joinUrlFragments([this.clientApiUrl,"/v1/paypal_browser_switch/encrypt"]);this.driver.post(r,i,function(t){return t},n,this.requestTimeout)},r.prototype.exchangePaypalTokenForConsentCode=function(t,e){var n=c.mergeOptions(this.attrs,t);this.attrs.merchantAccountId&&(n.merchant_account_id=this.attrs.merchantAccountId);var i=c.joinUrlFragments([this.clientApiUrl,"/v1/paypal_account_service/merchant_consent"]);this.driver.post(i,n,function(t){return t},e,this.requestTimeout)},r.prototype.getAmexRewardsBalance=function(t,e){var n=c.mergeOptions(this.attrs,t);n.nonce&&(n.payment_method_nonce=n.nonce,delete n.nonce),this.driver.get(c.joinUrlFragments([this.clientApiUrl,"v1/payment_methods/amex_rewards_balance"]),n,function(t){return t},e,this.requestTimeout)},r.prototype.getAmexExpressCheckoutNonceProfile=function(t,e){var n=c.mergeOptions(this.attrs,t);n.nonce&&(n.payment_method_nonce=n.nonce,delete n.nonce),this.driver.get(c.joinUrlFragments([this.clientApiUrl,"v1/payment_methods/amex_express_checkout_cards",n.payment_method_nonce]),n,function(t){return t},e,this.requestTimeout)},e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./coinbase-account":3,"./constants":4,"./credit-card":5,"./europe-bank-account":6,"./normalize-api-fields":8,"./parse-client-token":9,"./paypal-account":10,"./sepa-mandate":12,"./should-enable-cors":13,"./util":14,"braintree-3ds":27,"braintree-request":41,"braintree-utilities":50}],3:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<r.length;e++)n=r[e],this[n]=t[n]}var r=["nonce","type","description","details"];e.exports=i},{}],4:[function(t,e,n){e.exports={apiUrls:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"},ANALYTICS_TIMEOUT_MS:4e3}},{}],5:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<r.length;e++)n=r[e],this[n]=t[n]}var r=["billingAddress","branding","createdAt","createdAtMerchant","createdAtMerchantName","details","isLocked","lastUsedAt","lastUsedAtMerchant","lastUsedAtMerchantName","lastUsedByCurrentMerchant","nonce","securityQuestions","type"];e.exports=i},{}],6:[function(t,e,n){"use strict";function i(t){var e,n=["bic","maskedIBAN","nonce","accountHolderName"],i=0;for(i=0;i<n.length;i++)e=n[i],this[e]=t[e]}e.exports=i},{}],7:[function(t,e,n){"use strict";function i(t){var e=t.split("_"),n=e[0],i=e.slice(2).join("_");return{merchantId:i,environment:n}}function r(t,e){var n,r,l,h=a({enableCORS:c(t)}),p=t.clientKey,d={};p?(d.clientKey=p,r=i(p),n=u.apiUrls[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(l=o(t.clientToken),l.authorizationFingerprint&&(d.authorizationFingerprint=l.authorizationFingerprint,n=l.configUrl)),h.get(n,d,function(t){return s.mergeOptions(l,t)},e,t.timeout)}var o=t("./parse-client-token"),s=t("./util"),a=t("braintree-request").chooseDriver,c=t("./should-enable-cors"),u=t("./constants");e.exports=r},{"./constants":4,"./parse-client-token":9,"./should-enable-cors":13,"./util":14,"braintree-request":41}],8:[function(t,e,n){"use strict";function i(t){var e,n={billingAddress:t.billingAddress||{}};for(e in t)if(t.hasOwnProperty(e))switch(e.replace(/_/g,"").toLowerCase()){case"postalcode":case"countryname":case"countrycodenumeric":case"countrycodealpha2":case"countrycodealpha3":case"region":case"extendedaddress":case"locality":case"firstname":case"lastname":case"company":case"streetaddress":n.billingAddress[e]=t[e];break;default:n[e]=t[e]}return n}e.exports={normalizeCreditCardFields:i}},{}],9:[function(t,e,n){"use strict";function i(t){var e;if(!t)throw new Error("Braintree API Client Misconfigured: clientToken required.");if("object"==typeof t&&null!==t)e=t;else{try{t=window.atob(t)}catch(n){}try{e=JSON.parse(t)}catch(i){throw new Error("Braintree API Client Misconfigured: clientToken is not valid JSON.")}}if(!e.hasOwnProperty("clientApiUrl")||!r.isWhitelistedDomain(e.clientApiUrl))throw new Error("Braintree API Client Misconfigured: the clientApiUrl provided in the clientToken is invalid.");return e}var r=t("braintree-utilities");t("./polyfill"),e.exports=i},{"./polyfill":11,"braintree-utilities":50}],10:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<r.length;e++)n=r[e],this[n]=t[n]}var r=["nonce","type","description","details"];e.exports=i},{}],11:[function(t,e,n){(function(t){"use strict";var n=function(t){var e=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="";if(!e.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");var r=0;do{var o=n.indexOf(t.charAt(r++)),s=n.indexOf(t.charAt(r++)),a=n.indexOf(t.charAt(r++)),c=n.indexOf(t.charAt(r++)),u=(63&o)<<2|s>>4&3,l=(15&s)<<4|a>>2&15,h=(3&a)<<6|63&c;i+=String.fromCharCode(u)+(l?String.fromCharCode(l):"")+(h?String.fromCharCode(h):"")}while(r<t.length);return i};t.atob=t.atob||n,e.exports={atobPolyfill:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(t,e,n){"use strict";function i(t){var e,n=0,i=["accountHolderName","bic","longFormURL","mandateReferenceNumber","maskedIBAN","shortForm"];for(n=0;n<i.length;n++)e=i[n],this[e]=t[e]}e.exports=i},{}],13:[function(t,e,n){"use strict";e.exports=function(t){return null!=t.enableCORS?t.enableCORS:t.merchantConfiguration?t.merchantConfiguration.enableCORS:!1}},{}],14:[function(t,e,n){"use strict";function i(t){var e,n,i=[];for(n=0;n<t.length;n++)e=t[n],"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),"/"===e.charAt(0)&&(e=e.substring(1)),i.push(e);return i.join("/")}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function o(t,e){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i}e.exports={joinUrlFragments:i,isArray:r,mergeOptions:o}},{}],15:[function(t,e,n){"use strict";function i(t){return new r(t)}var r=t("./lib/client"),o=t("./lib/util"),s=t("./lib/parse-client-token"),a=t("./lib/get-configuration");e.exports={Client:r,configure:i,util:o,parseClientToken:s,_getConfiguration:a}},{"./lib/client":2,"./lib/get-configuration":7,"./lib/parse-client-token":9,"./lib/util":14}],16:[function(t,e,n){"use strict";var i,r=Array.prototype.indexOf;i=r?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},e.exports={indexOf:i}},{}],17:[function(t,e,n){"use strict";function i(t){var e,n,i="";for(e=0;e<t.length;e++)i+="%",n=t[e].charCodeAt(0).toString(16).toUpperCase(),n.length<2&&(i+="0"),i+=n;return i}function r(t){return decodeURIComponent(i(atob(t)))}e.exports={decodeUtf8:r}},{}],18:[function(t,e,n){"use strict";function i(t,e){if(e=e||"["+t+"] is not a valid DOM Element",t&&t.nodeType&&1===t.nodeType)return t;if(t&&window.jQuery&&(t instanceof jQuery||"jquery"in Object(t))&&0!==t.length)return t[0];if("string"==typeof t&&document.getElementById(t))return document.getElementById(t);throw new Error(e)}e.exports={normalizeElement:i}},{}],19:[function(t,e,n){"use strict";function i(t,e,n,i){t.addEventListener?t.addEventListener(e,n,i||!1):t.attachEvent&&t.attachEvent("on"+e,n)}function r(t,e,n,i){t.removeEventListener?t.removeEventListener(e,n,i||!1):t.detachEvent&&t.detachEvent("on"+e,n)}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}e.exports={addEventListener:i,removeEventListener:r,preventDefault:o}},{}],20:[function(t,e,n){"use strict";function i(t){return"[object Function]"===o.call(t)}function r(t,e){return function(){return t.apply(e,arguments)}}var o=Object.prototype.toString;e.exports={bind:r,isFunction:i}},{}],21:[function(t,e,n){"use strict";function i(t){var e,n,i,r,o=[{min:0,max:180,chars:7},{min:181,max:620,chars:14},{min:621,max:960,chars:22}];for(r=o.length,t=t||window.innerWidth,n=0;r>n;n++)i=o[n],t>=i.min&&t<=i.max&&(e=i.chars);return e||60}function r(t,e){var n,i;return-1===t.indexOf("@")?t:(t=t.split("@"),n=t[0],i=t[1],n.length>e&&(n=n.slice(0,e)+"..."),i.length>e&&(i="..."+i.slice(-e)),n+"@"+i)}e.exports={truncateEmail:r,getMaxCharLength:i}},{}],22:[function(t,e,n){"use strict";function i(){return"https:"===window.location.protocol}function r(t){switch(t){case null:case void 0:return"";case!0:return"1";case!1:return"0";default:return encodeURIComponent(t)}}function o(t,e){var n,i,s=[];for(i in t)if(t.hasOwnProperty(i)){var a=t[i];n=e?e+"["+i+"]":i,"object"==typeof a?s.push(o(a,n)):void 0!==a&&null!==a&&s.push(r(n)+"="+r(a))}return s.join("&")}function s(t){for(var e={},n=t.split("&"),i=0;i<n.length;i++){var r=n[i].split("="),o=r[0],s=decodeURIComponent(r[1]);e[o]=s}return e}function a(t){var e=t.split("?");return 2!==e.length?{}:s(e[1])}function c(t){if(t=t.toLowerCase(),!/^http/.test(t))return!1;l.href=t;var e=l.hostname.split("."),n=e.slice(-2).join(".");return-1===u.indexOf(h,n)?!1:!0}var u=t("./array"),l=document.createElement("a"),h=["paypal.com","braintreepayments.com","braintreegateway.com","localhost"];e.exports={isBrowserHttps:i,makeQueryString:o,decodeQueryString:s,getParams:a,isWhitelistedDomain:c}},{"./array":16}],23:[function(t,e,n){"use strict";function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=i},{}],24:[function(t,e,n){var i=t("./lib/dom"),r=t("./lib/url"),o=t("./lib/fn"),s=t("./lib/events"),a=t("./lib/string"),c=t("./lib/array"),u=t("./lib/base64"),l=t("./lib/uuid");e.exports={string:a,array:c,normalizeElement:i.normalizeElement,isBrowserHttps:r.isBrowserHttps,makeQueryString:r.makeQueryString,decodeQueryString:r.decodeQueryString,getParams:r.getParams,isWhitelistedDomain:r.isWhitelistedDomain,removeEventListener:s.removeEventListener,addEventListener:s.addEventListener,preventDefault:s.preventDefault,bind:o.bind,isFunction:o.isFunction,base64ToUtf8:u.decodeUtf8,uuid:l}},{"./lib/array":16,"./lib/base64":17,"./lib/dom":18,"./lib/events":19,"./lib/fn":20,"./lib/string":21,"./lib/url":22,"./lib/uuid":23}],25:[function(t,e,n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function r(){return{html:{height:s.style.height||"",overflow:i(s,"overflow"),position:i(s,"position")},body:{height:a.style.height||"",overflow:i(a,"overflow")}}}function o(t,e){this.assetsUrl=t,this.container=e||document.body,this.iframe=null,s=document.documentElement,a=document.body,this.merchantPageDefaultStyles=r()}var s,a,c=t("braintree-utilities"),u=t("../shared/receiver"),l="1.3.1";o.prototype.get=function(t,e){var n=this,i=this.constructAuthorizationURL(t);this.container&&c.isFunction(this.container)?this.container(i+"&no_style=1"):this.insertIframe(i),new u(function(t){c.isFunction(n.container)||n.removeIframe(),e(t)})},o.prototype.removeIframe=function(){this.container&&this.container.nodeType&&1===this.container.nodeType?this.container.removeChild(this.iframe):this.container&&window.jQuery&&this.container instanceof jQuery?$(this.iframe,this.container).remove():"string"==typeof this.container&&document.getElementById(this.container).removeChild(this.iframe),this.unlockMerchantWindowSize()},o.prototype.insertIframe=function(t){var e=document.createElement("iframe");if(e.src=t,this.applyStyles(e),this.lockMerchantWindowSize(),this.container&&this.container.nodeType&&1===this.container.nodeType)this.container.appendChild(e);else if(this.container&&window.jQuery&&this.container instanceof jQuery&&0!==this.container.length)this.container.append(e);else{if("string"!=typeof this.container||!document.getElementById(this.container))throw new Error("Unable to find valid container for iframe.");document.getElementById(this.container).appendChild(e)}this.iframe=e},o.prototype.applyStyles=function(t){t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.setAttribute("frameborder","0"),t.setAttribute("allowTransparency","true"),t.style.border="0",t.style.zIndex="99999"},o.prototype.lockMerchantWindowSize=function(){s.style.overflow="hidden",a.style.overflow="hidden",a.style.height="100%"},o.prototype.unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;a.style.height=t.body.height,a.style.overflow=t.body.overflow,s.style.overflow=t.html.overflow},o.prototype.constructAuthorizationURL=function(t){var e,n=window.location.href;return n.indexOf("#")>-1&&(n=n.split("#")[0]),e=c.makeQueryString({acsUrl:t.acsUrl,pareq:t.pareq,termUrl:t.termUrl+"&three_d_secure_version="+l,md:t.md,parentUrl:n}),this.assetsUrl+"/3ds/"+l+"/html/style_frame?"+e},e.exports=o},{"../shared/receiver":32,"braintree-utilities":24}],26:[function(t,e,n){"use strict";function i(){}function r(t,e){e=e||{},this.clientToken=e.clientToken,this.container=e.container,this.api=t,this.nonce=null,this._loader=null,this._boundHandleUserClose=o.bind(this._handleUserClose,this)}var o=t("braintree-utilities"),s=t("./authorization_service"),a=t("./loader");r.prototype.verify=function(t,e){if(!o.isFunction(e))throw this.api.sendAnalyticsEvents("3ds.web.no_callback"),new Error("No suitable callback argument was given");o.isFunction(t.onUserClose)&&(this._onUserClose=t.onUserClose),o.isFunction(t.onLookupComplete)&&(this._onLookupComplete=t.onLookupComplete),(void 0===t.useDefaultLoader||t.useDefaultLoader===!0)&&this._createDefaultLoader();var n={nonce:"",amount:t.amount},i=t.creditCard;if("string"==typeof i)n.nonce=i,this.api.sendAnalyticsEvents("3ds.web.verify.nonce"),this.startVerification(n,e);else{var r=this,s=function(t,i){return t?(r._removeDefaultLoader(),e(t)):(n.nonce=i,void r.startVerification(n,e))};this.api.sendAnalyticsEvents("3ds.web.verify.credit_card"),this.api.tokenizeCard(i,s)}},r.prototype.startVerification=function(t,e){this.api.lookup3DS(t,o.bind(this.handleLookupResponse(e),this))},r.prototype.handleLookupResponse=function(t){var e=this;return function(n,i){var r;this._onLookupComplete(),n?t(n.error):i.lookup&&i.lookup.acsUrl&&i.lookup.acsUrl.length>0?(e.nonce=i.paymentMethod.nonce,r=new s(this.clientToken.assetsUrl,this.container),r.get(i.lookup,o.bind(this.handleAuthenticationResponse(t),this)),this._detachListeners(),this._attachListeners()):(e.nonce=i.paymentMethod.nonce,t(null,{nonce:e.nonce,verificationDetails:i.threeDSecureInfo}))}},r.prototype.handleAuthenticationResponse=function(t){return function(e){var n,i=o.decodeQueryString(e);i.user_closed||(n=JSON.parse(i.auth_response),n.success?t(null,{nonce:n.paymentMethod.nonce,verificationDetails:n.threeDSecureInfo}):n.threeDSecureInfo&&n.threeDSecureInfo.liabilityShiftPossible?t(null,{nonce:this.nonce,verificationDetails:n.threeDSecureInfo}):t(n.error))}},r.prototype._attachListeners=function(){o.addEventListener(window,"message",this._boundHandleUserClose)},r.prototype._detachListeners=function(){o.removeEventListener(window,"message",this._boundHandleUserClose)},r.prototype._createDefaultLoader=function(){this._loader=new a,document.body.appendChild(this._loader.getElement())},r.prototype._removeDefaultLoader=function(){if(this._loader){var t=this._loader.getElement(),e=t.parentNode;e&&e.removeChild(t),this._loader.dispose(),this._loader=null}},r.prototype._handleUserClose=function(t){"user_closed=true"===t.data&&this._onUserClose()},r.prototype._onUserClose=i,r.prototype._onLookupComplete=function(){this._removeDefaultLoader()},e.exports=r},{"./authorization_service":25,"./loader":28,"braintree-utilities":24}],27:[function(t,e,n){"use strict";var i=t("./client");e.exports={create:function(t,e){var n=new i(t,e);return n}}},{"./client":26}],28:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._display=null,this._initialize()}var r=t("./loader_display"),o=t("./loader_message"),s=t("./loader_spinner");i.prototype._cssDeclarations=["filter:progid:DXImageTransform.Microsoft.Gradient(StartColorStr=#7F000000, EndColorStr=#7F000000)","background-color: rgba(0, 0, 0, 0.5)","display: table","height: 100%","left: 0","position: fixed","right: 0","top: 0","width: 100%","z-index: 99999"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._display.dispose(),this._display=null,this._element=null},i.prototype._initialize=function(){var t=new s,e=window.SVGElement&&window.SVGAnimateElement&&window.SVGAnimateTransformElement;e||(t=new o("Loading...")),this._display=new r(t),this.getElement().appendChild(this._display.getElement())},e.exports=i},{"./loader_display":29,"./loader_message":30,"./loader_spinner":31}],29:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._displayObject=t,this._initialize()}i.prototype._cssDeclarations=["display: table-cell","vertical-align: middle"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._displayObject.dispose(),this._displayObject=null,this._element=null},i.prototype._initialize=function(){this.getElement().appendChild(this._displayObject.getElement())},e.exports=i},{}],30:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=t}i.prototype._cssDeclarations=["color: #fff","font-family: Helvetica, sans-serif","font-size: 12px","text-align: center"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],31:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=this._markup}i.prototype._cssDeclarations=["height: 36px","margin-left: auto","margin-right: auto","width: 36px"].join(";"),i.prototype._markup=['<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"','width="100%" height="100%" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">','  <path fill="#FFF" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">','    <animateTransform attributeType="xml"','    attributeName="transform"','    type="rotate"','    from="0 25 25"','    to="360 25 25"','    dur="780ms"','    repeatCount="indefinite"','    calcMode="spline"','    keySplines="0.44, 0.22, 0, 1"','    keyTimes="0;1"/>',"  </path>","</svg>"].join(""),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],32:[function(t,e,n){"use strict";function i(t){this.postMessageReceiver(t),this.hashChangeReceiver(t)}var r=t("braintree-utilities");i.prototype.postMessageReceiver=function(t){var e=this;this.wrappedCallback=function(n){var i=n.data;(/^(auth_response=)/.test(i)||"user_closed=true"===i)&&(t(i),e.stopListening())},r.addEventListener(window,"message",this.wrappedCallback)},i.prototype.hashChangeReceiver=function(t){var e,n=window.location.hash,i=this;this.poll=setInterval(function(){e=window.location.hash,e.length>0&&e!==n&&(i.stopListening(),e=e.substring(1,e.length),t(e),window.location.hash=n.length>0?n:"")},10)},i.prototype.stopListening=function(){clearTimeout(this.poll),r.removeEventListener(window,"message",this.wrappedCallback)},e.exports=i},{"braintree-utilities":24}],33:[function(t,e,n){(function(n){"use strict";function i(){return h?new XMLHttpRequest:new XDomainRequest}function r(t,e,n,i,r){var o=a.createURLParams(t,e);s("GET",o,null,n,i,r)}function o(t,e,n,i,r){s("POST",t,e,n,i,r)}function s(t,e,n,r,o,s){var a,p,d=i();o=o||function(){},h?d.onreadystatechange=function(){4===d.readyState&&(a=d.status,p=u(d.responseText),a>=400||0===a?o.call(null,p||{errors:l.errors.UNKNOWN_ERROR},null):a>0&&o.call(null,null,r(p)))}:(d.onload=function(){o.call(null,null,r(u(d.responseText)))},d.onerror=function(){o.call(null,d.responseText,null)},d.onprogress=function(){},d.ontimeout=function(){o.call(null,{errors:l.errors.UNKNOWN_ERROR},null)}),d.open(t,e,!0),d.timeout=null==s?6e4:s,h&&"POST"===t&&d.setRequestHeader("Content-Type","application/json"),setTimeout(function(){d.send(c(t,n))},0)}var a=t("./util"),c=t("./prep-body"),u=t("./parse-body"),l=t("./constants"),h=n.XMLHttpRequest&&"withCredentials"in new n.XMLHttpRequest;e.exports={get:r,post:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./constants":35,"./parse-body":38,"./prep-body":39,"./util":40}],34:[function(t,e,n){"use strict";function i(t){var e=s.getUserAgent(),n=!(s.isHTTP()&&/(MSIE\s(8|9))|(Phantom)/.test(e));return t=t||{},t.enableCORS&&n?o:r}var r=t("./jsonp-driver"),o=t("./ajax-driver"),s=t("./util");e.exports=i},{"./ajax-driver":33,"./jsonp-driver":36,"./util":40}],35:[function(t,e,n){e.exports={errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"}}},{}],36:[function(t,e,n){"use strict";function i(t,e){return t.status>=400?[t,null]:[null,e(t)]}function r(){}function o(t,e,n,o,s,a){var c;s=s||r,null==a&&(a=6e4),c=o(t,e,function(t,e){l[e]&&(clearTimeout(l[e]),s.apply(null,i(t,function(t){return n(t)})))}),"number"==typeof a?l[c]=setTimeout(function(){l[c]=null,s.apply(null,[{errors:u.errors.UNKNOWN_ERROR},null])},a):s.apply(null,[{errors:u.errors.INVALID_TIMEOUT},null])}function s(t,e,n,i,r){e._method="POST",o(t,e,n,c.get,i,r)}function a(t,e,n,i,r){o(t,e,n,c.get,i,r)}var c=t("./jsonp"),u=t("./constants"),l=[];e.exports={get:a,post:s}},{"./constants":35,"./jsonp":37}],37:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=document.createElement("script"),i=!1;n.src=t,n.async=!0;var r=e||u.error;"function"==typeof r&&(n.onerror=function(e){r({url:t,event:e})}),n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},s||(s=document.getElementsByTagName("head")[0]),s.appendChild(n)}function r(t,e,n,r){var o,s;return r=r||u.callbackName||"callback",s=r+"_json"+a.generateUUID(),e[r]=s,o=a.createURLParams(t,e),c[s]=function(t){n(t,s);try{delete c[s]}catch(e){}c[s]=null},i(o),s}function o(t){u=t}var s,a=t("./util"),c=n,u={};e.exports={get:r,init:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./util":40}],38:[function(t,e,n){"use strict";e.exports=function(t){try{t=JSON.parse(t)}catch(e){}return t}},{}],39:[function(t,e,n){"use strict";var i=t("lodash.isstring");e.exports=function(t,e){if(!i(t))throw new Error("Method must be a string");return"get"!==t.toLowerCase()&&null!=e&&(e=i(e)?e:JSON.stringify(e)),e}},{"lodash.isstring":52}],40:[function(t,e,n){(function(n){"use strict";function i(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function r(t,e){var n,o,s,a=[];for(s in t)t.hasOwnProperty(s)&&(o=t[s],n=e?i(t)?e+"[]":e+"["+s+"]":s,a.push("object"==typeof o?r(o,n):encodeURIComponent(n)+"="+encodeURIComponent(o)));return a.join("&")}function o(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.floor(16*Math.random()),n="x"===t?e:3&e|8;return n.toString(16)})}function s(t,e){return t=t||"",!u(e)&&l(e)&&(t+=-1===t.indexOf("?")?"?":"",t+=-1!==t.indexOf("=")?"&":"",t+=r(e)),t}function a(){return n.navigator.userAgent}function c(){return"http:"===n.location.protocol}var u=t("lodash.isempty"),l=t("lodash.isobject");e.exports={isArray:i,generateUUID:o,stringify:r,createURLParams:s,getUserAgent:a,isHTTP:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"lodash.isempty":121,"lodash.isobject":51}],41:[function(t,e,n){"use strict";var i=t("./lib/ajax-driver"),r=t("./lib/jsonp-driver"),o=t("./lib/choose-driver"),s=t("./lib/util");e.exports={AJAXDriver:i,JSONPDriver:r,chooseDriver:o,util:s}},{"./lib/ajax-driver":33,"./lib/choose-driver":34,"./lib/jsonp-driver":36,"./lib/util":40}],42:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{dup:16}],43:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{dup:17}],44:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{dup:18}],45:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{dup:19}],46:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{dup:20}],47:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],48:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{"./array":42,dup:22}],
49:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{dup:23}],50:[function(t,e,n){arguments[4][24][0].apply(n,arguments)},{"./lib/array":42,"./lib/base64":43,"./lib/dom":44,"./lib/events":45,"./lib/fn":46,"./lib/string":47,"./lib/url":48,"./lib/uuid":49,dup:24}],51:[function(t,e,n){function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}e.exports=i},{}],52:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}function r(t){return"string"==typeof t||i(t)&&a.call(t)==o}var o="[object String]",s=Object.prototype,a=s.toString;e.exports=r},{}],53:[function(t,e,n){"use strict";function i(t,e){this.host=t||window,this.channel=e||null,this.handlers=[],r.addEventListener(this.host,"message",r.bind(this.receive,this))}var r=t("braintree-utilities");i.prototype.receive=function(t){var e,n,r,o;try{r=JSON.parse(t.data)}catch(s){return}for(o=r.type,n=new i.Message(this,t.source,r.data),e=0;e<this.handlers.length;e++)this.handlers[e].type===o&&this.handlers[e].handler(n)},i.prototype.send=function(t,e,n){t.postMessage(JSON.stringify({type:this._namespaceEvent(e),data:n}),"*")},i.prototype.register=function(t,e){this.handlers.push({type:this._namespaceEvent(t),handler:e})},i.prototype.unregister=function(t,e){for(var n=this.handlers.length-1;n>=0;n--)if(this.handlers[n].type===t&&this.handlers[n].handler===e)return this.handlers.splice(n,1)},i.prototype._namespaceEvent=function(t){return this.channel?["braintree",this.channel,t].join(":"):t},i.Message=function(t,e,n){this.bus=t,this.source=e,this.content=n},i.Message.prototype.reply=function(t,e){this.bus.send(this.source,t,e)},e.exports=i},{"braintree-utilities":67}],54:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e,this.handlers=[],this.bus.register("publish",r.bind(this._handleMessage,this))}var r=t("braintree-utilities");i.prototype._handleMessage=function(t){var e,n=t.content,i=this.handlers[n.channel];if("undefined"!=typeof i)for(e=0;e<i.length;e++)i[e](n.data)},i.prototype.publish=function(t,e){this.bus.send(this.target,"publish",{channel:t,data:e})},i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{"braintree-utilities":67}],55:[function(t,e,n){"use strict";function i(t){this.bus=t,this.frames=[],this.handlers=[]}i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.registerFrame=function(t){this.frames.push(t)},i.prototype.unregisterFrame=function(t){for(var e=0;e<this.frames.length;e++)this.frames[e]===t&&this.frames.splice(e,1)},i.prototype.publish=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n](e);for(n=0;n<this.frames.length;n++)this.bus.send(this.frames[n],"publish",{channel:t,data:e})},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{}],56:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e||window.parent,this.counter=0,this.callbacks={},this.bus.register("rpc_response",r.bind(this._handleResponse,this))}var r=t("braintree-utilities");i.prototype._handleResponse=function(t){var e=t.content,n=this.callbacks[e.id];"function"==typeof n&&(n.apply(null,e.response),delete this.callbacks[e.id])},i.prototype.invoke=function(t,e,n){var i=this.counter++;this.callbacks[i]=n,this.bus.send(this.target,"rpc_request",{id:i,method:t,args:e})},e.exports=i},{"braintree-utilities":67}],57:[function(t,e,n){"use strict";function i(t){this.bus=t,this.methods={},this.bus.register("rpc_request",r.bind(this._handleRequest,this))}var r=t("braintree-utilities");i.prototype._handleRequest=function(t){var e,n=t.content,i=n.args||[],r=this.methods[n.method];"function"==typeof r&&(e=function(){t.reply("rpc_response",{id:n.id,response:Array.prototype.slice.call(arguments)})},i.push(e),r.apply(null,i))},i.prototype.reset=function(){this.methods={}},i.prototype.define=function(t,e){this.methods[t]=e},e.exports=i},{"braintree-utilities":67}],58:[function(t,e,n){var i=t("./lib/message-bus"),r=t("./lib/pubsub-client"),o=t("./lib/pubsub-server"),s=t("./lib/rpc-client"),a=t("./lib/rpc-server");e.exports={MessageBus:i,PubsubClient:r,PubsubServer:o,RPCClient:s,RPCServer:a}},{"./lib/message-bus":53,"./lib/pubsub-client":54,"./lib/pubsub-server":55,"./lib/rpc-client":56,"./lib/rpc-server":57}],59:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{dup:16}],60:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{dup:17}],61:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{dup:18}],62:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{dup:19}],63:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{dup:20}],64:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],65:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{"./array":59,dup:22}],66:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{dup:23}],67:[function(t,e,n){arguments[4][24][0].apply(n,arguments)},{"./lib/array":59,"./lib/base64":60,"./lib/dom":61,"./lib/events":62,"./lib/fn":63,"./lib/string":64,"./lib/url":65,"./lib/uuid":66,dup:24}],68:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{dup:16}],69:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{dup:17}],70:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{dup:18}],71:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{dup:19}],72:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{dup:20}],73:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],74:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{"./array":68,dup:22}],75:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{dup:23}],76:[function(t,e,n){arguments[4][24][0].apply(n,arguments)},{"./lib/array":68,"./lib/base64":69,"./lib/dom":70,"./lib/events":71,"./lib/fn":72,"./lib/string":73,"./lib/url":74,"./lib/uuid":75,dup:24}],77:[function(t,e,n){"use strict";function i(t){if(!(this instanceof i))return new i(t);var e,n=o(t.className).split(/\s+/);for(this._elem=t,this.length=0,e=0;e<n.length;e+=1)n[e]&&s.push.call(this,n[e])}e.exports=i;var r=t("component-indexof"),o=t("trim"),s=Array.prototype;i.prototype.add=function(){var t,e;for(e=0;e<arguments.length;e+=1)t=""+arguments[e],r(this,t)>=0||s.push.call(this,t);return this._elem.className=this.toString(),this},i.prototype.remove=function(){var t,e,n;for(n=0;n<arguments.length;n+=1)e=""+arguments[n],t=r(this,e),0>t||s.splice.call(this,t,1);return this._elem.className=this.toString(),this},i.prototype.contains=function(t){return t+="",r(this,t)>=0},i.prototype.toggle=function(t,e){return t+="",e===!0?this.add(t):e===!1?this.remove(t):this[this.contains(t)?"remove":"add"](t)},i.prototype.toString=function(){return s.join.call(this," ")}},{"component-indexof":78,trim:79}],78:[function(t,e,n){e.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},{}],79:[function(t,e,n){function i(t){return t.replace(/^\s*|\s*$/g,"")}n=e.exports=i,n.left=function(t){return t.replace(/^\s*/,"")},n.right=function(t){return t.replace(/\s*$/,"")}},{}],80:[function(t,e,n){"use strict";function i(){this._teardownRegistry=[]}var r=t("batch-execute-functions"),o=t("braintree-utilities/lib/fn");i.prototype.registerFunctionForTeardown=function(t){o.isFunction(t)&&this._teardownRegistry.push(t)},i.prototype.teardown=function(t){r(this._teardownRegistry,o.bind(function(e){this._teardownRegistry=[],o.isFunction(t)&&t(e)},this))},e.exports=i},{"batch-execute-functions":81,"braintree-utilities/lib/fn":82}],81:[function(t,e,n){"use strict";function i(t,e){var n,i=0===t.length;i?(t(),e(null)):(n=r(e),t(n))}function r(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}e.exports=function(t,e){var n=t.length,r=n;if(0===n)return void e(null);for(var o=0;n>o;o++)i(t[o],function(t){return t?void e(t):(r-=1,void(0===r&&e(null)))})}},{}],82:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{dup:20}],83:[function(t,e,n){(function(t){"use strict";function n(t){if(("string"==typeof t||t instanceof String)&&(t=document.getElementById(t)),!(t instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=t}n.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,e(t)},null!=t.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},n.prototype.inject=function(t,e){var n=this.htmlForm.querySelector('input[name="'+t+'"]');return null==n&&(n=document.createElement("input"),n.type="hidden",n.name=t,this.htmlForm.appendChild(n)),n.value=e,n},n.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},n.prototype.detach=function(){this.submitHandler&&(null!=t.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],84:[function(e,n,i){"use strict";!function(e,r){"object"==typeof i&&"undefined"!=typeof n?n.exports=r():"function"==typeof t&&t.amd?t([],r):e.framebus=r()}(this,function(){function t(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(v.push(t),!0)}function e(t){var e,n={};for(e in b)b.hasOwnProperty(e)&&(n[e]=b[e]);return n._origin=t||"*",n}function n(t){var e,n,i=o(this);return s(t)?!1:s(i)?!1:(n=Array.prototype.slice.call(arguments,1),e=a(t,n,i),e===!1?!1:(d(g.top,e,i),!0))}function i(t,e){var n=o(this);return y(t,e,n)?!1:(_[n]=_[n]||{},_[n][t]=_[n][t]||[],_[n][t].push(e),!0)}function r(t,e){var n,i,r=o(this);if(y(t,e,r))return!1;if(i=_[r]&&_[r][t],!i)return!1;for(n=0;n<i.length;n++)if(i[n]===e)return i.splice(n,1),!0;return!1}function o(t){return t&&t._origin||"*"}function s(t){return"string"!=typeof t}function a(t,e,n){var i=!1,r={event:t,origin:n},o=e[e.length-1];"function"==typeof o&&(r.reply=m(o,n),e=e.slice(0,-1)),r.args=e;try{i=E+JSON.stringify(r)}catch(s){throw new Error("Could not stringify event: "+s.message)}return i}function c(t){var e,n,i,r;if(t.data.slice(0,E.length)!==E)return!1;try{e=JSON.parse(t.data.slice(E.length))}catch(o){return!1}return null!=e.reply&&(n=t.origin,i=t.source,r=e.reply,e.reply=function(t){var e=a(r,[t],n);return e===!1?!1:void i.postMessage(e,n)},e.args.push(e.reply)),e}function u(t){g||(g=t||window,g.addEventListener?g.addEventListener("message",h,!1):g.attachEvent?g.attachEvent("onmessage",h):null===g.onmessage?g.onmessage=h:g=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function h(t){var e;s(t.data)||(e=c(t),e&&(p("*",e.event,e.args,t),p(t.origin,e.event,e.args,t),f(t.data,e.origin,t.source)))}function p(t,e,n,i){var r;if(_[t]&&_[t][e])for(r=0;r<_[t][e].length;r++)_[t][e][r].apply(i,n)}function d(t,e,n){var i;try{t.postMessage(e,n)}catch(r){return}for(t.opener&&t.opener!==t&&!t.opener.closed&&t.opener!==g&&d(t.opener.top,e,n),i=0;i<t.frames.length;i++)d(t.frames[i],e,n)}function f(t,e,n){var i,r;for(i=v.length-1;i>=0;i--)r=v[i],r.closed===!0?v=v.slice(i,1):n!==r&&d(r.top,t,e)}function m(t,e){function n(r,o){t(r,o),b.target(e).unsubscribe(i,n)}var i=l();return b.target(e).subscribe(i,n),i}function y(t,e,n){return s(t)?!0:"function"!=typeof e?!0:s(n)?!0:!1}var g,b,v=[],_={},E="/*framebus*/";return u(),b={target:e,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:i,sub:i,on:i,unsubscribe:r,unsub:r,off:r}})},{}],85:[function(t,e,n){"use strict";var i=t("lodash.assign"),r=t("lodash.isstring"),o=t("setattributes"),s=t("./lib/default-attributes");e.exports=function(t){var e=document.createElement("iframe"),n=i({},s,t);return n.style&&!r(n.style)&&(i(e.style,n.style),delete n.style),o(e,n),e.getAttribute("id")||(e.id=e.name),e}},{"./lib/default-attributes":86,"lodash.assign":89,"lodash.isstring":87,setattributes:88}],86:[function(t,e,n){e.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],87:[function(t,e,n){arguments[4][52][0].apply(n,arguments)},{dup:52}],88:[function(t,e,n){e.exports=function(t,e){var n;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],null==n?t.removeAttribute(i):t.setAttribute(i,n))}},{}],89:[function(t,e,n){function i(t,e,n){for(var i=-1,r=s(e),o=r.length;++i<o;){var a=r[i],c=t[a],u=n(c,e[a],a,t,e);(u===u?u===c:c!==c)&&(void 0!==c||a in t)||(t[a]=u)}return t}var r=t("lodash._baseassign"),o=t("lodash._createassigner"),s=t("lodash.keys"),a=o(function(t,e,n){return n?i(t,e,n):r(t,e)});e.exports=a},{"lodash._baseassign":90,"lodash._createassigner":92,"lodash.keys":96}],90:[function(t,e,n){function i(t,e){return null==e?t:r(e,o(e),t)}var r=t("lodash._basecopy"),o=t("lodash.keys");e.exports=i},{"lodash._basecopy":91,"lodash.keys":96}],91:[function(t,e,n){function i(t,e,n){n||(n={});for(var i=-1,r=e.length;++i<r;){var o=e[i];n[o]=t[o]}return n}e.exports=i},{}],92:[function(t,e,n){function i(t){return s(function(e,n){var i=-1,s=null==e?0:n.length,a=s>2?n[s-2]:void 0,c=s>2?n[2]:void 0,u=s>1?n[s-1]:void 0;for("function"==typeof a?(a=r(a,u,5),s-=2):(a="function"==typeof u?u:void 0,s-=a?1:0),c&&o(n[0],n[1],c)&&(a=3>s?void 0:a,s=1);++i<s;){var l=n[i];l&&t(e,l,a)}return e})}var r=t("lodash._bindcallback"),o=t("lodash._isiterateecall"),s=t("lodash.restparam");e.exports=i},{"lodash._bindcallback":93,"lodash._isiterateecall":94,"lodash.restparam":95}],93:[function(t,e,n){function i(t,e,n){if("function"!=typeof t)return r;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,i,r){return t.call(e,n,i,r)};case 4:return function(n,i,r,o){return t.call(e,n,i,r,o)};case 5:return function(n,i,r,o,s){return t.call(e,n,i,r,o,s)}}return function(){return t.apply(e,arguments)}}function r(t){return t}e.exports=i},{}],94:[function(t,e,n){function i(t){return function(e){return null==e?void 0:e[t]}}function r(t){return null!=t&&a(h(t))}function o(t,e){return t="number"==typeof t||u.test(t)?+t:-1,e=null==e?l:e,t>-1&&t%1==0&&e>t}function s(t,e,n){if(!c(n))return!1;var i=typeof e;if("number"==i?r(n)&&o(e,n.length):"string"==i&&e in n){var s=n[e];return t===t?t===s:s!==s}return!1}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&l>=t}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var u=/^\d+$/,l=9007199254740991,h=i("length");e.exports=s},{}],95:[function(t,e,n){function i(t,e){if("function"!=typeof t)throw new TypeError(r);return e=o(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,i=-1,r=o(n.length-e,0),s=Array(r);++i<r;)s[i]=n[e+i];switch(e){case 0:return t.call(this,s);case 1:return t.call(this,n[0],s);case 2:return t.call(this,n[0],n[1],s)}var a=Array(e+1);for(i=-1;++i<e;)a[i]=n[i];return a[e]=s,t.apply(this,a)}}var r="Expected a function",o=Math.max;e.exports=i},{}],96:[function(t,e,n){function i(t){return function(e){return null==e?void 0:e[t]}}function r(t){return null!=t&&s(b(t))}function o(t,e){return t="number"==typeof t||d.test(t)?+t:-1,e=null==e?g:e,t>-1&&t%1==0&&e>t}function s(t){return"number"==typeof t&&t>-1&&t%1==0&&g>=t}function a(t){for(var e=u(t),n=e.length,i=n&&t.length,r=!!i&&s(i)&&(p(t)||h(t)),a=-1,c=[];++a<n;){var l=e[a];(r&&o(l,i)||m.call(t,l))&&c.push(l)}return c}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function u(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&s(e)&&(p(t)||h(t))&&e||0;for(var n=t.constructor,i=-1,r="function"==typeof n&&n.prototype===t,a=Array(e),u=e>0;++i<e;)a[i]=i+"";for(var l in t)u&&o(l,e)||"constructor"==l&&(r||!m.call(t,l))||a.push(l);return a}var l=t("lodash._getnative"),h=t("lodash.isarguments"),p=t("lodash.isarray"),d=/^\d+$/,f=Object.prototype,m=f.hasOwnProperty,y=l(Object,"keys"),g=9007199254740991,b=i("length"),v=y?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&r(t)?a(t):c(t)?y(t):[]}:a;e.exports=v},{"lodash._getnative":97,"lodash.isarguments":98,"lodash.isarray":99}],97:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return a(n)?n:void 0}function o(t){return s(t)&&d.call(t)==c}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return null==t?!1:o(t)?f.test(h.call(t)):i(t)&&u.test(t)}var c="[object Function]",u=/^\[object .+?Constructor\]$/,l=Object.prototype,h=Function.prototype.toString,p=l.hasOwnProperty,d=l.toString,f=RegExp("^"+h.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},{}],98:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}function r(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&s(p(t))}function s(t){return"number"==typeof t&&t>-1&&t%1==0&&h>=t}function a(t){return i(t)&&o(t)&&u.call(t,"callee")&&!l.call(t,"callee")}var c=Object.prototype,u=c.hasOwnProperty,l=c.propertyIsEnumerable,h=9007199254740991,p=r("length");e.exports=a},{}],99:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return c(n)?n:void 0}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&b>=t}function s(t){return a(t)&&m.call(t)==l}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function c(t){return null==t?!1:s(t)?y.test(d.call(t)):i(t)&&h.test(t)}var u="[object Array]",l="[object Function]",h=/^\[object .+?Constructor\]$/,p=Object.prototype,d=Function.prototype.toString,f=p.hasOwnProperty,m=p.toString,y=RegExp("^"+d.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=r(Array,"isArray"),b=9007199254740991,v=g||function(t){return i(t)&&o(t.length)&&m.call(t)==u};e.exports=v},{}],100:[function(t,e,n){function i(t,e,n){return"function"==typeof e?r(t,!0,o(e,n,3)):r(t,!0)}var r=t("lodash._baseclone"),o=t("lodash._bindcallback");e.exports=i},{"lodash._baseclone":101,"lodash._bindcallback":111}],101:[function(t,e,n){(function(n){function i(t,e,n,o,d,m,g){var b;if(n&&(b=d?n(t,o,d):n(t)),void 0!==b)return b;if(!u(t))return t;var v=f(t);if(v){if(b=s(t),!e)return l(t,b)}else{var _=Y.call(t),w=_==E;if(_!=C&&_!=y&&(!w||d))return j[_]?c(t,_,e):d?t:{};if(b=a(w?{}:t),!e)return p(b,t)}m||(m=[]),g||(g=[]);for(var A=m.length;A--;)if(m[A]==t)return g[A];return m.push(t),g.push(b),(v?h:r)(t,function(r,o){b[o]=i(r,e,n,o,t,m,g)}),b}function r(t,e){return d(t,e,m)}function o(t){var e=new z(t.byteLength),n=new G(e);return n.set(new G(t)),e}function s(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&V.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function a(t){var e=t.constructor;return"function"==typeof e&&e instanceof e||(e=Object),new e}function c(t,e,n){var i=t.constructor;switch(e){case I:return o(t);case b:case v:return new i(+t);case R:case x:case P:case D:case M:case U:case k:case F:case L:var r=t.buffer;return new i(n?o(r):r,t.byteOffset,t.length);case A:case O:return new i(t);case N:var s=new i(t.source,B.exec(t));s.lastIndex=t.lastIndex}return s}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var l=t("lodash._arraycopy"),h=t("lodash._arrayeach"),p=t("lodash._baseassign"),d=t("lodash._basefor"),f=t("lodash.isarray"),m=t("lodash.keys"),y="[object Arguments]",g="[object Array]",b="[object Boolean]",v="[object Date]",_="[object Error]",E="[object Function]",w="[object Map]",A="[object Number]",C="[object Object]",N="[object RegExp]",T="[object Set]",O="[object String]",S="[object WeakMap]",I="[object ArrayBuffer]",R="[object Float32Array]",x="[object Float64Array]",P="[object Int8Array]",D="[object Int16Array]",M="[object Int32Array]",U="[object Uint8Array]",k="[object Uint8ClampedArray]",F="[object Uint16Array]",L="[object Uint32Array]",B=/\w*$/,j={};j[y]=j[g]=j[I]=j[b]=j[v]=j[R]=j[x]=j[P]=j[D]=j[M]=j[A]=j[C]=j[N]=j[O]=j[U]=j[k]=j[F]=j[L]=!0,j[_]=j[E]=j[w]=j[T]=j[S]=!1;var H=Object.prototype,V=H.hasOwnProperty,Y=H.toString,z=n.ArrayBuffer,G=n.Uint8Array;e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"lodash._arraycopy":102,"lodash._arrayeach":103,"lodash._baseassign":104,"lodash._basefor":106,"lodash.isarray":107,"lodash.keys":108}],102:[function(t,e,n){function i(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}e.exports=i},{}],103:[function(t,e,n){function i(t,e){for(var n=-1,i=t.length;++n<i&&e(t[n],n,t)!==!1;);return t}e.exports=i},{}],104:[function(t,e,n){arguments[4][90][0].apply(n,arguments)},{dup:90,"lodash._basecopy":105,"lodash.keys":108}],105:[function(t,e,n){arguments[4][91][0].apply(n,arguments)},{dup:91}],106:[function(t,e,n){function i(t){return function(e,n,i){for(var o=r(e),s=i(e),a=s.length,c=t?a:-1;t?c--:++c<a;){var u=s[c];if(n(o[u],u,o)===!1)break}return e}}function r(t){return o(t)?t:Object(t)}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var s=i();e.exports=s},{}],107:[function(t,e,n){arguments[4][99][0].apply(n,arguments)},{dup:99}],108:[function(t,e,n){arguments[4][96][0].apply(n,arguments)},{dup:96,"lodash._getnative":109,"lodash.isarguments":110,"lodash.isarray":107}],109:[function(t,e,n){arguments[4][97][0].apply(n,arguments)},{dup:97}],110:[function(t,e,n){arguments[4][98][0].apply(n,arguments)},{dup:98}],111:[function(t,e,n){arguments[4][93][0].apply(n,arguments)},{dup:93}],112:[function(t,e,n){function i(t,e,n){var i=o(t);return n&&s(t,e,n)&&(e=void 0),e?r(i,e):i}var r=t("lodash._baseassign"),o=t("lodash._basecreate"),s=t("lodash._isiterateecall");e.exports=i},{"lodash._baseassign":113,"lodash._basecreate":119,"lodash._isiterateecall":120}],113:[function(t,e,n){arguments[4][90][0].apply(n,arguments)},{dup:90,"lodash._basecopy":114,"lodash.keys":115}],114:[function(t,e,n){arguments[4][91][0].apply(n,arguments)},{dup:91}],115:[function(t,e,n){arguments[4][96][0].apply(n,arguments)},{dup:96,"lodash._getnative":116,"lodash.isarguments":117,"lodash.isarray":118}],116:[function(t,e,n){arguments[4][97][0].apply(n,arguments)},{dup:97}],117:[function(t,e,n){arguments[4][98][0].apply(n,arguments)},{dup:98}],118:[function(t,e,n){arguments[4][99][0].apply(n,arguments)},{dup:99}],119:[function(t,e,n){function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var r=function(){function t(){}return function(e){if(i(e)){t.prototype=e;var n=new t;t.prototype=void 0}return n||{}}}();e.exports=r},{}],120:[function(t,e,n){arguments[4][94][0].apply(n,arguments)},{dup:94}],121:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}function r(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&s(f(t))}function s(t){return"number"==typeof t&&t>-1&&t%1==0&&d>=t}function a(t){return null==t?!0:o(t)&&(u(t)||h(t)||c(t)||i(t)&&l(t.splice))?!t.length:!p(t).length}var c=t("lodash.isarguments"),u=t("lodash.isarray"),l=t("lodash.isfunction"),h=t("lodash.isstring"),p=t("lodash.keys"),d=9007199254740991,f=r("length");e.exports=a},{"lodash.isarguments":122,"lodash.isarray":123,"lodash.isfunction":124,"lodash.isstring":125,"lodash.keys":126}],122:[function(t,e,n){arguments[4][98][0].apply(n,arguments)},{dup:98}],123:[function(t,e,n){arguments[4][99][0].apply(n,arguments)},{dup:99}],124:[function(t,e,n){function i(t){return r(t)&&a.call(t)==o}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var o="[object Function]",s=Object.prototype,a=s.toString;e.exports=i},{}],125:[function(t,e,n){arguments[4][52][0].apply(n,arguments)},{dup:52}],126:[function(t,e,n){arguments[4][96][0].apply(n,arguments)},{dup:96,"lodash._getnative":127,"lodash.isarguments":122,"lodash.isarray":123}],127:[function(t,e,n){arguments[4][97][0].apply(n,arguments)},{dup:97}],128:[function(t,e,n){function i(t){try{return Array.prototype.slice.call(t)}catch(e){for(var n=[],i=0;i<t.length;i++)n.push(t[i]);return n}}"undefined"!=typeof e&&(e.exports=i)},{}],129:[function(t,e,n){"use strict";function i(t){if(t=t||{},this.channel=t.channel,!this.channel)throw new Error("Channel ID must be specified");this.merchantUrl=t.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var r=t("framebus"),o=t("./lib/events"),s=t("./lib/check-origin").checkOrigin;i.prototype.on=function(t,e){var n,i,o=e,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&e.apply(this,arguments)}),n=this._namespaceEvent(t),i=Array.prototype.slice.call(arguments),i[0]=n,i[1]=o,this._log("on",i),r.on.apply(r,i),this._listeners.push({eventName:t,handler:o,originalHandler:e}))},i.prototype.emit=function(t){var e;this._isDestroyed||(e=Array.prototype.slice.call(arguments),e[0]=this._namespaceEvent(t),this._log("emit",e),r.emit.apply(r,e))},i.prototype._offDirect=function(t){var e=Array.prototype.slice.call(arguments);this._isDestroyed||(e[0]=this._namespaceEvent(t),this._log("off",e),r.off.apply(r,e))},i.prototype.off=function(t,e){var n,i,r=e;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)i=this._listeners[n],i.originalHandler===e&&(r=i.handler);this._offDirect(t,r)}},i.prototype._namespaceEvent=function(t){return["braintree",this.channel,t].join(":")},i.prototype.teardown=function(){var t,e;for(e=0;e<this._listeners.length;e++)t=this._listeners[e],this._offDirect(t.eventName,t.handler);this._listeners.length=0,this._isDestroyed=!0},i.prototype._log=function(t,e){this._isVerbose&&console.log(t,e)},i.events=o,e.exports=i},{"./lib/check-origin":130,"./lib/events":131,framebus:84}],130:[function(t,e,n){"use strict";function i(t,e){var n,i,o=document.createElement("a");return o.href=e,i="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+i,n===t||r.test(t)}var r=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;e.exports={checkOrigin:i}},{}],131:[function(t,e,n){"use strict";var i,r,o=["PAYMENT_METHOD_REQUEST","PAYMENT_METHOD_RECEIVED","PAYMENT_METHOD_GENERATED","PAYMENT_METHOD_NOT_GENERATED","PAYMENT_METHOD_CANCELLED","PAYMENT_METHOD_ERROR","CONFIGURATION_REQUEST","ROOT_METADATA_REQUEST","ERROR","WARNING","UI_POPUP_DID_OPEN","UI_POPUP_DID_CLOSE","UI_POPUP_FORCE_CLOSE","ASYNC_DEPENDENCY_INITIALIZING","ASYNC_DEPENDENCY_READY","USER_FORM_SUBMIT_REQUEST","SEND_ANALYTICS_EVENTS"],s={};for(i=0;i<o.length;i++)r=o[i],s[r]=r;e.exports=s},{}],132:[function(t,e,n){"use strict";function i(t){var e,n={};if(t){for(e in t)t.hasOwnProperty(e)&&(n[r(e)]=t[e]);return n}}function r(t){return t.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})}e.exports={convertToLegacyShippingAddress:i}},{}],133:[function(t,e,n){"use strict";e.exports={ROOT_SUCCESS_CALLBACK:"onPaymentMethodReceived",ROOT_ERROR_CALLBACK:"onError",ROOT_READY_CALLBACK:"onReady"}},{}],134:[function(t,e,n){(function(n){"use strict";function i(){}function r(){this._dependenciesRemaining++}function o(){this._dependenciesRemaining--,0===this._dependenciesRemaining&&(delete this._dependenciesRemaining,this.bus.off(u.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.off(u.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady),this._onIntegrationReady())}function s(t){this.configuration=t,this.isReady=!1,this.destructor=new l,this.bus=new u({channel:this.configuration.channel,merchantUrl:n.location.href}),this._createApiClient(),this._configureCallbacks(),this._configureAnalytics(),this._attachEvents(),this._emitInitializing()}var a=t("lodash.clonedeep"),c=t("braintree-api"),u=t("../../bus"),l=t("destructor"),h=t("braintree-utilities").bind,p=t("../constants"),d=t("../lib/sanitize-payload"),f=t("../lib/lookup-callback-for"),m=t("../lib/fallback-error-handler"),y=t("../lib/node-type"),g=y.isJQueryElement,b=y.isHTMLElement;s.prototype._emitInitializing=function(){this.bus.emit(u.events.ASYNC_DEPENDENCY_INITIALIZING)},s.prototype._createApiClient=function(){var t={clientToken:this.configuration.gatewayConfiguration,integration:this.configuration.integrationType,analyticsConfiguration:this.configuration.analyticsConfiguration};this.configuration.merchantConfiguration.enableCORS&&(t.enableCORS=!0),this.apiClient=new c.Client(t)},s.prototype._configureCallbacks=function(){function t(t){return function(e){t(d(e))}}var e=f(this.configuration.merchantConfiguration);this.onSuccess=t(e(p.ROOT_SUCCESS_CALLBACK)),this.onError=e(p.ROOT_ERROR_CALLBACK,m),this.onReady=e(p.ROOT_READY_CALLBACK)},s.prototype._configureAnalytics=function(){var t="web."+this.configuration.integrationType+".",e=this.apiClient;this.bus.on(u.events.SEND_ANALYTICS_EVENTS,function(n,i){var r;for(n instanceof Array||(n=[n]),r=0;r<n.length;r++)n[r]=t+n[r];e.sendAnalyticsEvents(n,i)})},s.prototype._attachEvents=function(){var t,e=this.configuration;this.bus.on(u.events.ERROR,this.onError),this.bus.on(u.events.PAYMENT_METHOD_RECEIVED,this.onSuccess),this.bus.on(u.events.WARNING,function(t){try{console.warn(t)}catch(e){}}),t={enableCORS:e.merchantConfiguration.enableCORS,configuration:e.gatewayConfiguration,integration:e.integrationType,analyticsConfiguration:e.analyticsConfiguration,merchantConfiguration:a(e.merchantConfiguration,function(t){return g(t)||b(t)?{}:void 0})},this.bus.on(u.events.CONFIGURATION_REQUEST,function(e){e(t)}),this._dependenciesRemaining=0,this._handleDependencyInitializing=h(r,this),this._handleDependencyReady=h(o,this),this.bus.on(u.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.on(u.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady)},s.prototype._onIntegrationReady=function(){var t={teardown:h(function(e){function n(){throw new Error(o)}var r,o="Cannot call teardown while in progress";e=e||i;for(r in t)t.hasOwnProperty(r)&&(t[r]=n);this.destructor.teardown(h(function(){o="Cannot teardown integration more than once",this.bus.teardown(),e()},this))},this)};this.isReady=!0,this.onReady(t)},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../bus":129,"../constants":133,"../lib/fallback-error-handler":140,"../lib/lookup-callback-for":142,"../lib/node-type":143,"../lib/sanitize-payload":144,"braintree-api":15,"braintree-utilities":76,destructor:80,"lodash.clonedeep":100}],135:[function(t,e,n){"use strict";function i(){var t,e;l.apply(this,arguments),t=r(this.configuration.merchantConfiguration),this._attachBusEvents(),t.channel=this.configuration.channel,t.configuration=r(this.configuration.gatewayConfiguration),t.coinbase=r(t.coinbase||{}),t.apiClient=new s.Client({enableCORS:this.configuration.merchantConfiguration.enableCORS||!1,clientToken:this.configuration.gatewayConfiguration,integration:"coinbase"}),e=c.create(t),this.destructor.registerFunctionForTeardown(function(t){e.teardown(t)}),this.bus.emit(u.events.ASYNC_DEPENDENCY_READY)}var r=t("lodash.clonedeep"),o=t("lodash.create"),s=t("braintree-api"),a=t("braintree-utilities").bind,c=t("../../coinbase"),u=t("../../bus"),l=t("./base-integration");i.prototype=o(l.prototype,{constructor:i}),i.prototype._attachBusEvents=function(){this.bus.on(u.events.PAYMENT_METHOD_GENERATED,a(this._onPaymentMethodGenerated,this))},i.prototype._onPaymentMethodGenerated=function(t){this.bus.emit(u.events.PAYMENT_METHOD_RECEIVED,t)},e.exports=i},{"../../bus":129,
"../../coinbase":145,"./base-integration":134,"braintree-api":15,"braintree-utilities":76,"lodash.clonedeep":100,"lodash.create":112}],136:[function(t,e,n){"use strict";function i(){y.apply(this,arguments),null!=this.configuration.merchantConfiguration.hostedFields?this._setupHostedFields():this._setupForm(),this._setupPayPal(),this._setupCoinbase(),this.bus.emit(f.events.ASYNC_DEPENDENCY_READY)}function r(t,e){return function(n){return e in t&&l.isFunction(t[e][n])?t[e][n]:function(){}}}var o=t("lodash.clonedeep"),s=t("lodash.create"),a=t("../../form"),c=t("../../paypal"),u=t("../../coinbase"),l=t("braintree-utilities"),h=t("../../hosted-fields"),p=t("form-napper"),d=t("../constants"),f=t("../../bus"),m=t("../compatibility").convertToLegacyShippingAddress,y=t("./base-integration"),g=t("../lib/node-type"),b=g.isJQueryElement,v=g.isHTMLElement,_=t("../lib/hosted-fields-nonce-manager");i.prototype=s(y.prototype,{constructor:i}),i.prototype._setupHostedFields=function(){var t,e=this.configuration.merchantConfiguration,n=e[d.ROOT_SUCCESS_CALLBACK],i=new p(e.id),r=h.create(this.configuration),o=new _({formNapper:i,rootCallback:n,channel:this.configuration.channel});return null==i.htmlForm?void this.bus.emit(f.events.ERROR,{type:"CONFIGURATION",message:"options.id does not reference a valid DOM element"}):(t=l.bind(o.handleSubmitRequest,o),i.hijack(t),this.bus.on(f.events.USER_FORM_SUBMIT_REQUEST,t),void this.destructor.registerFunctionForTeardown(l.bind(function(t){o.teardown(),i.detach(),r.teardown(t)},this)))},i.prototype._setupForm=function(){var t,e,n,i=this.configuration.merchantConfiguration;i.id?(n=a.setup(this.apiClient,this.configuration),t=!l.isFunction(i[d.ROOT_SUCCESS_CALLBACK]),t||(e=this.onSuccess,n.onNonceReceived=l.bind(function(t,n){t?this.bus.emit(f.events.ERROR,t):e(n)},this)),this.destructor.registerFunctionForTeardown(function(){n.teardown()})):this.bus.on(f.events.PAYMENT_METHOD_GENERATED,l.bind(function(t){this.bus.emit(f.events.PAYMENT_METHOD_RECEIVED,t)},this))},i.prototype._setupPayPal=function(){var t,e,n,i,s,a,u=this.configuration.merchantConfiguration;u.paypal&&(a=o(u.paypal,function(t){return b(t)?t[0]:v(t)?t:void 0}),t=r(u,"paypal"),e=t("onSuccess"),n=t("onCancelled"),a.paymentMethodNonceInputField||(i=document.createElement("input"),i.id="braintree-custom-integration-dummy-input",a.paymentMethodNonceInputField=i),a.onSuccess=function(t){e(t.nonce,t.details.email,m(t.details.shippingAddress))},a.onCancelled=function(){n()},u.enableCORS&&(a.enableCORS=!0),s=c.create(this.configuration.gatewayConfiguration,a,this.configuration.channel),null!=s&&this.destructor.registerFunctionForTeardown(function(){s.teardown()}))},i.prototype._setupCoinbase=function(){var t,e;this.configuration.merchantConfiguration.coinbase&&(navigator.userAgent.match(/MSIE 8\.0/)||(t=o(this.configuration.merchantConfiguration),t.channel=this.configuration.channel,t.configuration=this.configuration.gatewayConfiguration,t.apiClient=this.apiClient,delete t.paypal,e=u.create(t),this.destructor.registerFunctionForTeardown(function(t){e.teardown(t)})))},e.exports=i},{"../../bus":129,"../../coinbase":145,"../../form":163,"../../hosted-fields":169,"../../paypal":175,"../compatibility":132,"../constants":133,"../lib/hosted-fields-nonce-manager":141,"../lib/node-type":143,"./base-integration":134,"braintree-utilities":76,"form-napper":83,"lodash.clonedeep":100,"lodash.create":112}],137:[function(t,e,n){"use strict";function i(t){return c.isFunction(t.paymentMethodNonceReceived)?t.paymentMethodNonceReceived:null}function r(t){return c.isFunction(t[l.ROOT_SUCCESS_CALLBACK])}function o(){var t,e,n,o;p.apply(this,arguments),t=this.configuration.merchantConfiguration,e=i(t),n=r(t),(e||n)&&(t.paymentMethodNonceReceived=c.bind(function(t){e&&e(t.originalEvent,t.nonce),this.bus.emit(u.events.PAYMENT_METHOD_RECEIVED,h(t))},this)),o=a.create(this.configuration),this.destructor.registerFunctionForTeardown(function(t){o.teardown(t)}),this.bus.emit(u.events.ASYNC_DEPENDENCY_READY)}var s=t("lodash.create"),a=t("../../dropin"),c=t("braintree-utilities"),u=t("../../bus"),l=t("../constants"),h=t("../lib/sanitize-payload"),p=t("./base-integration");o.prototype=s(p.prototype,{constructor:o}),e.exports=o},{"../../bus":129,"../../dropin":161,"../constants":133,"../lib/sanitize-payload":144,"./base-integration":134,"braintree-utilities":76,"lodash.create":112}],138:[function(t,e,n){"use strict";e.exports={custom:t("./custom"),dropin:t("./dropin"),paypal:t("./paypal"),coinbase:t("./coinbase")}},{"./coinbase":135,"./custom":136,"./dropin":137,"./paypal":139}],139:[function(t,e,n){"use strict";function i(t){return"onSuccess"in t&&c.isFunction(t.onSuccess)?t.onSuccess:"paypal"in t&&c.isFunction(t.paypal.onSuccess)?t.paypal.onSuccess:null}function r(t){return c.isFunction(t[u.ROOT_SUCCESS_CALLBACK])}function o(){var t,e,n,o;p.apply(this,arguments),t=this.configuration.merchantConfiguration,e=i(t),n=r(t),(e||n)&&(t.onSuccess=c.bind(function(t){e&&e(t.nonce,t.details.email,h(t.details.shippingAddress)),this.bus.emit(l.events.PAYMENT_METHOD_RECEIVED,t)},this)),o=a.create(this.configuration.gatewayConfiguration,t,this.configuration.channel),this.destructor.registerFunctionForTeardown(function(){o.teardown()}),this.bus.emit(l.events.ASYNC_DEPENDENCY_READY)}var s=t("lodash.create"),a=t("../../paypal"),c=t("braintree-utilities"),u=t("../constants"),l=t("../../bus"),h=t("../compatibility").convertToLegacyShippingAddress,p=t("./base-integration");o.prototype=s(p.prototype,{constructor:o}),e.exports=o},{"../../bus":129,"../../paypal":175,"../compatibility":132,"../constants":133,"./base-integration":134,"braintree-utilities":76,"lodash.create":112}],140:[function(t,e,n){"use strict";e.exports=function(t){if("CONFIGURATION"===t.type||"IMMEDIATE"===t.type)throw new Error(t.message);try{console.error(-1===navigator.userAgent.indexOf("MSIE")?t:JSON.stringify(t,null,2))}catch(e){}}},{}],141:[function(t,e,n){"use strict";function i(t){this.paymentMethod=null,this.nonceInputElement=null,this.bus=new r({channel:t.channel}),this.formNapper=t.formNapper,this.rootCallback=t.rootCallback,this._attachEvents()}var r=t("../../bus"),o=t("../../hosted-fields"),s="web.custom.hosted-fields.via.",a="payment_method_nonce";i.prototype._clearNonce=function(){this.paymentMethod=null,this.nonceInputElement=this.formNapper.inject(a,"")},i.prototype._attachEvents=function(){var t=this;this.bus.on(r.events.PAYMENT_METHOD_CANCELLED,function(){t._clearNonce()}),this.bus.on(r.events.PAYMENT_METHOD_GENERATED,function(e){t.paymentMethod=e,t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce)})},i.prototype.handleSubmitRequest=function(){var t=this;this.bus.emit(o.events.TOKENIZATION_REQUEST,function(e){var n=e[0],i=e[1];return n?void t.bus.emit(r.events.ERROR,n):(t.paymentMethod=i||t.paymentMethod,null==t.paymentMethod?(t.bus.emit(o.events.VALIDATE_STRICT),void t.bus.emit(r.events.ERROR,{type:"VALIDATION",message:"User did not enter a payment method"})):void(t.rootCallback?t.bus.emit(r.events.SEND_ANALYTICS_EVENTS,s+"callback.success",function(){t.rootCallback(t.paymentMethod)}):t.bus.emit(r.events.SEND_ANALYTICS_EVENTS,s+"formsubmit.success",function(){t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce),t.formNapper.submit()})))})},i.prototype.teardown=function(){this._clearNonce()},e.exports=i},{"../../bus":129,"../../hosted-fields":169}],142:[function(t,e,n){"use strict";function i(){}var r=t("braintree-utilities").isFunction;e.exports=function(t){return function(e,n){return r(t[e])?t[e]:r(n)?n:i}}},{"braintree-utilities":76}],143:[function(t,e,n){"use strict";function i(t){return"object"==typeof t&&"jquery"in t&&0!==t.length}function r(t){return t&&1===t.nodeType}e.exports={isJQueryElement:i,isHTMLElement:r}},{}],144:[function(t,e,n){"use strict";e.exports=function(t){return{nonce:t.nonce,details:t.details,type:t.type}}},{}],145:[function(t,e,n){"use strict";function i(t){return new r(t)}var r=t("./lib/coinbase");e.exports={create:i}},{"./lib/coinbase":148}],146:[function(t,e,n){(function(t){"use strict";function n(e){return e=e||t.navigator.userAgent,/AppleWebKit\//.test(e)&&/Mobile\//.test(e)?e.replace(/.* OS ([0-9_]+) like Mac OS X.*/,"$1").replace(/_/g,"."):null}function i(e){var n=e||t.navigator.userAgent,i=null,r=/MSIE.(\d+)/.exec(n);return/Trident/.test(n)&&(i=11),r&&(i=parseInt(r[1],10)),i}function r(e){return e=e||t.navigator.userAgent,/Android/.test(e)?e.replace(/^.* Android ([0-9\.]+).*$/,"$1"):null}e.exports={ieVersion:i,iOSSafariVersion:n,androidVersion:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],147:[function(t,e,n){"use strict";function i(t,e,n){return t?(n.bus.emit(r.ERROR,t.error),void n.bus.emit(r.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.failed")):(n.bus.emit(r.PAYMENT_METHOD_GENERATED,e),void n.bus.emit(r.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.succeeded"))}var r=t("../../bus").events;e.exports={tokenize:i}},{"../../bus":129}],148:[function(t,e,n){(function(n){"use strict";function i(t){return{clientId:t.configuration.coinbase.clientId,redirectUrl:t.configuration.coinbase.redirectUrl,scopes:t.configuration.coinbase.scopes||p.SCOPES,meta:{authorizations_merchant_account:t.configuration.coinbase.merchantAccount||""}}}function r(t){return function(e,n){t.emit(f.events.ERROR,{type:n,message:e})}}function o(t,e){var n=(t||{}).coinbase,i=r(e);if(null==t.apiClient)i("settings.apiClient is required for coinbase",p.CONFIGURATION_ERROR);else if(t.configuration.coinbaseEnabled)if(n&&(n.container||n.button))if(n.container&&n.button)i("options.coinbase.container and options.coinbase.button are mutually exclusive",p.CONFIGURATION_ERROR);else{if(d.isSupportedBrowser())return!0;i("Coinbase is not supported by your browser. Please consider upgrading",p.UNSUPPORTED_BROWSER_ERROR)}else i("Either options.coinbase.container or options.coinbase.button is required for Coinbase integrations",p.CONFIGURATION_ERROR);else i("Coinbase is not enabled for your merchant account",p.CONFIGURATION_ERROR);return!1}function s(t){var e,r,s=this;this.destructor=new c,this.channel=t.channel,r={channel:this.channel};try{t.coinbase.container&&(r.merchantUrl=n.location.href)}catch(u){}this.bus=t.bus||new f(r),this.canCreateIntegration=o(t,this.bus),this.canCreateIntegration&&(this.buttonId=t.coinbase.button||p.BUTTON_ID,this.apiClient=t.apiClient,this.assetsUrl=t.configuration.assetsUrl,this.environment=t.configuration.coinbase.environment,this._onOAuthSuccess=a.bind(this._onOAuthSuccess,this),this._handleButtonClick=a.bind(this._handleButtonClick,this),this.popupParams=i(t),this.redirectDoneInterval=null,t.coinbase.container?(e=a.normalizeElement(t.coinbase.container),this._insertFrame(e)):(n.braintreeCoinbasePopupCallback=this._onOAuthSuccess,e=document.body,a.addEventListener(e,"click",this._handleButtonClick),this.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"coinbase.initialized"),this.destructor.registerFunctionForTeardown(function(){s._closePopup()}),this.bus.on(p.TEARDOWN_EVENT,a.bind(this.destructor.teardown,this.destructor))))}var a=t("braintree-utilities"),c=t("destructor"),u=t("./dom/composer"),l=t("./url-composer"),h=t("./callbacks"),p=t("./constants"),d=t("./detector"),f=t("../../bus");s.prototype._insertFrame=function(t){var e=this,n=u.createFrame({channel:this.channel});this.bus.emit(f.events.ASYNC_DEPENDENCY_INITIALIZING),t.appendChild(n),this.destructor.registerFunctionForTeardown(function(){t.removeChild(n)}),setTimeout(function(){n.src=e.assetsUrl+"/coinbase/"+p.VERSION+"/coinbase-frame.html#"+e.channel},0)},s.prototype._onOAuthSuccess=function(t){var e=this;return t.code?(this.bus.emit("coinbase:view:navigate","loading"),this.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.authorized"),this.apiClient.tokenizeCoinbase({code:t.code,query:l.getQueryString()},function(t,n){h.tokenize.apply(null,[t,n,e])}),void this._closePopup()):(this.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.denied"),void this._closePopup())},s.prototype._clearPollForRedirectDone=function(){this.redirectDoneInterval&&(clearInterval(this.redirectDoneInterval),this.redirectDoneInterval=null)},s.prototype._closePopup=function(t){t=t||this.popup,null!=t&&(d.shouldCloseFromParent()&&t.close(),this._popupCleanup())},s.prototype._popupCleanup=function(){this._clearPollForRedirectDone(),this.bus.emit(f.events.UI_POPUP_DID_CLOSE,{source:p.INTEGRATION_NAME})},s.prototype._pollForRedirectDone=function(t){var e=this,n=setInterval(function(){var n;if(null==t||t.closed)return e.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.aborted"),void e._popupCleanup();try{if("about:blank"===t.location.href)throw new Error("Not finished loading");n=a.decodeQueryString(t.location.search.replace(/^\?/,"")).code}catch(i){return}e._onOAuthSuccess({code:n})},100);return this.redirectDoneInterval=n,n},s.prototype._openPopup=function(){var t;this.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.started"),t=u.createPopup(l.compose(this._getOAuthBaseUrl(),this.popupParams)),t.focus(),this._pollForRedirectDone(t),this.bus.emit(f.events.UI_POPUP_DID_OPEN,{source:p.INTEGRATION_NAME}),this.bus.on(f.events.UI_POPUP_FORCE_CLOSE,function(e){e.target===p.INTEGRATION_NAME&&t.close()}),this.popup=t},s.prototype._getOAuthBaseUrl=function(){var t;return t="shared_sandbox"===this.environment?p.SANDBOX_OAUTH_BASE_URL:p.PRODUCTION_OAUTH_BASE_URL},s.prototype._handleButtonClick=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(e.id===this.buttonId)break;e=e.parentNode}t&&t.preventDefault?t.preventDefault():t.returnValue=!1,this._openPopup()},s.prototype.teardown=function(t){var e=this;return this.canCreateIntegration?void this.bus.emit(p.TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.bus.teardown(),void t(null))})}):void t(null)},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../bus":129,"./callbacks":147,"./constants":149,"./detector":150,"./dom/composer":152,"./url-composer":155,"braintree-utilities":76,destructor:80}],149:[function(t,e,n){"use strict";e.exports={PRODUCTION_OAUTH_BASE_URL:"https://coinbase.com",SANDBOX_OAUTH_BASE_URL:"https://sandbox.coinbase.com",ORIGIN_URL:"https://www.coinbase.com",FRAME_NAME:"braintree-coinbase-frame",POPUP_NAME:"coinbase",BUTTON_ID:"bt-coinbase-button",SCOPES:"send",VERSION:"2.14.5",INTEGRATION_NAME:"Coinbase",CONFIGURATION_ERROR:"CONFIGURATION",UNSUPPORTED_BROWSER_ERROR:"UNSUPPORTED_BROWSER",TEARDOWN_EVENT:"coinbase:TEARDOWN"}},{}],150:[function(t,e,n){"use strict";function i(){var t=a.ieVersion();return!t||t>8}function r(){var t=a.androidVersion();return null==t?!1:/^5/.test(t)}function o(){return!(r()||s())}function s(){var t=a.iOSSafariVersion();return null==t?!1:/^8\.0/.test(t)||/^8\.1$/.test(t)}var a=t("./browser");e.exports={isSupportedBrowser:i,shouldCloseFromParent:o,shouldDisplayIOSClose:s,shouldDisplayLollipopClose:r}},{"./browser":146}],151:[function(t,e,n){"use strict";function i(t){var e=document.createElement("button");return t=t||{},e.id=t.id||"coinbase-button",e.style.backgroundColor=t.backgroundColor||"#EEE",e.style.color=t.color||"#4597C3",e.style.border=t.border||"0",e.style.borderRadius=t.borderRadius||"6px",e.style.padding=t.padding||"12px",e.innerHTML=t.innerHTML||"coinbase",e}e.exports={create:i}},{}],152:[function(t,e,n){"use strict";var i=t("./popup"),r=t("./button"),o=t("./frame");e.exports={createButton:r.create,createPopup:i.create,createFrame:o.create}},{"./button":151,"./frame":153,"./popup":154}],153:[function(t,e,n){"use strict";function i(){return o({name:r.FRAME_NAME,height:"70px",width:"100%",style:{padding:0,margin:0,border:0,outline:"none"}})}var r=t("../constants"),o=t("iframer");e.exports={create:i}},{"../constants":149,iframer:85}],154:[function(t,e,n){(function(n){"use strict";function i(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push([e,t[e]].join("="));return n.join(",")}function r(){var t=580,e=810;return i({width:t,height:e,left:(screen.width-t)/2,top:(screen.height-e)/4})}function o(t){return n.open(t,s.POPUP_NAME,r())}var s=t("../constants");e.exports={create:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../constants":149}],155:[function(t,e,n){"use strict";function i(){return"version="+o.VERSION}function r(t,e){var n,r=t+"/oauth/authorize?response_type=code",o=e.redirectUrl+"?"+i();if(r+="&redirect_uri="+encodeURIComponent(o),r+="&client_id="+e.clientId,e.scopes&&(r+="&scope="+encodeURIComponent(e.scopes)),e.meta)for(n in e.meta)e.meta.hasOwnProperty(n)&&(r+="&meta["+encodeURIComponent(n)+"]="+encodeURIComponent(e.meta[n]));return r}var o=t("./constants");e.exports={compose:r,getQueryString:i}},{"./constants":149}],156:[function(t,e,n){"use strict";function i(t){this.apiClient=t}var r=["getCreditCards","unlockCreditCard","sendAnalyticsEvents"];i.prototype.attach=function(t){function e(e){t.define(e,function(){n.apiClient[e].apply(n.apiClient,arguments)})}var n=this,i=0,o=r.length;for(i;o>i;i++)e(r[i])},e.exports=i},{}],157:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function r(){return{html:{height:a.style.height||"",overflow:i(a,"overflow"),position:i(a,"position")},body:{height:c.style.height||"",overflow:i(c,"overflow")}}}function o(){var t=/Android|iPhone|iPod|iPad/i.test(window.navigator.userAgent);return t}function s(t){var e,i,r,o=this;this.channel=t.channel,this.destructor=new h,this.merchantConfiguration=t.merchantConfiguration,this.encodedClientToken=t.gatewayConfiguration,this.analyticsConfiguration=t.analyticsConfiguration,this.paypalOptions=t.merchantConfiguration.paypal||{},this.container=null,this.merchantFormManager=null,this.root=t.root,this.configurationRequests=[],this.braintreeApiClient=u.configure({clientToken:t.gatewayConfiguration,analyticsConfiguration:this.analyticsConfiguration,integration:"dropin",enableCORS:this.merchantConfiguration.enableCORS}),this.paymentMethodNonceReceivedCallback=t.merchantConfiguration.paymentMethodNonceReceived,this.clientToken=u.parseClientToken(t.gatewayConfiguration),this.braintreeBus=new l({merchantUrl:n.location.href,channel:t.channel}),this.bus=new p.MessageBus(this.root,this.channel),this.rpcServer=new p.RPCServer(this.bus),this.apiProxyServer=new g(this.braintreeApiClient),this.apiProxyServer.attach(this.rpcServer),e=t.inlineFramePath||this.clientToken.assetsUrl+"/dropin/"+E+"/inline-frame.html",i=t.modalFramePath||this.clientToken.assetsUrl+"/dropin/"+E+"/modal-frame.html",a=document.documentElement,c=document.body,this.frames={inline:this._createFrame(e,_.INLINE_FRAME_NAME),modal:this._createFrame(i,_.MODAL_FRAME_NAME)},this.container=f(t.merchantConfiguration.container,"Unable to find valid container."),r=f(t.merchantConfiguration.form||this._findClosest(this.container,"form")),this.merchantFormManager=new b({form:r,frames:this.frames,onSubmit:this.paymentMethodNonceReceivedCallback,apiClient:this.braintreeApiClient}).initialize(),this.destructor.registerFunctionForTeardown(function(){o.merchantFormManager.teardown()}),t.gatewayConfiguration.paypalEnabled&&this._configurePayPal(),this.braintreeApiClient.sendAnalyticsEvents("dropin.web.initialized")}var a,c,u=t("braintree-api"),l=t("../../bus"),h=t("destructor"),p=t("braintree-rpc"),d=t("braintree-utilities"),f=d.normalizeElement,m=d.bind,y=d.isBrowserHttps,g=t("./api-proxy-server"),b=t("./merchant-form-manager"),v=t("./frame-container"),_=t("../shared/constants"),E="2.14.5",w=t("../../paypal/src/external/views/app-view");s.prototype.initialize=function(){var t,e=this;this._initializeModal(),this.braintreeBus.emit(l.events.ASYNC_DEPENDENCY_INITIALIZING),this.container.appendChild(this.frames.inline.element),c.appendChild(this.frames.modal.element),this.destructor.registerFunctionForTeardown(function(t){e._hideModal(function(){e.container.removeChild(e.frames.inline.element),c.removeChild(e.frames.modal.element),t()})}),this.rpcServer.define("receiveSharedCustomerIdentifier",function(n){for(e.braintreeApiClient.attrs.sharedCustomerIdentifier=n,e.braintreeApiClient.attrs.sharedCustomerIdentifierType="browser_session_cookie_store",t=0;t<e.configurationRequests.length;t++)e.configurationRequests[t](e.encodedClientToken);e.configurationRequests=[]}),this.braintreeBus.on(l.events.PAYMENT_METHOD_GENERATED,m(this._handleAltPayData,this)),this.rpcServer.define("getConfiguration",function(t){t({enableCORS:e.merchantConfiguration.enableCORS,clientToken:e.encodedClientToken,paypalOptions:e.paypalOptions,analyticsConfiguration:e.analyticsConfiguration,merchantHttps:y()})}),this.rpcServer.define("selectPaymentMethod",function(t){e.frames.modal.rpcClient.invoke("selectPaymentMethod",[t]),e._showModal()}),this.rpcServer.define("sendAddedPaymentMethod",function(t){e.merchantFormManager.setNoncePayload(t),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t])}),this.rpcServer.define("sendUsedPaymentMethod",function(t){e.frames.inline.rpcClient.invoke("selectPaymentMethod",[t])}),this.rpcServer.define("sendUnlockedNonce",function(t){e.merchantFormManager.setNoncePayload(t)}),this.rpcServer.define("clearNonce",function(){e.merchantFormManager.clearNoncePayload()}),this.rpcServer.define("closeDropInModal",function(){e._hideModal()}),this.rpcServer.define("setInlineFrameHeight",function(t){e.frames.inline.element.style.height=t+"px"}),this.bus.register("ready",function(t){t.source===e.frames.inline.element.contentWindow?e.frames.inline.rpcClient=new p.RPCClient(e.bus,t.source):t.source===e.frames.modal.element.contentWindow&&(e.frames.modal.rpcClient=new p.RPCClient(e.bus,t.source))})},s.prototype._createFrame=function(t,e){return new v(t,e,this.braintreeBus)},s.prototype._initializeModal=function(){this.frames.modal.element.style.display="none",this.frames.modal.element.style.position=o()?"absolute":"fixed",this.frames.modal.element.style.top="0",this.frames.modal.element.style.left="0",this.frames.modal.element.style.height="100%",this.frames.modal.element.style.width="100%"},s.prototype._lockMerchantWindowSize=function(){setTimeout(function(){a.style.overflow="hidden",c.style.overflow="hidden",c.style.height="100%",o()&&(a.style.position="relative",a.style.height=window.innerHeight+"px")},160)},s.prototype._unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;t&&(c.style.height=t.body.height,c.style.overflow=t.body.overflow,a.style.overflow=t.html.overflow,o()&&(a.style.height=t.html.height,a.style.position=t.html.position),delete this.merchantPageDefaultStyles)},s.prototype._showModal=function(){var t=this,e=this.frames.modal.element;this.merchantPageDefaultStyles=r(),e.style.display="block",this.frames.modal.rpcClient.invoke("open",[],function(){setTimeout(function(){t._lockMerchantWindowSize(),e.contentWindow.focus()},200)})},s.prototype._hideModal=function(t){this._unlockMerchantWindowSize(),this.frames.modal.element.style.display="none",t&&t()},s.prototype._configurePayPal=function(){this.paypalModalView=new w({channel:this.channel,insertFrameFunction:this.paypalOptions.insertFrame,paypalAssetsUrl:this.clientToken.paypal.assetsUrl,isHermes:Boolean(this.paypalOptions.singleUse)&&Boolean(this.paypalOptions.amount)&&Boolean(this.paypalOptions.currency)})},s.prototype._handleAltPayData=function(t){this.merchantFormManager.setNoncePayload(t),this.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t]),this.frames.modal.rpcClient.invoke("modalViewClose")},s.prototype._findClosest=function(t,e){e=e.toUpperCase();do{if(t.nodeName===e)return t;t=t.parentNode}while(t);throw new Error("Unable to find a valid "+e)},s.prototype.teardown=function(t){var e=this;this.paypalModalView&&this.paypalModalView.teardown(),this.braintreeBus.emit(_.MODAL_FRAME_TEARDOWN_EVENT,function(){e.braintreeBus.emit(_.INLINE_FRAME_TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.braintreeBus.teardown(),void t())})})})},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../bus":129,"../../paypal/src/external/views/app-view":179,"../shared/constants":162,"./api-proxy-server":156,"./frame-container":159,"./merchant-form-manager":160,"braintree-api":15,"braintree-rpc":58,"braintree-utilities":76,destructor:80}],158:[function(t,e,n){"use strict";function i(t){var e=new r(t);return e.initialize(),e}var r=t("./client"),o="2.14.5";e.exports={create:i,VERSION:o}},{"./client":157}],159:[function(t,e,n){"use strict";function i(){var t,e=document.createElement("fakeelement");for(t in u)if("undefined"!=typeof e.style[t])return u[t];return null}function r(t,e){function n(i){i.target===t&&"height"===i.propertyName&&(e.emit(s.events.ASYNC_DEPENDENCY_READY),t.removeEventListener(r,n))}var r=i();r?t.addEventListener(r,n):setTimeout(function(){e.emit(s.events.ASYNC_DEPENDENCY_READY)},500)}function o(t,e,n){var i="height 210ms cubic-bezier(0.390, 0.575, 0.565, 1.000)",o=c({name:e,width:"100%",height:"68",style:{transition:i,WebkitTransition:i,MozTransition:i,msTransition:i,OTransition:i,border:"0",zIndex:"9999"}});this.element=o,setTimeout(function(){o.src=t+"#"+n.channel},0),e===a.INLINE_FRAME_NAME&&r(o,n)}var s=t("../../bus"),a=t("../shared/constants"),c=t("iframer"),u={transition:"transitionend","-o-transition":"otransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};e.exports=o},{"../../bus":129,"../shared/constants":162,iframer:85}],160:[function(t,e,n){"use strict";function i(t){this.formNapper=new o(t.form),this.frames=t.frames,this.onSubmit=t.onSubmit,this.apiClient=t.apiClient}var r=t("braintree-utilities"),o=t("form-napper");i.prototype.initialize=function(){return this._isSubmitBased()&&this._setElements(),this._setEvents(),this},i.prototype.setNoncePayload=function(t){this.noncePayload=t},i.prototype.clearNoncePayload=function(){this.noncePayload=null},i.prototype._isSubmitBased=function(){return!this.onSubmit},i.prototype._isCallbackBased=function(){return Boolean(this.onSubmit)},i.prototype._setElements=function(){this.nonceInput=this.formNapper.inject("payment_method_nonce","")},i.prototype._setEvents=function(){this.formNapper.hijack(r.bind(this._handleFormSubmit,this))},i.prototype._handleFormSubmit=function(t){var e=this;this.noncePayload&&this.noncePayload.nonce?this._handleNonceReply(t):this.frames.inline.rpcClient.invoke("requestNonce",[],function(n){e.setNoncePayload(n),e._handleNonceReply(t)})},i.prototype._handleNonceReply=function(t){var e=this;this._isCallbackBased()?this.apiClient.sendAnalyticsEvents("dropin.web.end.callback",function(){var n=e.noncePayload;n.originalEvent=t,e.onSubmit(n),setTimeout(function(){delete n.originalEvent,e.frames.inline.rpcClient.invoke("clearLoadingState"),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[n])},200)}):this._triggerFormSubmission()},i.prototype._triggerFormSubmission=function(){var t=this;this.nonceInput=this.formNapper.inject("payment_method_nonce",this.noncePayload.nonce),this.apiClient.sendAnalyticsEvents("dropin.web.end.auto-submit",function(){t.formNapper.submit()})},i.prototype.teardown=function(){var t;this.nonceInput&&(t=this.formNapper.htmlForm,t.removeChild(this.nonceInput)),this.formNapper.detach()},e.exports=i},{"braintree-utilities":76,"form-napper":83}],161:[function(t,e,n){"use strict";e.exports=t("./external/core")},{"./external/core":158}],162:[function(t,e,n){e.exports={PAYPAL_INTEGRATION_NAME:"PayPal",INLINE_FRAME_NAME:"braintree-dropin-frame",MODAL_FRAME_NAME:"braintree-dropin-modal-frame",PAYMENT_METHOD_TYPES:["CoinbaseAccount","PayPalAccount","CreditCard"],cssClassMap:{"American Express":"american-express","Diners Club":"diners-club",DinersClub:"diners-club",Discover:"discover",JCB:"jcb",Maestro:"maestro",MasterCard:"master-card",Solo:"solo",Switch:"switch",UKMaestro:"maestro",UnionPay:"unionpay",Visa:"visa"},INLINE_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_INLINE_FRAME",MODAL_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_MODAL_FRAME"}},{}],163:[function(t,e,n){"use strict";function i(t,e){var n=e.merchantConfiguration||{},i=document.getElementById(n.id),s=n.useCreditCard!==!1;if(!i)throw new Error('Unable to find form with id: "'+n.id+'"');return s&&o(i),new r(t,e)}var r=t("./lib/form"),o=t("./lib/validate-annotations");e.exports={setup:i}},{"./lib/form":165,"./lib/validate-annotations":168}],164:[function(t,e,n){(function(t){"use strict";function n(t,e){var r,s,a,c=t.children;for(e=e||{},s=0;s<c.length;s++)r=c[s],o(r)?(a=r.getAttribute("data-braintree-name"),"postal_code"===a?e.billingAddress={postalCode:r.value}:e[a]=r.value,i(r)):r.children&&r.children.length>0&&n(r,e);return e}function i(t){try{t.attributes.removeNamedItem("name")}catch(e){}}function r(t){n(t)}function o(t){return t.nodeType===s&&t.attributes["data-braintree-name"]}var s=t.Node?t.Node.ELEMENT_NODE:1;e.exports={extractValues:n,scrubAllAttributes:r,scrubAttributes:i,isBraintreeNode:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],165:[function(t,e,n){(function(n){"use strict";function i(t,e){var i=e.merchantConfiguration,r="object"==typeof i.paymentMethodNonceInputField,o=this;this.destructor=new s,this.apiClient=t,this.isCreditCardForm=i.useCreditCard!==!1,this.htmlForm=document.getElementById(i.id),this.paymentMethodNonceInput=u(i.paymentMethodNonceInputField),this.htmlForm.appendChild(this.paymentMethodNonceInput),this.destructor.registerFunctionForTeardown(function(){r?o.paymentMethodNonceInput.value="":o.htmlForm.removeChild(o.paymentMethodNonceInput)}),this.model=new c,this.bus=new a({merchantUrl:n.location.href,channel:e.channel}),this.setEvents(),this.destructor.registerFunctionForTeardown(function(){o.bus.teardown()})}var r=t("braintree-utilities"),o=t("./fields"),s=t("destructor"),a=t("../../bus"),c=t("./models/payment-method-model"),u=t("./get-nonce-input"),l={message:"Unable to process payments at this time",type:"IMMEDIATE"};i.prototype.setEvents=function(){var t=this;this.onSubmitHandler=r.bind(this.handleSubmit,this),this.onExternalNonceReceived=r.bind(this.onExternalNonceReceived,this),this.clearExternalNonce=r.bind(this.clearExternalNonce,this),r.addEventListener(this.htmlForm,"submit",this.onSubmitHandler),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(t.htmlForm,"submit",t.onSubmitHandler)}),this.bus.on(a.events.PAYMENT_METHOD_GENERATED,this.onExternalNonceReceived),this.bus.on(a.events.PAYMENT_METHOD_CANCELLED,this.clearExternalNonce)},i.prototype.handleSubmit=function(t){var e,n=this;return t.preventDefault?t.preventDefault():t.returnValue=!1,this.isCreditCardForm?(e=this.model.get("type"),e&&"CreditCard"!==e?(o.scrubAllAttributes(this.htmlForm),void this.onNonceReceived(null,this.model.attributes)):void this.apiClient.tokenizeCard(o.extractValues(this.htmlForm),function(t,e,i){t?n.onNonceReceived(l,null):(n.model.set({nonce:e,type:i.type,details:i.details}),n.onNonceReceived(null,n.model.attributes))})):void this.onNonceReceived(null,this.model.attributes)},i.prototype.writeNonceToDOM=function(){this.paymentMethodNonceInput.value=this.model.get("nonce")},i.prototype.onExternalNonceReceived=function(t){this.model.set(t),this.writeNonceToDOM()},i.prototype.clearExternalNonce=function(){this.model.reset()},i.prototype.onNonceReceived=function(t){var e=this.htmlForm;return t?void this.bus.emit(a.events.ERROR,l):(r.removeEventListener(e,"submit",this.onSubmitHandler),this.writeNonceToDOM(),void(e.submit&&("function"==typeof e.submit||e.submit.call)?e.submit():setTimeout(function(){e.querySelector('[type="submit"]').click()},1)))},i.prototype.teardown=function(){this.destructor.teardown();

},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../bus":129,"./fields":164,"./get-nonce-input":166,"./models/payment-method-model":167,"braintree-utilities":76,destructor:80}],166:[function(t,e,n){"use strict";e.exports=function(t){var e,n;return"object"==typeof t?t:(e="payment_method_nonce","string"==typeof t&&(e=t),n=document.createElement("input"),n.name=e,n.type="hidden",n)}},{}],167:[function(t,e,n){"use strict";function i(){this.reset()}i.prototype.get=function(t){return this.attributes[t]},i.prototype.set=function(t){this.attributes=t||{}},i.prototype.reset=function(){this.attributes={}},e.exports=i},{}],168:[function(t,e,n){"use strict";e.exports=function(t){var e,n,i=t.getElementsByTagName("*"),r={};for(e=0;e<i.length;e++)n=i[e].getAttribute("data-braintree-name"),r[n]=!0;if(!r.number)throw new Error('Unable to find an input with data-braintree-name="number" in your form. Please add one.');if(r.expiration_date){if(r.expiration_month||r.expiration_year)throw new Error('You have inputs with data-braintree-name="expiration_date" AND data-braintree-name="expiration_(year|month)". Please use either "expiration_date" or "expiration_year" and "expiration_month".')}else{if(!r.expiration_month&&!r.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_date" in your form. Please add one.');if(!r.expiration_month)throw new Error('Unable to find an input with data-braintree-name="expiration_month" in your form. Please add one.');if(!r.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_year" in your form. Please add one.')}}},{}],169:[function(t,e,n){"use strict";var i=t("./lib/external"),r=t("./lib/shared/constants").events,o="2.14.5";e.exports={create:function(t){return new i(t)},events:r,VERSION:o}},{"./lib/external":171,"./lib/shared/constants":173}],170:[function(t,e,n){"use strict";var i=t("../shared/constants");e.exports=function(t,e){return t+"/hosted-fields/"+i.VERSION+"/hosted-fields-frame.html#"+e}},{"../shared/constants":173}],171:[function(t,e,n){"use strict";function i(t,e){var n=document.createElement("div");return n.style.clear="both",e=e||document.body,e.appendChild(t),e.appendChild(n),{parent:e,children:[t,n]}}function r(t,e){return function(n){var i=t[n.fieldKey].containerElement,r=a(i);n.target={fieldKey:n.fieldKey,container:i},r.toggle(h.externalClasses.FOCUSED,n.isFocused).toggle(h.externalClasses.VALID,n.isValid),n.isStrictlyValidating?r.toggle(h.externalClasses.INVALID,!n.isValid):r.toggle(h.externalClasses.INVALID,!n.isPotentiallyValid),delete n.fieldKey,delete n.isStrictlyValidating,e&&e(n)}}function o(t){var e,n,o,p,d,f,m=this,g={},b=0;for(this.injectedNodes=[],this.destructor=new s,this.bus=new u({channel:t.channel,merchantUrl:location.href}),this.destructor.registerFunctionForTeardown(function(){m.bus.teardown()}),this.bus.emit(u.events.ASYNC_DEPENDENCY_INITIALIZING),this.bus.emit(u.events.SEND_ANALYTICS_EVENTS,"hosted-fields.initialized"),d=0;d<h.whitelistedFields.length;d++)e=h.whitelistedFields[d],n=t.merchantConfiguration.hostedFields[e],n&&(o=document.querySelector(n.selector),o?o.querySelector('iframe[name^="braintree-"]')?this.bus.emit(u.events.ERROR,{message:'Cannot place two elements in "'+n.selector+'"'}):(p=c({type:e,name:"braintree-hosted-field-"+e,style:h.defaultIFrameStyle}),this.injectedNodes.push(i(p,o)),this.setupLabelFocus(e,o),g[e]={frameElement:p,containerElement:o},b++,setTimeout(function(e){return function(){e.src=l(t.gatewayConfiguration.assetsUrl,t.channel)}}(p),0)):(f='Unable to find element with selector "'+n.selector+'" for hostedFields.'+e,this.bus.emit(u.events.ERROR,{message:f})));this.bus.on(y.FRAME_READY,function(t){b--,t(0===b?!0:!1)}),this.bus.on(y.INPUT_EVENT,r(g,t.merchantConfiguration.hostedFields.onFieldEvent)),this.destructor.registerFunctionForTeardown(function(){var t,e,n;for(t=0;t<m.injectedNodes.length;t++){for(n=m.injectedNodes[t],e=0;e<n.children.length;e++)n.parent.removeChild(n.children[e]);a(n.parent).remove(h.externalClasses.FOCUSED,h.externalClasses.INVALID,h.externalClasses.VALID)}})}var s=t("destructor"),a=t("classlist"),c=t("iframer"),u=t("../../../bus"),l=t("./compose-url"),h=t("../shared/constants"),p=t("nodelist-to-array"),d=t("braintree-utilities"),f=t("../shared/find-parent-tags"),m=t("./should-use-label-focus"),y=h.events;o.prototype.setupLabelFocus=function(t,e){function n(){o.emit(y.TRIGGER_INPUT_FOCUS,t)}var i,r,o=this.bus;if(m()&&null!=e.id){for(i=p(document.querySelectorAll('label[for="'+e.id+'"]')),i=i.concat(f(e,"label")),r=0;r<i.length;r++)d.addEventListener(i[r],"click",n,!1);this.destructor.registerFunctionForTeardown(function(){for(r=0;r<i.length;r++)d.removeEventListener(i[r],"click",n,!1)})}},o.prototype.teardown=function(t){this.destructor.teardown(t)},e.exports=o},{"../../../bus":129,"../shared/constants":173,"../shared/find-parent-tags":174,"./compose-url":170,"./should-use-label-focus":172,"braintree-utilities":76,classlist:77,destructor:80,iframer:85,"nodelist-to-array":128}],172:[function(t,e,n){"use strict";e.exports=function(){return!/(iPad|iPhone|iPod)/i.test(navigator.userAgent)}},{}],173:[function(t,e,n){"use strict";var i="2.14.5";e.exports={VERSION:i,events:{FRAME_READY:"hosted-fields:FRAME_READY",VALIDATE_STRICT:"hosted-fields:VALIDATE_STRICT",CONFIGURATION:"hosted-fields:CONFIGURATION",TOKENIZATION_REQUEST:"hosted-fields:TOKENIZATION_REQUEST",INPUT_EVENT:"hosted-fields:INPUT_EVENT",TRIGGER_INPUT_FOCUS:"hosted-fields:TRIGGER_INPUT_FOCUS"},externalEvents:{FOCUS:"focus",BLUR:"blur",FIELD_STATE_CHANGE:"fieldStateChange"},defaultMaxLengths:{number:19,postalCode:8,expirationDate:7,expirationMonth:2,expirationYear:4,cvv:3},externalClasses:{FOCUSED:"braintree-hosted-fields-focused",INVALID:"braintree-hosted-fields-invalid",VALID:"braintree-hosted-fields-valid"},defaultIFrameStyle:{border:"none",width:"100%",height:"100%","float":"left"},whitelistedFields:["number","cvv","expirationDate","expirationMonth","expirationYear","postalCode"],whitelistedStyles:["-moz-osx-font-smoothing","-moz-transition","-webkit-font-smoothing","-webkit-transition","color","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-weight","line-height","opacity","outline","text-shadow","transition"],passwordManagerFields:{number:{name:"credit-card-number",label:"Credit Card Number"},expirationDate:{name:"expiration",label:"Expiration Date"},postalCode:{name:"postal-code",label:"Postal Code"}}}},{}],174:[function(t,e,n){"use strict";function i(t,e){for(var n=t.parentNode,i=[];null!=n;)null!=n.tagName&&n.tagName.toLowerCase()===e&&i.push(n),n=n.parentNode;return i}e.exports=i},{}],175:[function(t,e,n){"use strict";e.exports=t("./src/external/core")},{"./src/external/core":177}],176:[function(t,e,n){(function(n){"use strict";function i(t,e,i){e=e||{},this._clientToken=t,this._clientOptions=e,this._clientToken.correlationId=y.generateUid(),this.destructor=new o,this.channel=i,this.bus=new s({merchantUrl:n.location.href,channel:this.channel}),this.container=r.normalizeElement(e.container),this.paymentMethodNonceInputField=e.paymentMethodNonceInputField,this.insertFrameFunction=e.insertFrame,this.onSuccess=e.onSuccess,this.onCancelled=e.onCancelled,this.loggedInView=null,this.loggedOutView=null,this.appView=null,this.merchantPageView=null,this.paymentMethodNonceInputFieldView=null,this.overlayView=null,this.bridgeIframeView=null,this.insertUI=e.headless!==!0}var r=t("braintree-utilities"),o=t("destructor"),s=t("../../../bus"),a=t("./views/app-view"),c=t("./views/logged-in-view"),u=t("./views/logged-out-view"),l=t("./views/overlay-view"),h=t("./views/merchant-page-view"),p=t("./views/payment-method-nonce-input-field-view"),d=t("./views/bridge-iframe-view"),f=t("../shared/util/browser"),m=t("../shared/constants"),y=t("../shared/util/util");i.prototype.initialize=function(){var t=r.bind(this._handleClickLogin,this);this._createViews(),this.bus.on(m.events.GET_CLIENT_TOKEN,r.bind(this._handleGetClientToken,this)),this.bus.on(m.events.GET_CLIENT_OPTIONS,r.bind(this._handleGetClientOptions,this)),this.bus.on(s.events.PAYMENT_METHOD_CANCELLED,r.bind(this._handlePaymentMethodCancelled,this)),this.insertUI&&this.bus.on(s.events.PAYMENT_METHOD_GENERATED,r.bind(this._handlePaymentMethodGenerated,this)),r.addEventListener(document.body,"click",t),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(document.body,"click",t)})},i.prototype._createViews=function(){var t,e=[],n=this;f.isBridgeIframeRequired()&&(this.bridgeIframeView=new d({container:this.container,paypalAssetsUrl:this._clientToken.paypal.assetsUrl,channel:this.channel}),e.push(this.bridgeIframeView)),this.appView=new a({insertFrameFunction:this.insertFrameFunction,paypalAssetsUrl:this._clientToken.paypal.assetsUrl,isHermes:y.isHermesConfiguration(this._clientToken,this._clientOptions),headless:this._clientOptions.headless,channel:this.channel}),e.push(this.appView),this.insertUI&&(this.paymentMethodNonceInputFieldView=new p({container:this.container,el:this.paymentMethodNonceInputField,channel:this.channel}),e.push(this.paymentMethodNonceInputFieldView),this.merchantPageView=new h({channel:this.channel}),e.push(this.merchantPageView),this.loggedInView=new c({paypalAssetsUrl:this._clientToken.paypal.assetsUrl,container:this.container,locale:this._clientOptions.locale,channel:this.channel}),e.push(this.loggedInView),this.loggedOutView=new u({paypalAssetsUrl:this._clientToken.paypal.assetsUrl,container:this.container,enablePayPalButton:y.isOnetimeHermesConfiguration(this._clientToken,this._clientOptions),locale:this._clientOptions.locale,channel:this.channel}),e.push(this.loggedOutView),f.isPopupSupported()&&f.isOverlaySupported()&&(this.overlayView=new l({paypalAssetsUrl:this._clientToken.paypal.assetsUrl,onFocus:function(){n.bus.emit(m.events.FOCUS_APP)},onClose:function(){n.bus.emit(m.events.CLOSE_APP)},channel:this.channel}),e.push(this.overlayView))),this.destructor.registerFunctionForTeardown(function(){for(t=0;t<e.length;t++)e[t].teardown()})},i.prototype._handleClickLogin=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(this._isButton(e))break;e=e.parentNode}y.preventDefault(t),this.launch()},i.prototype.launch=function(){this.appView.open()},i.prototype._isButton=function(t){var e="braintree-paypal-button"===t.id,n=y.isOnetimeHermesConfiguration(this._clientToken,this._clientOptions)&&t.className.match(/paypal-button(?!-widget)/);return e||n},i.prototype._handlePaymentMethodGenerated=function(t){t.type===m.NONCE_TYPE&&r.isFunction(this.onSuccess)&&this.onSuccess(t)},i.prototype._handlePaymentMethodCancelled=function(t){t.source===m.PAYPAL_INTEGRATION_NAME&&r.isFunction(this.onCancelled)&&this.onCancelled()},i.prototype._clientTokenData=function(){return{analyticsUrl:this._clientToken.analytics?this._clientToken.analytics.url:null,authorizationFingerprint:this._clientToken.authorizationFingerprint,clientApiUrl:this._clientToken.clientApiUrl,displayName:this._clientOptions.displayName||this._clientToken.paypal.displayName,paypalAssetsUrl:this._clientToken.paypal.assetsUrl,paypalClientId:this._clientToken.paypal.clientId,paypalPrivacyUrl:this._clientToken.paypal.privacyUrl,paypalUserAgreementUrl:this._clientToken.paypal.userAgreementUrl,billingAgreementsEnabled:this._clientToken.paypal.billingAgreementsEnabled,unvettedMerchant:this._clientToken.paypal.unvettedMerchant,payeeEmail:this._clientToken.paypal.payeeEmail,correlationId:this._clientToken.correlationId,offline:this._clientOptions.offline||this._clientToken.paypal.environmentNoNetwork,sdkVersion:this._clientToken.sdkVersion,merchantAppId:this._clientToken.merchantAppId}},i.prototype._handleGetClientToken=function(t){t(this._clientTokenData())},i.prototype._clientOptionsData=function(){return{locale:this._clientOptions.locale||"en_us",onetime:this._clientOptions.singleUse||!1,integration:this._clientOptions.integration||"paypal",enableShippingAddress:this._clientOptions.enableShippingAddress||!1,enableBillingAddress:this._clientOptions.enableBillingAddress||!1,enableHermes:y.isHermesConfiguration(this._clientToken,this._clientOptions),amount:this._clientOptions.amount||null,currency:this._clientOptions.currency||null,shippingAddressOverride:this._clientOptions.shippingAddressOverride||null,enableCORS:this._clientOptions.enableCORS}},i.prototype._handleGetClientOptions=function(t){t(this._clientOptionsData())},i.prototype.teardown=function(){var t=this;this.destructor.teardown(function(){t.bus.teardown()})},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../bus":129,"../shared/constants":188,"../shared/util/browser":196,"../shared/util/util":198,"./views/app-view":179,"./views/bridge-iframe-view":180,"./views/logged-in-view":181,"./views/logged-out-view":182,"./views/merchant-page-view":183,"./views/overlay-view":185,"./views/payment-method-nonce-input-field-view":186,"braintree-utilities":76,destructor:80}],177:[function(t,e,n){"use strict";function i(t,e,n){var i,r;if(e=e||{},r=e.onUnsupported,"function"!=typeof r&&(r=function(t){try{console.log(t)}catch(e){}}),!t)return r(new Error('Parameter "clientToken" cannot be null')),null;if(t=b.parseClientToken(t),!t.paypalEnabled)return r(new Error("PayPal is not enabled")),null;if(!h.detectedPostMessage())return r(new Error("unsupported browser detected")),null;if(!e.container)return r(new Error("Please supply a container for the PayPal button to be appended to")),null;if(!u(t,e))return r(new Error("unsupported protocol detected")),null;if(c(t,e))return r(new Error("Unvetted merchant client token does not include a payee email")),null;if(f(t,e)&&!s(e.locale))return r(new Error("This PayPal integration does not support this country")),null;if(m(t,e)){if(!o(e.currency))return r(new Error("This PayPal integration does not support this currency")),null;if(!a(e.amount))return r(new Error("Amount must be a number")),null}return i=new l(t,e,n),i.initialize(),i}function r(t,e){var n,i=e.length,r=!1;for(n=0;i>n;n++)t.toLowerCase()===e[n].toLowerCase()&&(r=!0);return r}function o(t){return r(t,p.HERMES_SUPPORTED_CURRENCIES)}function s(t){return r(d(t).split("_")[1],p.HERMES_SUPPORTED_COUNTRIES)}function a(t){return t=parseFloat(t),"number"==typeof t&&!isNaN(t)&&t>=0}function c(t,e){return t.paypal.unvettedMerchant&&(!f(t,e)||!t.paypal.payeeEmail)}function u(t,e){return t.paypal.allowHttp?!0:h.isPopupSupported()?!0:"merchantHttps"in e?e.merchantHttps:g.isBrowserHttps()}var l=t("./client"),h=t("../shared/util/browser"),p=t("../shared/constants"),d=t("../shared/get-locale"),f=t("../shared/util/util").isHermesConfiguration,m=t("../shared/util/util").isOnetimeHermesConfiguration,y="2.14.5",g=t("braintree-utilities"),b=t("braintree-api");e.exports={create:i,VERSION:y}},{"../shared/constants":188,"../shared/get-locale":190,"../shared/util/browser":196,"../shared/util/util":198,"./client":176,"braintree-api":15,"braintree-utilities":76}],178:[function(t,e,n){e.exports={en_us:{cancel:"Cancel"},en_uk:{cancel:"Cancel"},en_au:{cancel:"Cancel"},sv_se:{cancel:"Avbryt"},de_de:{cancel:"Abbrechen"},fr_fr:{cancel:"Annuler"},en_ca:{cancel:"Cancel"},fr_ca:{cancel:"Annuler"},es_es:{cancel:"Cancelar"},es_xc:{cancel:"Cancelar"},fr_xc:{cancel:"Annuler"},nl_nl:{cancel:"Annuleren"},pt_pt:{cancel:"Cancelar"},ru_ru:{cancel:"Отмена"},da_dk:{cancel:"Annuller"},it_it:{cancel:"Annulla"},no_no:{cancel:"Avbryt"},pl_pl:{cancel:"Anuluj"},tr_tr:{cancel:"İptal"},zh_xc:{cancel:"取消"},en_hk:{cancel:"Cancel"},zh_hk:{cancel:"取消"},en_my:{cancel:"Cancel"},en_nz:{cancel:"Cancel"},en_sg:{cancel:"Cancel"}}},{}],179:[function(t,e,n){(function(n){"use strict";function i(t){var e=this;this.options=t||{},this.destructor=new s,this.bus=new a({merchantUrl:n.location.href,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){e.bus.teardown()}),this._initialize()}var r=t("braintree-utilities"),o=t("../../shared/util/browser"),s=t("destructor"),a=t("../../../../bus"),c=t("../../shared/constants"),u=t("./popup-view"),l=t("./modal-view");i.prototype._initialize=function(){var t=this;this.app=o.isPopupSupported()?new u({src:this._buildUrl(),isHermes:this.options.isHermes,channel:this.options.channel}):new l({src:this._buildUrl(),headless:this.options.headless,isHermes:this.options.isHermes,insertFrameFunction:this.options.insertFrameFunction,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){t.app.teardown()}),this.bus.on(c.events.CLOSE_APP,r.bind(this.close,this)),this.bus.on(c.events.FOCUS_APP,r.bind(this.focus,this)),this.bus.on(a.events.PAYMENT_METHOD_GENERATED,r.bind(this._handlePaymentMethodGenerated,this)),this.bus.on(a.events.UI_POPUP_FORCE_CLOSE,r.bind(this._handleForceClose,this))},i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=c.VERSION,t+="/html/braintree-frame.html",t+="#"+this.options.channel},i.prototype.open=function(){this.focus(),this.app.open(),this.poll()},i.prototype._handleForceClose=function(t){t.target===c.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype.close=function(){this.app.close()},i.prototype.focus=function(){r.isFunction(this.app.focus)&&this.app.focus()},i.prototype.isClosed=function(){return this.app.isClosed()},i.prototype.stopPolling=function(){clearInterval(this.pollId)},i.prototype.poll=function(){var t=this;this.pollId=setInterval(function(){t.isClosed()&&t._handleClosed()},100)},i.prototype._handlePaymentMethodGenerated=function(t){t.type===c.NONCE_TYPE&&this.close()},i.prototype._handleClosed=function(){this.stopPolling(),this.close(),o.isPopupSupported()&&(this.app.el=null)},i.prototype.teardown=function(){this.destructor.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"../../shared/util/browser":196,"./modal-view":184,"./popup-view":187,"braintree-utilities":76,destructor:80}],180:[function(t,e,n){"use strict";function i(t){this.options=t||{},this.el=o({src:this._buildUrl(),name:r.BRIDGE_FRAME_NAME,height:1,width:1,style:{position:"static",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",background:"transparent"}}),this.options.container.appendChild(this.el)}var r=t("../../shared/constants"),o=t("iframer");i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=r.VERSION,t+="/html/bridge-frame.html",t+="#"+this.options.channel},i.prototype.teardown=function(){this.options.container.removeChild(this.el)},e.exports=i},{"../../shared/constants":188,iframer:85}],181:[function(t,e,n){(function(n){"use strict";function i(t){var e;this.options=t||{},this.wrapper=this.options.container||document.body,this.destructor=new o,this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),e=l(this.options.locale,h),this.translation=e.translation,this._initialize()}var r=t("braintree-utilities"),o=t("destructor"),s=t("../../../../bus"),a=t("../../shared/util/util"),c=t("../../shared/util/dom"),u=t("../../shared/constants"),l=t("../../shared/get-localization-data"),h=t("../data/translations.json");i.prototype._initialize=function(){var t=this,e=r.bind(this._handleClickLogout,this);this._createViewContainer(),this._createPayPalName(),this._createEmailNode(),this._createLogoutNode(),r.addEventListener(this.logoutNode,"click",e),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(t.logoutNode,"click",e)}),this.bus.on(s.events.PAYMENT_METHOD_GENERATED,r.bind(this._handlePaymentMethodGenerated,this)),this.bus.on(s.events.PAYMENT_METHOD_CANCELLED,r.bind(this._handlePaymentMethodCancelled,this))},i.prototype._createViewContainer=function(){var t=["display: none","max-width: 500px","overflow: hidden","padding: 16px","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+u.VERSION+"/images/paypal-small.png)","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+u.VERSION+"/images/paypal-small.svg), none","background-position: 20px 50%","background-repeat: no-repeat","background-size: 13px 15px","border-top: 1px solid #d1d4d6","border-bottom: 1px solid #d1d4d6"].join(";");this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedin",this.container.style.cssText=t,this.wrapper.appendChild(this.container)},i.prototype._createPayPalName=function(){var t=["color: #283036","font-size: 13px","font-weight: 800",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 36px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");return this.payPalName=document.createElement("span"),this.payPalName.id="bt-pp-name",this.payPalName.innerHTML="PayPal",this.payPalName.style.cssText=t,this.container.appendChild(this.payPalName)},i.prototype._createEmailNode=function(){var t=["color: #6e787f","font-size: 13px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 5px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.emailNode=document.createElement("span"),this.emailNode.id="bt-pp-email",this.emailNode.style.cssText=t,this.container.appendChild(this.emailNode)},i.prototype._createLogoutNode=function(){var t=["color: #3d95ce","font-size: 11px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"line-height: 20px","margin: 0 0 0 25px","padding: 0","background-color: transparent","border: 0","cursor: pointer","text-decoration: underline","float: right","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.logoutNode=document.createElement("button"),this.logoutNode.id="bt-pp-cancel",this.logoutNode.innerHTML=this.translation.cancel,this.logoutNode.style.cssText=t,this.container.appendChild(this.logoutNode)},i.prototype.show=function(t){this.container.style.display="block",c.setTextContent(this.emailNode,t)},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handleClickLogout=function(t){a.preventDefault(t),this.bus.emit(s.events.PAYMENT_METHOD_CANCELLED,{source:u.PAYPAL_INTEGRATION_NAME})},i.prototype._handlePaymentMethodGenerated=function(t){var e;t.type===u.NONCE_TYPE&&(e=t&&t.details&&t.details.email?t.details.email:"",this.show(e))},i.prototype._handlePaymentMethodCancelled=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.hide()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"../../shared/get-localization-data":191,"../../shared/util/dom":197,"../../shared/util/util":198,"../data/translations.json":178,"braintree-utilities":76,destructor:80}],182:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.wrapper=this.options.container||document.body,this.bus=new o({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var r=t("braintree-utilities"),o=t("../../../../bus"),s=t("../../shared/constants"),a=t("../../shared/get-locale");i.prototype._initialize=function(){this.createViewContainer(),this.options.enablePayPalButton?this.createCheckoutWithPayPalButton():this.createPayWithPayPalButton(),this.bus.on(o.events.PAYMENT_METHOD_GENERATED,r.bind(this._handlePaymentMethodGenerated,this)),this.bus.on(o.events.PAYMENT_METHOD_CANCELLED,r.bind(this._handlePaymentMethodCancelled,this))},i.prototype.createViewContainer=function(){this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedout",this.wrapper.appendChild(this.container),this.loginNode=this.container},i.prototype.createPayWithPayPalButton=function(){var t=document.createElement("a"),e=new Image,n=["max-width: 100%","display: block","width: 100%","height: 100%","outline: none","border: 0"].join(";"),i=["display: block","width: 115px","height: 44px","overflow: hidden"].join(";");t.id="braintree-paypal-button",t.href="#",t.style.cssText=i,e.src=this.options.paypalAssetsUrl+"/pwpp/"+s.VERSION+"/images/pay-with-paypal.png",e.setAttribute("alt","Pay with PayPal"),e.style.cssText=n,t.appendChild(e),this.container.appendChild(t)},i.prototype.createCheckoutWithPayPalButton=function(){var t,e=document.createElement("script"),n={"data-merchant":"merchant-id","data-button":"checkout","data-type":"button","data-color":"blue","data-lc":a(this.options.locale)};e.src="//www.paypalobjects.com/api/button.js",e.async=!0;for(t in n)n.hasOwnProperty(t)&&e.setAttribute(t,n[t]);this.container.appendChild(e)},i.prototype.show=function(){this.container.style.display="block"},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handlePaymentMethodGenerated=function(t){t.type===s.NONCE_TYPE&&this.hide()},i.prototype._handlePaymentMethodCancelled=function(t){t.source===s.PAYPAL_INTEGRATION_NAME&&this.show()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"../../shared/get-locale":190,"braintree-utilities":76}],183:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),this.bus.on(c.events.UI_MODAL_DID_OPEN,a.bind(this.lockWindowSize,this)),this.bus.on(c.events.UI_MODAL_DID_CLOSE,a.bind(this.unlockWindowSize,this))}function r(t){var e=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return{overflow:e.overflow||"",height:t.style.height||""}}function o(){return{html:{node:document.documentElement,styles:r(document.documentElement)},body:{node:document.body,styles:r(document.body)}}}var s=t("../../../../bus"),a=t("braintree-utilities"),c=t("../../shared/constants");i.prototype.lockWindowSize=function(){this.defaultStyles=o(),document.documentElement.style.height="100%",document.documentElement.style.overflow="hidden",document.body.style.height="100%",document.body.style.overflow="hidden"},i.prototype.unlockWindowSize=function(){this.defaultStyles&&(document.documentElement.style.height=this.defaultStyles.html.styles.height,document.documentElement.style.overflow=this.defaultStyles.html.styles.overflow,document.body.style.height=this.defaultStyles.body.styles.height,document.body.style.overflow=this.defaultStyles.body.styles.overflow,delete this.defaultStyles)},i.prototype._handleUIModalDidOpen=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.lockWindowSize()},i.prototype._handleUIModalDidClose=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.unlockWindowSize()},i.prototype.teardown=function(){this.unlockWindowSize(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"braintree-utilities":76}],184:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=document.body,this.bus=new a({merchantUrl:n.location.href,channel:t.channel}),this.options.headless?this._open=this._openHeadless:this._attachBusEvents(),this._initialize()}var r=t("braintree-utilities"),o=t("../../shared/util/browser"),s=t("../../shared/constants"),a=t("../../../../bus"),c=t("iframer");i.prototype._attachBusEvents=function(){this.bus.on(s.events.OPEN_MODAL,r.bind(this.open,this))},i.prototype._initialize=function(){var t=this.options.isHermes?s.HERMES_FRAME_NAME:s.FRAME_NAME;this.el=c({src:this.options.src,name:t,height:this.options.height||"100%",width:this.options.width||"100%",style:{position:o.isMobile()?"absolute":"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"}})},i.prototype.isClosed=function(){return!this.container.contains(this.el)},i.prototype._openHeadless=function(){this.bus.emit(s.events.OPEN_MODAL)},i.prototype._open=function(){r.isFunction(this.options.insertFrameFunction)?this.options.insertFrameFunction(this.el.src):this.container.appendChild(this.el),this.bus.emit(s.events.UI_MODAL_DID_OPEN,{source:s.PAYPAL_INTEGRATION_NAME})},i.prototype.open=function(){this.isClosed()&&this._open()},i.prototype.close=function(){this.isClosed()||(this.container.removeChild(this.el),this.bus.emit(s.events.UI_MODAL_DID_CLOSE,{source:s.PAYPAL_INTEGRATION_NAME}))},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"../../shared/util/browser":196,"braintree-utilities":76,iframer:85}],185:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.spriteSrc=this.options.paypalAssetsUrl+"/pwpp/"+a.VERSION+"/images/pp_overlay_sprite.png",this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),this.destructor=new o,this._create(),this._setupEvents(),this.bus.on(s.events.UI_POPUP_DID_OPEN,r.bind(this._handleUIPopupDidOpen,this)),this.bus.on(s.events.UI_POPUP_DID_CLOSE,r.bind(this._handleUIPopupDidClose,this))}var r=t("braintree-utilities"),o=t("destructor"),s=t("../../../../bus"),a=t("../../shared/constants");i.prototype.open=function(){document.body.contains(this.el)||document.body.appendChild(this.el)},i.prototype.close=function(){document.body.contains(this.el)&&document.body.removeChild(this.el)},i.prototype._handleUIPopupDidClose=function(t){t.source===a.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype._handleUIPopupDidOpen=function(t){t.source===a.PAYPAL_INTEGRATION_NAME&&this.open()},i.prototype._create=function(){this.el=document.createElement("div"),this.el.className="bt-overlay",this._setStyles(this.el,["z-index: 20001","position: fixed","top: 0","left: 0","height: 100%","width: 100%","text-align: center","background: #000","background: rgba(0,0,0,0.7)",'-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=52)"']),this.el.appendChild(this._createCloseIcon()),this.el.appendChild(this._createMessage())},i.prototype._createCloseIcon=function(){return this.closeIcon=document.createElement("div"),this.closeIcon.className="bt-close-overlay",this._setStyles(this.closeIcon,["position: absolute","top: 10px","right: 10px","cursor: pointer","background: url("+this.spriteSrc+") no-repeat 0 -67px","height: 14px","width: 14px"]),this.closeIcon},i.prototype._createMessage=function(){var t=document.createElement("div");return this._setStyles(t,["position: relative","top: 50%","max-width: 350px",'font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif',"font-size: 14px","line-height: 20px","margin: -70px auto 0"]),t.appendChild(this._createLogo()),t.appendChild(this._createExplanation()),t.appendChild(this._createFocusLink()),t},i.prototype._createExplanation=function(){var t=document.createElement("div");return this._setStyles(t,["color: #FFF","margin-bottom: 20px"]),t.innerHTML="Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",t},i.prototype._createLogo=function(){var t=document.createElement("div");return this._setStyles(t,["background: url("+this.spriteSrc+") no-repeat 0 0","width: 94px","height: 25px","margin: 0 auto 26px auto"]),
t},i.prototype._createFocusLink=function(){return this.focusLink=document.createElement("a"),this._setStyles(this.focusLink,["color: #009be1","cursor: pointer"]),this.focusLink.innerHTML="Continue",this.focusLink},i.prototype._setStyles=function(t,e){var n=e.join(";");t.style.cssText=n},i.prototype._setupEvents=function(){var t=this,e=r.bind(this._handleClose,this),n=r.bind(this._handleFocus,this);r.addEventListener(this.closeIcon,"click",e),r.addEventListener(this.focusLink,"click",n),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(t.closeIcon,"click",e),r.removeEventListener(t.focusLink,"click",n)})},i.prototype._handleClose=function(t){t.preventDefault(),this.close(),r.isFunction(this.options.onClose)&&this.options.onClose()},i.prototype._handleFocus=function(t){t.preventDefault(),r.isFunction(this.options.onFocus)&&this.options.onFocus()},i.prototype.teardown=function(){this.bus.teardown(),this.destructor.teardown(),this.close()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"braintree-utilities":76,destructor:80}],186:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=this.options.container||document.body,this.el=this.options.el,this.destructor=new o,this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var r=t("braintree-utilities"),o=t("destructor"),s=t("../../../../bus"),a=t("../../shared/constants");i.prototype._initialize=function(){var t=this;r.isFunction(this.el)||(null!=this.el?(this.el=r.normalizeElement(this.el),this.destructor.registerFunctionForTeardown(function(){t.clear()})):this.el=this.create()),this.bus.on(s.events.PAYMENT_METHOD_GENERATED,r.bind(this._handlePaymentMethodGenerated,this)),this.bus.on(s.events.PAYMENT_METHOD_CANCELLED,r.bind(this._handlePaymentMethodCancelled,this))},i.prototype.create=function(){var t=this,e=document.createElement("input");return e.name="payment_method_nonce",e.type="hidden",this.container.appendChild(e),this.destructor.registerFunctionForTeardown(function(){t.container.removeChild(e)}),e},i.prototype.value=function(t){r.isFunction(this.el)?this.el(t):this.el.value=t},i.prototype.clear=function(){this.value("")},i.prototype._handlePaymentMethodCancelled=function(t){t.source===a.PAYPAL_INTEGRATION_NAME&&this.clear()},i.prototype._handlePaymentMethodGenerated=function(t){t.type===a.NONCE_TYPE&&this.value(t.nonce)},i.prototype.teardown=function(){this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"braintree-utilities":76,destructor:80}],187:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new o({merchantUrl:n.location.href,channel:this.options.channel}),t.isHermes?(this.name=r.HERMES_POPUP_NAME,this.popupHeight=r.HERMES_POPUP_HEIGHT,this.popupWidth=r.HERMES_POPUP_WIDTH):(this.name=r.POPUP_NAME,this.popupHeight=r.POPUP_HEIGHT,this.popupWidth=r.POPUP_WIDTH)}var r=t("../../shared/constants"),o=t("../../../../bus"),s=t("../../shared/useragent/browser");i.prototype._getPopupOptions=function(){return["height="+this.popupHeight,"width="+this.popupWidth,"top="+this._getTopPosition(),"left="+this._getLeftPosition(),r.POPUP_OPTIONS].join(",")},i.prototype._centerPosition=function(t,e,n){return(t-e)/2+n},i.prototype._getTopPosition=function(){var t=window.outerHeight||document.documentElement.clientHeight,e="undefined"==typeof window.screenY?window.screenTop:window.screenY;return this._centerPosition(t,this.popupHeight,e)},i.prototype._getLeftPosition=function(){var t=window.outerWidth||document.documentElement.clientWidth,e="undefined"==typeof window.screenX?window.screenLeft:window.screenX;return this._centerPosition(t,this.popupWidth,e)},i.prototype.isClosed=function(){return this.el?this.el.closed:void 0},i.prototype.open=function(){this.el||(this.el=window.open(this.options.src,this.name,this._getPopupOptions()),this.focus(),this.bus.emit(o.events.UI_POPUP_DID_OPEN,{source:r.PAYPAL_INTEGRATION_NAME}))},i.prototype.close=function(){this.el&&((s.isIE8()&&!this.isClosed()||!s.isIE8())&&this.el.close(),this.bus.emit(o.events.UI_POPUP_DID_CLOSE,{source:r.PAYPAL_INTEGRATION_NAME}))},i.prototype.focus=function(){this.el&&this.el.focus()},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../../bus":129,"../../shared/constants":188,"../../shared/useragent/browser":192}],188:[function(t,e,n){"use strict";var i,r="2.14.5",o=["GET_CLIENT_TOKEN","GET_CLIENT_OPTIONS","OPEN_MODAL","CLOSE_APP","FOCUS_APP","UI_MODAL_DID_OPEN","UI_MODAL_DID_CLOSE"],s={LEGACY_ONETIME:"Legacy Onetime",HERMES_ONETIME:"Hermes Onetime",LEGACY_FUTURE_PAYMENTS:"Legacy Future Payments",HERMES_BILLING_AGREEMENTS:"Hermes Billing Agreements"};for(n.VERSION=r,n.POPUP_NAME="braintree_paypal_popup",n.HERMES_POPUP_NAME="PPFrameRedirect",n.FRAME_NAME="braintree-paypal-frame",n.HERMES_FRAME_NAME="PPFrameRedirect",n.POPUP_PATH="/pwpp/"+r+"/html/braintree-frame.html",n.POPUP_OPTIONS="resizable,scrollbars",n.POPUP_HEIGHT=470,n.POPUP_WIDTH=410,n.HERMES_POPUP_HEIGHT=535,n.HERMES_POPUP_WIDTH=450,n.BRIDGE_FRAME_NAME="bt-proxy-frame",n.HERMES_SUPPORTED_CURRENCIES=["USD","GBP","EUR","AUD","CAD","DKK","NOK","PLN","SEK","CHF","TRY","BRL"],n.HERMES_SUPPORTED_COUNTRIES=["US","GB","AU","CA","ES","FR","DE","IT","NL","NO","PL","CH","TR","DK","BE","AT"],n.NONCE_TYPE="PayPalAccount",n.PAYPAL_INTEGRATION_NAME="PayPal",n.ILLEGAL_XHR_ERROR="Illegal XHR request attempted",n.CONFIGURATION_TYPES=s,n.events={},i=0;i<o.length;i++)n.events[o[i]]="paypal:"+o[i]},{}],189:[function(t,e,n){"use strict";e.exports={us:"en_us",gb:"en_uk",uk:"en_uk",de:"de_de",fr:"fr_fr",it:"it_it",es:"es_es",ca:"en_ca",au:"en_au",at:"de_de",be:"en_us",ch:"de_de",dk:"da_dk",nl:"nl_nl",no:"no_no",pl:"pl_pl",se:"sv_se",tr:"tr_tr",bg:"en_us",cy:"en_us",hr:"en_us",is:"en_us",kh:"en_us",mt:"en_us",my:"en_us",ru:"ru_ru"}},{}],190:[function(t,e,n){"use strict";function i(t){return-1!==t.indexOf("_")&&5===t.length}function r(t){var e,n;for(e in s)s.hasOwnProperty(e)&&(e===t?n=s[e]:s[e]===t&&(n=s[e]));return n}function o(t){var e,n;return t=t?t.toLowerCase():"us",t=t.replace(/-/g,"_"),e=i(t)?t:r(t),e?(n=e.split("_"),[n[0],n[1].toUpperCase()].join("_")):"en_US"}var s=t("../shared/data/country-code-lookup");e.exports=o},{"../shared/data/country-code-lookup":189}],191:[function(t,e,n){"use strict";function i(t){var e=t?t.toLowerCase().replace(/-/g,"_"):"us";return-1!==e.indexOf("_")&&(e=e.split("_")[1]),e=s[e]?e:"us","uk"===e&&(e="gb"),e}function r(t,e){return t=t.toLowerCase(),e[t]?e[t]:e.en_us}function o(t,e){var n=i(t),o=a(t),s=r(o,e);return{country:n,locale:o,translation:s}}var s=t("./data/country-code-lookup"),a=t("./get-locale");e.exports=o},{"./data/country-code-lookup":189,"./get-locale":190}],192:[function(t,e,n){"use strict";function i(){return d.matchUserAgent("Android")&&!r()}function r(){return d.matchUserAgent("Chrome")||d.matchUserAgent("CriOS")}function o(){return d.matchUserAgent("Firefox")}function s(){return d.matchUserAgent("Trident")||d.matchUserAgent("MSIE")}function a(){return d.matchUserAgent(/MSIE 8\.0/)}function c(){return d.matchUserAgent("Opera")||d.matchUserAgent("OPR")}function u(){return c()&&"[object OperaMini]"===Object.prototype.toString.call(window.operamini)}function l(){return d.matchUserAgent("Safari")&&!r()&&!i()}function h(){return f.isIos()&&!r()&&!l()}function p(){var t=/Version\/[\w\.]+ Chrome\/[\w\.]+ Mobile/;return f.isAndroid()&&d.matchUserAgent(t)}var d=t("./useragent"),f=t("./platform");e.exports={isAndroid:i,isChrome:r,isFirefox:o,isIE:s,isIE8:a,isOpera:c,isOperaMini:u,isSafari:l,isIosWebView:h,isAndroidWebView:p}},{"./platform":194,"./useragent":195}],193:[function(t,e,n){"use strict";function i(){return!r()&&(a.isAndroid()||a.isIpod()||a.isIphone()||s.matchUserAgent("IEMobile"))}function r(){return a.isIpad()||a.isAndroid()&&!s.matchUserAgent("Mobile")}function o(){return!i()&&!r()}var s=t("./useragent"),a=t("./platform");e.exports={isMobile:i,isTablet:r,isDesktop:o}},{"./platform":194,"./useragent":195}],194:[function(t,e,n){"use strict";function i(){return c.matchUserAgent("Android")}function r(){return c.matchUserAgent("iPad")}function o(){return c.matchUserAgent("iPod")}function s(){return c.matchUserAgent("iPhone")&&!o()}function a(){return r()||o()||s()}var c=t("./useragent");e.exports={isAndroid:i,isIpad:r,isIpod:o,isIphone:s,isIos:a}},{"./useragent":195}],195:[function(t,e,n){"use strict";function i(){return o}function r(t){var e=n.getNativeUserAgent(),i=e.match(t);return i?!0:!1}var o=window.navigator.userAgent;n.getNativeUserAgent=i,n.matchUserAgent=r},{}],196:[function(t,e,n){"use strict";function i(){return r()&&window.outerWidth<600}function r(){return m.test(f)}function o(){return Boolean(window.postMessage)}function s(){if(l.isOperaMini())return!1;if(h.isDesktop())return!0;if(h.isMobile()||h.isTablet()){if(l.isIE())return!1;if(p.isAndroid())return l.isAndroidWebView()?!1:!0;if(p.isIos())return l.isChrome()?!1:l.isSafari()&&d.matchUserAgent(/OS (?:8_1|8_0|8)(?!_\d)/i)?!1:l.isIosWebView()?!1:!0}return!1}function a(){if(l.isIE8())return!1;try{return window.self===window.top}catch(t){return!1}}function c(){return l.isIE()}function u(){var t=null,e="";try{new ActiveXObject("")}catch(n){e=n.name}try{t=Boolean(new ActiveXObject("htmlfile"))}catch(n){t=!1}return t="ReferenceError"!==e&&t===!1?!1:!0,!t}var l=t("../useragent/browser"),h=t("../useragent/device"),p=t("../useragent/platform"),d=t("../useragent/useragent"),f=window.navigator.userAgent,m=/[Mm]obi|tablet|iOS|Android|IEMobile|Windows\sPhone/;e.exports={isMobile:i,isMobileDevice:r,detectedPostMessage:o,isPopupSupported:s,isOverlaySupported:a,isBridgeIframeRequired:c,isMetroBrowser:u}},{"../useragent/browser":192,"../useragent/device":193,"../useragent/platform":194,"../useragent/useragent":195}],197:[function(t,e,n){"use strict";function i(t,e){var n="innerText";document&&document.body&&"textContent"in document.body&&(n="textContent"),t[n]=e}e.exports={setTextContent:i}},{}],198:[function(t,e,n){"use strict";function i(){var t,e,n="";for(t=0;32>t;t++)e=Math.floor(16*Math.random()),n+=e.toString(16);return n}function r(t){return/^(true|1)$/i.test(t)}function o(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;")}function s(t){var e,n,i,r,o,s,a,c,u=t.indexOf("?"),l={};if(u>=0&&(t=t.substr(u+1)),0===t.length)return null;for(e=t.split("&"),n=0,i=e.length;i>n;n++)r=e[n],o=r.indexOf("="),s=r.substr(0,o),c=r.substr(o+1),a=decodeURIComponent(c),a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"false"===a&&(a=!1),(null==a||"true"===a)&&(a=!0),l[s]=a;return l}function a(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function c(t){var e;return e=Boolean(t.amount)&&Boolean(t.currency)?d.CONFIGURATION_TYPES.HERMES_ONETIME:d.CONFIGURATION_TYPES.LEGACY_ONETIME}function u(t){var e;return e=Boolean(t.paypal.billingAgreementsEnabled)?d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS:d.CONFIGURATION_TYPES.LEGACY_FUTURE_PAYMENTS}function l(t,e){var n;return n=Boolean(e.singleUse)?c(e):u(t)}function h(t,e){var n=l(t,e);return n===d.CONFIGURATION_TYPES.HERMES_ONETIME||n===d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS}function p(t,e){var n=l(t,e);return n===d.CONFIGURATION_TYPES.HERMES_ONETIME}var d=t("../constants"),f="function"==typeof String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/,"")},m="function"==typeof window.btoa?function(t){return window.btoa(t)}:function(t){for(var e,n,i,r,o,s,a,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="",l=0;l<t.length;)e=t.charCodeAt(l++),n=t.charCodeAt(l++),i=t.charCodeAt(l++),r=e>>2,o=(3&e)<<4|n>>4,s=(15&n)<<2|i>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),u=u+c.charAt(r)+c.charAt(o)+c.charAt(s)+c.charAt(a);return u};e.exports={trim:f,btoa:m,generateUid:i,castToBoolean:r,htmlEscape:o,parseUrlParams:s,preventDefault:a,isHermesConfiguration:h,isOnetimeHermesConfiguration:p,getConfigurationType:l}},{"../constants":188}]},{},[1])(1)});
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(a,j){var c={},b=c.lib={},f=function(){},l=b.Base={extend:function(a){f.prototype=this;var d=new f;a&&d.mixIn(a);d.hasOwnProperty("init")||(d.init=function(){d.$super.init.apply(this,arguments)});d.init.prototype=d;d.$super=this;return d},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
u=b.WordArray=l.extend({init:function(a,d){a=this.words=a||[];this.sigBytes=d!=j?d:4*a.length},toString:function(a){return(a||m).stringify(this)},concat:function(a){var d=this.words,M=a.words,e=this.sigBytes;a=a.sigBytes;this.clamp();if(e%4)for(var b=0;b<a;b++)d[e+b>>>2]|=(M[b>>>2]>>>24-8*(b%4)&255)<<24-8*((e+b)%4);else if(65535<M.length)for(b=0;b<a;b+=4)d[e+b>>>2]=M[b>>>2];else d.push.apply(d,M);this.sigBytes+=a;return this},clamp:function(){var D=this.words,d=this.sigBytes;D[d>>>2]&=4294967295<<
32-8*(d%4);D.length=a.ceil(d/4)},clone:function(){var a=l.clone.call(this);a.words=this.words.slice(0);return a},random:function(D){for(var d=[],b=0;b<D;b+=4)d.push(4294967296*a.random()|0);return new u.init(d,D)}}),k=c.enc={},m=k.Hex={stringify:function(a){var d=a.words;a=a.sigBytes;for(var b=[],e=0;e<a;e++){var c=d[e>>>2]>>>24-8*(e%4)&255;b.push((c>>>4).toString(16));b.push((c&15).toString(16))}return b.join("")},parse:function(a){for(var d=a.length,b=[],e=0;e<d;e+=2)b[e>>>3]|=parseInt(a.substr(e,
2),16)<<24-4*(e%8);return new u.init(b,d/2)}},y=k.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],e=0;e<a;e++)c.push(String.fromCharCode(b[e>>>2]>>>24-8*(e%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],e=0;e<b;e++)c[e>>>2]|=(a.charCodeAt(e)&255)<<24-8*(e%4);return new u.init(c,b)}},z=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(y.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return y.parse(unescape(encodeURIComponent(a)))}},
x=b.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new u.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=z.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(b){var d=this._data,c=d.words,e=d.sigBytes,l=this.blockSize,k=e/(4*l),k=b?a.ceil(k):a.max((k|0)-this._minBufferSize,0);b=k*l;e=a.min(4*b,e);if(b){for(var x=0;x<b;x+=l)this._doProcessBlock(c,x);x=c.splice(0,b);d.sigBytes-=e}return new u.init(x,e)},clone:function(){var a=l.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});b.Hasher=x.extend({cfg:l.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new ja.HMAC.init(a,
c)).finalize(b)}}});var ja=c.algo={};return c}(Math);
(function(a){var j=CryptoJS,c=j.lib,b=c.Base,f=c.WordArray,j=j.x64={};j.Word=b.extend({init:function(a,b){this.high=a;this.low=b}});j.WordArray=b.extend({init:function(b,c){b=this.words=b||[];this.sigBytes=c!=a?c:8*b.length},toX32:function(){for(var a=this.words,b=a.length,c=[],m=0;m<b;m++){var y=a[m];c.push(y.high);c.push(y.low)}return f.create(c,this.sigBytes)},clone:function(){for(var a=b.clone.call(this),c=a.words=this.words.slice(0),k=c.length,f=0;f<k;f++)c[f]=c[f].clone();return a}})})();
(function(){function a(){return f.create.apply(f,arguments)}for(var j=CryptoJS,c=j.lib.Hasher,b=j.x64,f=b.Word,l=b.WordArray,b=j.algo,u=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],k=[],m=0;80>m;m++)k[m]=a();b=b.SHA512=c.extend({_doReset:function(){this._hash=new l.init([new f.init(1779033703,4089235720),new f.init(3144134277,2227873595),new f.init(1013904242,4271175723),new f.init(2773480762,1595750129),new f.init(1359893119,2917565137),new f.init(2600822924,725511199),new f.init(528734635,4215389547),new f.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=this._hash.words,
f=c[0],j=c[1],d=c[2],l=c[3],e=c[4],m=c[5],N=c[6],c=c[7],aa=f.high,O=f.low,ba=j.high,P=j.low,ca=d.high,Q=d.low,da=l.high,R=l.low,ea=e.high,S=e.low,fa=m.high,T=m.low,ga=N.high,U=N.low,ha=c.high,V=c.low,r=aa,n=O,G=ba,E=P,H=ca,F=Q,Y=da,I=R,s=ea,p=S,W=fa,J=T,X=ga,K=U,Z=ha,L=V,t=0;80>t;t++){var A=k[t];if(16>t)var q=A.high=a[b+2*t]|0,g=A.low=a[b+2*t+1]|0;else{var q=k[t-15],g=q.high,v=q.low,q=(g>>>1|v<<31)^(g>>>8|v<<24)^g>>>7,v=(v>>>1|g<<31)^(v>>>8|g<<24)^(v>>>7|g<<25),C=k[t-2],g=C.high,h=C.low,C=(g>>>19|
h<<13)^(g<<3|h>>>29)^g>>>6,h=(h>>>19|g<<13)^(h<<3|g>>>29)^(h>>>6|g<<26),g=k[t-7],$=g.high,B=k[t-16],w=B.high,B=B.low,g=v+g.low,q=q+$+(g>>>0<v>>>0?1:0),g=g+h,q=q+C+(g>>>0<h>>>0?1:0),g=g+B,q=q+w+(g>>>0<B>>>0?1:0);A.high=q;A.low=g}var $=s&W^~s&X,B=p&J^~p&K,A=r&G^r&H^G&H,ka=n&E^n&F^E&F,v=(r>>>28|n<<4)^(r<<30|n>>>2)^(r<<25|n>>>7),C=(n>>>28|r<<4)^(n<<30|r>>>2)^(n<<25|r>>>7),h=u[t],la=h.high,ia=h.low,h=L+((p>>>14|s<<18)^(p>>>18|s<<14)^(p<<23|s>>>9)),w=Z+((s>>>14|p<<18)^(s>>>18|p<<14)^(s<<23|p>>>9))+(h>>>
0<L>>>0?1:0),h=h+B,w=w+$+(h>>>0<B>>>0?1:0),h=h+ia,w=w+la+(h>>>0<ia>>>0?1:0),h=h+g,w=w+q+(h>>>0<g>>>0?1:0),g=C+ka,A=v+A+(g>>>0<C>>>0?1:0),Z=X,L=K,X=W,K=J,W=s,J=p,p=I+h|0,s=Y+w+(p>>>0<I>>>0?1:0)|0,Y=H,I=F,H=G,F=E,G=r,E=n,n=h+g|0,r=w+A+(n>>>0<h>>>0?1:0)|0}O=f.low=O+n;f.high=aa+r+(O>>>0<n>>>0?1:0);P=j.low=P+E;j.high=ba+G+(P>>>0<E>>>0?1:0);Q=d.low=Q+F;d.high=ca+H+(Q>>>0<F>>>0?1:0);R=l.low=R+I;l.high=da+Y+(R>>>0<I>>>0?1:0);S=e.low=S+p;e.high=ea+s+(S>>>0<p>>>0?1:0);T=m.low=T+J;m.high=fa+W+(T>>>0<J>>>0?1:
0);U=N.low=U+K;N.high=ga+X+(U>>>0<K>>>0?1:0);V=c.low=V+L;c.high=ha+Z+(V>>>0<L>>>0?1:0)},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,f=8*a.sigBytes;b[f>>>5]|=128<<24-f%32;b[(f+128>>>10<<5)+30]=Math.floor(c/4294967296);b[(f+128>>>10<<5)+31]=c;a.sigBytes=4*b.length;this._process();return this._hash.toX32()},clone:function(){var a=c.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});j.SHA512=c._createHelper(b);j.HmacSHA512=c._createHmacHelper(b)})();
(function(){var a=CryptoJS,j=a.enc.Utf8;a.algo.HMAC=a.lib.Base.extend({init:function(a,b){a=this._hasher=new a.init;"string"==typeof b&&(b=j.parse(b));var f=a.blockSize,l=4*f;b.sigBytes>l&&(b=a.finalize(b));b.clamp();for(var u=this._oKey=b.clone(),k=this._iKey=b.clone(),m=u.words,y=k.words,z=0;z<f;z++)m[z]^=1549556828,y[z]^=909522486;u.sigBytes=k.sigBytes=l;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=
this._hasher;a=b.finalize(a);b.reset();return b.finalize(this._oKey.clone().concat(a))}})})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
f)).finalize(b)}}});var s=p.algo={};return p}(Math);
(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
sha256
*/
var CryptoJS=CryptoJS||function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},
x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,
d)).finalize(c)}}});var w=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=
c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(a,m){var r={},f=r.lib={},g=function(){},l=f.Base={extend:function(a){g.prototype=this;var b=new g;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
p=f.WordArray=l.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=m?b:4*a.length},toString:function(a){return(a||q).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var j=0;j<a;j++)b[c+j>>>2]|=(d[j>>>2]>>>24-8*(j%4)&255)<<24-8*((c+j)%4);else if(65535<d.length)for(j=0;j<a;j+=4)b[c+j>>>2]=d[j>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var n=this.words,b=this.sigBytes;n[b>>>2]&=4294967295<<
32-8*(b%4);n.length=a.ceil(b/4)},clone:function(){var a=l.clone.call(this);a.words=this.words.slice(0);return a},random:function(n){for(var b=[],d=0;d<n;d+=4)b.push(4294967296*a.random()|0);return new p.init(b,n)}}),y=r.enc={},q=y.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var j=b[c>>>2]>>>24-8*(c%4)&255;d.push((j>>>4).toString(16));d.push((j&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new p.init(d,b/2)}},G=y.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new p.init(d,b)}},fa=y.Utf8={stringify:function(a){try{return decodeURIComponent(escape(G.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return G.parse(unescape(encodeURIComponent(a)))}},
h=f.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new p.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=fa.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(n){var b=this._data,d=b.words,c=b.sigBytes,j=this.blockSize,l=c/(4*j),l=n?a.ceil(l):a.max((l|0)-this._minBufferSize,0);n=l*j;c=a.min(4*n,c);if(n){for(var h=0;h<n;h+=j)this._doProcessBlock(d,h);h=d.splice(0,n);b.sigBytes-=c}return new p.init(h,c)},clone:function(){var a=l.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});f.Hasher=h.extend({cfg:l.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){h.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new ga.HMAC.init(a,
d)).finalize(b)}}});var ga=r.algo={};return r}(Math);
(function(a){var m=CryptoJS,r=m.lib,f=r.Base,g=r.WordArray,m=m.x64={};m.Word=f.extend({init:function(a,p){this.high=a;this.low=p}});m.WordArray=f.extend({init:function(l,p){l=this.words=l||[];this.sigBytes=p!=a?p:8*l.length},toX32:function(){for(var a=this.words,p=a.length,f=[],q=0;q<p;q++){var G=a[q];f.push(G.high);f.push(G.low)}return g.create(f,this.sigBytes)},clone:function(){for(var a=f.clone.call(this),p=a.words=this.words.slice(0),g=p.length,q=0;q<g;q++)p[q]=p[q].clone();return a}})})();
(function(){function a(){return g.create.apply(g,arguments)}for(var m=CryptoJS,r=m.lib.Hasher,f=m.x64,g=f.Word,l=f.WordArray,f=m.algo,p=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],y=[],q=0;80>q;q++)y[q]=a();f=f.SHA512=r.extend({_doReset:function(){this._hash=new l.init([new g.init(1779033703,4089235720),new g.init(3144134277,2227873595),new g.init(1013904242,4271175723),new g.init(2773480762,1595750129),new g.init(1359893119,2917565137),new g.init(2600822924,725511199),new g.init(528734635,4215389547),new g.init(1541459225,327033209)])},_doProcessBlock:function(a,f){for(var h=this._hash.words,
g=h[0],n=h[1],b=h[2],d=h[3],c=h[4],j=h[5],l=h[6],h=h[7],q=g.high,m=g.low,r=n.high,N=n.low,Z=b.high,O=b.low,$=d.high,P=d.low,aa=c.high,Q=c.low,ba=j.high,R=j.low,ca=l.high,S=l.low,da=h.high,T=h.low,v=q,s=m,H=r,E=N,I=Z,F=O,W=$,J=P,w=aa,t=Q,U=ba,K=R,V=ca,L=S,X=da,M=T,x=0;80>x;x++){var B=y[x];if(16>x)var u=B.high=a[f+2*x]|0,e=B.low=a[f+2*x+1]|0;else{var u=y[x-15],e=u.high,z=u.low,u=(e>>>1|z<<31)^(e>>>8|z<<24)^e>>>7,z=(z>>>1|e<<31)^(z>>>8|e<<24)^(z>>>7|e<<25),D=y[x-2],e=D.high,k=D.low,D=(e>>>19|k<<13)^
(e<<3|k>>>29)^e>>>6,k=(k>>>19|e<<13)^(k<<3|e>>>29)^(k>>>6|e<<26),e=y[x-7],Y=e.high,C=y[x-16],A=C.high,C=C.low,e=z+e.low,u=u+Y+(e>>>0<z>>>0?1:0),e=e+k,u=u+D+(e>>>0<k>>>0?1:0),e=e+C,u=u+A+(e>>>0<C>>>0?1:0);B.high=u;B.low=e}var Y=w&U^~w&V,C=t&K^~t&L,B=v&H^v&I^H&I,ha=s&E^s&F^E&F,z=(v>>>28|s<<4)^(v<<30|s>>>2)^(v<<25|s>>>7),D=(s>>>28|v<<4)^(s<<30|v>>>2)^(s<<25|v>>>7),k=p[x],ia=k.high,ea=k.low,k=M+((t>>>14|w<<18)^(t>>>18|w<<14)^(t<<23|w>>>9)),A=X+((w>>>14|t<<18)^(w>>>18|t<<14)^(w<<23|t>>>9))+(k>>>0<M>>>
0?1:0),k=k+C,A=A+Y+(k>>>0<C>>>0?1:0),k=k+ea,A=A+ia+(k>>>0<ea>>>0?1:0),k=k+e,A=A+u+(k>>>0<e>>>0?1:0),e=D+ha,B=z+B+(e>>>0<D>>>0?1:0),X=V,M=L,V=U,L=K,U=w,K=t,t=J+k|0,w=W+A+(t>>>0<J>>>0?1:0)|0,W=I,J=F,I=H,F=E,H=v,E=s,s=k+e|0,v=A+B+(s>>>0<k>>>0?1:0)|0}m=g.low=m+s;g.high=q+v+(m>>>0<s>>>0?1:0);N=n.low=N+E;n.high=r+H+(N>>>0<E>>>0?1:0);O=b.low=O+F;b.high=Z+I+(O>>>0<F>>>0?1:0);P=d.low=P+J;d.high=$+W+(P>>>0<J>>>0?1:0);Q=c.low=Q+t;c.high=aa+w+(Q>>>0<t>>>0?1:0);R=j.low=R+K;j.high=ba+U+(R>>>0<K>>>0?1:0);S=l.low=
S+L;l.high=ca+V+(S>>>0<L>>>0?1:0);T=h.low=T+M;h.high=da+X+(T>>>0<M>>>0?1:0)},_doFinalize:function(){var a=this._data,f=a.words,h=8*this._nDataBytes,g=8*a.sigBytes;f[g>>>5]|=128<<24-g%32;f[(g+128>>>10<<5)+30]=Math.floor(h/4294967296);f[(g+128>>>10<<5)+31]=h;a.sigBytes=4*f.length;this._process();return this._hash.toX32()},clone:function(){var a=r.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});m.SHA512=r._createHelper(f);m.HmacSHA512=r._createHmacHelper(f)})();

var WePay=WePay||{};WePay.call_queue=[];WePay.set_endpoint=function(domain){switch(domain){case"stage":WePay.endpoint="https://stage.wepayapi.com";WePay.domain="https://stage.wepay.com";break;case"production":WePay.endpoint="https://www.wepayapi.com";WePay.domain="https://www.wepay.com";break;case"vm":WePay.endpoint="http://vm.wepay.com";WePay.domain="http://vm.wepay.com";break;default:return{"error":"invalid_request","error_description":"that is an invalid domain: please use stage or production"};}
if(!WePay.messenger&&document.readyState==="complete"){WePay.setup_messenger();}};WePay.tags=WePay.tags||{'device_token':0,'uuid':function(){var s=[];var hexDigits="0123456789abcdef";for(var i=0;i<36;i++){s[i]=hexDigits.substr(Math.floor(Math.random()*0x10),1);}
s[14]="4";s[19]=hexDigits.substr((s[19]&0x3)|0x8,1);s[8]=s[13]=s[18]=s[23]="-";return s.join("");},'generate':function(session_id){var div=document.createElement("div");var div_div=document.createElement("div");var div_img=document.createElement("img");var div_script=document.createElement("script");var div_object=document.createElement("object");var div_object_param=document.createElement("param");var div_object_div=document.createElement("div");div.id="WePay-tags";div.style.position="absolute";div.style.left="-1000px";div_div.style.background="url('https://t.wepay.com/fp/clear.png?org_id=ncwzrc4k&session_id="+session_id+"&m=1')";div_img.src="https://t.wepay.com/fp/clear.png?org_id=ncwzrc4k&session_id="+session_id+"&m=2";div_img.alt="";div_script.src="https://t.wepay.com/fp/check.js?org_id=ncwzrc4k&session_id="+session_id;div_script.type="text/javascript";div_script.async="true";div_object.type="application/x-shockwave-flash";div_object.data="https://t.wepay.com/fp/fp.swf?org_id=ncwzrc4k&session_id="+session_id;div_object.width=1;div_object.height=1;div_object.id="obj_id";div_object_param.name="movie";div_object_param.value="https://t.wepay.com/fp/fp.swf?org_id=ncwzrc4k&session_id="+session_id;div_object.appendChild(div_object_param);div_object.appendChild(div_object_div);div.appendChild(div_div);div.appendChild(div_img);div.appendChild(div_script);div.appendChild(div_object);return div;},'enable_device':function(session_id){this.device_token=session_id;},'insert':function(session_id){session_id=session_id||this.device_token||WePay.tags.uuid();if(!document.getElementById('WePay-tags')){document.body.appendChild(WePay.tags.generate(session_id));}
return session_id;}};WePay.setup_messenger=function(){if(!WePay.messenger&&WePay.endpoint){WePay.messenger=document.createElement('iframe');WePay.messenger.loaded=false;WePay.messenger.id="WePay-Messenger";WePay.messenger.src=WePay.endpoint+"/api/messenger";WePay.messenger.setAttribute("style","display:none; width:1px; height:1px;");WePay.messenger.setAttribute("width","0");WePay.messenger.setAttribute("height","0");document.body.appendChild(WePay.messenger);if(!document.getElementById(WePay.messenger.id)){WePay.messenger=null;}
device_id=WePay.tags.insert();setTimeout(WePay.tags.enable_device.bind(WePay.tags,device_id),5000);}};try{window.attachEvent("onload",WePay.setup_messenger);}catch(exception){window.addEventListener("load",WePay.setup_messenger,false);}
WePay.messenger_timeout=false;WePay.handle_messenger_timeout=function(e){WePay.messenger_timeout=false;if(WePay.messenger&&WePay.messenger.loaded){return;}
for(var i=0;i<WePay.call_queue.length;i++){var call=WePay.call_queue[i];WePay.trigger(call.callback_name,{"error":"timeout","error_description":"Timeout on WePay API call handler initialization"});}}
WePay.check_params=function(params,expected_params){for(required in WePay.credit_card.expected_params){if(typeof expected_params[required]=="object"){if(typeof params[required]=="object"){var val=WePay.check_params(params[required],expected_params[required]);if(val!==true){return val;}}else{return{error:"invalid_request",error_description:"The "+required+" parameter expects an object: "+(typeof params[required])+" provided."}}}else if(typeof expected_params[required]=="boolean"){if(expected_params[required]&&!params[required]){return{error:"invalid_request",error_description:"The "+required+" parameter is required."}}}}
for(param in params){if(typeof expected_params[param]=="undefined"){return{error:"invalid_request",error_description:"The "+param+" parameter is unexpected."}}}
return true;};WePay.listen=WePay.listen||function(event_name,response_function){WePay.callback_events=WePay.callback_events||{};WePay.callback_events[event_name]=WePay.callback_events[event_name]||[];WePay.callback_events[event_name].push(response_function);};WePay.trigger=WePay.trigger||function(event_name,data){var callbacks=WePay.callback_events[event_name];if(callbacks){for(var i=0;i<callbacks.length;i++){var callback=callbacks[i];callback(data);}}};WePay.receiveMessage=WePay.receiveMessage||function(e){try{var data=WePay.JSON.parse(e.data);}catch(e){}
if(data){WePay.trigger(data.wepay_message_type,data);}};WePay.listen("api_call_response",function(data){var callback=data.callback_function_name;WePay.trigger(callback,data.response);});WePay.listen("messenger_loaded",function(data){WePay.messenger.loaded=true;if(WePay.messenger_timeout){window.clearTimeout(WePay.messenger_timeout);}
for(var i=0;i<WePay.call_queue.length;i++){var call=WePay.call_queue[i];WePay.call(call.path,call.parameters,call.callback_name);}
WePay.call_queue=[];});if(!WePay.listening){if(window.addEventListener){window.addEventListener("message",WePay.receiveMessage,false);}else if(window.attachEvent){window.attachEvent("onmessage",WePay.receiveMessage,false);}
WePay.listening=true;}
WePay.call=function(call_path,arguments,callback_function_name){if(typeof window.postMessage=='undefined'){window.clearTimeout(WePay.messenger_timeout);WePay.messenger_timeout=false;WePay.trigger(callback_function_name,{"error":"browser","error_description":"This browser does not support postMessage which is required for tokenization."});}
var data={"wepay_message_type":"api_call","wepay_call_path":call_path,"call_parameters":arguments,"callback_function_name":callback_function_name};if(WePay.messenger&&WePay.messenger.loaded){WePay.messenger.contentWindow.postMessage(WePay.JSON.stringify(data),"*");}else{WePay.call_queue.push({"path":call_path,"parameters":arguments,"callback_name":callback_function_name});if((!WePay.messenger||!WePay.messenger.loaded)&&!WePay.messenger_timeout){WePay.messenger_timeout=window.setTimeout(WePay.handle_messenger_timeout,30000);}}};WePay.credit_card=WePay.credit_card||{};WePay.credit_card.expected_params={'client_id':true,'user_name':true,'email':true,'reference_id':false,'cc_number':true,'cvv':true,'expiration_month':true,'expiration_year':true,'auto_update':false,'address':{'address1':false,'address2':false,'city':false,'state':false,'region':false,'zip':false,'postcode':false,'country':false},'device_token':false};WePay.credit_card.create=function(params,callback){var check=WePay.check_params(params,WePay.credit_card.expected_params);if(check.error){return check;}
var name='wepay_callback_'+(new Date()).getTime()+"_"+Math.floor(Math.random()*1000);WePay.listen(name,callback);if(WePay.tags.device_token){params.device_token=WePay.tags.device_token;}
WePay.call("/v2/credit_card/create",params,name);return true;};WePay.validate=function(param,value){switch(param){case"client_id":if(typeof value!="Number"||value%1!=0){return{"error":"invalid_parameter","error_description":"client_id must be a numeric value"};}
break;case"user_name":if(!value.match(/^.+\s+.+$/)){return{"error":"invalid_parameter","error_description":"First and last name required"};}
break;case"email":if(!value.match(/^.+@.+$/)||value.match(/^.+\s+.+$/)){return{"error":"invalid_parameter","error_description":"First and last name required"};}
break;case"cc_number":if(!value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)||!WePay.credit_card.luhn(value)){return{"error":"invalid_parameter","error_description":"Credit card number is invalid"};}
break;case"cvv":if(!value.match(/^\d{3,4}$/)){return{"error":"invalid_parameter","error_description":"CVV is invalid"};}
break;case"expiration_month":if(!value.match(/^\d{1,2}$/)||value>12||value<1){return{"error":"invalid_parameter","error_description":"Expiration month is invalid"};}
break;case"expiration_year":if(!value.match(/^\d{4}$/)){return{"error":"invalid_parameter","error_description":"Expiration year is invalid"};}
if(value<=(new Date()).getFullYear()){return{"error":"invalid_parameter","error_description":"Expiration year must be "+(new Date()).getFullYear()+" or greater"};}
break;}
return{"passed":true,"error":false,"error_description":false};};WePay.credit_card.luhn=function(value){var checksum=0;for(var i=value.length-1;i>=0;i-=2){checksum+=parseInt(value.charAt(i),10);}
for(var i=value.length-2;i>=0;i-=2){var iVal=parseInt(value.charAt(i),10)*2;checksum+=iVal>=10?iVal-9:iVal;}
return(checksum%10==0);};WePay.bank_account=WePay.bank_account||{};WePay.bank_account.expected_params={'client_id':true,'email':true};WePay.bank_account.create=function(params,callback){var check=WePay.check_params(params,WePay.bank_account.expected_params);if(check.error){return check;}
window.open(WePay.domain+'/bankaccountpicker/index/'+params['client_id']+'/'+encodeURIComponent(params['email']),'bank_popup','height=690,width=379,left=0,top=0,resizable=0');window.addEventListener('message',function(event){if(event.data.indexOf('messenger_loaded')!==-1){return;}
callback(event.data);});return true;};if(typeof JSON==='object'&&JSON.stringify){WePay.JSON={};WePay.JSON.stringify=JSON.stringify;WePay.JSON.parse=JSON.parse;}else{WePay.JSON={};WePay.JSON.parse=function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}}
WePay.JSON.stringify=function(o){if(o===null){return'null';}
var type=typeof o;if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return''+o;}
if(type==='string'){return WePay.JSON.quote_string(o);}
if(type==='object'){if(typeof o.toJSON==='function'){return WePay.JSON.stringify(o.toJSON());}
if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push(WePay.JSON.stringify(o[i])||'null');}
return'['+ret.join(',')+']';}
var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=WePay.JSON.quote_string(k);}else{continue;}
type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
val=WePay.JSON.stringify(o[k]);pairs.push(name+':'+val);}
return'{'+pairs.join(',')+'}';}};WePay.JSON.quote_string=function(string){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};}
(function() {
/* Start angularLocalStorage */
'use strict';
var angularLocalStorage = angular.module('LocalStorageModule', []);

angularLocalStorage.provider('localStorageService', function() {
  
  // You should set a prefix to avoid overwriting any local storage variables from the rest of your app
  // e.g. localStorageServiceProvider.setPrefix('youAppName');
  // With provider you can use config as this:
  // myApp.config(function (localStorageServiceProvider) {
  //    localStorageServiceProvider.prefix = 'yourAppName';
  // });
  this.prefix = 'ls';

  // You could change web storage type localstorage or sessionStorage
  this.storageType = 'localStorage';

  // Cookie options (usually in case of fallback)
  // expiry = Number of days before cookies expire // 0 = Does not expire
  // path = The web path the cookie represents
  this.cookie = {
    expiry: 30,
    path: '/'
  };

  // Send signals for each of the following actions?
  this.notify = {
    setItem: true,
    removeItem: false
  };

  // Setter for the prefix
  this.setPrefix = function(prefix) {
    this.prefix = prefix;
  };

   // Setter for the storageType
   this.setStorageType = function(storageType) {
       this.storageType = storageType;
   };

  // Setter for cookie config
  this.setStorageCookie = function(exp, path) {
    this.cookie = {
      expiry: exp,
      path: path
    };
  };

  // Setter for cookie domain
  this.setStorageCookieDomain = function(domain) {
    this.cookie.domain = domain;
  };

  // Setter for notification config
  // itemSet & itemRemove should be booleans
  this.setNotify = function(itemSet, itemRemove) {
    this.notify = {
      setItem: itemSet,
      removeItem: itemRemove
    };
  };

  this.$get = ['$rootScope', '$window', '$document', function($rootScope, $window, $document) {

    var prefix = this.prefix;
    var cookie = this.cookie;
    var notify = this.notify;
    var storageType = this.storageType;
    var webStorage = $window[storageType];

    // When Angular's $document is not available
    if (!$document) {
      $document = document;
    }

    // If there is a prefix set in the config lets use that with an appended period for readability
    if (prefix.substr(-1) !== '.') {
      prefix = !!prefix ? prefix + '.' : '';
    }

    // Checks the browser to see if local storage is supported
    var browserSupportsLocalStorage = (function () {
      try {
        var supported = (storageType in $window && $window[storageType] !== null);

        // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
        // is available, but trying to call .setItem throws an exception.
        //
        // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage
        // that exceeded the quota."
        var key = prefix + '__' + Math.round(Math.random() * 1e7);
        if (supported) {
          webStorage.setItem(key, '');
          webStorage.removeItem(key);
        }

        return true;
      } catch (e) {
        storageType = 'cookie';
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
    }());

    // Directly adds a value to local storage
    // If local storage is not available in the browser use cookies
    // Example use: localStorageService.add('library','angular');
    var addToLocalStorage = function (key, value) {

      // If this browser does not support local storage use cookies
      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: 'cookie'});
        }
        return addToCookies(key, value);
      }

      // Let's convert undefined values to null to get the value consistent
      if (typeof value === "undefined") {
        value = null;
      }

      try {
        if (angular.isObject(value) || angular.isArray(value)) {
          value = angular.toJson(value);
        }
        webStorage.setItem(prefix + key, value);
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: this.storageType});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return addToCookies(key, value);
      }
      return true;
    };

    // Directly get a value from local storage
    // Example use: localStorageService.get('library'); // returns 'angular'
    var getFromLocalStorage = function (key) {

      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
        return getFromCookies(key);
      }

      var item = webStorage.getItem(prefix + key);
      // angular.toJson will convert null to 'null', so a proper conversion is needed
      // FIXME not a perfect solution, since a valid 'null' string can't be stored
      if (!item || item === 'null') {
        return null;
      }

      if (item.charAt(0) === "{" || item.charAt(0) === "[") {
        return angular.fromJson(item);
      }

      return item;
    };

    // Remove an item from local storage
    // Example use: localStorageService.remove('library'); // removes the key/value pair of library='angular'
    var removeFromLocalStorage = function (key) {
      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        if (notify.removeItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: 'cookie'});
        }
        return removeFromCookies(key);
      }

      try {
        webStorage.removeItem(prefix+key);
        if (notify.removeItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: this.storageType});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return removeFromCookies(key);
      }
      return true;
    };

    // Return array of keys for local storage
    // Example use: var keys = localStorageService.keys()
    var getKeysForLocalStorage = function () {

      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return false;
      }

      var prefixLength = prefix.length;
      var keys = [];
      for (var key in webStorage) {
        // Only return keys that are for this app
        if (key.substr(0,prefixLength) === prefix) {
          try {
            keys.push(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return [];
          }
        }
      }
      return keys;
    };

    // Remove all data for this app from local storage
    // Also optionally takes a regular expression string and removes the matching key-value pairs
    // Example use: localStorageService.clearAll();
    // Should be used mostly for development purposes
    var clearAllFromLocalStorage = function (regularExpression) {

      regularExpression = regularExpression || "";
      //accounting for the '.' in the prefix when creating a regex
      var tempPrefix = prefix.slice(0, -1);
      var testRegex = new RegExp(tempPrefix + '.' + regularExpression);

      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return clearAllFromCookies();
      }

      var prefixLength = prefix.length;

      for (var key in webStorage) {
        // Only remove items that are for this app and match the regular expression
        if (testRegex.test(key)) {
          try {
            removeFromLocalStorage(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
            return clearAllFromCookies();
          }
        }
      }
      return true;
    };

    // Checks the browser to see if cookies are supported
    var browserSupportsCookies = function() {
      try {
        return navigator.cookieEnabled ||
          ("cookie" in $document && ($document.cookie.length > 0 ||
          ($document.cookie = "test").indexOf.call($document.cookie, "test") > -1));
      } catch (e) {
          $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
          return false;
      }
    };

    // Directly adds a value to cookies
    // Typically used as a fallback is local storage is not available in the browser
    // Example use: localStorageService.cookie.add('library','angular');
    var addToCookies = function (key, value) {

      if (typeof value === "undefined") {
        return false;
      }

      if (!browserSupportsCookies()) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      try {
        var expiry = '',
            expiryDate = new Date(),
            cookieDomain = '';

        if (value === null) {
          // Mark that the cookie has expired one day ago
          expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
          value = '';
        } else if (cookie.expiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        }
        if (!!key) {
          var cookiePath = "; path=" + cookie.path;
          if(cookie.domain){
            cookieDomain = "; domain=" + cookie.domain;
          }
          $document.cookie = prefix + key + "=" + encodeURIComponent(value) + expiry + cookiePath + cookieDomain;
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
        return false;
      }
      return true;
    };

    // Directly get a value from a cookie
    // Example use: localStorageService.cookie.get('library'); // returns 'angular'
    var getFromCookies = function (key) {
      if (!browserSupportsCookies()) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      var cookies = $document.cookie && $document.cookie.split(';') || [];
      for(var i=0; i < cookies.length; i++) {
        var thisCookie = cookies[i];
        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1,thisCookie.length);
        }
        if (thisCookie.indexOf(prefix + key + '=') === 0) {
          return decodeURIComponent(thisCookie.substring(prefix.length + key.length + 1, thisCookie.length));
        }
      }
      return null;
    };

    var removeFromCookies = function (key) {
      addToCookies(key,null);
    };

    var clearAllFromCookies = function () {
      var thisCookie = null, thisKey = null;
      var prefixLength = prefix.length;
      var cookies = $document.cookie.split(';');
      for(var i = 0; i < cookies.length; i++) {
        thisCookie = cookies[i];
        
        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1, thisCookie.length);
        }

        var key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));
        removeFromCookies(key);
      }
    };

    var getStorageType = function() {
      return storageType;
    };

    return {
      isSupported: browserSupportsLocalStorage,
      getStorageType: getStorageType,
      set: addToLocalStorage,
      add: addToLocalStorage, //DEPRECATED
      get: getFromLocalStorage,
      keys: getKeysForLocalStorage,
      remove: removeFromLocalStorage,
      clearAll: clearAllFromLocalStorage,
      cookie: {
        set: addToCookies,
        add: addToCookies, //DEPRECATED
        get: getFromCookies,
        remove: removeFromCookies,
        clearAll: clearAllFromCookies
      }
    };
  }];
});
}).call(this);


angular.module('angularPayments', []);angular.module('angularPayments')

.factory('Common', [function(){

  var ret = {};


  // expiry is a string "mm / yy[yy]"
  ret['parseExpiry'] = function(value){
    var month, prefix, year, _ref;

    value = value || ''

    value = value.replace(/\s/g, '');
    _ref = value.split('/', 2), month = _ref[0], year = _ref[1];

    if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
      prefix = (new Date).getFullYear();
      prefix = prefix.toString().slice(0, 2);
      year = prefix + year;
    }

    month = parseInt(month, 10);
    year = parseInt(year, 10);
    
    return {
      month: month,
      year: year
    };
  }

  return ret;

}]);angular.module('angularPayments')

.factory('Cards', [function(){

  var defaultFormat = /(\d{1,4})/g;
  var defaultInputFormat =  /(?:^|\s)(\d{4})$/;

        var cards = [
    {
      type: 'maestro',
      pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'dinersclub',
      pattern: /^(36|38|30[0-5])/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [14],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'laser',
      pattern: /^(6706|6771|6709)/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'jcb',
      pattern: /^35/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'unionpay',
      pattern: /^62/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: false
    }, {
      type: 'discover',
      pattern: /^(6011|65|64[4-9]|622)/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'mastercard',
      pattern: /^5[1-5]/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'amex',
      pattern: /^3[47]/,
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      inputFormat: /^(\d{4}|\d{4}\s\d{6})$/,
      length: [15],
      cvcLength: [3, 4],
      luhn: true
    }, {
      type: 'visa',
      pattern: /^4/,
      format: defaultFormat,
      inputFormat: defaultInputFormat,
      length: [13, 14, 15, 16],
      cvcLength: [3],
      luhn: true
    }
  ];


  var _fromNumber = function(num){
      var card, i, len;

      num = (num + '').replace(/\D/g, '');

      for (i = 0, len = cards.length; i < len; i++) {

        card = cards[i];

        if (card.pattern.test(num)) {
          return card;
        }

      }
  }

  var _fromType = function(type) {
      var card, i, len;

      for (i = 0, len = cards.length; i < len; i++) {

        card = cards[i];
        
        if (card.type === type) {
          return card;
        }

      }
  };

  return {
      fromNumber: function(val) { return _fromNumber(val) },
      fromType: function(val) { return _fromType(val) },
      defaultFormat: function() { return defaultFormat;},
      defaultInputFormat: function() { return defaultInputFormat;}
  }

}]);angular.module('angularPayments')


.factory('_Format',['Cards', 'Common', '$filter', function(Cards, Common, $filter){

  var _formats = {}

  var _hasTextSelected = function($target) {
      var ref;
      
      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== $target.prop('selectionEnd')) {
          return true;
      }
      
      if (typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? typeof ref.createRange === "function" ? ref.createRange().text : void 0 : void 0 : void 0) {
          return true;
      }
      
      return false;
    };

  // card formatting

  var _formatCardNumber = function(e) {
      var $target, card, digit, length, re, upperLength, value;
      
      digit = String.fromCharCode(e.which);
      $target = angular.element(e.currentTarget);
      value = $target.val();
      card = Cards.fromNumber(value + digit);
      length = (value.replace(/\D/g, '') + digit).length;
      
      upperLength = 16;
      
      if (card) {
        upperLength = card.length[card.length.length - 1];
      }
      
      if (length >= upperLength) {
        return;
      }

      if (!/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46) {
        e.preventDefault();
        return;
      }

      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
        return;
      }

      re = Cards.defaultInputFormat();
      if (card) {
          re = card.inputFormat;
      }

      if (re.test(value)) {
        e.preventDefault();
        return $target.val(value + ' ' + digit);

      } else if (re.test(value + digit)) {
        e.preventDefault();
        return $target.val(value + digit + ' ');

      }
  };

  var _restrictCardNumber = function(e) {
      var $target, card, digit, value;
      
      $target = angular.element(e.currentTarget);
      digit = String.fromCharCode(e.which);
      
      if(!/^\d+$/.test(digit)) {
        return;
      }
      
      if(_hasTextSelected($target)) {
        return;
      }
      
      value = ($target.val() + digit).replace(/\D/g, '');
      card = Cards.fromNumber(value);
      
      if(card) {
        if(!(value.length <= card.length[card.length.length - 1])){
          e.preventDefault();
        }
      } else {
        if(!(value.length <= 16)){
          e.preventDefault();
        }
      }
  };

  var _formatBackCardNumber = function(e) {
      var $target, value;
      
      $target = angular.element(e.currentTarget);
      value = $target.val();
      
      if(e.meta) {
        return;
      }
      
      if(e.which !== 8) {
        return;
      }
      
      if(($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
        return;
      }
      
      if(/\d\s$/.test(value) && !e.meta && e.keyCode >= 46) {
        e.preventDefault();
        return $target.val(value.replace(/\d\s$/, ''));
      } else if (/\s\d?$/.test(value)) {
        e.preventDefault();
        return $target.val(value.replace(/\s\d?$/, ''));
      }
    };

  var _getFormattedCardNumber = function(num) {
      var card, groups, upperLength, ref;
      
      card = Cards.fromNumber(num);
      
      if (!card) {
        return num;
      }
      
      upperLength = card.length[card.length.length - 1];
      num = num.replace(/\D/g, '');
      num = num.slice(0, +upperLength + 1 || 9e9);
      
      if(card.format.global) {
        return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
      } else {
        groups = card.format.exec(num);
          
        if (groups != null) {
          groups.shift();
        }

        return groups != null ? groups.join(' ') : void 0;
      }
    };

  var _reFormatCardNumber = function(e) {
    return setTimeout(function() {
      var $target, value;
      $target = angular.element(e.target);
    
      value = $target.val();
      value = _getFormattedCardNumber(value);
      return $target.val(value);
    });
  };

  var _parseCardNumber = function(value) {
    return value != null ? value.replace(/\s/g, '') : value;
  };

  _formats['card'] = function(elem, ctrl){
    elem.bind('keypress', _restrictCardNumber);
    elem.bind('keypress', _formatCardNumber);
    elem.bind('keydown', _formatBackCardNumber);
    elem.bind('paste', _reFormatCardNumber);

    ctrl.$parsers.push(_parseCardNumber);
    ctrl.$formatters.push(_getFormattedCardNumber);
  }


  // cvc

  _formatCVC = function(e){
    $target = angular.element(e.currentTarget);
    digit = String.fromCharCode(e.which);
    
    if (!/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46) {
      e.preventDefault();
      return;
    }

    val = $target.val() + digit;
    
    if(val.length <= 4){
      return;
    } else {
      e.preventDefault();
      return;
    }
  }

  _formats['cvc'] = function(elem){
    elem.bind('keypress', _formatCVC)
  }

  // expiry

  _restrictExpiry = function(e) {
    var $target, digit, value;
    
    $target = angular.element(e.currentTarget);
    digit = String.fromCharCode(e.which);
    
    if (!/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46) {
      e.preventDefault();
      return;
    }
    
    if(_hasTextSelected($target)) {
      return;
    }
    
    value = $target.val() + digit;
    value = value.replace(/\D/g, '');
    
    if (value.length > 6) {
      e.preventDefault()
      return;
    }
  };

  _formatExpiry = function(e) {
    var $target, digit, val;
    
    digit = String.fromCharCode(e.which);
    
    if (!/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46) {
      e.preventDefault();
      return;
    }
    
    $target = angular.element(e.currentTarget);
    val = $target.val() + digit;
    
    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
      e.preventDefault();
      return $target.val("0" + val + " / ");

    } else if (/^\d\d$/.test(val)) {
      e.preventDefault();
      return $target.val("" + val + " / ");

    }
  };

  _formatForwardExpiry = function(e) {
    var $target, digit, val;
    
    digit = String.fromCharCode(e.which);
    
    if (!/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46) {
      return;
    }
    
    $target = angular.element(e.currentTarget);
    val = $target.val();
    
    if (/^\d\d$/.test(val)) {
      return $target.val("" + val + " / ");
    }
  };

  _formatForwardSlash = function(e) {
    var $target, slash, val;
    
    slash = String.fromCharCode(e.which);
    
    if (slash !== '/') {
      return;
    }
    
    $target = angular.element(e.currentTarget);
    val = $target.val();
    
    if (/^\d$/.test(val) && val !== '0') {
      return $target.val("0" + val + " / ");
    }
  };

  _formatBackExpiry = function(e) {
    var $target, value;
    
    if (e.meta) {
      return;
    }
    
    $target = angular.element(e.currentTarget);
    value = $target.val();
    
    if (e.which !== 8) {
      return;
    }
    
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    
    if (/\d(\s|\/)+$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\d(\s|\/)*$/, ''));

    } else if (/\s\/\s?\d?$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\s\/\s?\d?$/, ''));

    }
  };

  var _parseExpiry = function(value) {
    if(value != null) {
      var obj = Common.parseExpiry(value);
      var expiry = new Date(obj.year, obj.month-1);
      return $filter('date')(expiry, 'MM/yyyy');
    }
    return null;
  };

  var _getFormattedExpiry = function(value) {
    if(value != null) {
      var obj = Common.parseExpiry(value);
      var expiry = new Date(obj.year, obj.month-1);
      return $filter('date')(expiry, 'MM / yyyy');
    }
    return null;
  };


  _formats['expiry'] = function(elem, ctrl){
    elem.bind('keypress', _restrictExpiry);
    elem.bind('keypress', _formatExpiry);
    elem.bind('keypress', _formatForwardSlash);
    elem.bind('keypress', _formatForwardExpiry);
    elem.bind('keydown', _formatBackExpiry);

    ctrl.$parsers.push(_parseExpiry);
    ctrl.$formatters.push(_getFormattedExpiry);
  }

  return function(type, elem, ctrl){
    if(!_formats[type]){

      types = Object.keys(_formats);

      errstr  = 'Unknown type for formatting: "'+type+'". ';
      errstr += 'Should be one of: "'+types.join('", "')+'"';

      throw errstr;
    }
    return _formats[type](elem, ctrl);
  }

}])

.directive('paymentsFormat', ['$window', '_Format', function($window, _Format){
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attr, ctrl){
        _Format(attr.paymentsFormat, elem, ctrl);
      }
    }
}]);angular.module('angularPayments')



.factory('_Validate', ['Cards', 'Common', '$parse', function(Cards, Common, $parse){

  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }

  var _luhnCheck = function(num) {
    var digit, digits, odd, sum, i, len;

    odd = true;
    sum = 0;
    digits = (num + '').split('').reverse();

    for (i = 0, len = digits.length; i < len; i++) {

      digit = digits[i];
      digit = parseInt(digit, 10);

      if ((odd = !odd)) {
        digit *= 2;
      }

      if (digit > 9) {
        digit -= 9;
      }

      sum += digit;

    }

    return sum % 10 === 0;
  };

  var _validators = {}

  _validators['cvc'] = function(cvc, ctrl, scope, attr){
      var ref, ref1;

      // valid if empty - let ng-required handle empty
      if(cvc == null || cvc.length == 0) return true;

      if (!/^\d+$/.test(cvc)) {
        return false;
      }

      var type;
      if(attr.paymentsTypeModel) {
          var typeModel = $parse(attr.paymentsTypeModel);
          type = typeModel(scope);
      }

      if (type) {
        return ref = cvc.length, __indexOf.call((ref1 = Cards.fromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
      } else {
        return cvc.length >= 3 && cvc.length <= 4;
      }
  }

  _validators['card'] = function(num, ctrl, scope, attr){
      var card, ref, typeModel;

      if(attr.paymentsTypeModel) {
          typeModel = $parse(attr.paymentsTypeModel);
      }

      var clearCard = function(){
          if(typeModel) {
              typeModel.assign(scope, null);
          }
          ctrl.$card = null;
      };

      // valid if empty - let ng-required handle empty
      if(num == null || num.length == 0){
        clearCard();
        return true;
      }

      num = (num + '').replace(/\s+|-/g, '');

      if (!/^\d+$/.test(num)) {
        clearCard();
        return false;
      }

      card = Cards.fromNumber(num);

      if(!card) {
        clearCard();
        return false;
      }

      ctrl.$card = angular.copy(card);

      if(typeModel) {
          typeModel.assign(scope, card.type);
      }

      ret = (ref = num.length, __indexOf.call(card.length, ref) >= 0) && (card.luhn === false || _luhnCheck(num));

      return ret;
  }

  _validators['expiry'] = function(val){
    // valid if empty - let ng-required handle empty
    if(val == null || val.length == 0) return true;

    obj = Common.parseExpiry(val);

    month = obj.month;
    year = obj.year;

    var currentTime, expiry, prefix;

    if (!(month && year)) {
      return false;
    }

    if (!/^\d+$/.test(month)) {
      return false;
    }

    if (!/^\d+$/.test(year)) {
      return false;
    }

    if (!(parseInt(month, 10) <= 12)) {
      return false;
    }

    if (year.length === 2) {
      prefix = (new Date).getFullYear();
      prefix = prefix.toString().slice(0, 2);
      year = prefix + year;
    }

    expiry = new Date(year, month);
    currentTime = new Date;
    expiry.setMonth(expiry.getMonth() - 1);
    expiry.setMonth(expiry.getMonth() + 1, 1);

    return expiry > currentTime;
  }

  return function(type, val, ctrl, scope, attr){
    if(!_validators[type]){

      types = Object.keys(_validators);

      errstr  = 'Unknown type for validation: "'+type+'". ';
      errstr += 'Should be one of: "'+types.join('", "')+'"';

      throw errstr;
    }
    return _validators[type](val, ctrl, scope, attr);
  }
}])


.factory('_ValidateWatch', ['_Validate', function(_Validate){

    var _validatorWatches = {}

    _validatorWatches['cvc'] = function(type, ctrl, scope, attr){
        if(attr.paymentsTypeModel) {
            scope.$watch(attr.paymentsTypeModel, function(newVal, oldVal) {
                if(newVal != oldVal) {
                    var valid = _Validate(type, ctrl.$modelValue, ctrl, scope, attr);
                    ctrl.$setValidity(type, valid);
                }
            });
        }
    }

    return function(type, ctrl, scope, attr){
        if(_validatorWatches[type]){
            return _validatorWatches[type](type, ctrl, scope, attr);
        }
    }
}])

.directive('paymentsValidate', ['$window', '_Validate', '_ValidateWatch', function($window, _Validate, _ValidateWatch){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attr, ctrl){

      var type = attr.paymentsValidate;

      _ValidateWatch(type, ctrl, scope, attr);

      var validateFn = function(val) {
          var valid = _Validate(type, val, ctrl, scope, attr);
          ctrl.$setValidity(type, valid);
          return valid ? val : undefined;
      };

      ctrl.$formatters.push(validateFn);
      ctrl.$parsers.push(validateFn);
    }
  }
}])
;angular.module('angularPayments')

.directive('stripeForm', ['$window', '$parse', 'Common', function($window, $parse, Common) {
    
  // directive intercepts form-submission, obtains Stripe's cardToken using stripe.js
  // and then passes that to callback provided in stripeForm, attribute.

  // data that is sent to stripe is filtered from scope, looking for valid values to
  // send and converting camelCase to snake_case, e.g expMonth -> exp_month


  // filter valid stripe-values from scope and convert them from camelCase to snake_case
  _getDataToSend = function(data){
           
    var possibleKeys = ['number', 'expMonth', 'expYear', 
                    'cvc', 'name','addressLine1', 
                    'addressLine2', 'addressCity',
                    'addressState', 'addressZip',
                    'addressCountry']
    
    var camelToSnake = function(str){
      return str.replace(/([A-Z])/g, function(m){
        return "_"+m.toLowerCase();
      });
    }

    var ret = {};

    for(i in possibleKeys){
        if(data.hasOwnProperty(possibleKeys[i])){
            ret[camelToSnake(possibleKeys[i])] = angular.copy(data[possibleKeys[i]]);
        }
    }

    ret['number'] = (ret['number'] || '').replace(/ /g,'');

    return ret;
  }

  return {
    restrict: 'A',
    link: function(scope, elem, attr) {

      if(!$window.Stripe){
          throw 'stripeForm requires that you have stripe.js installed. Include https://js.stripe.com/v2/ into your html.';
      }

      var form = angular.element(elem);

      form.bind('submit', function() {

        expMonthUsed = scope.expMonth ? true : false;
        expYearUsed = scope.expYear ? true : false;

        if(!(expMonthUsed && expYearUsed)){
          exp = Common.parseExpiry(scope.expiry)
          scope.expMonth = exp.month
          scope.expYear = exp.year
        }

        var button = form.find('button');
        button.prop('disabled', true);

        if(form.hasClass('ng-valid')) {
          

          $window.Stripe.createToken(_getDataToSend(scope), function() {
            var args = arguments;
            scope.$apply(function() {
              scope[attr.stripeForm].apply(scope, args);
            });
            button.prop('disabled', false);

          });

        } else {
          scope.$apply(function() {
            scope[attr.stripeForm].apply(scope, [400, {error: 'Invalid form submitted.'}]);
          });
          button.prop('disabled', false);
        }

        scope.expMonth = null;
        scope.expYear  = null;

      });
    }
  }
}]);

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', [ 'ionic', 'LocalStorageModule', 'ngCordova', 'templatescache', 'angularPayments' ]);

// set configurations
starter.constant('config', window.app_config);

starter.config([ '$httpProvider', '$ionicConfigProvider', function($httpProvider, $ionicConfigProvider) {

	// interceptor for ajax http request
	$httpProvider.interceptors.push('httpAjaxInterceptor');

	$ionicConfigProvider.backButton.previousTitleText(false).text('');
} ]);

starter.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
		ionic.Platform.fullScreen();
		ionic.Platform.isFullScreen = true;
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('tabs', {
		url : "/tab",
		abstract : true,
		templateUrl : "tabs.html"
	})

	.state('tabs.splash', {
		url : "/splash",
		views : {
			'public-view' : {
				templateUrl : "splash.html",
				controller : 'SplashCtrl'
			}
		}
	})

	.state('tabs.welcome', {
		url : "/welcome",
		views : {
			'public-view' : {
				templateUrl : "welcome.html",
				controller : 'WelcomeCtrl'
			}
		}
	})

	.state('tabs.start', {
		url : "/start",
		views : {
			'public-view' : {
				templateUrl : "start.html",
				controller : 'StartCtrl'
			}
		}
	})

	.state('tabs.login', {
		url : "/login",
		views : {
			'public-view' : {
				templateUrl : "login.html",
				controller : 'LoginCtrl'
			}
		}
	})

	.state('tabs.signup', {
		url : "/signup",
		views : {
			'public-view' : {
				templateUrl : "signup.html",
				controller : 'SignupCtrl'
			}
		}
	})

	.state('app', {
		url : "/app",
		cache : false,
		templateUrl : "menu.html",
		controller : 'AppCtrl'
	})

	.state('tabs.home', {
		url : "/home",
		cache : false,
		views : {
			'public-view' : {
				templateUrl : "home.html",
				controller : 'HomeCtrl'
			}
		}
	})

	.state('tabs.code', {
		url : "/code",
		cache : false,
		views : {
			'public-view' : {
				templateUrl : "code.html",
				controller : 'codeCtrl'
			}
		}
	})

	.state('supporter', {
		url : "/supporter",
		cache : false,
		templateUrl : "menu_supporter.html",
		controller : 'AppCtrl'
	})

	.state('tabs.supporter_home', {
		url : "/supporter_home",
		views : {
			'public-view' : {
				templateUrl : "supporter_home.html",
				controller : 'SupporterHomeCtrl'
			}
		}
	})

	.state('tabs.merchants', {
		url : "/merchants",
		views : {
			'public-view' : {
				templateUrl : "merchants.html",
				controller : 'MerchantsCtrl'
			}
		}
	})

	.state('tabs.payment', {
		url : "/payment",
		views : {
			'public-view' : {
				templateUrl : "payment.html",
				controller : 'PaymentCtrl'
			}
		}
	})

	.state('tabs.card', {
		url : "/card",
		views : {
			'public-view' : {
				templateUrl : "supporter_card.html",
				controller : 'SupporterCardCtrl'
			}
		}
	})

	.state('tabs.payment_cash', {
		url : "/payment_cash",
		views : {
			'public-view' : {
				templateUrl : "payment_cash.html",
				controller : 'PaymentCashCtrl'
			}
		}
	})

	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('tab/splash');
});

angular.module('myFastClick', []).run(function() {
	FastClick.attach(document.body);
});

starter.controller('MerchantsCtrl',
	[
		'$rootScope',
		'$scope',
		'$state',
		'$stateParams',
		'config',
		'utils',
		'fundModel',
		'userDataService',
		'localStorageService',
		'popupTimer',
		function($rootScope, $scope, $state, $stateParams, config, utils, fundModel, userDataService, localStorageService,
			popupTimer) {
			$scope.view_title = "Supporter";
			$scope.hide_back_btn = false;
			$scope.merchants = null;

			var _org = userDataService.getOrg();
			$scope.sms = (_org) ? true : false;
			$rootScope.show_spinner();
			var _orgPromise = fundModel.get_merchants(_org.id);

			_orgPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				if (JsonData.data.success) {
					$scope.merchants = JsonData.data.merchant;
				}
			}, function(status) {
				$rootScope.hide_spinner();
			});

			$scope.org_select = function(org) {
				console.log(org);
				userDataService.setOrg(org);
				$state.go('tabs.welcome');
			}

			$scope.triggerCall = function(number){
				document.location.href = 'tel:' + number
			}

		} ]);

starter.controller('PaymentCashCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'userDataService',
	'utils',
	'localStorageService',
	'loginModel',
	'popupTimer',
	'cardModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel,
		popupTimer, cardModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = false;
		$scope.org = userDataService.getOrg();
		$scope.formData = {};

		// custom form validation handling
		var error_class = "ng-invalid";
		$scope.form_error = {};

		$scope.show_message = function(text) {

			$scope.modaldata = {
				title : "Cash Payment Failed!",
				body : text
			};
			popupTimer.error($scope);
		};
		$scope.$watch('formData.cell_no.value', function (newValue) {
			if (newValue && newValue.length > 10) {
				$scope.formData.cell_no.value = newValue.substring(0, 10);
			}
			// Must be checked against undefined or you get problems when removing text
			if (newValue != undefined) {
				$scope.commentLength = 10 - newValue.length;
			}
		});
		var validate_form = function() {
			var isValid = true;
			$scope.form_error = {
				first_name : "",
				last_name : "",
				code : "",
				cell_no : ""
			};
			if ($scope.formData.first_name == "" || $scope.formData.first_name == undefined) {
				$scope.show_message("FirstName is missing!");
				$scope.form_error.name = error_class;
				isValid = false;
			} else if ($scope.formData.last_name == "" || $scope.formData.last_name == undefined) {
				$scope.show_message("Last Name is missing!");
				$scope.form_error.last_name = error_class;
				isValid = false;
			} else if ($scope.formData.email == "" || utils.is_valid_email($scope.formData.email) == false) {
				$scope.show_message("Email is missing or invalid!");
				$scope.form_error.email = error_class;
				isValid = false;
			} else if ($scope.formData.cell_no == "" || $scope.formData.cell_no == undefined) {
				$scope.show_message("Phone number is missing!");
				$scope.form_error.cell_no = error_class;
				isValid = false;
			} else if ($scope.formData.cell_no.length < 10 || $scope.formData.cell_no.length > 11) {
				$scope.show_message("Phone number is not valid, it cannot be less or more than 10 digits long!");
				$scope.form_error.cell_no = error_class;
				isValid = false;
			} else if ($scope.formData.code == "" || $scope.formData.code == undefined) {
				$scope.show_message("code number is missing!");
				$scope.form_error.code = error_class;
				isValid = false;
			}

			return isValid;
		};

		var show_error = function(title) {
			$scope.modaldata = {
				title : title
			};
			popupTimer.error($scope);
		}
		$scope.submit_cash_btn = function() {
			if (validate_form() == false) {
				return false;
			}

			$scope.isDisabled = true;
			// Disable the submit button to prevent repeated clicks
			$rootScope.show_spinner();

			var _org = userDataService.getOrg();
			// Signup first
			userDataService.setUserSignupData($scope.signup);
			var userSignupData = {
				email : $scope.formData.email,
				first_name : $scope.formData.first_name,
				last_name : $scope.formData.last_name,
				username : $scope.formData.email,
				cell_no : $scope.formData.cell_no,
				password : $scope.formData.cell_no,
				new_password : $scope.formData.cell_no,
				password_confirm : $scope.formData.cell_no,
				org_id : _org.id,
				client_id : "1234567890",
				grant_type : "password",
				redirect_uri : ""
			};

			$rootScope.show_spinner();
			var _signupPromise = loginModel.doLogin(userSignupData);
			_signupPromise.then(function(JsonData) {
				utils.debug(JsonData);

				if (JsonData.success) {
					var data = JsonData.data;
					utils.debug(data);
					userDataService.setUserSignupData(data);
					localStorageService.set('access_token', JsonData.data.access_token);
					localStorageService.set('name', $scope.formData.first_name + ' ' + $scope.formData.last_name);
					localStorageService.set('email', $scope.formData.email );

					utils.debug("user_type: " + JsonData.data.user_type);
					if (JsonData.data.user_type == "Supporter") {
						var paymentData = {
							first_name : $scope.formData.first_name,
							last_name : $scope.formData.last_name,
							email : $scope.formData.email,
							cell_no : $scope.formData.cell_no,
							code : $scope.formData.code,
							org_id : $scope.org.id,
							access_token : localStorageService.get('access_token')
						};

						var _cash_payment_promise = cardModel.cash_payment(paymentData);

						_cash_payment_promise.then(function(json_data) {
							utils.debug(json_data);
							$rootScope.hide_spinner();
							if (json_data.success) {

								var discount_data = {};
								discount_data.code = json_data.code;
								discount_data.organization = json_data.organisation;
								userDataService.set_discount_data(discount_data);
								$rootScope.hide_spinner();
								$state.go('tabs.card');

							} else {
								$rootScope.hide_spinner();
								show_error(json_data.message);
							}
						}, function(error) {
							$rootScope.hide_spinner();
							show_error('An error occured while processing your transaction.');
							utils.debug(error);
						});
						return false;
					} else {
						$rootScope.hide_spinner();
						$state.go('tabs.home');
					}

				} else {
					$scope.modaldata = {
						title : "Signup Failed",
						body : JsonData.message
					};
					popupTimer.error($scope, function() {
						// $state.go('app.photo');
					});

				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});

		};

	} ]);

starter.controller('PaymentCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'userDataService',
	'utils',
	'localStorageService',
	'loginModel',
	'popupTimer',
	'cardModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel,
		popupTimer, cardModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = false;
		$scope.org = userDataService.getOrg();
		$scope.formData = {};
		$scope.formData = {
			name : "h a",
			number : "4111 1111 1111",
			expiry : "12/16",
			email : "imhassan66@gmail.com",
			zipcode : '21022',
			cvv : "123"/*,
			code : "1457185923"*/
		};

		$scope.formData = {
			name : "",
			number : "",
			expiry : "",
			email : "",
			zipcode : '',
			cvv : "",
			/*code : ""*/
		};

		var show_error = function(title) {
			$scope.modaldata = {
				title : title
			};
			popupTimer.error($scope);
		}
		$scope.submitCCForm = function() {

			// check if name is empty
			/*if ($scope.formData.name == '' || $scope.formData.name == undefined) {
				show_error('Please add your full name.');
				return false;
			}*/
			// check if number is empty
			if ($scope.formData.number == '' || $scope.formData.number == undefined) {
				show_error('Please add card number.');
				return false;
			}

			/*if ($scope.formData.email == '' || $scope.formData.email == undefined) {
				show_error('Please add your email address.');
				return false;
			}*/

			// check if expiry is empty
			if ($scope.formData.number.length > 16 || $scope.formData.number.length < 16) {
				show_error('Please add a valid credit card number.');
				return false;
			}

			if ($scope.formData.expiry == '' || $scope.formData.expiry == undefined) {
				show_error('Please add expiray of your card.');
				return false;
			}
			// check if cvc is empty
			if ($scope.formData.cvv == '' || $scope.formData.cvv == undefined) {
				show_error('Please add CVV code.');
				return false;
			}

			if ($scope.formData.cvv.length < 3) {
				show_error('Please add a valid CVV code.');
				return false;
			}

			if ($scope.formData.zipcode == '' || $scope.formData.zipcode == undefined) {
				show_error('Please add ZIP code.');
				return false;
			}

			if ($scope.formData.zipcode.length < 5 || $scope.formData.zipcode.length > 5) {
				show_error('Please add a valid ZIP code.');
				return false;
			}

			$rootScope.show_spinner();
			$scope.isDisabled = true;
			get_wepay_credit_card(function(data) {
				//$rootScope.hide_spinner();
				console.log(data);
				if (data.error) {
					$rootScope.hide_spinner();
					show_error(data.error_description);
				} else {
					$scope.formData.credit_card_id = data.credit_card_id;
					make_payment();
				}
			});
		};

		var get_wepay_credit_card = function(cb) {

			console.log($scope.formData);
			udata = $scope.formData;
			expiry_split = $scope.formData.expiry.split("/");
			utils.debug('expiry...' + $scope.formData.expiry + "month: " + expiry_split[0] + " year: " + expiry_split[1]);
			WePay.set_endpoint(config.wepay_endpoint);
			// change to "production" when live
			console.log(WePay);
			response = WePay.credit_card.create({
				"client_id" : config.wepay_client_id,
				"user_name" : localStorageService.get('name'),
				/*"user_name" : udata.name,*/
				/*"email" : udata.email,*/
				"email" : localStorageService.get('email'),
				"cc_number" : udata.number,
				"cvv" : udata.cvv,
				"expiration_month" : expiry_split[0],
				"expiration_year" : expiry_split[1],
				"address" : {
					"zip" : udata.zipcode
				}
			}, cb);
		}
		var make_payment = function() {
			utils.debug("make_payment....");
			var paymentData = {
				name : localStorageService.get('name'),
				/*name : $scope.formData.name,*/
				/*code : $scope.formData.code,*/
				/*email : $scope.formData.email,*/
				email : localStorageService.get('email'),
				access_token : localStorageService.get('access_token'),
				credit_card_id : $scope.formData.credit_card_id,
				amount : $scope.org.cost,
				org_id : $scope.org.id
			};

			var _tokenPromise = cardModel.do_payment(paymentData);
			utils.debug(_tokenPromise);
			_tokenPromise.then(function(JsonData) {

				utils.debug(JsonData);
				if (JsonData.success) {

					utils.debug('payment done');
					var discount_data = {};
					discount_data.code = JsonData.code;
					discount_data.organization = JsonData.organisation;
					userDataService.set_discount_data(discount_data);
					$rootScope.hide_spinner();
					$state.go('tabs.card');
				} else {
					$rootScope.hide_spinner();
					utils.debug('payment errror');
					show_error(JsonData.message);
				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});
		};

	} ]);

starter.controller('StartCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'fundModel',
	'loginModel',
	'userDataService',
	'localStorageService',
	'popupTimer',
	'$filter',
	function($rootScope, $scope, $state, $stateParams, config, utils, fundModel, loginModel, userDataService,
		localStorageService, popupTimer, $filter) {
		$scope.view_title = "My FundRaising";
		$scope.hide_back_btn = true;
		$scope.orgs = null;
		$scope.data = {};
		$scope.data.query = "";
		$rootScope.show_spinner();

		var _orgPromise = fundModel.get_organizations();

		_orgPromise.then(function(JsonData) {
			$rootScope.hide_spinner();
			utils.debug('JsonData recieved');
			utils.debug(JSON.stringify(JsonData));
			if (JsonData.data.success) {
				$scope.orgs = JsonData.data.profile;
				$scope.filteredOrgs = $filter('exactMatch')($scope.orgs, $scope.data.query);
			}
		}, function(status) {
			$rootScope.hide_spinner();
		});

		$scope.org_select = function(org) {
			console.log(org);
			console.log('Start: line#40');
			userDataService.setOrg(org);
			/*$state.go('tabs.welcome', {}, {reload: true});*/
			$state.transitionTo('tabs.welcome', $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});


		};

		$scope.$watch('data.query', function() {
			console.log($scope.data.query);
			if ($scope.data.query == "")
				return;
			$scope.filteredOrgs = $filter('exactMatch')($scope.orgs, $scope.data.query);
		});

	} ]);

starter.filter('exactMatch', function() {
	return function(words, pattern) {
		var result = [];
		words.forEach(function(word) {
			// console.log('hh');
			if (word.organisation_name.toLowerCase().substring(0, pattern.length) === pattern.toLowerCase()) {
				result.push(word);
			}
		});
		return result;
	}
});

starter.controller('SupporterCardCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel','cardModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel, cardModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = true;

		var _tokenPromise = cardModel.virtual_card(localStorageService.get('access_token'));
		utils.debug(_tokenPromise);
		_tokenPromise.then(function(JsonData) {
			$rootScope.hide_spinner();
			utils.debug(JsonData);
			if (JsonData.success) {

				utils.debug('payment verification done');
				var discount_data = {};
				discount_data.code = JsonData.code;
				discount_data.organization = JsonData.organisation;
				userDataService.set_discount_data(discount_data);
				//$state.go('tabs.card');
				$scope.org = userDataService.getOrg();
				$scope.discount_data = userDataService.get_discount_data();
				 // console.log($scope.discount_data);

				 if ($scope.discount_data.organization.organisation_logo == "") {
					 $scope.discount_data.organization.organisation_logo = "img/logo.png";
				 }
				$rootScope.hide_spinner();
				document.addEventListener("backbutton", function(){
					navigator.app.exitApp();
				}, false);


				//return;
			} else {
				utils.debug('payment errror');
				show_error(JsonData.message);
				$state.go('tabs.start');
				return;
			}
		}, function(status) {
			$rootScope.hide_spinner();
			utils.debug(status);
		});

		/*$scope.org = userDataService.getOrg();
		$scope.discount_data = userDataService.get_discount_data();
		// console.log($scope.discount_data);

		if ($scope.discount_data.organization.organisation_logo == "") {
			$scope.discount_data.organization.organisation_logo = "img/logo.png";
		}*/
		$rootScope.logout = function() {

			userDataService.clearUserSignupData();
			localStorageService.clearAll();
			// redirect to login
			$state.go('tabs.start');

		};

		$rootScope.login = function() {
			localStorageService.set('supporter_access_token', localStorageService.get('access_token'));
			$state.go('tabs.login');

		};

		$rootScope.home = function() {
			$state.go('tabs.supporter_home');
		};

		$rootScope.merchants = function() {
			$state.go('tabs.merchants');
		};

	} ]);

starter.controller('SupporterHomeCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = false;
		$scope.org = userDataService.getOrg();

		$scope.purchase_click = function() {
			console.log('purchase it');
			$state.go('tabs.payment');
		};

		$scope.purchase_click = function() {
			console.log('purchase it');
			$state.go('tabs.payment');
		};

		$scope.register_supporter = function() {
			//console.log('login/signup it');
			$state.go('tabs.signup');
		};

		$scope.merchants_view = function() {
			$state.go('tabs.merchants');
		};

		$scope.cash_click = function() {
			console.log('cash clicked');
			$state.go('tabs.payment_cash');
		};

	} ]);

starter.controller('AppCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'config', 'localStorageService',
	function($scope, $rootScope, $state, $stateParams, $timeout, config, localStorageService) {

	} ]);
starter.controller('codeCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'fundModel',
	'popupTimer',
	'userDataService',
	'localStorageService',
	'popupTimer',
	function($scope, $rootScope, $state, $stateParams, config, utils, fundModel, loginModel, userDataService,
		localStorageService, popupTimer) {
		$scope.view_title = "Member Organization";
		$scope.data = {};
		$scope.hide_back_btn = false;
		$scope.data.code = false;

		$scope.org = userDataService.getOrg();
		$scope.org_code = localStorageService.get('org_code');

		$scope.error = true;
		if ($scope.org_code.success) {
			$scope.error = false;
		}



	} ]);

starter.controller('HomeCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'fundModel',
	'popupTimer',
	'userDataService',
	'localStorageService',
	'popupTimer',
	function($scope, $rootScope, $state, $stateParams, config, utils, fundModel, loginModel, userDataService,
		localStorageService, popupTimer) {
		$scope.view_title = "Member Organization";
		$scope.data = {};
		$scope.hide_back_btn = false;
		$scope.data.code = false;

		$scope.org = userDataService.getOrg();

		$scope.get_code = function() {

			$rootScope.show_spinner();

			post_data = {
				'access_token' : localStorageService.get('access_token'),
				'organisation_id' : $scope.org.id
			};

			var _codePromise = fundModel.get_code(post_data);

			_codePromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				localStorageService.set('org_code', JsonData.data);
				$state.go("tabs.code");
			}, function(status) {
				$rootScope.hide_spinner();
			});

		};

		$rootScope.supporter_card = function() {
			if(localStorageService.get('supporter_access_token')){
				localStorageService.set('access_token', localStorageService.get('supporter_access_token'));
				$state.go('tabs.card');
			}else{
				alert('You do not have any activated virtual card');
			}
		};

	} ]);

starter.controller('LoginCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'loginModel',
	'userDataService',
	'localStorageService',
	'popupTimer',
	function($rootScope, $scope, $state, $stateParams, config, utils, loginModel, userDataService, localStorageService,
		popupTimer) {
		$scope.view_title = "Member Organization";
		$scope.hide_back_btn = false;

		var error_class = "ng-invalid ng-dirty";
		var _org = userDataService.getOrg();
		$scope.login = {
			// username : "imhassan66@gmail.com",
			// email: "imhassan66@gmail.com",
			// password : "test123",

			username : "",
			email : "",
			password : "",
			client_id : "1234567890",
			org_id : _org.id,
			grant_type : "password",
			redirect_uri : "test"
		};

		$scope.login_error = {
			email : "",
			password : ""
		};
		$rootScope.fix_enter_key();

		$scope.validateLoginForm = function() {
			var isValid = true;
			$scope.login_error = {
				email : "",
				password : ""
			};

			if ($scope.login.username == "" || utils.is_valid_email($scope.login.username) == false) {
				$scope.login_error.email = error_class;
				isValid = false;
			}
			if ($scope.login.password == "") {
				$scope.login_error.password = error_class;
				isValid = false;
			}

			return isValid;
		};

		$scope.doLogin = function() {
			utils.debug('doLogin');
			var isValid = $scope.validateLoginForm();
			if (isValid == false) {
				return false;
			}
			localStorageService.set('key_id', "");
			$rootScope.show_spinner();
			$scope.login.email = $scope.login.username;	
			$scope.login.email = $scope.login.username;
			var _loginPromise = loginModel.doLogin($scope.login);
			_loginPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				if (JsonData.success) {
					localStorageService.set('access_token', JsonData.data.access_token);
					// set the user's data in service
					userDataService.setUserSignupData(JsonData.data);
					utils.debug("user_type: " + JsonData.data.user_type);
					if (JsonData.data.user_type == "Supporter") {
						$state.go('tabs.supporter_home');
					} else {
						$state.go('tabs.home');
					}

				} else {
					utils.debug('login failed: ' + JSON.stringify(JsonData));
					$scope.modaldata = {
						title : "Login failed",
						body : "We are unable to login with your credentials. Please try again."
					};
					popupTimer.error($scope);

				}

			}, function(status) {
				$rootScope.hide_spinner();
			});

		};

	} ]);

starter.controller('MainCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	"utils",
	"loginModel",
	"localStorageService",
	'userDataService',
	'$ionicLoading',
	function($rootScope, $scope, $state, $stateParams, config, utils, loginModel, localStorageService, userDataService,
		$ionicLoading) {

		$rootScope.user_login = false;
		// check user's key and verify user is loggedin or not
		$rootScope.isUserLogin = function(callback) {
			var _isLogin = false;
			if (localStorageService.get('key_id') != undefined && localStorageService.get('key_id') != null
				&& localStorageService.get('key_id') != "") {

				if (userDataService.isUserDataSet()) {
					_isLogin = true;
					$rootScope.user_login = true;
					if (callback && typeof callback == 'function') {
						callback(_isLogin);
					}
				} else {
					var handshakePromose = loginModel.handshake();
					handshakePromose.then(function(JsonData) {
						if (JsonData.status) {
							userDataService.setUserSignupData(JsonData.data);
							utils.debug("handshake-data: ");
							utils.debug(JsonData.data);
							_isLogin = true;
							$rootScope.user_login = true;
							if (callback && typeof callback == 'function') {
								callback(_isLogin);
							}
						} else {
							callback(_isLogin);
						}
					}, function(status) {
						callback(_isLogin);
					});
				}
			} else {
				if (callback && typeof callback == 'function') {
					callback(_isLogin);
				}
			}
		};

		// logout user and redirect to login screen
		$rootScope.logout = function() {

			userDataService.clearUserSignupData();
			localStorageService.clearAll();
			// redirect to login
			$state.go('tabs.start');

		};

		$rootScope.supporter_card = function() {
			if(localStorageService.get('supporter_access_token')){
				localStorageService.set('access_token', localStorageService.get('supporter_access_token'));
				$state.go('tabs.card');
			}else{
				alert('You do not have any activated virtual card');
			}
		};
		$rootScope.go = function(state) {
			// redirect to login
			$state.go(state);
		};

		$rootScope.show_spinner = function() {
			$ionicLoading.show({
				template : '<ion-spinner icon="circles"></ion-spinner>'
			});
		};

		$rootScope.hide_spinner = function() {
			$ionicLoading.hide();
			$rootScope.laoding = false;
		};

		$rootScope.fix_enter_key = function() {
			utils.debug('1');

			$(document).keypress(function(e) {
				if (e.which == 13) {
					utils.debug('You pressed enter!');
					cordova.plugins.Keyboard.close();
				}
			});
		};

		$rootScope.internetMsgShown = false;
		$rootScope.checkInternetConnectivity = function() {
			if ($rootScope.internetMsgShown == false) {
				$rootScope.internetMsgShown = true;
				$rootScope.hide_spinner();

				$scope.modaldata = {
					title : "Network Error",
					body : "Sorry, you're not connected to the internet."
				};
				popupTimer.show($scope, function() {

				}, 5000);
			}
		};

		$rootScope.openUrl = function(urlString) {
			// urlString = encodeURI(urlString);
			if (utils.is_ios()) {
				window.open(encodeURI(urlString), '_system', 'location=yes');
				// $window.open(urlString, '_system');
				// window.open(urlString, '_blank', 'location=yes')
				// window.plugins.childBrowser.openExternal(urlString);
			} else if (utils.is_mobile_ua()) {
				navigator.app.loadUrl(urlString, {
					openExternal : true
				});
			} else {
				$window.open(urlString, '_system');
			}
		};

	} ]);

starter.controller('SignupCtrl', [
	"$rootScope",
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'popupTimer',
	'userDataService',
	'loginModel',
	'localStorageService',
	function($rootScope, $scope, $state, $stateParams, config, utils, popupTimer, userDataService, loginModel,
		localStorageService) {
		$scope.view_title = "Supporter";
		$scope.signup = {
			first_name : "",
			last_name : "",
			email : "",
			cell_no : ""
		};
		var _org = userDataService.getOrg();
		// $scope.signup = {
		// first_name : "hassan",
		// last_name : "siddique",
		// email : "imhassan66@gmail.com",
		// cell_no : "123"
		// };

		$scope.signupSubmit = function() {
			if ($scope.validateSignupForm()) {

				userDataService.setUserSignupData($scope.signup);
				var userSignupData = {
					email : $scope.signup.email,
					first_name : $scope.signup.first_name,
					last_name : $scope.signup.last_name,
					username : $scope.signup.email,
					cell_no : $scope.signup.cell_no,
					password : $scope.signup.cell_no,
					new_password : $scope.signup.cell_no,
					password_confirm : $scope.signup.cell_no,
					org_id : _org.id,
					client_id : "1234567890",
					grant_type : "password",
					redirect_uri : ""
				};

				$rootScope.show_spinner();
				var _signupPromise = loginModel.doLogin(userSignupData);
				_signupPromise.then(function(JsonData) {
					utils.debug(JsonData);
					$rootScope.hide_spinner();
					if (JsonData.success) {
						var data = JsonData.data;
						utils.debug(data);
						userDataService.setUserSignupData(data);
						localStorageService.set('access_token', JsonData.data.access_token);
						localStorageService.set('name', $scope.signup.first_name + ' ' + $scope.signup.last_name);
						localStorageService.set('email', $scope.signup.email );

						utils.debug("user_type: " + JsonData.data.user_type);
						if (JsonData.data.user_type == "Supporter") {
							$state.go('tabs.payment');
						} else {
							$state.go('tabs.home');
						}

					} else {
						$scope.modaldata = {
							title : "Signup Failed",
							body : JsonData.message
						};
						popupTimer.error($scope, function() {
							// $state.go('app.photo');
						});

					}
				}, function(status) {
					$rootScope.hide_spinner();
					utils.debug(status);
				});
			}
		};

		// custom form validation handling
		var error_class = "ng-invalid";
		$scope.signup_error = {};

		$scope.show_message = function(text) {

			$scope.modaldata = {
				title : "Signup Failed!",
				body : text
			};
			popupTimer.error($scope);
		};

		$scope.validateSignupForm = function() {
			var isValid = true;
			$scope.signup_error = {
				first_name : "",
				email : "",
				last_name : "",
				cell_no : ""
			};

			console.log($scope.signup_error);
			var rgx_req_numeric = new RegExp("^(?=.*[0-9])");
			var rgx_req_symbols = new RegExp("^(?=.*[!@£$%^&*+={}\\[\\]<>|\/?~])");
			var display_name_isNumeric = rgx_req_numeric.test($scope.signup.name);
			var display_name_isSymbol = rgx_req_symbols.test($scope.signup.name);

			if ($scope.signup.first_name == "" || $scope.signup.first_name == undefined) {
				$scope.show_message("First Name is missing!");
				$scope.signup_error.first_name = error_class;
				isValid = false;
			} else if ($scope.signup.last_name == "" || $scope.signup.last_name == undefined) {
				$scope.show_message("Last Name is missing!");
				$scope.signup_error.last_name = error_class;
				isValid = false;
			} else if ($scope.signup.email == "" || utils.is_valid_email($scope.signup.email) == false) {
				$scope.show_message("Email is missing or invalid!");
				$scope.signup_error.email = error_class;
				isValid = false;
			} else if ($scope.signup.cell_no == "" || $scope.signup.cell_no == undefined) {
				$scope.show_message("Phone number is missing!");
				$scope.signup_error.cell_no = error_class;
				isValid = false;
			}

			return isValid;
		};

	} ]);

starter.controller('SplashCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'config', 'userDataService', 'localStorageService','cardModel','utils','popupTimer',
	function($scope, $rootScope, $state, $stateParams, $timeout, config, userDataService, localStorageService,cardModel,utils,popupTimer) {

		$scope.view_title = "Splash";
		$rootScope.show_spinner();

        var show_error = function(title) {
            $scope.modaldata = {
                title : title
            };
            popupTimer.error($scope);
        }

		if(localStorageService.get('access_token')){
			var _tokenPromise = cardModel.virtual_card(localStorageService.get('access_token'));
			utils.debug(_tokenPromise);
			_tokenPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug(JsonData);
				if (JsonData.success) {

					utils.debug('payment verification done');
					var discount_data = {};
					discount_data.code = JsonData.code;
					discount_data.organization = JsonData.organisation;
					userDataService.set_discount_data(discount_data);
					$state.go('tabs.card');
					$rootScope.hide_spinner();
					return;
				} else {
					utils.debug('payment errror');
					show_error(JsonData.message);
                    $state.go('tabs.start');
                    return;
				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});

		}else{
            var redirectUser = function() {
                $rootScope.isUserLogin(function(isUserLogin) {
                    $rootScope.hide_spinner();
                    if (isUserLogin) {
                        console.log('user login');
                        config.key = localStorageService.get('user_key');
                        config.key_id = localStorageService.get('key_id');
                        $state.go('app.home');
                    } else {
                        $state.go('tabs.start');
                    }
                });
            };
            // $timeout(function() {
            redirectUser();
            // }, 3000);
        }


	} ]);
starter.controller('WelcomeCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel) {

		$scope.view_title = "";
		$scope.hide_back_btn = false;

		$scope.$on('$ionicView.enter', function() {
			$scope.org = userDataService.getOrg();
		});

		$scope.supporter_click = function() {
			$state.go('tabs.login');
		};
		$scope.member_click = function() {
			$state.go('tabs.login');
		};
		$scope.register_supporter = function() {
			$state.go('tabs.signup');
		};
		$scope.supporter_home_view = function() {
			$state.go('tabs.supporter_home');
		};

	} ]);

starter.service('popupTimer', [ '$timeout', '$ionicModal', '$rootScope', function($timeout, $ionicModal, $rootScope) {
	var plugin = this;
        var default_time = 3000; 
	// *****************
	// * show timer popup
	// $scope.modaldata = modaldata should be set in $scope to render in
	// template
	// callback = callback to trigger on timeout
	// timeinMillisec = time in millisecond to hold popup display, Default is 3
	// sec

	plugin.show = function($scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl('templates/modals/modal.html', {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};
        
        plugin.error = function($scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl('templates/modals/modal_error.html', {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};

	plugin.show_modal_templ = function(template_name, $scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl(template_name, {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};
} ]);
starter.factory('apputils', [ 'config', 'utils', function(config, utils) {

	var number_is_invalid = function(number) {
		return (number == "" || !(utils.is_number(number)) || number.toString().length != 6)
	};

	return {
		number_is_invalid : number_is_invalid
	};

} ]);
starter.factory('cardModel', [ '$http', '$q', '$rootScope', 'config', function($http, $q, $rootScope, config) {

	var saveToken = function(token, name) {
		$.tw.debug('token: ' + token);
		// send StripeToken back to server for creating persistant user

		var card_data = {
			braintree_nonce : token
		};
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : $.tw.global('apiUrl') + "consumer/card",
			data : card_data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var save_paypal = function(token, email) {
		$.tw.debug('token: ' + token);
		// send StripeToken back to server for creating persistant user

		var card_data = {
			braintree_nonce : token,
			paypal_email : email
		};
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : $.tw.global('apiUrl') + "consumer/add_paypal",
			data : card_data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	}

	var card_details = function() {
		$.tw.debug('card_details');
		var data = {
			ts : new Date().getTime()
		};

		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : $.tw.global('apiUrl') + "consumer/card_details",
			data : {},
			params : {}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var client_token = function(access_token) {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.apiUrl + "codeRest/restBrainTreeToken",
			data : {},
			params : {
				access_token : access_token
			}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};
	var do_payment = function(data) {
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "codeRest/restWePayCheckout",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var cash_payment = function(data) {
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "codeRest/restCashCode",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var virtual_card = function(access_token) {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.apiUrl + "codeRest/restVerify",
			data : {},
			params : {
				access_token : access_token
			}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	return {
		saveToken : saveToken,
		save_paypal : save_paypal,
		card_details : card_details,
		client_token : client_token,
		do_payment : do_payment,
		cash_payment : cash_payment,
		virtual_card : virtual_card
	}
} ]);
starter.factory('fundModel', [ '$http', '$q', 'config', 'utils', 'localStorageService',
	function($http, $q, config, utils, localStorageService) {
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var get_organizations = function() {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.apiUrl + "organisationRest/restList",
				data : {}
			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		var get_merchants = function(organisation_id) {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.apiUrl + "merchantRest/restList?organisation_id="+organisation_id,
				data : {}
			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		var get_code = function(data) {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.apiUrl + "codeRest/restAssign",
				data : $.param(data)

			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		return {
			get_organizations : get_organizations,
			get_code : get_code,
			get_merchants : get_merchants
		};

	} ]);
// register the interceptor as a service
starter.factory('httpAjaxInterceptor', [ '$q', '$rootScope', "$injector", '$timeout', 'localStorageService', 'utils',
	function($q, $rootScope, $injector, $timeout, localStorageService, utils) {
		return {
			// optional method
			'request' : function(config) {
				// console.log(config);
				if (localStorageService.get('access_token')) {
					utils.debug('setting token in header');
					//config.headers['access_token'] = localStorageService.get('access_token');
				}

				return config;
			},
			// optional method
			'requestError' : function(rejection) {
				// check internet connectivity
				// $rootScope.checkInternetConnectivity();
				// do something on error
				return $q.reject(rejection);
			},
			// optional method
			'response' : function(response) {
				// do something on success
				return response || $q.when(response);
			},
			// optional method
			'responseError' : function(rejection) {
				// check internet connectivity
				// $rootScope.checkInternetConnectivity();
				// do something on error
				// return $q.reject(rejection);
				// utils.debug('retrying....');
				// should retry
				// var $http = $injector.get('$http');
				// return $http(rejection.config);
				// $rootScope.noInternetTimerMsg();
				// $timeout(function() {
				// if (rejection.status != 404 && rejection.status != 401) {
				// return $http(rejection.config);
				// } else {
				return rejection;
				// }
				// }, 3000);

				// $rootScope.checkInternetConnectivity(rejection.config,
				// function(response) {
				// return response;
				// });

			}
		}
	} ]);

starter.factory('loginModel', [ '$http', '$q', 'config', 'utils', function($http, $q, config, utils) {

	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	var doLogin = function(data) {

		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "site/authorizeAjax",
			data : $.param(data)

		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var doSignup = function(data) {
		utils.debug(data);
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "site/registerAjax",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var handshake = function() {
		var data = {
			ts : new Date().getTime().toString(),
			shared_token : config.sharedToken,
			device_id : device_id,
			platform : platform
		};

		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "handshake",
			data : data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var doLogout = function() {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.apiUrl + "logout",
			data : {},
			params : {}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	return {
		doLogin : doLogin,
		doLogout : doLogout,
		handshake : handshake,
		doSignup : doSignup
	};
} ]);
starter.factory('userDataService', [ '$q', 'localStorageService', function($q, localStorageService) {
	var userSignupData = {};
	var getUserSignupData = function getUserSignupData() {
		return userSignupData;
	};

	var setUserSignupData = function(userData) {
		userSignupData = $.extend({}, userSignupData, userData);
		return userSignupData;
	};

	var isUserDataSet = function() {
		return ('email' in userSignupData);
	}

	var clearUserSignupData = function() {
		userSignupData = {};
		return userSignupData;
	};

	var setOrg = function(data) {
		localStorageService.set('org', JSON.stringify(data));
		console.log('userDataService');
		console.log(data);
		getOrg();
	};

	var getOrg = function() {
		var org = localStorageService.get('org');

		return org;
	};

	var set_discount_data = function(data) {
		//console.log("setting discount data");
		localStorageService.set('discount_data', JSON.stringify(data));
	};

	var get_discount_data = function() {
		discount_data = localStorageService.get('discount_data');
		//console.log(discount_data);
		return discount_data;
	};

	return {
		getUserSignupData : getUserSignupData,
		setUserSignupData : setUserSignupData,
		clearUserSignupData : clearUserSignupData,
		isUserDataSet : isUserDataSet,
		setOrg : setOrg,
		getOrg : getOrg,
		set_discount_data : set_discount_data,
		get_discount_data : get_discount_data
	};

} ]);
starter
	.factory(
		'utils',
		[
			'config',
			function(config) {
				// ********************************************
				var parse_querystring = function(query) {
					var parameters = {};

					if (!query) {
						query = location.search.substring(1, location.search.length);
					}
					if (query.length == 0) {
						return parameters;
					}

					var terms = query.split('&');

					$.each(terms, function(i, term) {
						var pair = term.split('=');
						var name = decodeURIComponent(pair[0]);
						var value = (pair.length == 2) ? decodeURIComponent(pair[1]) : '';

						parameters[name] = value;
					});

					return parameters;
				};

				// ********************************************
				// returns 'true' if a mobile device user-agent,
				// false
				// otherwise.
				var is_mobile_ua = function() {
					return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
				};

				// ********************************************
				var is_ipad = function() {
					return (navigator.userAgent.match(/iPad/i) !== null);
				};

				// ********************************************
				var is_iphone = function() {
					return (navigator.userAgent.match(/iPhone/i) !== null);
				};

				// ********************************************
				var is_ipod = function() {
					return (navigator.userAgent.match(/iPod/i) !== null);
				};

				// ********************************************
				var is_ios = function() {
					return (is_ipad() || is_iphone() || is_ipod());
				};

				// ********************************************
				var is_android = function() {
					return (navigator.userAgent.match(/Android/i) !== null);
				};

				// ********************************************
				var get_android_version = function() {
					if (is_android()) {
						var match = navigator.userAgent.match(/Android\s([0-9\.]*)/);
						return parseFloat(match[1]);
					}
					return false;
				};

				// ********************************************
				var is_touch_device = function() {
					return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
					// works for most browsers || works on ie10
				};

				var is_valid_email = function(emailAddress) {
					var pattern = new RegExp(
						/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
					return pattern.test(emailAddress);

				};

				var is_number = function(str) {
					console.log(str);
					var rgx_is_number = new RegExp("^\\d*$");
					return rgx_is_number.test(str);
				}

				// ********************************************
				var debug = function() {
					var args = arguments; // allow comma separated
					// debug
					// messages

					// output messages to console
					if (!config.hide_debug) {
						// if (true) {
						$(args).each(function(i, msg) {
							if (typeof msg == "object") {
								console.log(JSON.stringify(msg));
							} else {
								console.log(msg);
							}
						});
					}
				};

				// sort object alphabatically
				var sortObject = function(obj) {
					var keys = $.map(obj, function(value, key) {
						return key;
					});
					keys.sort();
					var rv = {};
					for (var i = 0; i < keys.length; ++i) {
						rv[keys[i]] = obj[keys[i]];
					}
					return rv;
				};

				// sort object of objects by object key and value
				var sortObjectByKey = function(obj, ind, value) {
					var keys = $.map(obj, function(value, key) {
						return key;
					});
					var rv = [];
					for (var i = 0; i < keys.length; ++i) {
						if (obj[keys[i]][ind] == value) {
							rv.push(obj[keys[i]]);
						}
					}
					return rv;
				};

				var zero_append = function(number, length) {
					// Setup
					var result = number.toString();
					var pad = length - result.length;

					while (pad > 0) {
						result = '0' + result;
						pad--;
					}

					return result;
				}

				return {
					parse_querystring : parse_querystring,
					is_mobile_ua : is_mobile_ua,
					is_ipad : is_ipad,
					is_iphone : is_iphone,
					is_ipod : is_ipod,
					is_ios : is_ios,
					is_android : is_android,
					get_android_version : get_android_version,
					is_touch_device : is_touch_device,
					debug : debug,
					is_valid_email : is_valid_email,
					is_number : is_number,
					sortObject : sortObject,
					sortObjectByKey : sortObjectByKey,
					zero_append : zero_append
				};

			} ]);
angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("code.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<div class=\"col\" ng-show=\"error != true\">\n	<h1 class=\"headerH1\">The Following code is activated. Please give it to your supporters.</h1>\n	<h2 class=\"code\">{{org_code.code.code}}</h2>\n</div>\n\n<div class=\"col\" ng-show=\"error\">{{org_code.message}}</div>\n\n<button class=\"btn btn_red\" ng-click=\"go(\'tabs.home\')\">GET ANOTHER CODE</button>\n\n<button class=\"btn btn_yellow\" ng-click=\"supporter_card()\">GO BACK TO CARD</button>\n\n<button class=\"btn btn_blue\" ng-click=\"logout();\">Logout</button>\n</ion-content> </ion-view>");
$templateCache.put("home.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<div ng-hide=\"data.code\">\n	<div class=\"col\">\n		<h1 class=\"headerH1\">I received <br/>the ${{org.cost}} <br/>contribution</h1>\n	</div>\n\n	<button class=\"btn btn_red\" ng-click=\"get_code()\">Get Code</button>\n	<button class=\"btn btn_yellow\" ng-click=\"supporter_card()\">GO BACK TO CARD</button>\n</div>\n<div class=\"col\" ng-show=\"data.code\">\n	<h1 class=\"headerH1\">Code Generated</h1>\n	<h1 class=\"headerH1\">The Following code is activated. Please give it to your supporters.</h1>\n	<h2 style=\"background-color: #fff;padding:5px;\">{{data.code.code}}</h2>\n</div>\n\n</ion-content> </ion-view>");
$templateCache.put("login.html","<ion-view view-title=\"{{view_title}}\"> <ion-content>\n<div class=\"list list-inset formStyle\">\n	<h1>Login</h1>\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" value=\"{{login.username}}\" ng-model=\"login.username\" class=\"{{login_error.email}}\"\n			placeholder=\"Email\" autocorrect=\"off\" autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n	<label class=\"item item-input\">\n		<input type=\"password\" name=\"password\" value=\"{{login.password}}\" ng-model=\"login.password\"\n			class=\"{{login_error.password}}\" placeholder=\"Password\" />\n	</label>\n</div>\n\n<img src=\"img/btn_go.png\" ng-click=\"doLogin()\" /> </ion-content> </ion-view>");
$templateCache.put("menu.html","<ion-side-menus >\n    <ion-pane ion-side-menu-content drag-content=\"false\">\n        <ion-nav-bar class=\"bar-positive\">\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n            </ion-nav-buttons>\n            <ion-nav-back-button class=\"button-icon ion-arrow-left-c\"> </ion-nav-back-button>\n        </ion-nav-bar>\n        <ion-nav-view name=\"menuContent\"></ion-nav-view>\n    </ion-pane>\n\n    <ion-side-menu side=\"left\">\n        <ion-content has-header=\"true\" class=\"menu\">\n            <ion-list>\n            \n             <ion-item nav-clear menu-close ng-click=\"go(\'app.home\');\">\n                    Home\n                </ion-item>\n                \n                <ion-item nav-clear menu-close ng-click=\"logout();\">\n                    Logout\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("menu_supporter.html","<ion-side-menus >\n    <ion-pane ion-side-menu-content drag-content=\"false\">\n        <ion-nav-bar class=\"bar-positive\">\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n            </ion-nav-buttons>\n            <ion-nav-back-button class=\"button-icon ion-arrow-left-c\"> </ion-nav-back-button>\n        </ion-nav-bar>\n        <ion-nav-view name=\"menuContent\"></ion-nav-view>\n    </ion-pane>\n\n    <ion-side-menu side=\"left\">\n        <ion-content has-header=\"true\" class=\"menu\">\n            <ion-list>\n            \n             <ion-item nav-clear menu-close ng-click=\"go(\'supporter.home\');\">\n                    Home Suppoorter\n                </ion-item>\n                \n                <ion-item nav-clear menu-close ng-click=\"logout();\">\n                    Logout\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("merchants.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<ul class=\"list prize_list\" style=\"margin-top: 10px !important;\">\n	<li class=\'item\' ng-repeat=\"mrg in merchants\">\n		<strong style=\"color: #000 !important; font-weight: bolder !important; font-size: 16px !important;\">{{mrg.merchant_name}}</strong>\n		<p>Address: {{mrg.address}}</p>\n		<p>\n			Phone:\n			<a ng-click=\"triggerCall(\'{{mrg.business_phone}}\')\" href=\"#\">{{mrg.business_phone}}</a>\n		</p>\n		<p style=\"color: #FF69B4 !important;\">Offer: {{mrg.offer}}</p>\n		<p>Approved by: {{mrg.owner}}</p>\n	</li>\n</ul>\n</ion-content> </ion-view>");
$templateCache.put("payment.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n	<h1>e-payment</h1>\n<div class=\"list list-inset formStyle\">\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"name\" ng-model=\"formData.name\" placeholder=\"Full Name\" />\n	</label>-->\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"credit_card\" ng-model=\"formData.number\" payments-validate=\"card\" payments-format=\"card\"\n			placeholder=\"Card Number\" ng-minlength=\"19\" ng-maxlength=\"19\" onkeypress=\"if(this.value.length > 18){event.preventDefault();}\" onblur=\"if(this.value.length < 19){alert(\'Credit card number cannot be less than 16 digits\');}\" />\n	</label>\n\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"email\" ng-model=\"formData.email\" placeholder=\"Email\" />\n	</label>-->\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"expiry\" ng-model=\"formData.expiry\" payments-validate=\"expiry\" payments-format=\"expiry\"\n			placeholder=\"MM/YY\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cvc\" ng-model=\"formData.cvv\" payments-validate=\"cvc\" payments-format=\"cvc\" placeholder=\"CVV\"  ng-minlength=\"3\" ng-maxlength=\"4\"/>\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"zipcode\" ng-model=\"formData.zipcode\" placeholder=\"Zip Code\"  ng-minlength=\"5\" ng-maxlength=\"5\"  onkeypress=\"if(this.value.length > 4){event.preventDefault();});\" />\n	</label>\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"code\" ng-model=\"formData.code\" placeholder=\"Code Given to You\" />\n	</label>-->\n</div>\n\n\n<button class=\"button-full btn btn_yellow\"  style=\"margin:0 auto;width: 150px;\" ng-click=\"submitCCForm()\">Pay</button>\n\n</ion-content> </ion-view>\n");
$templateCache.put("payment_cash.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n	<h1>Cash Payment</h1>\n<div class=\"list list-inset formStyle\">\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"first_name\" ng-model=\"formData.first_name\" value=\"{{formData.first_name}}\"\n			placeholder=\"First Name\" class=\"{{form_error.first_name}}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"last_name\" ng-model=\"formData.last_name\" value=\"{{formData.last_name}}\"\n			placeholder=\"Last Name\" class=\"{{form_error.last_name}}\" />\n	</label>\n\n\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" ng-model=\"formData.email\" placeholder=\"Email\" value=\"{{formData.email}}\"\n			class=\"{{form_error.email}}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cell_no\" ng-model=\"formData.cell_no\" placeholder=\"Mobile Phone\" value=\"{{formData.cell_no}}\"\n			class=\"{{form_error.cell_no}}\" ng-minlength=\"10\" ng-maxlength=\"10\" onkeypress=\"if(this.value.length > 9){event.preventDefault();}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"code\" ng-model=\"formData.code\" placeholder=\"Code Given to You\" value=\"{{formData.code}}\"\n			class=\"{{form_error.code}}\" />\n	</label>\n</div>\n\n\n<button class=\"button-full btn btn_yellow\"  style=\"margin:0 auto;width: 150px;\" ng-click=\"submit_cash_btn()\">GO</button>\n\n</ion-content> </ion-view>\n");
$templateCache.put("signup.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\"> <ion-content>\n	<h1>e-payment</h1>\n<div class=\"list list-inset formStyle\">\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"first_name\" ng-model=\"signup.first_name\" class=\"{{signup_error.first_name}}\"\n			   value=\"{{signup.first_name}}\" placeholder=\"First Name\" autocorrect=\"off\" autocomplete=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"last_name\" ng-model=\"signup.last_name\" class=\"{{signup_error.last_name}}\"\n			   value=\"{{signup.last_name}}\" placeholder=\"Last Name\" autocorrect=\"off\" autocomplete=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" ng-model=\"signup.email\" class=\"{{signup_error.email}}\" value=\"{{signup.email}}\"\n			   placeholder=\"Email\" autocorrect=\"off\" autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cell_no\" ng-model=\"signup.cell_no\" class=\"{{signup_error.cell_no}}\"\n			   value=\"{{signup.cell_no}}\" placeholder=\"Cell Number\" ng-minlength=\"10\" ng-maxlength=\"10\" onkeypress=\"if(this.value.length > 9){event.preventDefault();}\"  />\n	</label>\n\n</div>\n\n<button class=\"button-full btn btn_yellow\" style=\"width: 150px;margin: 0 auto;\" ng-click=\"signupSubmit()\">Go</button>\n\n</ion-content> </ion-view>");
$templateCache.put("splash.html","");
$templateCache.put("start.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-nav-bar=\"true\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<div>\n	<br />\n	<img src=\"img/splash_logo.png\" />\n	<br />\n	<img src=\"img/splash_text_logo.png\" />\n	<br />\n	<img src=\"img/splash_slogan.png\" />\n	<br />\n	<br />\n</div>\n\n<h1>Name of Organization</h1>\n<div class=\"list list-inset\">\n\n	<label class=\"item item-input\">\n		<input type=\"text\" ng-model=\"data.query\" ng-value=\"data.query\" placeholder=\"Search Organization\" autocorrect=\"off\"\n			autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n\n</div>\n<br />\n<div class=\"list prize_list\">\n	<li class=\'item\' ng-if=\"data.query\" ng-repeat=\"org in filteredOrgs\" ng-click=\"org_select(org);\">{{org.organisation_name}},\n		{{org.organisation_city}} ({{org.organisation_state}})</li>\n</div>\n</ion-content> </ion-view>");
$templateCache.put("supporter_card.html","<ion-view cache-view=\"false\"  view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<div style=\"text-align: right;padding-right: 20px;\"><a href=\"#\" ng-click=\"merchants()\">Merchants</a></div>\n<h1 style=\"color:blue;font-weight:bolder;font-size:24px;\">Virtual Discount Card</h1>\n<p><strong>{{discount_data.organization.organisation_name}}</strong> {{discount_data.organization.organisation_city}} <strong>{{discount_data.organization.organisation_state}}</strong></p>\n<img ng-src=\"{{discount_data.organization.organisation_logo}}\" />\n<h1 style=\"text-align: center;font-weight: bolder;color:black;\">GOOD THRU: {{discount_data.code.expiry_date}}</h1>\n<p ng-if=\"discount.code.subscription_allowed > 1\">\n   {{data.company_name}}\n </p>\n<div style=\"float: left;width:45%\"><a href=\"#\" ng-click=\"login();\">Login</a></div>\n<div style=\"float: right;width:45%;color:white;\"><strong>Card#</strong>{{discount_data.code.code}}</div>\n</ion-content>\n</ion-view>");
$templateCache.put("supporter_home.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<h1>{{org.organisation_name}}</h1>\n	<p>{{org.organisation_city}}({{org.organisation_state}})</p><br/><br/>\n	<h2 class=\"headerH2\">\n		Number of biz<br />Participating <span style=\"color:#E0AD2E !important;\">{{org.participants}}</span> <a style=\"padding:5px;border:solid 1px #fff;border-radius: 20px;color:#E0AD2E !important;\" ng-click=\"merchants_view()\">View</a>\n		<br/><br/>\n		<div>Cost: {{org.cost}}</div>\n	</h2>\n\n	<button class=\"button button-full btn_wepay form_button\" ng-click=\"register_supporter()\"><img style=\"width:150px;\" src=\"https://go.wepay.com/frontend/images/wepay-logo.svg\" /></button>\n	<br/>\n	<br/><span style=\"color:#fff !important;font-size:30px;font-weight: bolder;\">OR</span><br/>\n	<p><small style=\"color:#fff;\">If  a Supporter is sharing a code with you, please proceed by choosing the Cash option</small></p>\n	<button class=\"button button-full btn_cash form_button\" ng-click=\"cash_click()\">Cash</button>\n</ion-content> </ion-view>\n");
$templateCache.put("tabs.html","<ion-nav-bar class=\"bar-positive\"> <ion-nav-back-button class=\"button-icon ion-arrow-left-c\">\n<img class=\"\" src=\"img/back.png\" />\n</ion-nav-back-button> \n<img class=\"header_img\" src=\"img/my_fund_logo_mini.png\" />\n</ion-nav-bar>\n\n<ion-nav-view name=\"public-view\"></ion-nav-view>");
$templateCache.put("welcome.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<h2 class=\"welcome_text\">Welcome to</h2>\n<h1 class=\"org_name\">{{org.organisation_name}}</h1>\n<p>{{org.organisation_city}} ({{org.organisation_state}})</p>\n<h3 class=\"iam\">I AM</h3>\n<button class=\"btn btn_yellow\" ng-click=\"supporter_home_view()\">A Supporter</button>\n\n<button class=\"btn btn_blue\" ng-click=\"member_click()\" style=\"font-size:20px;\">A Member of the Organization</button>\n\n</ion-content> </ion-view>\n");
$templateCache.put("modals/modal.html","<ion-modal-view class=\"newModals\"> <ion-content>\n<h3>{{modaldata.title}}</h3>\n<h4>{{modaldata.body}}</h4>\n</ion-content> </ion-modal-view>");
$templateCache.put("modals/modal_error.html","<ion-modal-view class=\"newModals\">\n    <ion-content>\n        <h3>{{modaldata.title}}\n	</h3>\n        <h4>{{modaldata.body}}</h4>\n        <p ng-show=\"modaldata.description\">{{modaldata.description}}</p>\n    </ion-content>\n</ion-modal-view>");}]);