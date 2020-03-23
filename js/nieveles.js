var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      this.firstChild.classList.toggle('img-program');
      content.style.maxHeight = null;
    } else {
      this.firstChild.classList.toggle('img-program');
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}