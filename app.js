var textInput = document.querySelector('.input-text');
var btnTranslate = document.querySelector('.btn-translate');
var textOutput = document.querySelector('.output-div');
console.log(textInput);
console.log(btnTranslate);
console.log(textOutput);

var serverURL = "https://api.funtranslations.com/translate/minion.json" ;

function getTranslationURL(text){
    return serverURL + "?" +"text=" +text;
}

function errorHandler(error){
   console.log("error occured" , error);
   alert("something went wrong with server! Please try again later");
}

function clickHandler(){

    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);