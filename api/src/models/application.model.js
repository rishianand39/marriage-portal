const mongoose=require("mongoose")


const ApplicationSchema= new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String,required:true},
    picture:{type:String,required:true},
    certificate:{type:String,required:true},
    dob:{type:Date,required:true},
    isApproved:{type:Boolean,required:false, default:false},
    isRejected:{type:Boolean,required:false, default:false},
    message:{type:String,required:false}
},{
    timestamps:true,
    versionKey:false
});

 const ApplicationModel=mongoose.model('Application', ApplicationSchema);
 module.exports=ApplicationModel