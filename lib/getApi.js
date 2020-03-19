const fetch = require('node-fetch');        //npm i node-fetch

const request = require('request');         //npm i request
const {
    promisify
} = require('util');
const promisifiedRequest = promisify(request)

/**
 * Description of the parameters
 * @param {String} city 
 * @param {String} countryCode 
 */

require('dotenv').config();

const getSonarcloud = async () => {
    let data = await promisifiedRequest({
        uri: `https://sonarcloud.io/api/project_branches/list?project=Health-Education-England_TIS-TRAINEE-DETAILS`,
        json: false
    })
    return data.body
}
const getPRSonarcloud = async () => {
    let data = await promisifiedRequest({
        uri: `https://sonarcloud.io/api/project_pull_requests/list?project=Health-Education-England_TIS-TRAINEE-DETAILS`,
        json: false
    })
    return data.body
}
const getJenkins = async () => {
    let data = await promisifiedRequest({
        uri: `https://build.tis.nhs.uk/jenkins/job/HEE/job/TIS-ADMINS-UI/job/master/lastBuild/api/json`,
        json: true
    })
    return data.body
}




module.exports = {
    getSonarcloud,
    getPRSonarcloud,
    getJenkins
}