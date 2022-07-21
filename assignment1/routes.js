const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<p>Hello this is assignment</p>");
        res.write("<p><form action='/create-user' method='POST'><input type='text' name='username'>user name</input><button type='submit'>Send</button></form></p>")
        res.write("</html>");
        return res.end();
    }
    if(url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write('<ul><li>User1</li></ui>');
        res.write("</html>");
        return res.end
    }
    if(url==='/create-user' && method ==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
        const username = parseBody.split("=")[1];
        console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
};
exports.handler=requestHandler;