const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const telegram = require('telegram-bot-api');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  res.send({'Status': true})  
  let botToken = req.query.botToken;
  let message = req.query.message;
  let api = new telegram({
    token: botToken,
        updates: {
            enabled: true
        }
    })
   api.sendMessage({
    //  Your Group Name  here with @
    chat_id: '@', 
	  text: message
   })
   .then(function(data)
    {
       console.log('data')
    })
    .catch(function(err)
    {
        console.log('err');
    });

});


app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);