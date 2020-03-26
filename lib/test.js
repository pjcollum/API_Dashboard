
//show the latest build results for tis admins ui
const fetch = require('node-fetch');  

require('dotenv').config();

const test = async () => {
    let data = await fetch(
       `https://pjcollum:${process.env.JENKINSID}@build.tis.nhs.uk/jenkins/job/HEE/job/TIS-ADMINS-UI/job/master/lastBuild/api/json?pretty=true`
    )
    console.log(await data.json());
    
}
test()