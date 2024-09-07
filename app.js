document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Form Validation
        if (!form.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }
        // Capture Form Data
        var formData = new FormData(form);
        var resumeData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            education: formData.get('education'),
            skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); }),
            experience: formData.get('experience'),
            hobbies: formData.get('hobbies').split(',').map(function (hobby) { return hobby.trim(); })
        };
        // Generate Resume
        var resumeHtml = "\n            <h2>".concat(resumeData.name, "</h2>\n            <p>Email: ").concat(resumeData.email, "</p>\n            <p>Phone: ").concat(resumeData.phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(resumeData.education, "</p>\n            <h3>Skills</h3>\n            <ul>").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n            <h3>Work Experience</h3>\n            <p>").concat(resumeData.experience, "</p>\n            <h3>Hobbies</h3>\n            <ul>").concat(resumeData.hobbies.map(function (hobby) { return "<li>".concat(hobby, "</li>"); }).join(''), "</ul>\n        ");
        resumeContent.innerHTML = resumeHtml;
        resumeOutput.classList.remove('hidden');
    });
});
