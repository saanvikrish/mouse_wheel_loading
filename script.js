const progressFill = document.querySelector("#progressFill");
const percentText = document.querySelector("#percent");
const progressbar = document.querySelector(".track");

const duration = 8200;
const completeHold = 450;
let startTime = performance.now();

function updateProgress(now) {
  const elapsed = (now - startTime) % (duration + completeHold);
  const progress = elapsed >= duration ? 1 : elapsed / duration;
  const percent = Math.floor(progress * 100);

  progressFill.style.transform = `scaleX(${progress.toFixed(4)})`;
  percentText.textContent = `${percent}%`;
  progressbar.setAttribute("aria-valuenow", String(percent));

  requestAnimationFrame(updateProgress);
}

requestAnimationFrame(updateProgress);
