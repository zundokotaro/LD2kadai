
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

setTimeout(
    () => {
    console.log('発射３秒前...')
    setTimeout(
        () => {
            console.log('３...')
            setTimeout(
                () => {
                    console.log('２...')
                    setTimeout(
                        () => {
                            console.log('１...')
                            setTimeout(
                                () => {
                                    console.log('発射！')
                                }, 1000
                            )
                        },1000
                    )
                }, 1000
            )
        }, 1000
    )
}, 3000
)