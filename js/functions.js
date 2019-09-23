let prev = document.getElementById("new-prev");
let next = document.getElementById("new-next");
let sectionOne = document.getElementById("section1");

next.addEventListener("click", () => {
  sectionOne.getElementsByClassName("category")[0].style.left = "-1375px";
  sectionOne.getElementsByClassName("category-next")[0].style.display = "grid";
  document.getElementsByClassName("show")[0].style.width = "200vw";


  setTimeout(() => {
    sectionOne.getElementsByClassName("category")[0].style.display = "none";
    sectionOne.getElementsByClassName("category-next")[0].style.left = "0";
    document.getElementsByClassName("show")[0].style.width = "100vw";

  }, 500);




});

prev.addEventListener("click", () => {
  sectionOne.getElementsByClassName("category")[0].style.display = "grid";
  sectionOne.getElementsByClassName("category-next")[0].style.left = "1375px";
  document.getElementsByClassName("show")[0].style.width = "200vw";

  setTimeout(() => {
    sectionOne.getElementsByClassName("category-next")[0].style.display = "none";
    sectionOne.getElementsByClassName("category")[0].style.left = "0";
    document.getElementsByClassName("show")[0].style.width = "100vw";
  }, 100);

});