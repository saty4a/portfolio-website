// window.addEventListener("load", () => {
//   var navBarAnimations = document.querySelector(".navBarAnimations");
// });
// console.log(navBarAnimations);
export const addNavBarAnimation = () => {
  navBarAnimations.classList.add("slide-in-done");
  setTimeout(() => {
    navBarAnimations.classList.remove("slide-in-done");
  }, 700);
};

export const removeNavBarAnimation = () => {
  navBarAnimations.classList.add("slide-out-done");
  setTimeout(() => {
    navBarAnimations.classList.remove("slide-out-done");
  }, 700);
};
