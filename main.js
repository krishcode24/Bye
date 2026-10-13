const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const prompts = [
  {
    question: "I'm SORRY",
    image: "images/sorry.png",
    yes: "Okay fine",
    no: "I don't think so",
  },
  {
    question: "I really mean it..",
    image: "images/sadpillow.gif",
    yes: "Okay fine",
    no: "No",
  },
  {
    question: "Please think about it..",
    image: "images/imfine.gif",
    yes: "Okay fine",
    no: "No",
  },
  {
    question: "Please",
    image: "images/download.gif",
    yes: "Okay fine",
    no: "No",
  },
  {
    question: "Naa paavam illaiya?",
    image: "images/imfine.gif",
    yes: "Okay fine",
    no: "Final no",
  },
  {
    question: "Come on..Why being so stubborn, Talk to me..",
    image: "images/run.gif",
    yes: "No",
    no: "Yes",
  },
];

let currentPrompt = -1;

function showPrompt(index) {
  currentPrompt = index;
  const prompt = prompts[index];

  question.textContent = prompt.question;
  gif.src = prompt.image;
  yesBtn.textContent = prompt.yes;
  noBtn.textContent = prompt.no;

  if (index === 0) {
    gif.style.height = "300px";
    gif.style.width = "400px";
  }
}

function showSuccess() {
  question.textContent = "Hehehe Pls call me..We can talk about it!";
  gif.src = "images/love.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

yesBtn.addEventListener("click", () => {
  if (currentPrompt === -1) {
    showPrompt(0);
  } else if (currentPrompt < prompts.length - 1) {
    showSuccess();
  }
});

noBtn.addEventListener("click", () => {
  if (currentPrompt >= 0 && currentPrompt < prompts.length - 1) {
    showPrompt(currentPrompt + 1);
  } else if (currentPrompt === prompts.length - 1) {
    showSuccess();
  }
});

yesBtn.addEventListener("mouseover", () => {
  if (currentPrompt !== prompts.length - 1) {
    return;
  }

  const buttonRect = yesBtn.getBoundingClientRect();
  const margin = 50;
  const maxX = Math.max(0, window.innerWidth - buttonRect.width - margin * 2);
  const maxY = Math.max(0, window.innerHeight - buttonRect.height - margin * 2);

  yesBtn.style.left = `${margin + Math.floor(Math.random() * (maxX + 1))}px`;
  yesBtn.style.top = `${margin + Math.floor(Math.random() * (maxY + 1))}px`;
});
