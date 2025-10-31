
// html is in charge of redirection to other links, but these are here in case i want to add more interactivity
// can delete these if want its kinda useless rn, or add more if needed
// do interactivity stuff after everything is done
var answer1 = document.getElementById("answer1"); // not used
var answer2 = document.getElementById("answer2"); // used in 1.html to go to insights.html
var answer3 = document.getElementById("answer3"); // used in insights.html to go to dine in eemplate
var answer5 = document.getElementById("answer5"); // used in insights.html to go to mall template
var answer6 = document.getElementById("answer6"); // used in insights.html to go to newspaper template
var answer7 = document.getElementById("answer7"); // used in 1.html to go to newspaper template

window.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("disclaimer-modal");
  const agreeBtn = document.getElementById("agree-btn");

  // Stop if we can’t find the elements
  if (!modal || !agreeBtn) {
    console.error("Modal or button not found!");
    return;
  }

  // Check if the user already agreed
  const hasAgreed = localStorage.getItem("disclaimerAgreed");

  if (hasAgreed === "true") {
    modal.classList.add("hidden");
  }

  // Handle button click
  agreeBtn.addEventListener("click", function() {
    console.log("Agree button clicked");
    localStorage.setItem("disclaimerAgreed", "true");
    modal.classList.add("hidden");
  });

var factlist = [
  "there are over 3.8 million teachers in the united states",
  "many teachers report having to spend money out of their own pocket to pay for school supplies",
  "an average class size in the usa is about 16 to 23 students",
]

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factlist[count];
  count++;
  if(count == factlist.length) {
    count = 0;
  }
}