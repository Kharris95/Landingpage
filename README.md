# Landing Page Project
## DOM Manipulation Exercise
This project builds a dynamic navigation menu, highlights sections of the page when they are in the viewport, and enables smooth scrolling to sections upon clicking navigation links. The functionality is achieved by manipulating the DOM using JavaScript.

## Functionalities
1. Dynamic Navigation Menu
The script dynamically generates a navigation menu based on the sections present in the HTML document. For each section, a corresponding link is created in the navigation bar. This is handled by the navBuilder function, which iterates over each section to generate menu items with links to specific sections.

2. Section Highlighting on Scroll
The code includes functionality to add an "active" class to a section when it is near the top of the viewport, helping the user identify which section they are currently viewing. The activateSection function uses the getBoundingClientRect method to check each section's position relative to the viewport and add or remove the "active" class accordingly.

3. Smooth Scrolling to Sections
When a navigation link is clicked, the page smoothly scrolls to the corresponding section. This is handled by the scroll function, which attaches click event listeners to each navigation link and utilizes the scrollTo event for smooth scrolling.

## Code Structure
Global Variables: Define the navigation container and sections.
Helper Functions: Utility functions for adding and removing classes.
Main Functions:
navBuilder: Builds the navigation dynamically.
activateSection: Adds the "active" class to the section in the viewport.
scroll: Implements smooth scrolling to sections.
## Events
Scroll Event: Activates activateSection to highlight the section in view.
Click Event on Links: Triggers smooth scrolling to the selected section.
This project does not rely on external libraries and demonstrates essential DOM manipulation techniques in JavaScript.



