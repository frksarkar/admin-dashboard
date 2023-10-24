/**
 * *Title: admin dashboard
 * ?description: admin dashboard
 * @author: Faruk_sarkar
 * *Date: 17-October-2023
 */

const themeToggler = document.querySelector('.right .theme-toggler');
const menuShowBtn = document.querySelector('#menu-btn');
const sideBarCloseBtn = document.querySelector('#close-btn');
const sideBar = document.querySelector('aside');

// close the menu when clicked open the menu bar
sideBarCloseBtn.addEventListener('click', () => {
	sideBar.style.display = 'none';
});

// open the menu when clicked outside of the menu bar
menuShowBtn.addEventListener('click', () => {
	sideBar.style.display = 'block';
});

// theme changes when toggle the toggle button is clicked
themeToggler.addEventListener('click', () => {
	themeToggler.querySelector(':nth-child(1)').classList.toggle('active');
	themeToggler.querySelector(':nth-child(2)').classList.toggle('active');

	document.body.classList.toggle('dark-theme-variable');
});
