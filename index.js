const http = require('http');
const data = require('./data')

const hand = http.createServer((req,res)=>{
    // res.write("Hello World!");
    // res.end()
    if(req.url === '/'){
        res.write("<h1>Hello World!</h1>");
        res.end();
    }
    else if(req.url === '/json'){
        const stringData = JSON.stringify(data);
        res.write(stringData);
        res.end();
    }
})

hand.listen(5000,()=>{
    console.log("server Started..........")
})