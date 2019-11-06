
//returnをすると、関数はそこで終わる

function myFunction() {
    console.log(1)
    console.log(2)
    console.log(3)
    return
    console.log(4)
    console.log(5)
    console.log(6)
}

myFunction()

//関数の型

function test(params) {
    console.log('tesy')
}

console.log(typeof test)