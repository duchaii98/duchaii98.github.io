`use strict`;
const thongTin = document.querySelector(".info");
const nut = document.querySelector(".btn");
const icon = document.querySelector(".icon-nav");
const email = document.querySelector(".nhap-email");

nut.addEventListener("click", function () {
  let email1 = document.querySelector("#email");
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email1.value)) {
    alert(`Hãy nhập địa chỉ email hợp lệ`);
    email1.focus;
    return false;
  } else {
    thongTin.classList.remove("hide");
    icon.classList.remove("hide");
    email.classList.add("hide");
  }
});
// js kinh nghiệm
const more = document.querySelector(".more");
const less = document.querySelector(".less");
const view = document.querySelector("#view");
const exp4 = document.querySelector(".exp4");
view.addEventListener("click", function () {
  if (less.classList.contains("hide")) {
    more.classList.add("hide");
    less.classList.remove("hide");
    exp4.classList.remove("hide");
  } else {
    more.classList.remove("hide");
    less.classList.add("hide");
    exp4.classList.add("hide");
  }
});
function callMouseOutEvent() {
  view.classList.remove("hide1");
}
function callMouseOutEvent2() {
  view.classList.add("hide1");
}

// js học vấn
const more1 = document.querySelector(".more1");
const less1 = document.querySelector(".less1");
const edu3 = document.querySelector(".edu3");
const view1 = document.querySelector("#view1");
view1.addEventListener("click", function () {
  if (less1.classList.contains("hide")) {
    more1.classList.add("hide");
    less1.classList.remove("hide");
    edu3.classList.remove("hide");
  } else {
    more1.classList.remove("hide");
    less1.classList.add("hide");
    edu3.classList.add("hide");
  }
});
function callMouseOutEvent3() {
  view1.classList.remove("hide1");
}
function callMouseOutEvent4() {
  view1.classList.add("hide1");
}
// js hoat dong
const more2 = document.querySelector(".more2");
const less2 = document.querySelector(".less2");
const act5 = document.querySelector(".act5");
const view2 = document.querySelector("#view2");
view2.addEventListener("click", function () {
  if (less2.classList.contains("hide")) {
    more2.classList.add("hide");
    less2.classList.remove("hide");
    act5.classList.remove("hide");
  } else {
    more2.classList.remove("hide");
    less2.classList.add("hide");
    act5.classList.add("hide");
  }
});
function callMouseOutEvent5() {
  view2.classList.remove("hide1");
}
function callMouseOutEvent6() {
  view2.classList.add("hide1");
}
// js so thich
const more3 = document.querySelector(".more3");
const less3 = document.querySelector(".less3");
const hoppy2 = document.querySelector(".hoppy2");
const view3 = document.querySelector("#view3");
view3.addEventListener("click", function () {
  if (less3.classList.contains("hide")) {
    more3.classList.add("hide");
    less3.classList.remove("hide");
    hoppy2.classList.remove("hide");
  } else {
    more3.classList.remove("hide");
    less3.classList.add("hide");
    hoppy2.classList.add("hide");
  }
});
function callMouseOutEvent7() {
  view3.classList.remove("hide1");
}
function callMouseOutEvent8() {
  view3.classList.add("hide1");
}
// js ngon ngu
const more4 = document.querySelector(".more4");
const less4 = document.querySelector(".less4");
const ngonngu2 = document.querySelector(".ngon-ngu2");
const view4 = document.querySelector("#view4");
view4.addEventListener("click", function () {
  if (less4.classList.contains("hide")) {
    more4.classList.add("hide");
    less4.classList.remove("hide");
    ngonngu2.classList.remove("hide");
  } else {
    more4.classList.remove("hide");
    less4.classList.add("hide");
    ngonngu2.classList.add("hide");
  }
});
function callMouseOutEvent9() {
  view4.classList.remove("hide1");
}
function callMouseOutEvent10() {
  view4.classList.add("hide1");
}
// js kỹ năng
const more5 = document.querySelector(".more5");
const less5 = document.querySelector(".less5");
const ngonngu3 = document.querySelector(".ngon-ngu3");
const view5 = document.querySelector("#view5");
view5.addEventListener("click", function () {
  if (less5.classList.contains("hide")) {
    more5.classList.add("hide");
    less5.classList.remove("hide");
    ngonngu3.classList.remove("hide");
  } else {
    more5.classList.remove("hide");
    less5.classList.add("hide");
    ngonngu3.classList.add("hide");
  }
});
function callMouseOutEvent11() {
  view5.classList.remove("hide1");
}
function callMouseOutEvent12() {
  view5.classList.add("hide1");
}
