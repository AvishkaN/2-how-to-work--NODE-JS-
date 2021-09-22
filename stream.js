const fs=require('fs');
const server=require('http').createServer();

server.on('request',(req,res)=>{
    // solution 1
        fs.readFile('test-file.txt',(err,data)=>{
        
                res.end(data);
            })

// solution 2 -use stream
const readable=fs.createReadStream('test-file.txt');
readable.on('data',(dataChunk)=>{
        res.write(dataChunk); 
})
readable.on('end',()=>{
        res.end();
})
readable.on("error",err=>{
    res.statusCode=500;
    res.end("File not found 💣");
})

// solution 3 - pipe
const readable=fs.createReadStream('test-file.txt');
readable.pipe(res);




});
        

        
server.listen(8000,"127.0.0.1",()=>{
        console.log(`server live port 8000`);
    });




            
            