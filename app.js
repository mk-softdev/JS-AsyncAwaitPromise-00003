// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Data received!')
//     },2000)
// })

// async function getData(){
// //    return 'Hello World!'
// let res = await promise;
// console.log(res);
// }

// //console.log(getData());
// // getData().then(d => console.log(d));
// getData();

//Ex: 01 - WITH Promise

let dell = {
    brand : 'Dell',
    hardDisk : '2 TB',
    color : 'Black'
}



let res_1 = document.querySelector('#result1');
let res_2 = document.querySelector('#result2');
let res_3 = document.querySelector('#result3');

let buyLaptop = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(dell);
    },2000)
})

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

function fetch1(){
    res_1.textContent = 'Fetching data...';
    buyLaptop.then(d => {
        console.log(d);
        res_1.textContent = JSON.stringify(d);
    });
}
//Ex: 02 - WITH Async | Await
async function fetch2(){
    res_2.textContent = 'Fetching data....';
    let data = await buyLaptop;
    console.log(data);
    res_2.textContent = JSON.stringify(data);
}

//Ex: 03 - WITH Fetch API - https://jsonplaceholder.typicode.com/posts

async function fetch3(){
    res_3.textContent = ' Fetch data...'

    //PROMISE way
    // buyLaptop2.then(d => {
    //     console.log(d);
    //     res_3.textContent = JSON.stringify(d);
    // })
    
    //Async | Await way
    
    // let res = await buyLaptop2;
    //      console.log(res);
    // res_3.textContent = JSON.stringify(res);
 


}