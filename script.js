///////////////////////Binary Search//////////////////////////

const array = [1,9,15,88,2,6,125,74,27];
function binarySearch(arr,num) {
    let sortedArr = arr.sort((a,b)=>a-b);
    let low=0;
    let high=sortedArr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let guess=arr[mid];
        if(guess===num) return mid;
        if(guess<num) low=mid+1;
        if(guess>num) high=mid-1;
    }
    return null;
    // console.log(low,high)
}
console.log(binarySearch(array,125));


const obj = {
    ' ':[5],
    d:[10],
    e:[1],
    H:[0],
    l:[2,3,9],
    o:[4,7],
    r:[8],
    w:[6]
};

// function buildString(o) {
//     let newArr = [];
//     for(let i in o) {
//         if(o.hasOwnProperty(i)){
//             for(let j of o[i]) {
//                 newArr[j]=i;
//             }
//         }
//     }
//     return newArr.join('')
// }

function buildString(o) {
    return Object.keys(o).reduce((acc,key)=>{
        o[key].forEach((j)=>{
            acc[j]=key
        });
        return acc;
    },[]).join('')
}
console.log(buildString(obj));