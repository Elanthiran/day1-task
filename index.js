const fs = require("node:fs/promises")
const PORT = process.env.PORT || 8000;

let date1=new Date()

let date = date1.getDate();

let month = date1.getMonth()+1;

let year = date1.getFullYear()

 const hours=date1.getHours()
 const mins=  date1.getMinutes()
  const secs= date1.getSeconds()

const timeStamp=year+"-"+month+"-"+date+"-"+hours+":"+mins+":"+secs
const date_time=date+"-"+hours
function createFile(){

fs.writeFile(`./date-time/${date_time}.txt`,`${timeStamp}`,"utf8")
.then((error)=>
{
    if(error) 
        {console.log(error)}
        else {console.log("File is created")}
})
.catch((error)=>
{
    console.log(error)
})
}
createFile();

 function readDirectory(){
    fs.readdir("./date-time")
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
}

readDirectory();

createFile.listen(PORT, () => { console.log(`listening on port ${PORT}`) })