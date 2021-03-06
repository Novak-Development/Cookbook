#### Alexa Cookbook
## External Calls Testing <a id="title"></a>
<hr />

### Intro
These tests show you how you can create tests to execute the functions that make external calls, outside of the Alexa Skills context.
Verify you have node.js available locally by opening a command prompt and typing ```node --version```


### Testing your functions
Run a test, such as the mock test, by typing:
``` node TestmockGet.js```

Node.js programs can make reference to helper code files that are contained within the project folder.
The file is "required" and given a name.  All the data and functions within the file can then be accessed from this name using dotted notation.

```
var MymockGet = require("../mockGet.js");

var myRequest = "Florida";
var myResult;

MymockGet.mockGet(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);

    }
);

```


```
sent     : Florida
received : 5000
```

Once you have the mock function working, it will be easy to swap it out for the actual web service functions.
### Test HTTPS calls

``` node TesthttpsGet.js```

### Install Node modules locally
Lambda code running within the AWS Lambda service has access to two SDKs: ```alexa-sdk``` and ```aws-sdk```.
If you would like to test locally, you can install these modules directly into your test folder:

1. In a command prompt, navigate to the folder with your source code files.
1. Type ```npm install --save alexa-sdk```
1. Type ```npm install --save aws-sdk```

NPM, the Node Package Manager, will find and install these modules for you.
You should now see a new folder called ```node_modules``` and within here are all the resources for the modules.


Back to [ExternalCalls](../README.md#title)