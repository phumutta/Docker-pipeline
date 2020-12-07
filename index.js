const express = require('express')
const axios =require ('axios')
var request =require('request')

const app = express()
const port =5000;
const url="https://covid19.mathdro.id/api"

app.get('/', (req, res) => {
    res.send('Hello World : API SERVER')
  })

app.get('/getCountry', (req, res) => {
   
    let changeableUrl=url;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                const modifiedData={
                        confirmed:parsedBody.confirmed,
                        recovered:parsedBody.recovered,
                        deaths:parsedBody.deaths,
                        lastUpdate:parsedBody.lastUpdate
                    }
            
                res.send(modifiedData)
            }
        })
   
  })

app.listen(port, () => {
    console.log(`Start server at port ${port}.`)
  })