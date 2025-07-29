const greeting = ['apple', 'boll', 'cat', 'dog'];

for (const greet of greeting) {
    console.log(`All Greet by index ${greet}`)
}

///////////////////////////++++++++++++++++++++++++++

const map = new Map();
map.set('A', 'Aman')
map.set('B', 'Bitu')
map.set('C', 'Chandani')
map.set('D', 'Dhanjee')
map.set('E', 'Emli')
map.set('F', 'Fatima')

for (const [key, value] of map) {
    console.log(key, ' => ', value)
}


const AllObject = {
    js: 'JavaScript',
    py: 'Python'
}

for (const key in AllObject) {
    console.log(`${key} amd ${AllObject[key]}`)
}