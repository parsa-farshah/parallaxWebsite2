let _divSc = document.querySelector("#divSc");
const _vh = window.innerHeight;

const _carPng = document.querySelector("#carPng");
const _navbar = document.querySelector("#navbar");
const _elevent = document.querySelector("#elevent");
const _heroCar = document.querySelector("#heroCar");
const _shadowHero = document.querySelector("#shadowHero");
const _oilText = document.querySelector("#oilText");
const _heroTxt = document.querySelector("#heroTxt");
const _thirdSec = document.querySelector("#thirdSec");
const _videoSection3 = document.querySelector("#videoSection3");
_divSc.addEventListener("scroll", () => {
  let st = parseInt(_divSc.scrollTop);

  if (st > _vh / 15) {
    _carPng.classList.remove("scale-100");
    _carPng.classList.add("scale-105");
    _navbar.classList.remove("md:top-0");
    _navbar.classList.add("md:top-[-10%]");
    _elevent.classList.remove("lg:top-[90%]");
    _elevent.classList.add("lg:top-[70%]");
    _heroCar.classList.remove("top-[100%]");
    _heroCar.classList.add("top-[85%]");
    _shadowHero.classList.remove("md:bg-[#000]");
    _shadowHero.classList.add("md:bg-[#000000c5]");
  } else {
    _carPng.classList.remove("scale-105");
    _carPng.classList.add("scale-100");
    _navbar.classList.remove("md:top-[-10%]");
    _navbar.classList.add("md:top-0");
    _elevent.classList.remove("lg:top-[70%]");
    _elevent.classList.add("lg:top-[90%]");
    _heroCar.classList.remove("top-[85%]");
    _heroCar.classList.add("top-[100%]");
  }
  ////////////////////////////////////////////
  if (st > _vh) {
    _carPng.classList.remove("scale-105");
    _elevent.classList.remove("lg:top-[70%]");
    _heroCar.classList.remove("top-[85%]");
    _shadowHero.classList.remove("md:bg-[#000000c5]");

    _carPng.classList.add("scale-110");
    _elevent.classList.add("lg:top-[45%]");
    _heroCar.classList.add("top-[65%]");
    _shadowHero.classList.add("md:bg-[#00000083]");
  } else {
    _carPng.classList.remove("scale-110");
    _elevent.classList.remove("lg:top-[60%]");
    _heroCar.classList.remove("top-[65%]");
    _shadowHero.classList.remove("md:bg-[#00000083]");

    _carPng.classList.add("scale-105");
    _elevent.classList.add("lg:top-[45%]");
    _heroCar.classList.add("top-[85%]");
    _shadowHero.classList.add("md:bg-[#000000c5]");
  }
  ////////////////////////////////
  if (st > _vh * 1.5) {
    _carPng.classList.remove("scale-110");
    _elevent.classList.remove("lg:top-[45%]");
    _heroCar.classList.remove("top-[65%]");
    _shadowHero.classList.remove("md:bg-[#00000083]");
    _oilText.classList.remove("md:hidden");

    _carPng.classList.add("scale-115");
    _elevent.classList.add("lg:top-[40%]");
    _heroCar.classList.add("top-[45%]");
    _shadowHero.classList.add("md:bg-[#00000049]");
    _oilText.classList.add("md:block");
  } else {
    _carPng.classList.remove("scale-115");
    _elevent.classList.remove("lg:top-[40%]");
    _heroCar.classList.remove("top-[45%]");
    _shadowHero.classList.remove("md:bg-[#00000049]");
    _oilText.classList.remove("md:block");

    _carPng.classList.add("scale-110");
    _elevent.classList.add("lg:top-[45%]");
    _heroCar.classList.add("top-[65%]");
    _shadowHero.classList.add("md:bg-[#00000083]");
    _oilText.classList.add("md:hidden");
  }
  if (st > _vh * 2) {
    _carPng.classList.remove("scale-115");
    _heroCar.classList.remove("top-[45%]");
    _shadowHero.classList.remove("md:bg-[#00000049]");
    _heroTxt.classList.remove("md:hidden");

    _carPng.classList.add("scale-125");
    _heroCar.classList.add("top-[35%]");
    _shadowHero.classList.add("md:bg-[#0000003b]");
    _heroTxt.classList.add("md:block");
  } else {
    _carPng.classList.remove("scale-125");
    _heroCar.classList.remove("top-[35%]");
    _shadowHero.classList.remove("md:bg-[#0000003b]");
    _heroTxt.classList.remove("md:block");

    _carPng.classList.add("scale-115");
    _heroCar.classList.add("top-[45%]");
    _shadowHero.classList.add("md:bg-[#00000049]");
    _heroTxt.classList.add("md:hidden");
  }
  // /////////////////////////////////////////
  if (st > _vh * 2.5) {
    _heroCar.classList.remove("top-[35%]");
    _shadowHero.classList.remove("md:bg-[#0000003b]");

    _heroCar.classList.add("top-[15%]");
    _shadowHero.classList.add("md:bg-[#0000003b]");
  } else {
    _heroCar.classList.remove("top-[15%]");
    _shadowHero.classList.remove("md:bg-[#0000003b]");

    _heroCar.classList.add("top-[35%]");
    _shadowHero.classList.add("md:bg-[#0000003b]");
  }
  // ////////////////////////////////////
  if (st > _vh * 3) {
    _heroCar.classList.remove("top-[15%]");

    _thirdSec.classList.remove("top-[100%]");
    _heroCar.classList.add("top-[0%]");
    _thirdSec.classList.add("top-[95%]");
  } else {
    _thirdSec.classList.remove("top-[95%]");
    _heroCar.classList.remove("top-[0%]");
    _heroCar.classList.add("top-[15%]");
    _thirdSec.classList.add("top-[100%]");
  }
  // ////////////////////////////
  if (st > _vh * 3.5) {
    _heroCar.classList.remove("top-[0%]");
    _thirdSec.classList.remove("top-[95%]");
    _heroCar.classList.add("top-[-15%]");
    _thirdSec.classList.add("top-[75%]");
  } else {
    // _heroCar.classList.add("top-[0%]");
    // _thirdSec.classList.add("top-[95%]");
    _heroCar.classList.remove("top-[-15%]");
    _thirdSec.classList.remove("top-[75%]");
  }
  // ////////////////////////
  if (st > _vh * 4.5) {
    _heroCar.classList.remove("top-[-15%]");
    _thirdSec.classList.remove("top-[75%]");

    _heroCar.classList.add("top-[-45%]");
    _thirdSec.classList.add("top-[45%]");
  } else {
    // _heroCar.classList.add("top-[-15%]");
    // _thirdSec.classList.add("top-[75%]");
    _heroCar.classList.remove("top-[-45%]");
    _thirdSec.classList.remove("top-[45%]");
  }
  // /////////
  if (st > _vh * 5) {
    _heroCar.classList.remove("top-[-45%]");
    _thirdSec.classList.remove("top-[45%]");

    _heroCar.classList.add("top-[-75%]");
    _thirdSec.classList.add("top-[15%]");
  } else {
    // _heroCar.classList.add("top-[-45%]");
    // _thirdSec.classList.add("top-[45%]");
    _heroCar.classList.remove("top-[-75%]");
    _thirdSec.classList.remove("top-[15%]");
  }
  // ////////////////////////////

  if (st > _vh * 5.5) {
    _heroCar.classList.remove("top-[-75%]");
    _thirdSec.classList.remove("top-[15%]");

    _heroCar.classList.add("top-[-100%]");
    _thirdSec.classList.add("top-[0%]");
    // _videoSection3.setAttribute("autoplay", "autoplay");
    _videoSection3.play();
  } else {
    _heroCar.classList.remove("top-[-100%]");
    _thirdSec.classList.remove("top-[0%]");
    _videoSection3.pause();
    // _videoSection3.removeAttribute("autoplay", "autoplay");
  }
});
