const selectElement = (Element) => document.querySelector(Element);

selectElement(".mobile-menu").addEventListener("click", () => {
    selectElement("header").classList.toggle("active");
})

function imgSlider(anything){
    document.querySelector('.tshirt').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}