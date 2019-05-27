;(function(root){
 let is={}
 is.promise=function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
 }
 is.function = function(obj){return toString.call(obj) === '[object Function]'}
 ;

 function entry(obj,caller,steprate){
  if(!obj)return console.log('need obj')
  if(!caller)return console.log('need caller')
  var o={}
  o.steprate=steprate||50
  o.caller=caller
  o.bootstep=0;
  o.funccount=0
  ;
  setInterval(()=>{o.bootstep++},o.steprate)
  o.I= function f(_symbol,_func){return function x(){
   let endflg=false
   ,symbol=_symbol
   ,count=o.funccount
   ,w=o.caller(symbol,0,endflg,o.bootstep,count)
   ,step=1
   ,ci=setInterval(()=>{
    o.caller(symbol,step,endflg,o.bootstep,count)
    if(endflg) clearInterval(ci);
    step++;
   },o.steprate)
   ,func=_func   
   ,result=func.apply(this,arguments)
   ,fin=(d)=>{endflg=true; o.funccount++ ;return d}
   ;
   return is.promise(result)?fin(result):result.finally(fin)
  }}
  o.keys=Object.keys(obj.__proto__).concat(Object.keys(obj)).filter(d=>is.function(obj[d]))
  o.keys.map(key=>{ obj[key]=o.I(key,obj[key]) })
  return obj;
 }
 root.interceptor=root.intercepter=entry;
})(this);
