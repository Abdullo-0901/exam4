window.addEventListener("DOMContentLoaded", () => {

  const menu = document.querySelector('.nav-menu');
  const ul = document.querySelector('#ul')
  menu.addEventListener('click',e =>{
    if(ul.classList.contains('header')){
      ul.classList.remove('header')
    } 
    else{
      ul.classList.add('header')
    }
  })
  // const tabContent = document.querySelector(".section3_header");
  // const tabs = document.querySelectorAll(".tabheader-item");
  // const tabcontent = document.querySelectorAll(".tabcontent");
  // function hideTabContent() {
  //   tabcontent.forEach((item) => {
  //     item.style.display = "none";
  //   });
  //   tabs.forEach((item) => {
  //     item.classList.remove("tabgeader-active");
  //   });
  // }
  // function showTabContent(i = 0) {
  //   tabcontent[i].style.display = "block";
  //   tabs[i].classList.add("tabgeader-active");
  // }

  // tabContent.addEventListener("click", (e) => {
  //   const target = e.target;
  //   if (target && target.classList.contains("tabheader-item")) {
  //     tabs.forEach((item, idx) => {
  //       if (target == item) {
  //         hideTabContent();
  //         showTabContent(idx);bn   
  //       }
  //     });
  //   }
  // });
});
