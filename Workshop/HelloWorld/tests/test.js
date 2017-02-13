// This is a Javascript test harness that simulates the execution of Lambda function code

var MyLambdaFunction = require('../src/index.js'); // assumes single Lambda function with exports.handler

 // this is the Lambda request data, generated by the Alexa service.  Replace with your actual Alexa request.
var event =
    {
        "session": {
            "sessionId": "SessionId.f9e6dcbb-b7da-4b47-905c.etc.etc",
            "application": {
                "applicationId": "amzn1.echo-sdk-ams.app.[unique-value-here]"
            },
            "attributes": {},
            "user": {
                "userId": "amzn1.ask.account.VO3PVTGF563MOPBY.etc.etc"
            },
            "new": true
        },
        "request": {
            "type": "LaunchRequest",

            "requestId": "request5678",

            "locale": "en-US"
        },
        "version": "1.0"
    };

var context = {
    'succeed': function (data) {
        console.log(JSON.stringify(data, null,'\t') );

    },
    'fail': function (err) {
        console.log('context.fail occurred');
        console.log(JSON.stringify(err, null,'\t') );
    }

};

function callback(error, data) {
    if(error) {
        console.log('error: ' + error);
    } else {
        console.log(data);
    }
}

// call the function
MyLambdaFunction['handler'] (event, context, callback);
