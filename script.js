const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        display.value = eval(display.value);
        playSound('correct');
      } catch {
        display.value = "Oops!";
        playSound('error');
      }
    } else if (value === "C") {
      display.value = "";
      playSound('clear');
    } else {
      display.value += value;
      playSound('click');
    }

    btn.classList.add("animate");
    setTimeout(() => btn.classList.remove("animate"), 200);
  });
});

function playSound(type) {
  const sounds = {
    click: new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
    correct: new Audio("https://www.fesliyanstudios.com/play-mp3/676"),
    error: new Audio("https://www.fesliyanstudios.com/play-mp3/722"),
    clear: new Audio("https://www.fesliyanstudios.com/play-mp3/785")
  };
  sounds[type].play();
}
