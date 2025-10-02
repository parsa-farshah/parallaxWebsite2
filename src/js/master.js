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
const _fourth = document.querySelector("#fourth");
const _bgMan = document.querySelector("#bgMan");
const _rightSideScroll = document.querySelector("#rightSideScroll");
const _slideTxt1 = document.querySelector("#slideTxt1");
const _slideTxt2 = document.querySelector("#slideTxt2");
const _slideTxt3 = document.querySelector("#slideTxt3");
const _slideTxt4 = document.querySelector("#slideTxt4");

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
  if (st > _vh * 6) {
    _thirdSec.classList.remove("top-[0%]");
    _fourth.classList.remove("top-[100%]");
    _thirdSec.classList.add("top-[-10%]");
    _fourth.classList.add("top-[90%]");
    _videoSection3.pause();
  } else {
    _thirdSec.classList.remove("top-[-10%]");
    _fourth.classList.remove("top-[90%]");
    _thirdSec.classList.add("top-[0%]");
    _fourth.classList.add("top-[100%]");
  }
  if (st > _vh * 6.5) {
    _thirdSec.classList.remove("top-[-10%]");
    _fourth.classList.remove("top-[90%]");
    _thirdSec.classList.add("top-[-20%]");
    _fourth.classList.add("top-[80%]");
  } else {
    _thirdSec.classList.remove("top-[-20%]");
    _fourth.classList.remove("top-[80%]");
  }
  if (st > _vh * 7) {
    _thirdSec.classList.remove("top-[-20%]");
    _fourth.classList.remove("top-[80%]");

    _thirdSec.classList.add("top-[-40%]");
    _fourth.classList.add("top-[60%]");
  } else {
    _thirdSec.classList.remove("top-[-40%]");
    _fourth.classList.remove("top-[60%]");
  }
  if (st > _vh * 7.5) {
    _thirdSec.classList.remove("top-[-40%]");
    _fourth.classList.remove("top-[60%]");

    _thirdSec.classList.add("top-[-60%]");
    _fourth.classList.add("top-[40%]");
  } else {
    _thirdSec.classList.remove("top-[-60%]");
    _fourth.classList.remove("top-[40%]");
  }
  if (st > _vh * 8) {
    _thirdSec.classList.remove("top-[-60%]");
    _fourth.classList.remove("top-[40%]");

    _thirdSec.classList.add("top-[-80%]");
    _fourth.classList.add("top-[20%]");
  } else {
    _thirdSec.classList.remove("top-[-80%]");
    _fourth.classList.remove("top-[20%]");
  }
  if (st > _vh * 8.5) {
    _thirdSec.classList.remove("top-[-80%]");
    _fourth.classList.remove("top-[20%]");

    _thirdSec.classList.add("top-[-100%]");
    _fourth.classList.add("top-[0%]");
  } else {
    _thirdSec.classList.remove("top-[-100%]");
    _fourth.classList.remove("top-[0%]");
  }
  if (st > _vh * 8.75) {
    _bgMan.classList.remove("w-full");
    _bgMan.classList.add("w-[97%]");
  } else {
    _bgMan.classList.remove("w-[97%]");
    _bgMan.classList.add("w-full");
  }
  if (st > _vh * 9) {
    _bgMan.classList.remove("w-[97%]");
    _bgMan.classList.add("w-[94%]");
  } else {
    _bgMan.classList.remove("w-[94%]");
  }
  if (st > _vh * 9.25) {
    _bgMan.classList.remove("w-[94%]");
    _bgMan.classList.add("w-[91%]");
  } else {
    _bgMan.classList.remove("w-[91%]");
  }
  if (st > _vh * 9.5) {
    _bgMan.classList.remove("w-[91%]");
    _bgMan.classList.add("w-[88%]");
  } else {
    _bgMan.classList.remove("w-[88%]");
  }
  if (st > _vh * 9.75) {
    _bgMan.classList.remove("w-[88%]");
    _bgMan.classList.add("w-[80%]");
  } else {
    _bgMan.classList.remove("w-[80%]");
  }
  if (st > _vh * 10) {
    _bgMan.classList.remove("w-[80%]");
    _bgMan.classList.add("w-[70%]");
    _rightSideScroll.classList.remove("md:top-[100%]");
    _rightSideScroll.classList.add("md:top-[80%]");
  } else {
    _bgMan.classList.remove("w-[70%]");
    _rightSideScroll.classList.remove("md:top-[80%]");
    _rightSideScroll.classList.add("md:top-[100%]");
  }
  if (st > _vh * 10.25) {
    _bgMan.classList.remove("w-[70%]");
    _bgMan.classList.add("w-[60%]");
    _rightSideScroll.classList.remove("md:top-[80%]");
    _rightSideScroll.classList.add("md:top-[60%]");
  } else {
    _bgMan.classList.remove("w-[60%]");
    _rightSideScroll.classList.remove("md:top-[60%]");
  }
  if (st > _vh * 10.5) {
    _bgMan.classList.remove("w-[60%]");
    _bgMan.classList.add("w-[50%]");
    _rightSideScroll.classList.remove("md:top-[60%]");
    _rightSideScroll.classList.add("md:top-[40%]");
    _slideTxt1.classList.remove("ml-0");
    _slideTxt2.classList.remove("ml-0");
    _slideTxt3.classList.remove("ml-0");
    _slideTxt4.classList.remove("ml-0");

    _slideTxt1.classList.add("ml-[20%]");
    _slideTxt2.classList.add("ml-[-20%]");
    _slideTxt3.classList.add("ml-[20%]");
    _slideTxt4.classList.add("ml-[-20%]");
  } else {
    _bgMan.classList.remove("w-[50%]");
    _rightSideScroll.classList.remove("md:top-[40%]");
    _slideTxt1.classList.remove("ml-[20%]");
    _slideTxt2.classList.remove("ml-[-20%]");
    _slideTxt3.classList.remove("ml-[20%]");
    _slideTxt4.classList.remove("ml-[-20%]");
  }
  if (st > _vh * 11) {
    _rightSideScroll.classList.remove("md:top-[40%]");
    _rightSideScroll.classList.add("md:top-[20%]");
    _slideTxt1.classList.remove("ml-[20%]");
    _slideTxt2.classList.remove("ml-[-20%]");
    _slideTxt3.classList.remove("ml-[20%]");
    _slideTxt4.classList.remove("ml-[-20%]");

    _slideTxt1.classList.add("ml-[40%]");
    _slideTxt2.classList.add("ml-[-40%]");
    _slideTxt3.classList.add("ml-[40%]");
    _slideTxt4.classList.add("ml-[-40%]");
  } else {
    _rightSideScroll.classList.add("md:top-[20%]");
    _slideTxt1.classList.remove("ml-[40%]");
    _slideTxt2.classList.remove("ml-[-40%]");
    _slideTxt3.classList.remove("ml-[40%]");
    _slideTxt4.classList.remove("ml-[-40%]");
  }
  if (st > _vh * 11.5) {
    _rightSideScroll.classList.remove("md:top-[20%]");
    _rightSideScroll.classList.add("md:top-[0%]");
    _slideTxt1.classList.remove("ml-[40%]");
    _slideTxt2.classList.remove("ml-[-40%]");
    _slideTxt3.classList.remove("ml-[40%]");
    _slideTxt4.classList.remove("ml-[-40%]");
    _slideTxt1.classList.add("ml-[45%]");
    _slideTxt2.classList.add("ml-[-45%]");
    _slideTxt3.classList.add("ml-[45%]");
    _slideTxt4.classList.add("ml-[-45%]");
  } else {
    _rightSideScroll.classList.remove("md:top-[0%]");
    _slideTxt1.classList.remove("ml-[45%]");
    _slideTxt2.classList.remove("ml-[-45%]");
    _slideTxt3.classList.remove("ml-[45%]");
    _slideTxt4.classList.remove("ml-[-45%]");
  }
  if (st > _vh * 12) {
    _rightSideScroll.classList.remove("md:top-[0%]");
    _rightSideScroll.classList.add("md:top-[-20%]");
    _slideTxt1.classList.remove("ml-[45%]");
    _slideTxt2.classList.remove("ml-[-45%]");
    _slideTxt3.classList.remove("ml-[45%]");
    _slideTxt4.classList.remove("ml-[-45%]");

    _slideTxt1.classList.add("ml-[50%]");
    _slideTxt2.classList.add("ml-[-50%]");
    _slideTxt3.classList.add("ml-[50%]");
    _slideTxt4.classList.add("ml-[-50%]");
  } else {
    _rightSideScroll.classList.remove("md:top-[-20%]");

    _slideTxt1.classList.remove("ml-[50%]");
    _slideTxt2.classList.remove("ml-[-50%]");
    _slideTxt3.classList.remove("ml-[50%]");
    _slideTxt4.classList.remove("ml-[-50%]");
  }
  if (st > _vh * 12.5) {
    _rightSideScroll.classList.remove("md:top-[-20%]");
    _rightSideScroll.classList.add("md:top-[-40%]");
    _slideTxt1.classList.remove("ml-[50%]");
    _slideTxt2.classList.remove("ml-[-50%]");
    _slideTxt3.classList.remove("ml-[50%]");
    _slideTxt4.classList.remove("ml-[-50%]");
    _slideTxt1.classList.add("ml-[54%]");
    _slideTxt2.classList.add("ml-[-54%]");
    _slideTxt3.classList.add("ml-[54%]");
    _slideTxt4.classList.add("ml-[-54%]");
  } else {
    _rightSideScroll.classList.remove("md:top-[-40%]");
    _slideTxt1.classList.remove("ml-[54%]");
    _slideTxt2.classList.remove("ml-[-54%]");
    _slideTxt3.classList.remove("ml-[54%]");
    _slideTxt4.classList.remove("ml-[-54%]");
  }
  if (st > _vh * 13) {
    _rightSideScroll.classList.remove("md:top-[-40%]");
    _rightSideScroll.classList.add("md:top-[-70%]");
    _slideTxt1.classList.remove("ml-[54%]");
    _slideTxt2.classList.remove("ml-[-54%]");
    _slideTxt3.classList.remove("ml-[54%]");
    _slideTxt4.classList.remove("ml-[-54%]");
    _slideTxt1.classList.add("ml-[56%]");
    _slideTxt2.classList.add("ml-[-56%]");
    _slideTxt3.classList.add("ml-[56%]");
    _slideTxt4.classList.add("ml-[-56%]");
  } else {
    _rightSideScroll.classList.remove("md:top-[-70%]");
    _slideTxt1.classList.remove("ml-[56%]");
    _slideTxt2.classList.remove("ml-[-56%]");
    _slideTxt3.classList.remove("ml-[56%]");
    _slideTxt4.classList.remove("ml-[-56%]");
  }
});
