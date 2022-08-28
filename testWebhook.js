const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('We are live')
});

app.listen(3333, () => console.log("Server is live at port 3333"));

app.post('/dialogflow',(request, response) => {
   
    let text = "Your coffee price is 7$";
    
    // if (tag === 'Default Welcome Intent') {
    //   text = 'Hello from a GCF Webhook';
    // } else if (tag === 'get-name') {
    //   text = 'My name is Flowhook';
    // } else {
    //   text = `There are no fulfillment responses defined for "${tag}"" tag "${city}"`;
    // }
    
    const jsonResponse = {
      fulfillment_response: {
        messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [text],
            },
          },
        ],
      },
    };
  
    response.send(jsonResponse)
    // response.send("Hello World")
  });

  