'use strict'

window.onscroll = function() {
    scrollFunction();
};


const burgerMenu = document.querySelector('.burger');
const sideBar = document.querySelector('.side-bar');
const closeButton = document.getElementById('close-btn');
const backToTopButton = document.getElementById('back-to-top');
const motto = document.getElementById('motto');
const missionStatement = document.getElementById('mission-statement');
const headquarters = document.getElementById('headquarters');

function scrollFunction() {
    let button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        motto.style.opacity = "1";
        button.style.opacity = "1";
        button.style.pointerEvents = "auto";
        button.style.transition = "opacity 0.5s ease-in-out";
        motto.style.transition = "opacity 0.5s ease-in-out";
        missionStatement.style.opacity = "1";
    } else if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        headquarters.style.opacity = "1";
        headquarters.style.transition = "opacity 0.5s ease-in-out";
    }else {
        motto.style.opacity = "0";
        button.style.opacity = "0";
        button.style.pointerEvents = "none";
        motto.style.transition = "opacity 0.5s ease-in-out";
        headquarters.style.opacity = "0";
        headquarters.style.transition = "opacity 0.5s ease-in-out";
        missionStatement.style.opacity = "0";
        missionStatement.style.transition = "opacity 0.5s ease-in-out";
    }
}

burgerMenu.addEventListener('click', function openSideBar() {
    sideBar.style.right = "0px";
});

window.ondblclick = function closeSideBar() {
    sideBar.style.right = getSidebarHiddenRight();
};



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    const elements = document.querySelectorAll('#headquarters, #mission-statement');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });
}


window.addEventListener('scroll', handleScroll);

handleScroll();



function getSidebarHiddenRight() {
    // Get computed width of sidebar (e.g., '250px' or '80vw')
    const sidebarWidth = window.getComputedStyle(sideBar).width;
    return `-${sidebarWidth}`;
}

function openSideBar() {
    sideBar.style.right = "0";
}

function closeSideBar() {
    sideBar.style.right = getSidebarHiddenRight();
}

burgerMenu.addEventListener('click', openSideBar);
closeButton.addEventListener('click', closeSideBar);
window.ondblclick = closeSideBar;


window.addEventListener('resize', () => {
    if (sideBar.style.right !== "0") {
        closeSideBar();
    }
});




    
