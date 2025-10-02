let _divSc = document.querySelector("#divSc");
const _vh = window.innerHeight;

const _carPng = document.querySelector("#carPng");
const _navbar = document.querySelector("#navbar");
const _elevent = document.querySelector("#elevent");
const _heroCar = document.querySelector("#heroCar");
const _shadowHero = document.querySelector("#shadowHero");
_divSc.addEventListener("scroll", () => {
  let st = parseInt(_divSc.scrollTop);

  if (st > _vh / 15) {
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
    _carPng.classList.remove("scale-100");
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

    _carPng.classList.add("scale-115");
    _elevent.classList.add("lg:top-[40%]");
    _heroCar.classList.add("top-[45%]");
    _shadowHero.classList.add("md:bg-[#00000049]");
  } else {
    _carPng.classList.remove("scale-115");
    _elevent.classList.remove("lg:top-[40%]");
    _heroCar.classList.remove("top-[45%]");
    _shadowHero.classList.remove("md:bg-[#00000049]");

    _carPng.classList.add("scale-110");
    _elevent.classList.add("lg:top-[45%]");
    _heroCar.classList.add("top-[65%]");
    _shadowHero.classList.add("md:bg-[#00000083]");
  }
});
