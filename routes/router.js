const {Router} = require('express')
const router = Router();

const getapi = require('../lib/getapi')     //imports the getapi.js

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/sonarcloud', async (req, res) => {
    let data = await getapi.getSonarcloud()
    //console.log(data)
    data = JSON.parse(data);
    //console.log(data.branches[0].name)

    res.render('sonarcloud', {
        data,
        name: data.branches[0].name,
        isMain: data.branches[0].isMain,
        date: data.branches[0].analysisDate,
        Status: data.branches[0].status.qualityGateStatus
    })
    //console.log(data);
})
router.get('/PRsonarcloud', async (req, res) => {
    let data = await getapi.getPRSonarcloud()
    //console.log(data)
    data = JSON.parse(data);
    console.log(data.pullRequests[0].title)

    res.render('prsonarcloud', {
        data,
        Title: data.pullRequests[0].title,
        Branch: data.pullRequests[0].branch,
        Date: data.pullRequests[0].analysisDate,
        URL: data.pullRequests[0].url
        
    })
    //console.log(data);
})
router.get('/jenkins', async (req, res) => {
    let data = await getapi.getJenkins()
    console.log(data)
    //data = JSON.parse(data);
    //console.log(data.pullRequests[0].title)

    res.render('jenkins', {
        data,
        //class: data._class
    })
    //console.log(data);
})

module.exports = router;