function init() {
  const lists = document.querySelectorAll('li');
  lists.forEach((list) => {
    if(list.parentElement.parentElement.tagName === "ARTICLE") {
      toggleContent(list);
    }
    list.addEventListener('click', (e) => {
      event.stopPropagation();
      toggleContent(list);
    });
  });
  toggleContent(lists[0]);
}

function toggleContent(element) {
  var child = element.querySelector("ul");

  if (child != null)
    child.classList.toggle("collaps");
}
