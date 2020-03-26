
//show the latest build results for hee build history
const fetch = require('node-fetch');  

require('dotenv').config();

const test1 = async () => {
    let data = await fetch(
       `https://pjcollum:${process.env.JENKINSID}@build.tis.nhs.uk/jenkins/job/HEE//view/default/api/json?pretty=true`
    )
    console.log(await data.json());
    
}
test1()