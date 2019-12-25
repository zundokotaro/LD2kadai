
//3の倍数の時と5の倍数の時に特別なメッセージを出力する（課題）

const max = parseInt(process.argv[2])


for (let n = 1; n <= max; n = n + 1) {
    if (n % 3 === 0) {
        console.log('3の倍数！')
        if (n % 15 === 0) {
            console.log('5の倍数でもある！')
        }
    } else if (n % 5 === 0) {
        console.log('５の倍数！')
    }
    console.log(n)
}

//＊（n % 3 === 0 && n % 5 === 0）にすればきれいな式で3の倍数も5の倍数もできる