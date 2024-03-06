$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        // Basic form validation
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name && email && message) {
            alert('Form submitted successfully!');
            // You can add further processing here, like sending the form data to a server
        } else {
            alert('Please fill in all fields.');
        }
    });
});

