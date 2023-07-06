const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Frontend Dev";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Learner";
  }, 9000);
};

textLoad();
// to start over again:
setInterval(textLoad, 12000);
// here set the next multiple CSSMathValue, ie, we had 0,3k,6k so here 9k
