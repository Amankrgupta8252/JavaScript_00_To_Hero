const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 100)
})

promiseOne.then(function () {
    console.log("Promise consimed")
})

////////////////////////////////////
//  ++++++++++++++++++++++++++       two     ++++++++++++++++++++++++++  //

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise consumed")
    }, 1000)
}).then(function () {
    console.log("Async 2 resolve");
})

///////////////////////////////////

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Aman", email: "aman@gmail.com", password: "Aman@123" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
    let err = true;
    if (!err) {
        resolve([
            {
                username: "AmanGupta",
                password: "AmanGupta@123"

            },
            {
                username: "Anshu",
                password: "AnshuGupta@123"

            },

        ])
    }
    else{
        reject('ERROR: Somthing went wrong')
    }
}, 1000)

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/////////////////////////////////////////////////////////////


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/////////////////////////////////////////////////

fetch('https://api.github.com/users/Amankrgupta8252').then((response) => {
    return response.json()
}).then((date) => {
    console.log(date);
}).catch((error) => console.log(error))