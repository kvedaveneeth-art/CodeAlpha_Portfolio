document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            
            // Extract input values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Display verification action
            alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you at ${email}.`);
            
            // Clear out form inputs
            contactForm.reset();
        });
    }
});