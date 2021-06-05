const {readFile,writeFile} = require('fs');


console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{

    if(err){
console.log(err);
return

    }
   const first = result
   readFile('./content/results.txt','utf8',(err,result)=>{

    if(err){

        console.log(err);
    }
    const second = result
    writeFile('./content/async-results.txt',+ first + " " + second,
    (err,result)=>{

        if(err){
            console.log(err);
             
        return

        }
        console.log('done with task');
    })

   })

})
console.log('starting next task');


