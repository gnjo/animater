# interceptor
function added the interceptor

# draft
process
```
let caller=(symbol,step,endflg)=>{
 if(endflg) console.log('end'); //
 console.log(step); //start 0 //step 50ms=fps200
}
let steprate=1000/200 //fps200
let I=interceptor(caller,steprate)
let f=function(){...}
I('symbol1',()=>{

})('a')

1. function wrap the promise
2. intercept message to caller
```

# like a Proxy
```
let obj={}
obj.add=()=>{/**/}
obj.del=()=>{/**/}

obj=interceptor(obj,caller,1000/200)
obj.add()

```
