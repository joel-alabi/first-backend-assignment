const express = require('express');

const server = express();

// request handlers

const handleMainPatchRequest = (req, res)=>{
    res.send(
        '<html><body><div style="text-align:center"><h1 >MY NAME IS JOEL WANT TO KNOW MORE ABOUT ME</h1><br/><input type="submit" /></div></body></html>'
        );
}

const handleSignUpPostRequest = (req, res)=>{
    res.send(
        '<html><body><h1 style="text-align:center">WELCOME TO SIGNUP PAGE</h1></body></html>'
        );
}

const handleLoginputRequest = (req, res)=>{
    res.send(
        '<html><body><h1 style="text-align:center">WELCOME TO LOGIN PAGE</h1></body></html>'
    );
}

const handleContactPutRequest = (req, res)=>{
    res.send(
        '<html><body><h1 style="text-align:center">WELCOME TO CONTACT PAGE</h1></body></html>'
        );
}

const handleAboutDeleteRequest = (req, res)=>{
    res.send(
        '<html><body><h1 style="text-align:center">OH YOU DELETED THIS PAGE</h1></body></html>'
    );
}

const handleHomeGetRequest = (req, res)=>{
    res.send(
        '<html><body><h1 style="text-align:center">WELCOME TO HOMEPAGE</h1></body></html>'
        );
}

server.get('/main', handleMainPatchRequest);
server.post('/signup', handleSignUpPostRequest);
server.put('/login', handleLoginputRequest);
server.put('/contact', handleContactPutRequest);
server.delete('/delete', handleAboutDeleteRequest);
server.get('/', handleHomeGetRequest);

server.listen(3000, '127.0.0.1', ()=> console.log('server is ready'))