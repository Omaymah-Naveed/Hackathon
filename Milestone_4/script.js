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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(edu, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(exp, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // DISPLAY GENERATED RESUME
    if (displayResumeElement) {
        displayResumeElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing!');
    }
});
