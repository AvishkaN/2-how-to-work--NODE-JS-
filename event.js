const EventEmitter=require('events');
const http=require('http');

const myEmmiter=new EventEmitter();

myEmmiter.on('newSale',(value)=>{
    console.log(`new sale ${value}`);
});
myEmmiter.on('newSale1',()=>{
    console.log(`new sale 1`);
});

myEmmiter.emit('newSale',10);

///////

const server=http.createServer();

server.on('request',(req,res)=>{
    console.log(req.url);
    console.log(`request succsess fully working ---`);
    res.end('hello');
});
// server.on('request',(req,res)=>{
//     // console.log(`request succsess fully working 222`);
//     res.end('hello');
// });

server.on('close',(req,res)=>{
    console.log(`server clossed !!!!!!!!!!`);
    res.end('hello 2');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log(`server is live now `);
});