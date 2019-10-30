
//if文を使った性格診断(課題)

const day = parseInt(process.argv[2])
const Xday = 29

if (day % 3 === 0) {
    console.log('あなたは慎重な性格です')
}　else if (day % 3 === 1) {
    console.log('あなたは面白い性格です')
}　else if (day % 3 === 2) {
    console.log('あなたは優しい性格です')
    if (Xday === 29) {
        console.log('あなたの来世はネコです！')
    }
}
