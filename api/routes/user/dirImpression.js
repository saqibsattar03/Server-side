const {groupBy} = require('../../Functions/groupBy')
const dirImpression = require('../../models/directoryImpression')
const allowedFields = ["userId", "clickedBy"]
const moment = require('moment')

testing = (data) => {
    console.log(data)
}
dbFields = (data) => {
    console.log(data)
    let obj = {};
    allowedFields.forEach(column => {
        if (data.hasOwnProperty(column)) {
            obj[column] = data[column]
        }
    })
    return obj
}

filteredContactViews = (userId, startDate, endDate) => {
    console.log(userId, startDate, endDate)
    return dirImpression.find({
        userId: userId,
        createdAt: {
            $gte: startDate,
            $lte: endDate
        }
    })
}

getUserGroupByData = async (userId, dateFilter = null) => {
    let startDate = null;
    if (dateFilter === 'Last Month') {
        startDate = moment().subtract(30, 'days').startOf("day").format();
        console.log('here')
    } else {
        startDate = moment().subtract(15, 'days').startOf("day").format();
        console.log(startDate)
    }
    let endDate = moment().add(1,'day').toDate()
    console.log(endDate)

    let records = await filteredContactViews(userId, startDate,endDate)
    console.log(records)
    groupedRecords = await groupBy(records)
    let count = [];
    let labels = [];
    let total = 0;
    for (let property in groupedRecords) {
        labels.push(property)
        count.push(groupedRecords[property].length);
        total += groupedRecords[property].length
    }
    return {labels, count, total}
}

insertData = async (data) => {
    return await dirImpression.create(dbFields(data))
}

module.exports.insertData = insertData
module.exports.getUserGroupByData = getUserGroupByData
