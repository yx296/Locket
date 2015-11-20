// first we check if the user has the extension installed 
// by using window.postmessage talking with main.js injected from manifest.json

// chrome.runtime.sendMessage allows main.js to communicate with background.js
// window.postMessage allows main.js to talk to our chat controller


// For the extension I’m working on, this allows the sending and receipt of messages without a Facebook API.
//  A hidden facebook page is opened in the background and interacted with, allowing the creation of an alternate 
//  chat client which will interact with the facebook service.





// Why did we use AngularJS? 
// Angular's two way data binding allowed us to easily update the DOM from new information 
// we got through extension, and through sockets. For example, an ng-repeat was all that was needed
// to display new chat messages realtime in the view(chat.HTML) using AngularJS 


//  AngularJS, through its focus on valid HTML and dynamic elements that mirror the underlying data, 
//  rebuilds the DOM according to the specified rules whenever the data is updated.

