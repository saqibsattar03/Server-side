// HOW TO RUN

// 1. GOTO SERVERSIDE FOLDER AND RUN npx nodemon server.js

// @AUTHOR
/* Saqib Sattar */
let express = require('express')
let {app} = require('./config/expressconfig')
let main = app()
var exphbs = require('express-handlebars')
const {router} = require('../Server-side/config/expressconfig')
const isLoggedIn = require('../Server-side/api/routes/auth/middleware/checking')
const {checkToken} = require('../Server-side/api/routes/auth/middleware/checkAuth')
require('dotenv').config()

//FOR SOME STATIC CONTENT
main.use('/img', express.static(__dirname + '/public/images'))
main.use('/staticTemplates', express.static(__dirname + '/staticTemplates'))
main.use('/public/uploads', express.static(__dirname + '/public/uploads'))

//SET VIEW ENGINE
main.engine(
    'handlebars',
    exphbs({
        extname: 'handlebars',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/'
    })
)
main.set('view engine', 'handlebars')

router.get('/hello', (req, res) => {
    res.render('home', {layout: false})

})

router.get('/demo', (req, res, next) => {
    res.send('success')
})


//------------NEW AUTHENTICATION--------------

let {userLoginApi, me, logout, verifyUser, userSocialLogin} = require('../Server-side/api/routes/auth/login')
let {
    authWithGoogle,
    googleCallBackForSimpleUser,
    authWithLinkedIn,
    linkedInCallBack,
    authWithFacebook,
    facebookCallBack,
    facebookAuthError,
    authWithGoogleForBusinessUser,
    googleCallBackForBusinessUser
} = require('./api/routes/auth/socialAuthRoutes')

main.use('/', userLoginApi)
main.use('/', me)
main.use('/', logout)
main.use('/', verifyUser)
main.use('/', userSocialLogin)
main.use('/', authWithGoogle)
main.use('/', googleCallBackForSimpleUser)
main.use('/', authWithLinkedIn)
main.use('/', linkedInCallBack)
main.use('/', authWithFacebook)
main.use('/', facebookCallBack)
main.use('/', facebookAuthError)
main.use('/',authWithGoogleForBusinessUser)
main.use('/',googleCallBackForBusinessUser)


// let {
//     userLoginApi,
//     userSocialLogin,
//     validateEmailApi,
//     verifyUser,
// } = require('./models/auth/login')
//
// main.use('/', userLoginApi)
// main.use('/', userSocialLogin)
// main.use('/', validateEmailApi)
// main.use('/', verifyUser)

// console.log(__dirname)

//-------------NEW REGISTRATION--------------------

let {userRegistration} = require('../Server-side/api/routes/auth/registerUser')
let {
    updateProfileImage,
    updateProfileByAttribute,
    updateProfile,
    updatePassword,
    promoteAsBusinessUser,
} = require('../Server-side/api/routes/auth/updateProfile')
let {updateServices} = require('../Server-side/api/routes/auth/updateService')
let {
    sendMailForForgetPassword,
} = require('../Server-side/api/routes/auth/forgotPassword')


main.use('/', userRegistration)
main.use('/', updateProfileImage)
main.use('/', updateProfileByAttribute)
main.use('/', updateProfile)
main.use('/', updatePassword)
main.use('/', promoteAsBusinessUser)
main.use('/', updateServices)
main.use('/', sendMailForForgetPassword)


// let {userRegistration} = require('./models/auth/registeration')
// let {updateProfile} = require('./models/auth/updateProfile')
// let {updateServices} = require('./models/auth/updateServices')
// let {updatePassword} = require('./models/auth/updateProfile')
// let {promoteAsBusinessUser} = require('./models/auth/updateProfile')
// let {
//     sendMailForForgetPassword,
//     validateUpdatePasswordLink,
//     updateLinkStatus
// } = require('./models/auth/forgetPassword')
// let {updateProfileImage} = require('./models/auth/updateProfile')
// let {updateProfileByAttribute} = require('./models/auth/updateProfile')
//
// main.use('/', userRegistration)
// main.use('/', updateProfile)
// main.use('/', updatePassword)
// main.use('/', updateServices)
// main.use('/', sendMailForForgetPassword)
// main.use('/', promoteAsBusinessUser)
// main.use('/', updateProfileImage)
// main.use('/', updateProfileByAttribute)
// main.use('/', validateUpdatePasswordLink)
// main.use('/', updateLinkStatus)

//-------------NEW CONTACT CLICKED--------------------

let postContactClick = require('../Server-side/api/routes/user/contactClicked')
let getContactClick = require('../Server-side/api/routes/user/contactClicked')

main.use('/', postContactClick)
main.use('/', getContactClick)

//-------------NEW STRIPE PAYMENT-------------------------

const checkoutSession = require('../Server-side/api/routes/stripe/checkOutSession')

main.use('/', checkoutSession)

// let checkoutSession = require('./models/stripe/checkoutSession')
// main.use('/', checkoutSession)

//<--------------NEW Profile Clicked ---------------------->

const {postProfileClicked} = require('../Server-side/api/routes/profile/postProfileClick')
const {getProfileClicked} = require('../Server-side/api/routes/profile/getProfileClick')

main.use('/', postProfileClicked)
main.use('/', getProfileClicked)

// const getProfileClicks = require('./models/job/profileClicked')
// main.use('/', getProfileClicks)


//<-------------- Contact Clicked ---------------------->
// const getContactClicks = require('./models/user/contactClicked')
// main.use('/', getContactClicks)

//<--------------NEW Directory Impressions ---------------------->

const {postDirectoryImpression, getDirectoryImpression} = require('../Server-side/api/routes/user/getDirImpression')

main.use('/', postDirectoryImpression)
main.use('/', getDirectoryImpression)

// const getDirImpressions = require('./models/user/getDirImpresssions')
// main.use('/', getDirImpressions)


//--------------Dummy data for inbox-------------------
const getChatUsers = require('./api/routes/inbox/getChatUsers')
const getContactUsers = require('./api/routes/inbox/getChatUsers')
const getChatConversation = require('./api/routes/inbox/getChatUsers')
main.use('/', getChatUsers)
main.use('/', getContactUsers)
main.use('/', getChatConversation)


//-------------NEW POST JOB-------------------------

const postProfession = require('./api/routes/professions/postProfession')
const getAllProfession = require('./api/routes/professions/getAllProfession')
const postJob = require('./api/routes/jobs/postJobs')
const getAllJobs = require('../Server-side/api/routes/jobs/getAllJobs')
const deleteJob = require('../Server-side/api/routes/jobs/deleteJob')
const getJobByEmail = require('../Server-side/api/routes/jobs/getJobsByEmail')
const updateJobStatus = require('../Server-side/api/routes/jobs/updatejobStatus')
const updateDescription = require('../Server-side/api/routes/professions/updateDescription')

main.use('/', postProfession)
main.use('/', getAllProfession)
main.use('/', postJob)
main.use('/', getAllJobs)
main.use('/', deleteJob)
main.use('/', getJobByEmail)
main.use('/', updateJobStatus)
main.use('/', updateDescription)

//------------- POST JOB-------------------------


// let {postJob, verifyJob} = require('./models/job/post')
let {getJobsByCategory} = require('./models/job/getJobs')
// let {getJobsByEmail} = require('./models/job/getJobsByEmail')
// let {deleteJob} = require('./models/job/deleteJob')


// main.use('/', postJob)
// main.use('/', verifyJob)
main.use('/', getJobsByCategory)
// main.use('/', getJobsByEmail)
// main.use('/', deleteJob)

//-------------NEW OFFER -------------------------
let sendOffer = require('./api/routes/offers/sendOffer')
// let {sendOffer} = require('./models/Offer/sendOffer')
let {getPriceByAddress} = require('./models/job/getPriceByAddress')

main.use('/', sendOffer)
main.use('/', getPriceByAddress)

//-------------NEW FAQ'S -------------------------

let {addQuestion} = require('../Server-side/api/routes/faqs/addQuestion')
let {deleteQuestion} = require('../Server-side/api/routes/faqs/deleteQuestion')
let {getQuestions} = require('../Server-side/api/routes/faqs/getQuestions')

main.use('/', addQuestion)
main.use('/', deleteQuestion)
main.use('/', getQuestions)

// let {addQuestion} = require('./models/faqs/addQuestion')
// let {deleteQuestion} = require('./models/faqs/deleteQuestion')
// let {getQuestions} = require('./models/faqs/getQuestions')
//
// main.use('/', addQuestion)
// main.use('/', deleteQuestion)
// main.use('/', getQuestions)

//-------------NEW CHATS -------------------------

let {postChat} = require('./api/routes/chats/postChat')
// let {getNormalConversations} = require('./api/routes/chats/getNomalConversations')
// let {getBusinessConversations} = require('./api/routes/chats/getBusinessConversations')
let {getAllChats} = require('./api/routes/chats/getChats')

main.use('/', postChat)
// main.use('/', getNormalConversations)
// main.use('/', getBusinessConversations)
main.use('/', getAllChats)
//------------- CHATS -------------------------
// let {
//     getBusinessConversations
// } = require('./models/chats/getBusinessConversations')
// let {
//     getchats,
//     getUnreadMessagesCount,
//     getEachUnreadMessageCount,
//     postSeenMessage
// } = require('./models/chats/getchats')
// let {postChat} = require('./models/chats/postChat')
// let {
//     getNormalConversations
// } = require('./models/chats/getNormalConversations')
//
// main.use('/', getBusinessConversations)
// main.use('/', getNormalConversations)
// main.use('/', getchats)
// main.use('/', postChat)
// main.use('/', getUnreadMessagesCount)
// main.use('/', getEachUnreadMessageCount)
// main.use('/', postSeenMessage)


//------------- ADMIN OPERATIONS -------------------------
let {changeUserStatus} = require('../Server-side/api/routes/adminOperations/changeuserStatus')
let {deleteUser} = require('../Server-side/api/routes/adminOperations/deleteUser')
let {getAllUsers} = require('../Server-side/api/routes/adminOperations/getAllUsers')
let {getUsersByStatus} = require('../Server-side/api/routes/adminOperations/getuserByStatus')
let {bulkUpload} = require('../Server-side/api/routes/adminOperations/bulkUpload')


main.use('/', changeUserStatus)
main.use('/', deleteUser)
main.use('/', getAllUsers)
main.use('/', getUsersByStatus)
main.use('/', bulkUpload)

// let {getUsersByStatus} = require('./models/adminOperations/getUsersByStatus')
// let {changeUserStatus} = require('./models/adminOperations/changeUserStatus')
let {getAddresses} = require('./models/adminOperations/getAddresses')
let {updatePrice} = require('./models/adminOperations/updatePrice')
// let {bulkUpload} = require('./models/adminOperations/bulkUpload')
// let {getAllUsers} = require('./models/adminOperations/getAllUsers')
// let {deleteUser} = require('./models/adminOperations/deleteUser')

// main.use('/', getUsersByStatus)
// main.use('/', changeUserStatus)
// main.use('/', getAllUsers)
main.use('/', getAddresses)
main.use('/', updatePrice)
// main.use('/', deleteUser)
// main.use('/', bulkUpload)

//-------------NEW USER SELECTIONS -------------------------

let {getUserById} = require('./api/routes/userSelection/getUserById')


main.use('/', getUserById)

// let {
//     getUsersByProfession
// } = require('./models/userSelection/getUsersByProfession')
// let {getUsersById} = require('./models/userSelection/getUsersById')
//
// main.use('/', getUsersByProfession)
// main.use('/', getUsersById)

//------------- REVIEWS WORK-------------------------
// let {addReview} = require('./models/reviews/addReview')
let {postReview} = require('./api/routes/reviews/postReview')
let {getReview} = require('./api/routes/reviews/getReview')
let {updateReview} = require('./api/routes/reviews/updateReview')


main.use('/', postReview)
main.use('/', getReview)
main.use('/', updateReview)
// let {getReviews} = require('./models/reviews/getReviews')
let {
    getReviewsByBusinessCategory,
    getNotRatedBusinessByCategory
} = require('./models/reviews/getReviews')
// let {updateReply} = require('./models/reviews/updateReply')


// main.use('/', getReviews)
main.use('/', getReviewsByBusinessCategory)
main.use('/', getNotRatedBusinessByCategory)
// main.use('/', updateReply)

//------------ ROOT REQUEST-------------------
main.get('/', (req, res) => {
    return res.json({message: 'BISMILAH-HIR-RAHMAN-IR-RAHIM'})
})

