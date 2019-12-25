
//if文の練習

const score = 92
const subject = "Music"
if(score >= 90) {
    console.log('とても良い！')
    if (subject === "Music") {
        console.log('音楽の点数がとても良い！')
    }
}　else if (score >= 80) {
    console.log('良い')
} else if (score >=60) {
    console.log('可')
}　else {
    console.log('不可')
}