/*
{   //htis is scope
    let a = 20;
    const b = 30;
    var c = 40;
}
*/

//////////////////////////////

let a = 10;

{
   let a = 20;
}

console.log(a);


///////////////////////////////////////

const b = 30
{
    const b = 300;
}

console.log(b);

///////////////////////////////////

var c = 40;

{
    var c = 400;
}
console.log(c)

/////////////////////////////////

//++++++++++++++++++++++++++ interesting  ++++++++++++++++++++++++++++++++

// addOne(5)
function addOne(num) {
    return num + 1
}
addOne(5)

////////////
/*
  
it will be not running

addTwo(5)
const addTwo = function(num) {
    return num + 2
}

*/