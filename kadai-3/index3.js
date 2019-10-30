for (let index = 0; index < 1000; index++) {
    console.log(index)
}


//1から100までの和を求める
let sum =  0

for (let n = 1; n <= 100; n = n + 1) {
    console.log('1 から '　+ n + '　までの和は '　+ sum + ' です')
    sum = sum + n
}
console.log(sum)

//1から100までの和の中で3で割ると1余る数を求める

for (let n = 1; n <= 100; n = n + 1) {
    if (n % 3 === 1) {
        console.log(n)
    }
}
