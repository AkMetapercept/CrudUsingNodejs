const express=require("express")

const AppModule=require("./module/appModule")

const mongoose=require("mongoose")

const app=express()
app.use(express.json())

app.listen(9999,()=>{
    console.log("Your Server Running on",9999)
})


//Get Routes

app.get("/getAll",async(req,res)=>{

    try {
        const showData=await AppModule.find()
        res.status(200).json(showData)

    } catch (error) {
        res.status(500).json({messege:error.messege})
        
    }
})

// Post Routes
app.post("/post",async(req,res)=>{

    try {

        const addData=await AppModule.create(req.body)
    res.status(200).json(addData)
        
    } catch (error) {
        res.status(500).json({messege:error.messege})
        
    }
    
})

//Find By UserName

app.get("/getByName/:id",async(req,res)=>{

    const {id}=req.params

    try {
        const byName=await AppModule.findById(id)
        res.status(200).json(byName)
    } catch (error) {
        res.status(500).json({messege:error.messege})
        
    }
})




// Update Routes


app.put("/update/:id",async(req,res)=>{

    const {id}=req.params
    const {name,phone}=req.body
    try {

        const updateData=await AppModule.findByIdAndUpdate(id,{name,phone},{new :true})
        res.status(200).json(updateData)
    } catch (error) {

        res.status(500).json({messege:error.messege})
        
    }
})



///delete Routes

app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        
        const delteData=await AppModule.findByIdAndDelete(id)
        res.status(200).json(delteData)
    } catch (error) {
        res.status(500).json({messege:error.messege})
        
    }
})



mongoose.connect("mongodb+srv://akshayrp:root@cluster.ar9cvdc.mongodb.net/")
.then(()=>{
    console.log("connected..")
}).catch((error)=>{
    console.log(error)
})
