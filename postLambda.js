const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const key = process.env.API_KEY;
const url = process.env.API_URL;

function httpPostIBM(theUrl,data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", theUrl, false);
    xhr.setRequestHeader('Authorization', 'Basic `{Username:apiKey}:${Password:Key}`'  );
    //req.setRequestHeader('Authorization','Basic ' + Base64StringOfUserColonPassword);
    //{"Username":"apiKey","Password":"Jm4ot5myQe8XbULR1rNI9YnGlF4ghho28tcTWJ5YgYU5"}
	xhr.send(data);
    return JSON.parse(xhr.responseText);
}

exports.handler = async (event) => {
    let data= {
        "features": {
          "entities": {
            "sentiment": true,
            "emotion": true,
            limit: 5
          },
          "keywords": {
            "emotion": true,
            "sentiment": true,
            limit: 5
          }
        },          
        "text": event.historial_clinico
    }
	let a=httpPostIBM(url,data);
    return a;
	
};