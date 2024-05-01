

    document.getElementById("toggle-dark-mode").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    function emailSend() {
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var subject = "New Message from Website";
        var body = "Message: " + message + "\n\nSender's Email: " + email;
    
        Email.send({
            SecureToken: "7fd242f7-5054-4a1b-8427-21979a6194d4",
            To: "macesoftwaresolutions@gmail.com",
            From: "macesoftwaresolutions@gmail.com",
            Subject: "Enquiry",
            Body: body
        }).then(
            message => {
                if (message === 'OK') {
                    alert("Email sent successfully!");
                } else {
                    alert("Failed to send email.");
                }
            }
        );
    }
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        emailSend(); // Call the emailSend function
        document.getElementById("contact-form").reset(); // Reset the form fields
    });
    
    

