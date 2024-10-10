// const button = document.createElement("button")
// button.style.backgroundColor="green"
// button.innerText="click here"
// const div = document.getElementById("hello")
// div.appendChild(button)




// function uniqueElements(array){
//     let new1 = [];

//     for(let i = 0; i<array.length;i++){
//         if(!new1.includes(array[i])){
//             new1.push(array[i])
//         }else{
//             console.log(array[i])
//         }

//     }
//     return new1

// }


// console.log(uniqueElements([1,1,2,3,4,5,5,6,7]))



// function largestNumber(){
//     let array = [1,2,3,4,5]
//     let array1 = array[0]


//     for(let i = 0;i< array.length;i++){
//         if(array[i] > array1){
//            array1 = array[i]
//         }else{
//             console.log(array[i])
//         }
//     }
//     return array1
// }

// console.log(largestNumber())

// function smallestNumber(){
//     let array = [1,2,3,4,5]
//     let array1 = array[0]


//     for(let i = 0;i< array.length;i++){
//         if(array[i] < array1){
//            array1 = array[i]
//         }else{
//             console.log(array[i])
//         }
//     }
//     return array1
// }

// console.log(smallestNumber())



// function deleteElement(){

//     let array = [1,2,3,4,5]
// let position = 2

// for(let i = 2; i< array.length;i++){
//     array[i]= array[i+1]
// }

// array.length = array.length-1;
// return array
    
// }

// console.log(deleteElement())


// function searchElement(){

//     let array = [1,2,3,4,5]
//     let element = 3;
//     let index;


//     for(let i =0;i<array.length;i++){
//         if(array[i] == element){
//             index = i
//         }
//     }
//     return index


// }

// console.log(searchElement())



// function mergerArrays(){
//     let array1 = [1,2,3,4,5]
//     let array2 = [6,7,8,9,10]
//     let array3 = []

//     for(let i =0 ;i< array1.length;i++){
//           array3[i] = array1[i]
//     }

//     for(let j = 0;j<array2.length;j++){
//         array3[j+5] = array2[j]
//     }
//     return array3
// }

// console.log(mergerArrays())


// function insertElement(){
//     let array = [1,2,3,4,5]

//     let position =3
//     for(let i = array.length-1; i>= position;i--){
//         array[i+1] = array[i]
//         if(i == position){
//             array[i]=10
//         }
//     }
//     return array

// }

// console.log(insertElement())

// const arr = [10,2,3,4,5]


// arr.forEach((item,i)=>{
// arr[i] = item + 3
    
// })

// console.log(arr)

const a = "Siddharth"


console.log(typeof(a))
console.log(typeof(null))//// this shows object as an output
console.log(typeof(undefined))//// this shows undefined as the output////



// console.log(b)//// reference error as b is not defined/////


console.log(null == undefined)////true
console.log(null === undefined)////false



////event delegation//////

document.querySelector("#products").addEventListener("click",function(e){
 
    
    
    // if(e.target.tagName == "LI"){
    //     window.location.href = "/" + e.target.id
    // }

    console.log(e.target.id)

    window.location.href = "/" + e.target.id

})



function a2(){
    for(var i = 0 ; i < 3 ; i++){
        setTimeout(()=>{
console.log(i)
        },i*1000)
    }
}
a2()


//// rest operator////
function elemets(...num){
    console.log(num)

}

elemets(1,2,3,45)


////infinfite currying



function ret(a){

    return function(b){
if(b){
    return ret(a+b)
}else{
    return a
}

    }
   

}


console.log(ret(1)(2)(3)(4)())



const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
reject("hi 1 from p1")
    },2000)
})



const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("hi 2 from p2")
    },100)
})


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
  reject("hi this is 3 from p3")
    },500)
})



async function res(){
    const [a1,b1,c1] =  await Promise.any([p1,p2,p3])
    console.log(a1,b1,c1)
}

res()
