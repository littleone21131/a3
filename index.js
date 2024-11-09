const dbConnect=require('./mongodb')
const dbConnect=require('express');
const app=express();

app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');});