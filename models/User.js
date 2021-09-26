const schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    imgUrl:String,
    userType:String,
    businessName:String,
    businessProfession:String,
    location:String,
    businessABN:String,
    userToken:String,
    isVerified:Boolean,
    isVerifiedBusiness:Boolean,
    gmailUil:String,
    fbUid:String,
    mobile:String,
    status:String,
});
export const User = mongoose.model('User', schema);
