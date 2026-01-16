// Elements
const themeSwitch = document.getElementById("themeSwitch");
const fileInput = document.getElementById("fileInput");

// Theme toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light", themeSwitch.checked);
});

// File upload
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      renderPortfolio(data);
    } catch (err) {
      alert("Invalid JSON file.");
      console.error(err);
    }
  };
  reader.readAsText(file);
});

// Default demo data
const defaultData = {
  "name": "Alex Doe",
  "title": "Frontend Developer",
  "about": "I build clean, accessible, and performant web interfaces.",
  "skills": ["HTML", "CSS", "JavaScript"],
  "projects": [
    {
      "name": "Portfolio Generator",
      "description": "A JSON-driven static portfolio website",
      "link": "https://github.com/yourusername/portfolio-generator"
    }
  ],
  "experience": [
    {
      "company": "Startup X",
      "role": "Frontend Developer",
      "period": "2023 – Present"
    }
  ],
  "contact": {
    "email": "alex@email.com",
    "github": "https://github.com/yourusername"
  }
};

// Initial render
renderPortfolio(defaultData);

// Portfolio rendering function
function renderPortfolio(data) {
  document.title = `${data.name} | Portfolio Generator`;

  document.getElementById("hero").innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.title}</p>
  `;

  document.getElementById("about").innerHTML = `
    <h2>About</h2>
    <p>${data.about}</p>
  `;

  document.getElementById("skills").innerHTML = `
    <h2>Skills</h2>
    <div class="skills">
      ${data.skills?.map(skill => `<span>${skill}</span>`).join("") || ""}
    </div>
  `;

  document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    ${data.projects?.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `).join("") || "<p>No projects</p>"}
  `;

  document.getElementById("experience").innerHTML = `
    <h2>Experience</h2>
    ${data.experience?.map(e => `
      <div class="card">
        <strong>${e.role}</strong> — ${e.company}
        <div>${e.period}</div>
      </div>
    `).join("") || "<p>No experience</p>"}
  `;

  document.getElementById("contact").innerHTML = `
    <h2>Contact</h2>
    ${data.contact ? `
      <p>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
      <p>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></p>
    ` : "<p>No contact info</p>"}
  `;
}

