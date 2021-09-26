const mysql = require('mysql')

//NEW DATABASE

// var pool = mysql.createPool({
//   connectionLimit: 100, //important
//   host: '166.62.27.177',
//   userSelection: 'muhammadbilal',
//   password: '5WCWVf01[a5}',
//   database: 'tradingseek',
//   debug: false
// })

if (process.env.NODE_ENV === 'development') {
// LOCAL DATABASE
    var pool = mysql.createPool({
        connectionLimit: 100, //important
        host: "localhost",
        user: "root",
        password: "",
        database: "tradingseek",
        debug: false
    });
} else {
    // LIVE DATABASE
    var pool = mysql.createPool({
        connectionLimit: 100, //important
        host: 'localhost',
        user: 'root',
        password: 'ApmP@ss1234',
        database: 'tradingseek',
        debug: false
    })
}

// OLD DATABASES

// var pool = mysql.createPool({
//   connectionLimit: 100, //important
//   host: "db4free.net",
//   userSelection: "tradingseek",
//   password: "tradingseek",
//   database: "tradingseek",
//   debug: false
// });


// var pool = mysql.createPool({
//   acquireTimeout: 30000, //30 secs
//   minConnections: 1,
//   connectionLimit: 100,
//   host: "116.90.52.7",
//   database: "tradings_webapp",
//   userSelection: "tradings_admin",
//   password: "Trading_11",
//   debug: false,
//   port: 3306
// });
// “tradings_admin”’s

let sql = {
    customQuery: (query, cb) => {
        pool.query(query, (e, result) => {
            e ? cb(e, true) : cb(result, false)
        })
    },
    insertQuery: (tableName, values, cb) => {
        let iQ = `INSERT into ${tableName} (${Object.keys(
            values
        )}) VALUES (${Object.values(values).map(val => {
            return "'" + val + "'"
        })}) `
        pool.query(iQ, (e, result) => {
            console.log(e)
            cb(result)
        })
    },
    updateQuery: (tableName, id, values, cb) => {
        let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(id='${id}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    updatePasswordLinkStatus: (token, userEmail, values, cb) => {
        let uQ = `
    UPDATE updatepasswordhistory SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(token='${token}' AND userEmail='${userEmail}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    updateServices: (id, services, cb) => {
        let uQ = `
    UPDATE user SET services='${services}'
    WHERE(id='${id}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    updatePriceQuery: (tableName, id, values, cb) => {
        let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(adddressId='${id}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    updateUserVerificationQuery: (tableName, email, values, cb) => {
        let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(email='${email}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    updateFbQuery: (tableName, email, values, cb) => {
        let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(email='${email}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    updateGmailQuery: (tableName, email, values, cb) => {
        let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => {
            return key + '=' + "'" + Object.values(values)[i] + "'"
        })}  
    WHERE(email='${email}') `
        pool.query(uQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    deleteQuery: (tableName, id, cb) => {
        let dQ = `DELETE from ${tableName}  WHERE(id='${id}')`
        pool.query(dQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    deletejob: (tableName, id, cb) => {
        let dQ = `DELETE from ${tableName}  WHERE(jobId='${id}')`
        pool.query(dQ, (e, res) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectQuery: (tableName, obj, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(email='${obj.email}' AND password='${obj.password}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectTokenAndEmailQuery: (token, userEmail, cb) => {
        let sQ = `Select * from updatepasswordhistory WHERE(token='${token}' AND userEmail='${userEmail}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectAllUsersForEditing: cb => {
        let sQ = `Select *
                  from user
                  where (userType !='ADMIN')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectFAQsQuestion: (tableName, postedUserId, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(postedUserId='${postedUserId}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectByStatus: (tableName, status, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(status='${status}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectReviewsByBusinessUserid: (tableName, businessUserId, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(businessUserId='${businessUserId}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectAverageRatingByBusinessCategory: (businessCategory, cb) => {
        let sQ = `SELECT AVG(stars) AS avg,COUNT(id) AS total FROM reviews  WHERE(businessCategory='${businessCategory}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectAverageRating: (businessUserId, cb) => {
        let sQ = `SELECT AVG(stars)AS avg FROM reviews  WHERE(businessUserId='${businessUserId}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectByProfession: (tableName, profession, cb) => {
        let sQ = `SELECT AVG(stars) AS average,COUNT(*) AS total, user.* FROM reviews INNER JOIN user ON (reviews.businessUserId = user.id) WHERE (user.businessProfession='${profession}') group by user.userName ORDER BY AVG(stars) DESC`
        // let sQ = `SELECT * from userSelection WHERE (businessProfession='${profession}') `

        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectNotRatedReviewByProfession: (tableName, profession, cb) => {
        let sQ = `SELECT 0 AS average,0 AS total, user.* FROM user WHERE id NOT IN (SELECT businessUserId FROM reviews) AND businessProfession='${profession}'`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectById: (tableName, id, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(id='${id}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectAll: (tableName, cb) => {
        let sQ = `Select * from ${tableName}`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectByEmail: (tableName, obj, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(email='${obj.email}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectByFbId: (tableName, obj, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(fbUid='${obj.uid}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectByGmailId: (tableName, obj, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(gmailUid='${obj.uid}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectJobByCategory: (tableName, categoryName, email, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(jobCategory='${categoryName}' and postUserEmail!='${email}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectJobByemail: (tableName, postUserEmail, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(postUserEmail='${postUserEmail}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectPriceByAddress: (tableName, postAddress, cb) => {
        let sQ = `Select * from ${tableName}  WHERE(matchedaddress='${postAddress}' )`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectOfferByEmail: (jobId, businessUserEmail, cb) => {
        // console.log(obj)
        let sQ = `SELECT * FROM offerhistory WHERE jobId= '${jobId}' AND businessUserEmail ='${businessUserEmail}'`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    //CHATS QUERIES
    selectBusinessuserConversations: (businessUserEmail, cb) => {
        let sQ = `SELECT * FROM user WHERE email IN (SELECT customerEmail FROM offerhistory WHERE customerEmail=offerhistory.customerEmail  AND businessUserEmail= '${businessUserEmail}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },
    selectNormalConversations: (customerEmail, cb) => {
        let sQ = `SELECT * FROM user WHERE email IN (SELECT businessUserEmail FROM offerhistory WHERE businessUserEmail=offerhistory.businessUserEmail  AND customerEmail= '${customerEmail}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    selectChats: (senderEmail, reciverEmail, cb) => {
        let sQ = `SELECT * FROM chats WHERE (senderEmail='${senderEmail}' and reciverEmail='${reciverEmail}') or (senderEmail='${reciverEmail}' and reciverEmail='${senderEmail}')`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    },

    getUnreadChats: (senderEmail, isSeen, cb) => {
        let sQ = `SELECT * FROM chats WHERE reciverEmail = '${senderEmail}'  AND isSeen = 'FALSE'`
        pool.query(sQ, (e, res, field) => {
            if (e) {
                console.log(e)
            }
            cb(res)
        })
    }
}

module.exports = {sql}
