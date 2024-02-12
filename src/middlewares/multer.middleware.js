import multer from "multer";


const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename : function (req, file, cb) {
       
        cb(null ,file.originalname);  //save the original name of the file to db and use it as a unique key for each image
    }
})

export const upload = multer({
    storage,
})