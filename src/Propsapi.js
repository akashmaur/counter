import React from 'react'

function Propsapi(props) {
   let{item} =props
//    let arr=[1,1,2,3,3,4,5,5,6,6,6,7,7,8,8,8,8,9,9,3,10];
//    let newArray=[...new Set(arr)]
//    console.log(newArray)


// let str="VIKASH";
// let revName=str.split('').reverse().join('');
// console.log(revName);

// (function(){
//   var a=b=3;
// })();
// console.log("a defined?  " + (typeof a!=='undefined'));
// console.log("b defined? " + (typeof b!=='undefined'));

// let arr=[1,2,3,2,1,4,4,5];
// let newArray=arr.filter((each,index)=>{
 
//     return arr.indexOf(each)!==index
// });
// console.log(newArray);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// function areTheNumbersAlmostEqual(num1, num2) {
// 	return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(sum(2)(3));
var d={};

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});

  return (
    <div>
       <p> {item.id}</p>
       <p> {item.name}</p>
    </div>
  )
}

export default Propsapi