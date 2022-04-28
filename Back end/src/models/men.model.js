
const mongoose=require("mongoose");

const menSchema=new mongoose.Schema({
    img1:{type:String},
    img2:{type:String},
    img3:{type:String},
    img4:{type:String},
    img5:{type:String},
    brandname:{type:String},
    shortname:{type:String},
    longname:{type:String},
    color:{type:String},
    originalprice:{type:String},
    discountedprice:{type:String},
    discountpercent:{type:String},
    rating:{type:String},
},
{
versionKey:false,
timeStamps:true,
})
const mendata=mongoose.model("men",menSchema);
module.exports=mendata;