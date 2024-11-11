var form = document.getElementById('resume-form') as HTMLFormElement;
var displayResumeElement = document.getElementById('resume-display') as HTMLDivElement;

// FORM SUBMISSION
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const edu = (document.getElementById('education') as HTMLInputElement).value;
    const exp = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generating the resume HTML
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone: </b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${edu}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${exp}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // DISPLAY GENERATED RESUME
    if (displayResumeElement) {
        displayResumeElement.innerHTML = resumeHTML;
    } else {
        console.error('The Resume Display Element is Missing!');
    }

});
