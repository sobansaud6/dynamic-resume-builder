interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    skills: string[];
    experience: string;
    hobbies: string[];
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Form Validation
        if (!form.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }

        // Capture Form Data
        const formData = new FormData(form);
        const resumeData: ResumeData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            education: formData.get('education') as string,
            skills: (formData.get('skills') as string).split(',').map(skill => skill.trim()),
            experience: formData.get('experience') as string,
            hobbies: (formData.get('hobbies') as string).split(',').map(hobby => hobby.trim())
        };

        // Generate Resume
        const resumeHtml = `
            <h2>${resumeData.name}</h2>
            <p>Email: ${resumeData.email}</p>
            <p>Phone: ${resumeData.phone}</p>
            <h3>Education</h3>
            <p>${resumeData.education}</p>
            <h3>Skills</h3>
            <ul>${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            <h3>Work Experience</h3>
            <p>${resumeData.experience}</p>
            <h3>Hobbies</h3>
            <ul>${resumeData.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}</ul>
        `;

        resumeContent.innerHTML = resumeHtml;
        resumeOutput.classList.remove('hidden');
    });
});
