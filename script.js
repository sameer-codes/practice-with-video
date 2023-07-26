// console.log("script");

// ex02
// var user=  prompt("give me your username");
// alert("welcome to the website "+ user);


// // ex03

// var primaryButton= document.querySelector("#primary-button");

// function clickEventHandler(){
//   console.log("clicked");
// };

// primaryButton.addEventListener("click", clickEventHandler);


// //ex 04

// var primaryButton = document.querySelector("#primary-button");
// var primaryTextArea = document.querySelector("#txt-area");        //text area refernce in javascript

// function clickEventHandler() {
//   console.log("clicked");
//   console.log("input:", primaryTextArea.value);                    //taking input from the textarea onclick and consoling it;
// };

// primaryButton.addEventListener("click", clickEventHandler);

//ex 05

var primaryButton = document.querySelector("#primary-button");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");
//text area refernce in javascript for dynamic output


var serverURL = "https://api.funtranslations.com/translate/minion.json"
// url for api call from server

function getTranslatedURL(text){
  return serverURL + "?" + "text=" + text
}
// getting the translation from api

function errorHandler(error)
{
  console.log("error occurred"+ error);
  alert("something happend to the server , try after some time")
}
// error handleing in case the server is not working

function clickEventHandler() {
    var inputText= txtInput.value;


  fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText=json.contents.translated;
      outputDiv.innerText = translatedText;                // showing output in the text area 
    }
         )
  
   .catch(errorHandler)                                    // error handling call
};

primaryButton.addEventListener("click", clickEventHandler); // listing to when the button is clicked