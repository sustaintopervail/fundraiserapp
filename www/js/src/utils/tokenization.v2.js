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