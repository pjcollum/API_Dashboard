
//show the latest build results for tis admins ui
const fetch = require('node-fetch');  

require('dotenv').config();

const test2 = async () => {
    let data = await fetch(
       `https://pjcollum:${process.env.JENKINSID}@build.tis.nhs.uk/jenkins//view/Pipeline%20Dashboard/api/json?pretty=true`
    )
    console.log(await data.json());
    
}
test2()