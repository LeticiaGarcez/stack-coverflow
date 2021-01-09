
const axios = require('axios');

module.exports = {
    getQuestions: (question) => {
        let resource = `https://api.stackexchange.com/2.2/search?intitle=${question}&order=desc&sort=activity&site=stackoverflow`
        const request = axios.get(resource)
        return request
                .then(result => { return result.data; })
                .catch(error => { return Promise.reject(error); });
    }
}