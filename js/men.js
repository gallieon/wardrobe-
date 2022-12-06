const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// category

// this top section is only for the "trailer" button on clicks
var modal = document.getElementById("id1");
var modal2 = document.getElementById("id2");
var modal3 = document.getElementById("id3");
var modal4 = document.getElementById("id4");
var overlay = document.getElementById("video-overlay");
var overlay2 = document.getElementById("video-overlay2");
var overlay3 = document.getElementById("video-overlay3");
var overlay4 = document.getElementById("video-overlay4");
var btn = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var delay = 500;

btn.onclick = function () {
  $(".video-wrap").removeClass("fadeback");
  $(".video-overlay-wrap").removeClass("fadeback2");
  modal.style.display = "block";
  overlay.style.display = "flex";
};
btn2.onclick = function () {
  $(".video-wrap").removeClass("fadeback");
  $(".video-overlay-wrap").removeClass("fadeback2");
  modal2.style.display = "block";
  overlay2.style.display = "flex";
};
btn3.onclick = function () {
  $(".video-wrap").removeClass("fadeback");
  $(".video-overlay-wrap").removeClass("fadeback2");
  modal3.style.display = "block";
  overlay3.style.display = "flex";
};
btn4.onclick = function () {
  $(".video-wrap").removeClass("fadeback");
  $(".video-overlay-wrap").removeClass("fadeback2");
  modal4.style.display = "block";
  overlay4.style.display = "flex";
};
overlay.onclick = function () {
  $(".video-wrap").addClass("fadeback");
  $(".video-overlay-wrap").addClass("fadeback2");
  setTimeout(function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  }, delay);
};
overlay2.onclick = function () {
  $(".video-wrap").addClass("fadeback");
  $(".video-overlay-wrap").addClass("fadeback2");
  setTimeout(function () {
    modal2.style.display = "none";
    overlay2.style.display = "none";
  }, delay);
};
overlay3.onclick = function () {
  $(".video-wrap").addClass("fadeback");
  $(".video-overlay-wrap").addClass("fadeback2");
  setTimeout(function () {
    modal3.style.display = "none";
    overlay3.style.display = "none";
  }, delay);
};
overlay4.onclick = function () {
  $(".video-wrap").addClass("fadeback");
  $(".video-overlay-wrap").addClass("fadeback2");
  setTimeout(function () {
    modal4.style.display = "none";
    overlay4.style.display = "none";
  }, delay);
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// This is for the categories

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("btn-cat");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// ----------------
