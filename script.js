// Slideshow
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let index = 0;
setInterval(() => {
  document.querySelector(".slideshow").style.background =
    `url(images/${slides[index]}) center/cover no-repeat`;
  index = (index + 1) % slides.length;
}, 4000);

// Fixture search
document.getElementById("fixtureSearch").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  document.querySelectorAll("#fixtureList li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
