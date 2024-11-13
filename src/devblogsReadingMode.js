removeElement('div.container-evo');
removeElement('aside.post-sidebar');
removeElement('div.left-sidebar');
removeElement('div#usabilla-button');
removeElement('div#footerArea');
removeElement('div.stay-informed');
removeElement('div#comments');
removeElement('div.container-three-column-even');
removeElement('div.evo-right-sidebar');
removeElement('header.c-uhfh.context-uhf.c-sgl-stck.c-category-header');
removeElement('div.border-bottom.pb-40.mb-64');
removeElement('div.d-flex.justify-content-between.flex-column.flex-lg-row.align-items-center.gap-24.mb-40');
removeElement('h2.fs-20.mb-24');
removeElement('div.d-flex.gap-24.flex-column.flex-lg-row');

let element = document.querySelector('div.container-evo');
if (element)
    element.classList.remove("mt-56");

element = document.querySelector("#single-wrapper");
if (element)
    element.classList.remove("container-three-column-post");

element = document.querySelector("article.middle-column.pe-xl-198");
if (element) {
    element.classList.remove("middle-column");
    element.classList.remove("pe-xl-198");
}

function removeElement(elementName) {
    try {
        const element = document.querySelector(elementName);
        if (element && element.parentElement)
            element.parentElement.removeChild(element);
    } catch (ex) {
        console.log(`Exception when removing element "${elementName}"`);
        console.log(`Exception : ${ex}`);
    }
}