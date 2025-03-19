const express=require('express');
const app=express();
app.use(express.json());

app.get('/tasks',(req,res)=>{
    res.json(tasks);
})

app.post('/tasks',(req,res)=>{
    const task=req.body.task;
    if(!task)res.status(400).json({message:"Task is required"});
    tasks.push(task);
    res.json({message:"Task added Successfully"});
})

app.patch('/tasks/:index',(req,res)=>{
    const index=parseInt(req.params.index);
    if(isNaN(index) || index<0 || index>=tasks.length)return res.status(400).json({messgae:"Invalid task Index"});
    tasks.splice(index,1);
    res.json({messgae:Task deleted Successfully});
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

