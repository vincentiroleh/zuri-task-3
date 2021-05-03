const http = require('http');
const fs = require('fs')

const userData = {
    name: "Vincent Iroleh",
    country: "Nigeria",
    hobby: ['gaming', 'bicycling', 'singing']
}

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.end('Welcome to NodeJS core modules')
        }
        if (req.url === '/user') {
            res.end(JSON.stringify(userData))
        }
        if (req.url === '/page') {
            res.writeHead(200, { 'content-type': 'text/html' })
            fs.createReadStream('index.html').pipe(res)
        }
    }
});


server.listen(port = 3000, () => {
    console.log(`Server listening on port ${port}`);
})