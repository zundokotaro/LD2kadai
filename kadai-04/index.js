
//アロー関数を使って関数を定義する（課題）

const product= (a, b) => {
    return a * b
}

const product2 = function(a, b) {
    return a * b
}

const result1 = product(107,109)
console.log(result1)

//整数ｎを引数として与えると、1からｎまでの和を計算する関数　sum(課題)

const sum = (n) => {
    let result = 0
    for (i =1; i <= n; i = i + 1) {
        result = result + i
    }
    return result
}
const result2 = sum(500)
console.log(result2)