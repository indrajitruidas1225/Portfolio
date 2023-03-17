

function sendEmail() {
    emailjs.init("nX2-eYbi2mTVw6YHi");
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    if (name.length == 0) {
        alert("Please enter your name")
    }
    else if (email.length == 0) {
        alert("Please enter your email")
    }
    else if (mobile.length == 0) {
        alert("Please enter your mobile")
    }
    else if (subject.length == 0) {
        alert("Please enter subject")
    }
    else if (message.length == 0) {
        alert("Please enter your message")
    }

    else {
        var params = {
            name: name,
            email: email,
            message: message,
            mobile: mobile,
            subject: subject
        };
        const ServiceID = "service_6z9du9p"
        const templateID = "template_5i7hifo"
        emailjs.send(ServiceID, templateID, params)
            .then(function (name) {
                alert("Your message was sent successfully !")
            });
    }

}