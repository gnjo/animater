# animater
function added the animation

# draft
process
```
let caller=(step,endflg)=>{
 if(endflg) console.log('end'); //
 console.log(step); //start 0 //step 50ms=fps200
}
let steprate=1000/200 //fps200
let A=animater(caller,steprate)
let f=function(){...}
A(f)('a')

1. function wrap the promise
2. intercept message to caller
```
