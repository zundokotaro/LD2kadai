const http = require('http')


const server = http.createServer((req, res) => {
    const num = Math.random()
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (num < 0.2) {
        res.write('悪くないね！')
    } else if (num < 0.4) {
        res.write('ぼちぼち！')
    }　else if (num < 0.5) {
        res.write('いいことあるかも！')
    }　else if (num < 0.55) {
        res.write('最高！')
    }  else if (num < 0.7) {
        res.write('ぐっすり眠れる！') 
    }  else if (num < 0.73) { 
        res.write('虹がみられる素敵な日！')
    }  else {
        res.write('面白くなる！')
    }
    
    res.end()
})
server.listen(4000)
console.log("The server is listening...")