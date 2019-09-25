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

function prevAll(element) {
    let result = [];

    while (element === element.previousElementSibling)
        result.push(element);
    return result;
}
function nextAll(elem, filter) {
    let sibs = [];
    let nextElem = elem.parentNode.firstChild;
    do {
        if (nextElem.nodeType === 3) continue; // ignore text nodes
        if (nextElem === elem) continue; // ignore elem of target
        if (nextElem === elem.nextElementSibling) {
            if (!filter || filter(elem)) {
                sibs.push(nextElem);
                elem = nextElem;
            }
        }
    } while(nextElem === nextElem.nextSibling);
    return sibs;
}
document.ready = () => {
    let show = document.getElementsByClassName('.small-movie');

    show.addEventListener('mouseenter', function () {
        this.nextAll().classList.add('has-positive-translate');
        this.prevAll().classList.add('has-negative-translate');

    }).addEventListener('mouseleave', function () {
        removeHasClasses();
    });

    function removeHasClasses() {
        show.classList.remove('has-negative-translate has-positive-translate');
    }

};
