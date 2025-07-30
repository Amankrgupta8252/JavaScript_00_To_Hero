const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filterMtArray = myArray.filter((nums) => nums <= 3 || nums >= 7);

console.log(filterMtArray);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums);


const BookData = [{
        tital: 'book fiest',
        subName: 'Hindi'
    },
    {
        tital: 'book second',
        subName: 'English'
    },
    {
        tital: 'book third',
        subName: 'history'
    },
    {
        tital: 'book fourth',
        subName: 'Sceince'
    },
    {
        tital: 'book fifth',
        subName: 'soc-sceince'
    },
    {
        tital: 'book six',
        subName: 'Math'
    },
]

const FatchData = BookData.filter((books) => books.subName == 'Math');

console.log(FatchData)

const FatchData1 = BookData.filter((books) => {
    return books.subName == 'English'
});

console.log(FatchData1)