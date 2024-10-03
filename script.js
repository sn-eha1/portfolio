// Select elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a'); // All menu links

// Toggle navigation and burger animation
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Use the same class 'active'
    burger.classList.toggle('toggle');    // Burger icon animation (if you have this class)
});

// Close the nav after clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');  // Close the nav after clicking a link
        burger.classList.remove('toggle');    // Reset burger icon animation
    });
});

// Smooth scroll for internal links
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tooltip functionality for 'my services' section
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const tooltipText = this.getAttribute('title');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + window.scrollX + 'px';
        tooltip.style.top = rect.top + window.scrollY - 30 + 'px'; // Show tooltip above the icon
    });

    icon.addEventListener('mouseleave', function() {
        document.querySelector('.tooltip').remove();
    });
});

// 'My Work' section - Visit button alert
// 'My Work' section - Visit button
document.querySelectorAll('.visit-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    // No need for preventDefault() since you want to follow the link
    const url = this.getAttribute('href');  // Assuming the button has an 'href' attribute
    window.location.href = url;  // Redirect to the URL
  });
});


// Skills section - Intersection Observer for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
  
    skillItems.forEach(item => {
      observer.observe(item);
    });
});

// 'Get in Touch' section - Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    console.log('Contact Details:', { name, email, message });
    alert('Thank you for getting in touch!');
    
    // Here you can also implement an AJAX request to send this data to your server
});
