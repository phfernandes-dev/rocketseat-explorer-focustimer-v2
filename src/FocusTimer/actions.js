import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import { registerSounds } from "./events.js";

export function play() {
  state.isRunning = true;
  document.documentElement.classList.add("running");
  timer.countDown();
}

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function increase() {
  el.minutes.textContent = Number(el.minutes.textContent) + 5;
  el.minutes.textContent = String(el.minutes.textContent).padStart(2, "0");
}

export function decrease() {
  el.minutes.textContent = Number(el.minutes.textContent) - 5;
  if (el.minutes.textContent < 0) {
    el.minutes.textContent = 0;
    el.seconds.textContent = 0;
  }

  el.minutes.textContent = String(el.minutes.textContent).padStart(2, "0");
  el.seconds.textContent = String(el.seconds.textContent).padStart(2, "0");
}

export function forestOn() {
  if (state.isMute) {
    state.isMute = false;
    document.getElementById("forestOn").classList.add("hide");
    document.getElementById("forestOff").classList.remove("hide");
    sounds.forestAudio.play();
  } else {
    document.getElementById("forestOn").classList.add("hide");
    document.getElementById("forestOff").classList.remove("hide");
    sounds.forestAudio.play();

    document.getElementById("rainOn").classList.remove("hide");
    document.getElementById("rainOff").classList.add("hide");
    sounds.rainAudio.pause();

    document.getElementById("coffeeshopOn").classList.remove("hide");
    document.getElementById("coffeeshopOff").classList.add("hide");
    sounds.coffeeshopAudio.pause();

    document.getElementById("fireplaceOn").classList.remove("hide");
    document.getElementById("fireplaceOff").classList.add("hide");
    sounds.fireplaceAudio.pause();
  }
}

export function forestOff() {
  state.isMute = true;
  document.getElementById("forestOn").classList.remove("hide");
  document.getElementById("forestOff").classList.add("hide");
  sounds.forestAudio.pause();
}

export function rainOn() {
  if (state.isMute) {
    state.isMute = false;
    document.getElementById("rainOn").classList.add("hide");
    document.getElementById("rainOff").classList.remove("hide");
    sounds.rainAudio.play();
  } else {
    document.getElementById("rainOn").classList.add("hide");
    document.getElementById("rainOff").classList.remove("hide");
    sounds.rainAudio.play();

    document.getElementById("forestOn").classList.remove("hide");
    document.getElementById("forestOff").classList.add("hide");
    sounds.forestAudio.pause();

    document.getElementById("coffeeshopOn").classList.remove("hide");
    document.getElementById("coffeeshopOff").classList.add("hide");
    sounds.coffeeshopAudio.pause();

    document.getElementById("fireplaceOn").classList.remove("hide");
    document.getElementById("fireplaceOff").classList.add("hide");
    sounds.fireplaceAudio.pause();
  }
}

export function rainOff() {
  state.isMute = true;
  document.getElementById("rainOn").classList.remove("hide");
  document.getElementById("rainOff").classList.add("hide");
  sounds.rainAudio.pause();
}

export function coffeeshopOn() {
  if (state.isMute) {
    state.isMute = false;
    document.getElementById("coffeeshopOn").classList.add("hide");
    document.getElementById("coffeeshopOff").classList.remove("hide");
    sounds.coffeeshopAudio.play();
  } else {
    document.getElementById("coffeeshopOn").classList.add("hide");
    document.getElementById("coffeeshopOff").classList.remove("hide");
    sounds.coffeeshopAudio.play();

    document.getElementById("rainOn").classList.remove("hide");
    document.getElementById("rainOff").classList.add("hide");
    sounds.rainAudio.pause();

    document.getElementById("forestOn").classList.remove("hide");
    document.getElementById("forestOff").classList.add("hide");
    sounds.forestAudio.pause();

    document.getElementById("fireplaceOn").classList.remove("hide");
    document.getElementById("fireplaceOff").classList.add("hide");
    sounds.fireplaceAudio.pause();
  }
}

export function coffeeshopOff() {
  state.isMute = true;
  document.getElementById("coffeeshopOn").classList.remove("hide");
  document.getElementById("coffeeshopOff").classList.add("hide");
  sounds.coffeeshopAudio.pause();
}

export function fireplaceOn() {
  if (state.isMute) {
    state.isMute = false;
    document.getElementById("fireplaceOn").classList.add("hide");
    document.getElementById("fireplaceOff").classList.remove("hide");
    sounds.fireplaceAudio.play();
  } else {
    document.getElementById("fireplaceOn").classList.add("hide");
    document.getElementById("fireplaceOff").classList.remove("hide");
    sounds.fireplaceAudio.play();

    document.getElementById("rainOn").classList.remove("hide");
    document.getElementById("rainOff").classList.add("hide");
    sounds.rainAudio.pause();

    document.getElementById("forestOn").classList.remove("hide");
    document.getElementById("forestOff").classList.add("hide");
    sounds.forestAudio.pause();

    document.getElementById("coffeeshopOn").classList.remove("hide");
    document.getElementById("coffeeshopOff").classList.add("hide");
    sounds.coffeeshopAudio.pause();
  }
}

export function fireplaceOff() {
  state.isMute = true;
  document.getElementById("fireplaceOn").classList.remove("hide");
  document.getElementById("fireplaceOff").classList.add("hide");
  sounds.fireplaceAudio.pause();
}
