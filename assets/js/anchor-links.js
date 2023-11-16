// Get all the anchor links in the navbar
const navLinks = document.querySelectorAll('nav a');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Iterate through each section and check if it's in the viewport with a 10-pixel offset
  for (const section of document.querySelectorAll('section')) {
    const rect = section.getBoundingClientRect();

    // If the top of the section is at the top of the viewport or below
    // and the bottom of the section (plus the 10-pixel offset) is at the bottom of the viewport or above,
    // then it is in the viewport
    if (rect.top <= 10 && rect.bottom >= 10) {
      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('js-active'));

      // Find the link with the corresponding href and add the 'active' class
      const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('js-active');
      }

      // Break the loop after finding the first visible section
      break;
    }
  }
});

// Add this block to set the initial 'active' class on page load
document.addEventListener("DOMContentLoaded", () => {
  // Get the id of the first section
  const firstSectionId = document.querySelector('section').id;

  // Find the corresponding link and add the 'active' class
  const correspondingLink = document.querySelector(`nav a[href="#${firstSectionId}"]`);
  if (correspondingLink) {
    correspondingLink.classList.add('js-active');
  }
});
