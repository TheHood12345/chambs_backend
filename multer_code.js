const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage(
        {
            destination: (req,file,cb)=>{
                cb(null,'uploads/');
            },
            filename: (req,file,cb)=>{
                cb(null,file.fieldname+"-"+Date.now());
            }
        }
    ),
    fileFilter: (req,file,cb)=>{
        if(file.mimetype.startsWith("image/")){
            cb(null,true);
        }
        else{
            cb(new Error("Not an image"),false);
        }
    }
})

module.exports = upload;