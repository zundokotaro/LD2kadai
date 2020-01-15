const http = require('http')
const url = require('url')
const querysyring = require('querystring')

const server = http.createServer((request, response) => {
    const parstUrl = url.parse(req.url)
    console.log(parseUrl)


    response.setHeader('Access-Control-Allow-Origin', '*')
    response.write('Hello world!')
    response.end()
})
server.listen(4000)
console.log("The server is listening...")