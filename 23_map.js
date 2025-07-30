const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Arrmap = arr.map((nums) => nums * 2);

console.log(Arrmap);


const Arrmap1 = arr.map((nums) => nums - 1)
    .map((nums) => nums * 2)
    .filter((nums) => nums <= 8)

console.log(Arrmap1)