
//3秒たってHelloといった後、2秒後にByeという（課題）

setTimeout(
    () => {
    console.log('Hello!')
    setTimeout(
        () => {
            console.log('Bye!')
        },
        2000
    )
},
3000
)

