/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
const button = document.getElementById('load-quote');
const quoteBox = document.getElementById('quote-box');

// The array object below stores the quotes and the details about the quotes
var quotes = [
  {
    quote: "Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills.",
    source: "Jim Rohn",
    citation: "Success",
    year: "1999",
  },
  {
    quote:"Don’t join an easy crowd; you won’t grow. Go where the expectations and the demands to perform are high.",
    source:"Jim Rohn",
    citation: "Success",
    year: " 1996",
  },

  {
    quote: " There is a time when one must decide either to risk everything to fulfill one's dreams or sit for the rest of one's life in the backyard.",
    source: " Earl Nightingale",
    citation: "Inc",
    year: "1997",
  },

  {
    quote: "People don’t buy for logical reasons. They buy for emotional reasons.",
    source: "Zig Ziglar",
  },

  {
    quote: "Expect the best. Prepare for the worst. Capitalize on what comes.",
    source: "Zig Ziglar",
  },

];

// This function generates a random number between 0 and 5, hence choosing one of the quotes and returning it 
function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * 5);

  return quotes[randomNum];
}

// When the button is clicked this function will change the quote displayed by calling getRandomQuote, then the information will
// be placed in the HTML String. 
function printQuote(){
  var randomQuote = getRandomQuote(); 
  

  if(randomQuote.citation && randomQuote.year != undefined){
    var html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span></p>
    `;
    quoteBox.innerHTML = html;

  }
  else{
    var html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}</p>`;
    
    quoteBox.innerHTML = html;  
  }
}

// changes the background colour when the button is clicked
button.addEventListener('click', () =>{
  var colourNum = Math.floor(Math.random() * 5);

  var colours = ["red","brown","chocoloate","crimson","burlywood"];
  document.body.style.backgroundColor = colours[colourNum];
});


 
