// Selecting the skills section and toggle button
var skillsSection = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills');
// Add an event listener to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
