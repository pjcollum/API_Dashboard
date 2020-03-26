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
// const getSentry = async () => {
//     let data = await promisifiedRequest({
//         uri: `https://sentry.io/api/0/projects/health-education-england-9v/tis-profile/issues/`,
//         json: false
//     })
//     return data.body
// }
const getSentry = async () => {
    let data = await fetch(`https://sentry.io/api/0/projects/health-education-england-9v/tis-profile/issues/`, {
        headers: {
            Authorization: `Bearer ${process.env.SENTRYID}`
           }
           
    })
       
    return await data.json()
}


// const getJenkins = async () => {
//     let data = await promisifiedRequest({
//         uri: `https://build.tis.nhs.uk/jenkins/job/HEE/job/TIS-ADMINS-UI/job/master/lastBuild/api/json`,
//         json: true
//     })
//     return data.body
// }
const getJenkins = async () => {
    let data = await fetch(
       `https://pjcollum:${process.env.JENKINSID}@build.tis.nhs.uk/jenkins//view/Pipeline%20Dashboard/api/json?pretty=true`,
      
    )
    return await data.json();
    
}

const getServiceStatus = async () => {
    let data = await promisifiedRequest({
        uri: `http://service-status.tis.nhs.uk/api/activeStatus`,
        json: true
    })
    return data.body
}




module.exports = {
    getSonarcloud,
    getPRSonarcloud,
    getSentry,
    getJenkins,
    getServiceStatus
}