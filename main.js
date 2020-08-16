const listItems = document.querySelectorAll(".link-item");
const listContentItems = document.querySelectorAll(".tab-content-item");

//Select Tab content item
function selectItem(e) {
  removeActiv();
  removeShow();
  this.classList.add("activ");
  const listContentItem = document.querySelector(`#${this.id}-content`);
  listContentItem.classList.add("show");
}

function removeActiv() {
  listItems.forEach((item) => item.classList.remove("activ"));
}

function removeShow() {
  listContentItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
listItems.forEach((item) => item.addEventListener("click", selectItem));

//Scroll
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-content");
sr.reveal(".tab-content");
sr.reveal(".choose-title", { delay: 100 });

sr.reveal(".f1", { delay: 200 });
sr.reveal(".f2", { delay: 300 });
sr.reveal(".f3", { delay: 400 });

//sr.reveal(".portfolio-content", { delay: 400 });
sr.reveal(".box-1", { delay: 100 });
sr.reveal(".box-2", { delay: 300 });
sr.reveal(".box-3", { delay: 500 });
sr.reveal(".box-4", { delay: 700 });
sr.reveal(".box-5", { delay: 800 });
sr.reveal(".box-6", { delay: 900 });

sr.reveal(".c1", { delay: 200 });
sr.reveal(".c2", { delay: 500 });


sr.reveal(".input-1", { delay: 100 });
sr.reveal(".input-2", { delay: 300 });
sr.reveal(".input-3", { delay: 500 });
sr.reveal(".input-4", { delay: 700 });
sr.reveal(".input-5", { delay: 900 });
sr.reveal(".button",  { delay: 900 });
