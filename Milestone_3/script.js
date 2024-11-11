var form = document.getElementById('resume-form');
var displayResumeElement = document.getElementById('resume-display');
// FORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var edu = document.getElementById('education').value;
    var exp = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generating the resume HTML
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Phone: </b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(edu, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(exp, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // DISPLAY GENERATED RESUME
    if (displayResumeElement) {
        displayResumeElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing!');
    }
    // Optional: Reset the form after submission
    form.reset();
});
