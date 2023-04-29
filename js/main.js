const tabs = document.querySelectorAll(".tab__btn");
const contents = document.querySelectorAll(".content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", ( event ) => {

        let tabsChildren = event.target.parentElement.parentElement.children;
        console.log(tabsChildren)
        for (let t = 0; t < tabsChildren.length; t++) {
            let tabsGrandson = tabsChildren[t].firstChild;
            console.log(tabsGrandson)
            tabsGrandson.classList.remove("active");

        }
        tabs[i].classList.add("active");
        let tabContentChildren = event.target.parentElement.parentElement.nextElementSibling.children;
        console.log(tabContentChildren)
        for (let c = 0; c < tabContentChildren.length; c++) {
            let tabContentGrandson = tabContentChildren[c].firstChild;
            console.log(tabContentGrandson)
            tabContentGrandson.classList.remove("content--active");
        }
        contents[i].classList.add("content--active");

    });
}
