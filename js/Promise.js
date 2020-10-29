// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);
//     });
// };

// sleep(2000).then(() => console.log("After 2 seconds"));
// sleep(5000).then(() => console.log("After 5 seconds"));

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log("All Promises");
// });

// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log("Race Promises");
// });


//-------------


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Data preparing");

        const product = {
            name: "TV",
            price: 200
        };
        resolve(product);
    }, 2000);
});

promise.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.flag = "modified";
            resolve(product); 
            }, 3000);
    });
})
.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "done";
            resolve(product); 
        }, 3000);
    });
})
.then((product) => {
    product.number = 100;
    return product;
})
.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.map = true;
            resolve(product); 
        }, 3000);
    });
})
.then((product) => {
    product.set = 1;
    return product;
})
.then((product) => {
    console.log(product);
})
.catch(() => console.error("Somthing went wrong!"))
.finally(() => {
    console.log("Finish");
});