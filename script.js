const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const verseDisplay = document.getElementById('verse-display')
const referenceDisplay = document.getElementById('reference-display')


let versesArray = []
let counter = 0
function handlePlus(){
    counter = (counter + 1) % versesArray.length;
    console.log(counter);
    updateVerseDisplay();
}

function handleMinus(){
    counter = (counter - 1 + versesArray.length) % versesArray.length;
    console.log(counter);
    updateVerseDisplay();
    
}

leftButton.addEventListener('click', handleMinus)
rightButton.addEventListener('click', handlePlus)

console.log(counter)

function updateVerseDisplay() {
    referenceDisplay.textContent = versesArray[counter].reference;
    verseDisplay.textContent = versesArray[counter].text;
}

// get data from the responses
Promise.all([
    fetch ( 'https://bible-api.com/john%203:16'),
    fetch( 'https://bible-api.com/2corinthians+05:21'),
    fetch('https://bible-api.com/joshua+01:08'),
    fetch('https://bible-api.com/genesis+01:01'),
    fetch('https://bible-api.com/philippians+04:06'),
    fetch('https://bible-api.com/mark+16:17-18'),
    // fetch('https://bible-api.com/phillipians+04:13'),
    // fetch('https://bible-api.com/isaian+60:01'),
    // fetch('https://bible-api.com/psalm+23:04'),
    // fetch('https://bible-api.com/genesis+18:14'),
    // fetch( 'https://bible-api.com/habakkuk+02:14'),
    // fetch('https://bible-api.com/luke+24:47'),
    



]).then(function(responses){
    // Get a JSON object from each of the responses
return Promise.all(responses.map(function(response){
return response.json()
}));

}).then(data => {
    // console.log( data)

    versesArray = data

    console.log( versesArray)
    
    // data.forEach(bible => {
    //     console.log(bible)
    //     const markup =`<li>${bible.text}<li>`;
    //     document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
    // });
})

.catch(error => console.log(error));

updateVerseDisplay();

    








   








    
    // function successFunction (response){
    // console.log(response)
    // }
    
    // function errorFunction (error){
    // console.log(error, "this is an error")
    // }

    
    
    // fetch( "https://bible-api.com/?random=verse" , {
    //     mode: 'no-cors'
        
    //   })
    //     .then(response => console.log(response))
    //     .catch(error => console.error(error));


        // API for get requests
// let fetchRes = fetch([
//     "https://bible-api.com/john%203:16",
//     // "https://bible-api.com/2corinthians+05:21",
//     // "https://bible-api.com/joshua+01:08"


// ]);

        
    // FetchRes is the promise to resolve
    // it by using.then() method
    // fetchRes.then(res =>
    //     res.json()).then(d => {
    //         console.log(d)
    //     })
    

    
    
    
    
    
   