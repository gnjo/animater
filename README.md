# interceptor
function added the interceptor

# draft
process
```
let caller=(step,endflg,symbol)=>{
 if(endflg) console.log('end'); //
 console.log(step); //start 0 //step 50ms=fps200
}
let steprate=1000/200 //fps200
let I=interceptor(caller,steprate)
let f=function(){...}
I(f,'symbol1')('a')

1. function wrap the promise
2. intercept message to caller
```
