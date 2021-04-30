
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].classList.add('active');
}



for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight != "0px"){
      content.style.maxHeight = '0px';
      content.style.maxWidth = '0px';
      content.style.overflow = "hidden";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.maxWidth = content.scrollWidth + "px";
      content.style.overflow = "visible";
    }
  });
}
