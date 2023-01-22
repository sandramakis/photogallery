// SCHOOL ALBUM
let schoolTag = document.querySelector(".school");
let allSchoolPhotos = document.querySelector(".all-school-photos");

schoolTag.addEventListener("click", (e) => {
  e.preventDefault();

  if ((allSchoolPhotos.style.display = "none")) {
    allSchoolPhotos.style.display = "grid";
  } else {
    allSchoolPhotos.style.display = "none";
  }
});

// INSTAGRAM ALBUM
let instagram = document.querySelector(".instagram");
let allInstagramPhotos = document.querySelector(".all-instagram-photos");
instagram.addEventListener("click", (e) => {
  e.preventDefault();

  if ((allInstagramPhotos.style.display = "none")) {
    allInstagramPhotos.style.display = "grid";
  } else {
    allInstagramPhotos.style.display = "none";
  }
});

// FAMILY ALBUM
let family = document.querySelector(".family");
let allFamilyPhotos = document.querySelector(".all-family-photos");
family.addEventListener("click", (e) => {
  e.preventDefault();

  if ((allFamilyPhotos.style.display = "none")) {
    allFamilyPhotos.style.display = "grid";
  } else {
    allFamilyPhotos.style.display = "none";
  }
});

// FOOD ALBUM
let food = document.querySelector(".food");
let allFoodPhotos = document.querySelector(".all-food-photos");
food.addEventListener("click", (e) => {
  e.preventDefault();

  if ((allFoodPhotos.style.display = "none")) {
    allFoodPhotos.style.display = "grid";
  } else {
    allFoodPhotos.style.display = "none";
  }
});

let video = document.querySelector(".videos");
let allVideos = document.querySelector(".all-videos");
video.addEventListener("click", (e) => {
  e.preventDefault();

  if ((allVideos.style.display = "none")) {
    allVideos.style.display = "grid";
  } else {
    allVideos.style.display = "none";
  }
});
