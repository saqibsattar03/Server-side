const moment = require("moment");
let groupBy = async (data) => {
    let response = {};
    data.forEach(item => {
        let columnName = moment(item['created_at']).format('Y-MM-DD');
        if (response.hasOwnProperty(columnName)) {
            response[columnName].push(item)
        } else {
            response[columnName] = [];
            response[columnName].push(item)
        }
    })
    return response;
}

module.exports.groupBy = groupBy;
