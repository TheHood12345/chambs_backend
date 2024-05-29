const express = require("express");
const cors = require("cors");
const upload = require("./multer_code");
const {User, sequelize} = require("./model_code");

sequelize.sync({force:false}).then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log("failed to connect",err);
});

const app = express();

app.use(cors());
app.use(express.json());

app.post("/pos", upload.single("file"), async(req,res)=>{
    if(req.file){
        res.send({file:req.file.path});
     }else{
        res.send("nehhhh");
     }
});

app.post("/posts1",upload.single("file"), async(req,res)=>{
    let {telegram_username,telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.create({telegram_username:telegram_username,telegram_id:telegram_id,screenshot_1:file});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});

app.post("/posts2",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_2:file},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.post("/posts3",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_3:file},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.post("/posts4",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_4:file},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.post("/posts5",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_5:file},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.post("/posts6",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_6:file},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.post("/posts7",upload.single("file"), async(req,res)=>{
    let {telegram_id} = req.body;
    let file = req.file.fieldname;
    try{
        const user = await User.update({screenshot_7:file,confirmed:true},{where:{telegram_id:telegram_id}});
        res.json({"users":user});
    }catch(error){
        res.json(error);
       }
});
app.listen(process.env.EXPRESS_PORT,process.env.EXPRESS_HOST, ()=>{
    console.log(`Server started on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
});