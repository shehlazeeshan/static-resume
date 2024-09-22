// Selecting the skills section and toggle button
const skillsSection = document.getElementById('skills') as HTMLElement;
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

// Add an event listener to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});
