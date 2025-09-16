// Simple Contact Form Script
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault(); // prevent form from submitting

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message){
        document.getElementById('response').innerText = 
            `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('response').innerText = 'Please fill all fields!';
    }
});