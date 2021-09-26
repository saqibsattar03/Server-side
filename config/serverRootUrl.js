// const url = 'https://tradingseek.herokuapp.com';
if (process.env.NODE_ENV === 'development') {
    var url = 'http://localhost:4000'
} else {
    var url = 'http://172.105.49.210:4000'
}

module.exports = {
    url
};
