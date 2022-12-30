const bucket_list = document.querySelectorAll(".row");

function click(event) {
  const currentClick = event.target;
  currentClick.classList.toggle("clicked");
  if (currentClick.classList.contains("clicked") == true) {
    currentClick.style.textDecoration = "line-through";
    console.log(currentClick.classList);
  } else {
    currentClick.style.textDecoration = "none";
    console.log(currentClick.classList);
  }
}


bucket_list.forEach((e) => {
  e.addEventListener("click", click);
});


