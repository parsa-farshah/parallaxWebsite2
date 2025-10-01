let _divSc = document.querySelector("#divSc");
const _vh = window.innerHeight;

_divSc.addEventListener("scroll", () => {
  let st = parseInt(_divSc.scrollTop);

  if (st > _vh) {
    console.log("down");
  } else {
    console.log("up");
  }
});
