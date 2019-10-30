
//3の倍数の時に特別なメッセージを出力する（課題）

const max = parseInt(process.argv[2])


for (let n = 1; n <= max; n = n + 1) {
    if (n % 3 === 0) {
        console.log('３の倍数！')
    }　
    console.log(n)
}