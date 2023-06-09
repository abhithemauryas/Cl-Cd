const app= require("express")


 app.get("/",(req,res)=>{
 res.send("success")
 })

app.listen(8000,()=>{
    console.log("Appp is live")
})