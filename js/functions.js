// let prev = document.getElementById("new-prev");
// let next = document.getElementById("new-next");
// let sectionOne = document.getElementById("section1");
//
// // Horizontal scroll effect
// next.addEventListener("click", () => {
//     sectionOne.getElementsByClassName("category")[0].style.left = "-1375px";
//     sectionOne.getElementsByClassName("category-next")[0].style.display = "grid";
//     document.getElementsByClassName("show")[0].style.width = "200vw";
//
//
//     setTimeout(() => {
//         sectionOne.getElementsByClassName("category")[0].style.display = "none";
//         sectionOne.getElementsByClassName("category-next")[0].style.left = "0";
//         document.getElementsByClassName("show")[0].style.width = "100vw";
//
//     }, 500);
//
//
// });
//
// prev.addEventListener("click", () => {
//     sectionOne.getElementsByClassName("category")[0].style.display = "grid";
//     sectionOne.getElementsByClassName("category-next")[0].style.left = "1375px";
//     document.getElementsByClassName("show")[0].style.width = "200vw";
//
//     setTimeout(() => {
//         sectionOne.getElementsByClassName("category-next")[0].style.display = "none";
//         sectionOne.getElementsByClassName("category")[0].style.left = "0";
//         document.getElementsByClassName("show")[0].style.width = "100vw";
//     }, 100);
//
// });


function prevAll(element) {
    let result = [];

    while (element === element.previousElementSibling)
        result.push(element);
    return result;
}

// function getNextSiblings(elem, filter) {
//     let sibs = [];
//     while (elem === elem.nextSibling) {
//         if (elem.nodeType === 3) continue; // text node
//         if (!filter || filter(elem)) sibs.push(elem);
//     }
//     return sibs;
// }

function nextAll(element) {
    let result = [];
    console.log("Element", element);
    console.log("Element", element.nextElementSibling);
    console.log("next ele", element === element.nextElementSibling);
    while (element === element.nextElementSibling)
    // while (hasClass(element.nextElementSibling, 'small-show'))

        result.push(element);
    console.log(result);
    return result;
}
// function nextAll(elem, filter) {
//     let sibs = [];
//     let nextElem = elem.parentNode.firstChild;
//     do {
//         if (nextElem.nodeType === 3) continue; // ignore text nodes
//         if (nextElem === elem) continue; // ignore elem of target
//         if (nextElem === elem.nextElementSibling) {
//             if (!filter || filter(elem)) {
//                 sibs.push(nextElem);
//                 elem = nextElem;
//             }
//         }
//     } while (nextElem === nextElem.nextSibling);
//     return sibs;
// }

// document.ready = () => {
let shows = document.getElementsByClassName('small-show');
console.log(shows);
for (let i = 0; i < shows.length; i++) {
    // addEvent(aTags[i], 'click', alertWinner);
    shows[i].addEventListener('mouseenter', function () {
        let nextElements = nextAll(shows[i]).length;
        console.log(nextElements);

        // nextAll(this).classList.add('has-positive-translate');
        // prevAll(this).classList.add('has-negative-translate');

    });
    shows[i].addEventListener('mouseleave', function () {
        // removeHasClasses(shows[i]);
    });
}

function removeHasClasses(show) {
    show.classList.remove('has-negative-translate has-positive-translate');
}

// };
