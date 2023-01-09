const router = require("express").Router();

const ApplicationModel = require("../models/application.model");
const uploads = require("../middleware/fileupload");

const cpUpload = uploads.fields([{ name: "picture" }, { name: "certificate" }]);
router.post("/",
cpUpload,
 async (req, res) => {
  try {
    let application = await ApplicationModel.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      dob: req.body.dob,
      picture: req.files.picture[0].path,
      certificate: req.files.certificate[0].path,
    });
    return res
      .status(200)
      .json(
        "We have received your application. Please wait for 24 hours to get it checked from our end."
      );
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/",async(req,res)=>{
  try {
    let application=await ApplicationModel.findOne({email:req.query.email});
    
    if(!application){
      return res.status(500).json("No application found.")
    }
    return res.status(200).json(application)
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

module.exports = router;
