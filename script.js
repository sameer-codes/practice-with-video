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
//text area refernce in javascript


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
  return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
  console.log("error occurred"+ error);
  alert("something happend to the server , try after some time")
}

function clickEventHandler() {
    var inputText= txtInput.value;


  fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText=json.contents.translated;
      outputDiv.innerText = translatedText;
    }
         )
  
   .catch(errorHandler)
};

primaryButton.addEventListener("click", clickEventHandler);