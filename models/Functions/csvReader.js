const csv = require("fast-csv");
const fs = require("fs");

async function csvReader(file) {
    let fileRows = [];
    return new Promise(function (resolve, reject) {
        fs.createReadStream(file)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => { fileRows.push(row) })
            .on('end', rowCount => { resolve(fileRows) })
    });
}
module.exports = { csvReader };