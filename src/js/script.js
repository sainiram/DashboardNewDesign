function addClass(selector, className){
    var selectTag = document.querySelector(selector);
    selectTag.classList.toggle(className)
}

// function classAdd(){
//     var tag = document.getElementById("lock")
//     tag.classList.toggle("lockSide")
// }