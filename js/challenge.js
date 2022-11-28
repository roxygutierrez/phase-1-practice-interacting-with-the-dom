let counter = 0;
const increment = () => {
  document.querySelector("#counter").textContent = ++counter;
};
const decrement = () => {
  document.querySelector("#counter").textContent = --counter;
};

const disableButton = () => {
  document.querySelector("#minus").disabled = true;
  document.querySelector("#plus").disabled = true;
  document.querySelector("#heart").disabled = true;
};

const enableButton = () => {
  document.querySelector("#minus").disabled = false;
  document.querySelector("#plus").disabled = false;
  document.querySelector("#heart").disabled = false;
};

let intervalId = setInterval(increment, 1000);

document.querySelector("#plus").addEventListener("click", increment);
document.querySelector("#minus").addEventListener("click", decrement);

document.querySelector("#heart").addEventListener("click", (e) => {
  let li = document.querySelector(`li#likes-${counter}`);
  if (li === null) {
    li = document.createElement("li");
    li.id = `likes-${counter}`;
    li.innerHTML = `${counter} has been liked <span>1</span> times`;
    document.querySelector("ul.likes").appendChild(li);
  } else {
    let currentNumber = li.querySelector("span");
    currentNumber.textContent = ++currentNumber.textContent;
  }
});

const pauseButton = document.querySelector("#pause");

pauseButton.addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "pause") {
    disableButton();
    clearInterval(intervalId);
    e.target.textContent = "resume";
  } else {
    enableButton();
    e.target.textContent = "pause";
    intervalId = setInterval(increment, 1000);
  }
});

document.querySelector("#restart").addEventListener("click", (e) => {
  counter = 0;
  enableButton();
  document.querySelector("#counter").textContent = counter;
});

document.querySelector("#comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let comment = document.createElement("p");
  comment.textContent = e.target["comment-input"].value;
  document.querySelector("div#list").appendChild(comment);
});
