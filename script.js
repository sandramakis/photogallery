let myPhotos = document.querySelector(".my-photos");
let img1 = document.querySelector(".img1");

myPhotos.addEventListener("click", (e) => {
  e.preventDefault();

  if ((img1.style.display = "none")) {
    img1.style.display = "flex";
  } else {
    img1.style.display = "none";
  }
});
