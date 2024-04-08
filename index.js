let main = document.getElementById("main");
const originalHTML = main.innerHTML;

let inside = document.getElementById("inside");
let outside = document.getElementById("outside");

let kneel = document.getElementById("kneel");
let bar = document.getElementById("bar");
let or = document.getElementById("or");

let goingOut = document.getElementById("going-out");
let budget = document.getElementById("budget");
let bigSpender = document.getElementById("big-spender");

let backToMain = document.getElementById("reset");
let lucky = document.getElementById("lucky");

const insideActivities = [
  "watch a movie",
  "play videogames",
  "make dinner",
  "play a board game",
  "enjoy a spa night",
  "have a dance party!",
  "give each other the sexy time",
];

const budgetActivities = [
  "see a movie in theaters",
  "have dinner at a new restaurant",
  "paint 'n sip",
  "go roller skating",
  "get physical (not in that way)",
  "go to a museum",
  "check out some live music",
  "have spontaneous road trip (max 1 hour distance)",
]; //balling on a budget

const bigSpenderActivities = [
  "buy each other an outfit from TJ Max",
  "have a TJ Max skin care haul + spa day",
  "enjoy a night of drinking and dancing",
  "take a spontaneous day trip",
  "play at the arcade",
  "find a sex shop (be ready to play with your new toys xD)",
];

const godActivities = ["KNEEL", "KNEEL!!", "YOU WILL KNEEL BEFORE THE HORDE!"];

/*TODO:
  add GOD button that when clicked outputs a random location
  THE BUTTON IS GOD. WHEN CLICKED WE MUDT DO WHAT IT SAYS WITHIN 7 DAYS, OR ELSE YOU WILL BE SMITED. SO CLICK WISELY
*/

inside.addEventListener("click", () => {
  goForth();
  main.innerHTML =
    insideActivities[Math.floor(Math.random() * 100) % insideActivities.length];
  backToMain.style.display = "block";
});

outside.addEventListener("click", () => {
  main.style.display = "none";
  goingOut.style.display = "flex";
  backToMain.style.display = "block";
});

budget.addEventListener("click", () => {
  goForth();
  goingOut.innerHTML =
    budgetActivities[Math.floor(Math.random() * 100) % budgetActivities.length];
});

bigSpender.addEventListener("click", () => {
  goForth();
  goingOut.innerHTML = `<pre>
  ${
    bigSpenderActivities[
      Math.floor(Math.random() * 100) % bigSpenderActivities.length
    ]
  }
  \n\n
   </pre>`;
  // goingOut.style.borderBottom = "solid 3px black";
  lucky.style.display = "block";
  bar.style.display = "block";
  or.style.display = "block";
});

backToMain.addEventListener("click", () => {
  window.location.reload();
});

lucky.addEventListener("click", () => {
  goingOut.innerHTML =
    godActivities[Math.floor(Math.random() * 100) % godActivities.length];

  timeToKneel();
  lucky.style.display = "none";
  bar.style.display = "none";
  or.style.display = "none";
});

const goForth = () => {
  kneel.textContent = "NOW GO FORTH AND...";
};

const timeToKneel = () => {
  kneel.textContent = "LISTEN TO YOUR GOD!";
};
