var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function httpPost(theUrl,a) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", theUrl, false);
    xhr.send();
    return xhr.responseText;
}
//let jstm = JSON.parse(httpPost('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/83c14648-c0a9-43c2-89fd-4e9a144f9351/v1/analyze?version=2021-03-25'));

exports.handler = async (event) => {
    // TODO implement
    
    let r = event.historial_clinico;
    return JSON.parse(httpPost('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/83c14648-c0a9-43c2-89fd-4e9a144f9351/v1/analyze?version=2021-03-25',r))
    
};