console.log("Script loaded successfully.");

function showSection(event, sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active');

  // Add active class to clicked tab
  event.target.classList.add('active');

  // Scroll to top of content
  document.querySelector('.app-content').scrollTop = 0;
}

function navigateTo(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show selected screen
  document.getElementById(screenId).classList.add('active');
}

function togglePopup(button) {
  const wrapper = button.closest('.popup-wrapper');
  const isOpen = wrapper.classList.contains('open');

  // Close all other popups
  document.querySelectorAll('.popup-wrapper.open')
    .forEach(p => p.classList.remove('open'));

  // Toggle this one
  wrapper.classList.toggle('open', !isOpen);

  // Accessibility
  button.setAttribute('aria-expanded', !isOpen);

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.popup-wrapper.open').forEach(wrapper => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
        wrapper.querySelector('button')
          .setAttribute('aria-expanded', 'false');
      }
      });
  });
}

function toggleDropdown(button) {
  console.log("Toggling dropdown");
  const dropdown = button.closest('.header').querySelector('.legend-expanded');
  dropdown.classList.toggle('open');
  button.classList.toggle('open');
}

function toggleDropdownInfo(button) {
  console.log("Toggling dropdown");
  const dropdown = button.closest('.info-header').querySelector('.legend-expanded');
  dropdown.classList.toggle('open');
  button.classList.toggle('open');
}

function handleLogin() {
  const emailInput = document.getElementById("email");
  const error = document.getElementById("email-error");

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    error.style.display = "block";
    emailInput.classList.add("error");
    return;
  }

  // Clear error
  error.style.display = "none";
  emailInput.classList.remove("error");

  // Continue flow
  navigateTo("ticket-selection-screen");
}


