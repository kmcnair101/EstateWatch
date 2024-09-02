'use strict'; 

// Function to add an event listener to one or multiple elements.
const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    // Loop through each element in the NodeList and add the event listener.
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}

// Selecting elements from the DOM that will be used for navigation toggling.
const navbar = document.querySelector("[data-navbar]"); // The navigation bar element.
const navLinks = document.querySelectorAll("[data-nav-link]"); // All navigation links.
const navToggler = document.querySelector("[data-nav-toggler]"); // The navigation toggle button.

// Function to toggle the 'active' class on the navbar and toggler when clicked.
const toggleNav = function () {
  navbar.classList.toggle("active"); // Toggle 'active' class on the navbar.
  this.classList.toggle("active"); // Toggle 'active' class on the toggler button.
}

// Adding the 'click' event to the navigation toggle button to trigger the toggleNav function.
addEventOnElement(navToggler, "click", toggleNav);

// Function to close the navigation bar when a nav link is clicked.
const closeNav = function () {
  navbar.classList.remove("active"); // Remove 'active' class from the navbar.
  navToggler.classList.remove("active"); // Remove 'active' class from the toggler button.
}

// Adding the 'click' event to each nav link to trigger the closeNav function.
addEventOnElement(navLinks, "click", closeNav);

// Selecting elements for the header and the back-to-top button.
const header = document.querySelector("[data-header]"); // The header element.
const backTopBtn = document.querySelector("[data-back-top-btn]"); // The back-to-top button.

// Adding a scroll event to the window to show/hide the header and back-to-top button.
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active"); // Add 'active' class to header when scrolled down 50px or more.
    backTopBtn.classList.add("active"); // Show the back-to-top button.
  } else {
    header.classList.remove("active"); // Remove 'active' class from header when scrolled up.
    backTopBtn.classList.remove("active"); // Hide the back-to-top button.
  }
});

// Selecting all tab buttons for tab navigation.
const tabBtns = document.querySelectorAll("[data-tab-btn]"); // All tab buttons.

let lastClickedTabBtn = tabBtns[0]; // Track the last clicked tab button, defaulting to the first one.

// Function to change the active tab when a tab button is clicked.
const changeTab = function () {
  lastClickedTabBtn.classList.remove("active"); // Remove 'active' class from the last clicked tab button.
  this.classList.add("active"); // Add 'active' class to the currently clicked tab button.
  lastClickedTabBtn = this; // Update the last clicked tab button to the current one.
}

// Adding the 'click' event to each tab button to trigger the changeTab function.
addEventOnElement(tabBtns, "click", changeTab);
