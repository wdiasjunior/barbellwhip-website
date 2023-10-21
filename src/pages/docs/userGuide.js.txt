(() => {
  window.scroll(0, 0);
})();

function selectNavOption(_locationHash) {
  location.hash = _locationHash;
  window.scroll(0, 0);
  let el = document.getElementById(window.location.hash.substring(1));
  if(el) {
    let divs = document.querySelectorAll(".doc_main > div");
    divs.forEach((item) => item.style.display = "none");
    el.style.display = "inline";
  }
}
