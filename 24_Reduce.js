const arr = [1, 2, 3, 4]

const AllReduce = arr.reduce(function(acc, currval) {
    console.log(`acc ${acc} and currval ${currval}`)
    return acc + currval
}, 3)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(`AllReduce ${AllReduce}`)


const BookData = [{
        tital: 'book fiest',
        subName: 'Hindi',
        price: 250
    },
    {
        tital: 'book second',
        subName: 'English',
        price: 352
    },
    {
        tital: 'book third',
        subName: 'history',
        price: 15
    },
    {
        tital: 'book fourth',
        subName: 'Sceince',
        price: 562
    },
    {
        tital: 'book fifth',
        subName: 'soc-sceince',
        price: 654
    },
    {
        tital: 'book six',
        subName: 'Math',
        price: 355
    },
]

const booksprice = BookData.reduce((acc, item) => acc + item.price, 0)

console.log(booksprice)