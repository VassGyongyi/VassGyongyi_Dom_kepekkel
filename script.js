window.addEventListener("load", init);

function init() {
  const KEPEK = [
    "/images/cobenhaven1.jpg",
    "/images/cobenhaven2.jpg",
    "/images/cobenhaven3.jpg",
    "/images/cobenhaven4.jpg",
    "/images/cobenhaven5.jpg",
  ];
  const LISTA = document.querySelectorAll("article div");
  for (let i = 0; i < LISTA.length; i++) {
    LISTA[i].innerHTML += "<img src='' alt='Cobenhaven'>";
    let kepElem = document.getElementsByTagName("img")[i];
    kepElem.src = KEPEK[i];
  }
  const kepElem2 = document.querySelectorAll("article div img");
  for (let i = 0; i < LISTA.length; i++)
    kepElem2[i].addEventListener("mouseover", egerEsemeny);

  const kepElem3 = document.querySelectorAll("article div img");
  for (let i = 0; i < LISTA.length; i++)
    kepElem3[i].addEventListener("mouseout", egerEsemenyLe);
}

function egerEsemeny(event) {
  event.target.classList.add("szegelyezes");
}
function egerEsemenyLe(event) {
  event.target.classList.remove("szegelyezes");
}
