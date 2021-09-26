const {groupBy} = require('../../Helpers/dbHelper');
const {knex} = require('../../knex/knex')
const allowedFields = ["user_id", "clicked_by"]
const moment = require('moment');

getDbFields = (data) => {
    let obj = {};
    allowedFields.forEach(column => {
        if (data.hasOwnProperty(column)) {
            obj[column] = data[column]
        }
    })
    return obj
}
getFilteredContactViews = async (userId, startDate, endDate) => {
    return await knex('directory_impressions').where('user_id', userId).where('created_at', '>=', startDate)
        .where('created_at', '<=', endDate).select();
}

getUserGroupByData = async (userId, dateFilter = null) => {
    let startDate = null;
    if (dateFilter === 'Last month') {
        startDate = moment().subtract(30, 'days').startOf("day").format();
    } else {
        startDate = moment().subtract(15, 'days').startOf("day").format();
    }
    var records = await getFilteredContactViews(userId, startDate, moment().add(1, 'day').format());
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
module.exports.getUserGroupByData = getUserGroupByData
