const path=require("path")
const multer=require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});
const uploads = multer({storage:storage});
module.exports=uploads
