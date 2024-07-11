const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodymessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br> Full Name: ${fullname.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : subject.value,
        Body : bodymessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});

