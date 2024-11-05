/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
const navigation = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section');
/**
* Define Global Variables
/**

* End Global Variables
* Start Helper Functions
* 
*/



/**
* End Helper Functions
* Begin Main Functions
* 
*/

// build the nav
const navBuilder=() => {
  let navUI=''
  sections.forEach(section => {
      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;
      navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });
  navigation.innerHTML=navUI;   

};
navBuilder();

// Add class 'active' to section when near top of viewport
// obtaining value closest to number
const bounding = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
//removes active class
const removeActiveClass = (section,link) =>{
  section.classList.remove('your-active-class');
  link.classList.remove('active-link');
};
// adds active class
const addActive = (cond,section,link) => {
  if(cond){
      section.classList.add('your-active-class');
      link.classList.add('active-link');
  };
};
// putting both together for the function
const activateSection = () => {
  const navLinks = document.querySelectorAll('.menu__link');
  sections.forEach((section, index) => {
    const boundingSection = bounding(section);
    const inViewport = boundingSection < 120 && boundingSection >= -120;
    
    // Remove active state from section and nav link
    removeActiveClass(section, navLinks[index]);
    
    // Add active state if section is in viewport
    addActive(inViewport, section, navLinks[index]);
  });
};
window.addEventListener('scroll',activateSection);
// Scroll to anchor ID using scrollTO event

const scroll = () => {
  const links = document.querySelectorAll('#navbar__list a');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth',  
        block: 'start'
      });
    });
  });
};
scroll();
/**

* End Main Functions
* Begin Events
* 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

