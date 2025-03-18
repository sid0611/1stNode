const express=require('express')
const app=express();
app.use(express.json());

let tasks=[];
app.get('/tasks',(req,res)=>{
    res.json(tasks);
})
app.post('/tasks', (req, res) => {
    console.log("Received Body:", req.body); // Debugging log

    const task = req.body.task;
    if (!task) {
        console.log("Task is missing!"); // Debugging log
        return res.status(400).json({ message: "Task is Required" });
    }

    tasks.push(task);
    console.log("Updated Tasks List:", tasks); // Debugging log

    res.json({ message: "Task Added Successfully" });
});
const PORT=3000;
app.listen(PORT,()=>
    console.log(`Server started at ${PORT}`)
)

